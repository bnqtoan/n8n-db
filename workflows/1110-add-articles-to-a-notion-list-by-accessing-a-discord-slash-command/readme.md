# Add Link to Notion

## Use cases:

- Automatically add new links submitted through a form or other application to a Notion database.
- Create a system to save and categorize interesting links found online for later review or reference.
- Integrate with a service that provides URLs, automatically extracting the title and saving the link and title to Notion.

## How it works:

1.  **Webhook:** Listens for incoming HTTP POST requests at a specified path (`/45e2593e-f25d-4be5-9b50-4a7c1e566a9e`).
2.  **Check type:** Checks if the type value in the body of the request is not equal to 1.
3.  **HTTP Request:** If the type is not 1, it makes an HTTP GET request to the URL provided in the request body (`$json["body"]["data"]["options"][0]["value"]`).
4.  **Register URL:** If the type is 1, it sets the type to 1.
5.  **Extract Title:** Extracts the title from the HTML content of the page fetched by the HTTP Request node using the CSS selector `title`.
6.  **Add Link to Notion:** Adds a new page to a Notion database with the ID `8a1638ce-da33-41b7-8fd9-37a4c272ba95`.  The page's title is set to the extracted title, and the URL property is set to the URL from the initial request.
7.  **Reply on Discord:** Sets the response type to 4 and a content informing that the link was added to Notion.

## Services:

-   Notion
-   Any service capable of sending HTTP POST requests (e.g., a form, another application).

## Hashtags:

#n8n #Notion #Automation #Webhooks #LinkManagement
