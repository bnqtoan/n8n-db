## n8n Workflow: Country Information via GraphQL

This workflow retrieves country information based on a country code provided through a webhook and formats the response.

### Use cases:

*   **Simple API Endpoint:** Create a simple API endpoint to fetch country details by sending a country code.
*   **Integration with Chatbots:** Integrate with a chatbot to provide users with country information when they enter a country code.
*   **Data Enrichment:** Enrich existing data with country-specific details based on a provided country code.

### How it works:

1.  **Webhook (Webhook):**  Listens for incoming HTTP requests at the `/webhook` path.  It expects the request to contain a `query` parameter with a `code` field representing the country code.
2.  **GraphQL (GraphQL):** Takes the country code from the Webhook node (accessing it via `{{$node["Webhook"].data["query"]["code"].toUpperCase()}}`), converts it to uppercase, and uses it in a GraphQL query to the "https://countries.trevorblades.com/" endpoint. The query retrieves the `name`, `phone`, and `emoji` for the specified country.  The response format is set to `string`.
3.  **Function (Function):** Parses the JSON string returned by the GraphQL query and extracts the `country` data into the `json` property of the first item.  It then returns this modified item. This node essentially transforms the raw GraphQL response into a more accessible format. The function code is:
    ```javascript
    items[0].json = JSON.parse(items[0].json.data).data.country;
    return items;
    ```
4.  **Set (Set):** Creates a new field called "data" containing a formatted string with the country name, emoji, and phone number extracted from the Function node's output. The expression `The country code of {{$node["Function"].data["name"]}} {{$node["Function"].data["emoji"]}} is {{$node["Function"].data["phone"]}}` constructs this string. It also sets `keepOnlySet` to `true`, meaning only the "data" field will be returned in the output.

### Services:

*   **Countries GraphQL API:**  The workflow uses the public GraphQL API at `https://countries.trevorblades.com/` to fetch country data.

### Hashtags:

#n8n #graphql #automation #countrydata #webhook
