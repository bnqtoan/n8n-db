# My Workflow

## Use cases:

*   **Lead Generation:** Automatically extract email addresses from websites to build a list of potential leads for sales or marketing campaigns.
*   **Contact Information Retrieval:** Quickly gather contact information from a list of websites, useful for research, outreach, or data enrichment.
*   **Monitoring for Email Changes:** Periodically check websites for updated email addresses, ensuring your contact lists are current.

## How it works:

1.  **Webhook:** The workflow is triggered by an HTTP request to a specific webhook URL. The URL of the website to be scraped is passed as a query parameter named `Website` (e.g., `http://your-n8n-instance/webhook/your-webhook-id?Website=https://example.com`).
2.  **Get the website data:** The workflow retrieves the HTML content of the specified website using the HTTP Request node.
3.  **Extract the emails found:** A Set node uses a regular expression to extract all email addresses from the HTML content. The extracted emails are stored in an array field named `Email`.
4.  **Split Out:** The Split Out node divides the array of email addresses into individual items.
5.  **If contains email:** An If node checks if the `Email` field is not empty. If emails are found, the workflow proceeds.
6.  **Remove Duplicates:** The Remove Duplicates node eliminates any duplicate email addresses.
7.  **Respond to Webhook:** Finally, the workflow responds to the initial HTTP request with the list of unique email addresses. If no emails are found, the workflow still executes successfully, providing a response indicating completion.

## Services:

*   None besides n8n itself

## Hashtags:

#n8n #automation #webscraping #emailscraper #leadgeneration
