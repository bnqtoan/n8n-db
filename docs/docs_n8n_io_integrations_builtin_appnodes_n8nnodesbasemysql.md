[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.mysql/index.md "Edit this page")

# MySQL node[#](#mysql-node "Permanent link")

Use the MySQL node to automate work in MySQL, and integrate MySQL with other applications. n8n has built-in support for a wide range of MySQL features, including executing an SQL query, as well as inserting, and updating rows in a database.

On this page, you'll find a list of operations the MySQL node supports and links to more resources.

Credentials

Refer to [MySQL credentials](../../credentials/mysql/) for guidance on setting up authentication.

This node can be used as an AI tool

This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](../../../../advanced-ai/examples/using-the-fromai-function/).

## Operations[#](#operations "Permanent link")

*   Delete
*   Execute SQL
*   Insert
*   Insert or Update
*   Select
*   Update

## Templates and examples[#](#templates-and-examples "Permanent link")

**Generate SQL queries from schema only - AI-powered**

by Yulia

[View template details](https://n8n.io/workflows/2508-generate-sql-queries-from-schema-only-ai-powered/)

**Import CSV into MySQL**

by Eduard

[View template details](https://n8n.io/workflows/1839-import-csv-into-mysql/)

**Build an AI-Powered Tech Radar Advisor with SQL DB, RAG, and Routing Agents**

by Sean Lon

[View template details](https://n8n.io/workflows/3151-build-an-ai-powered-tech-radar-advisor-with-sql-db-rag-and-routing-agents/)

[Browse MySQL integration templates](https://n8n.io/integrations/mysql/), or [search all templates](https://n8n.io/workflows/)

## Related resources[#](#related-resources "Permanent link")

Refer to [MySQL's Connectors and APIs documentation](https://dev.mysql.com/doc/index-connectors.html) for more information about the service.

Refer to MySQL's [SELECT statement documentation](https://dev.mysql.com/doc/refman/8.4/en/select.html) for more information on writing SQL queries.

## Use query parameters[#](#use-query-parameters "Permanent link")

When creating a query to run on a MySQL database, you can use the **Query Parameters** field in the **Options** section to load data into the query. n8n sanitizes data in query parameters, which prevents SQL injection.

For example, you want to find a person by their email address. Given the following input data:

 1
 2
 3
 4
 5
 6
 7
 8
 9
10
11
12

`[     {         "email": "alex@example.com",         "name": "Alex",         "age": 21      },     {         "email": "jamie@example.com",         "name": "Jamie",         "age": 33      } ]`

You can write a query like:

1

`SELECT * FROM $1:name WHERE email = $2;`

Then in **Query Parameters**, provide the field values to use. You can provide fixed values or expressions. For this example, use expressions so the node can pull the email address from each input item in turn:

1
2

`// users is an example table name users, {{ $json.email }}` 

## Common issues[#](#common-issues "Permanent link")

For common errors or issues and suggested resolution steps, refer to [Common issues](common-issues/).