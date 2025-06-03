[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.postgres/common-issues.md "Edit this page")

# Postgres node common issues[#](#postgres-node-common-issues "Permanent link")

Here are some common errors and issues with the [Postgres node](../) and steps to resolve or troubleshoot them.

## Dynamically populate SQL `IN` groups with parameters[#](#dynamically-populate-sql-in-groups-with-parameters "Permanent link")

In Postgres, you can use the SQL [`IN` comparison construct](https://www.postgresql.org/docs/current/functions-comparisons.html#FUNCTIONS-COMPARISONS-IN-SCALAR) to make comparisons between groups of values:

1

`SELECT color, shirt_size FROM shirts WHERE shirt_size IN ('small', 'medium', 'large');`

While you can use n8n [expressions](../../../../../code/expressions/) in your query to dynamically populate the values in an `IN` group, combining this with [query parameters](../#use-query-parameters) provides extra protection by automatically sanitizing input.

To construct an `IN` group query with query parameters:

1.  Set the **Operation** to **Execute Query**.
2.  In **Options**, select **Query Parameters**.
3.  Use an expression to select an array from the input data. For example, `{{ $json.input_shirt_sizes }}`.
4.  In the **Query** parameter, write your query with the `IN` construct with an empty set of parentheses. For example:
    
    1
    
    `SELECT color, shirt_size FROM shirts WHERE shirt_size IN ();`
    
5.  Inside of the `IN` parentheses, use an expression to dynamically create index-based placeholders (like `$1`, `$2`, and `$3`) for the number of items in your query parameter array. You can do this by increasing each array index by one since the placeholder variables are 1 indexed:
    
    1
    
    `SELECT color, shirt_size FROM shirts WHERE shirt_size IN ({{ $json.input_shirt_sizes.map((i, pos) => "$" + (pos+1)).join(', ') }});`
    

With this technique, n8n automatically creates the correct number of [prepared statement placeholders](https://www.postgresql.org/docs/current/sql-prepare.html) for the `IN` values according to the number of items in your array.

## Working with timestamps and time zones[#](#working-with-timestamps-and-time-zones "Permanent link")

To avoid complications with how n8n and Postgres interpret timestamp and time zone data, follow these general tips:

*   **Use UTC when storing and passing dates**: Using UTC helps avoid confusion over timezone conversions when converting dates between different representations and systems.
*   **Set the execution timezone**: Set the global timezone in n8n using either [environment variables](../../../../../hosting/configuration/configuration-examples/time-zone/) (for self-hosted) or in the [settings](../../../../../manage-cloud/set-cloud-timezone/) (for n8n Cloud). You can set a workflow-specific timezone in the [workflow settings](../../../../../workflows/settings/).
*   **Use ISO 8601 format**: The [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601) encodes the day of the month, month, year, hour, minutes, and seconds in a standardized string. n8n passes dates between nodes as strings and uses [Luxon](../../../../../code/cookbook/luxon/) to parse dates. If you need to cast to ISO 8601 explicitly, you can use the [Date & Time node](../../../core-nodes/n8n-nodes-base.datetime/) and a custom format set to the string `yyyy-MM-dd'T'HH:mm:ss`.