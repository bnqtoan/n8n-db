# Domain -> Email Extraction using Apollo API copy

## Use cases:

- **Lead Generation:** Automatically extract contact information (name, email, title, LinkedIn profile) from target companies based on their domain, enriching lead generation efforts.
- **Sales Prospecting:** Streamline the process of identifying potential clients within specific organizations, enabling sales teams to focus on high-value targets.
- **Market Research:** Gather data on key personnel in various companies to gain insights into industry trends, organizational structures, and competitive landscapes.

## How it works:

1.  **Trigger:** The workflow is manually triggered using the "When clicking ‘Test workflow’" node.
2.  **Fetch Target Domains:** The "Pull Target Domains" node retrieves a list of target domains from a specified Google Sheet.  The node filters the sheet based on the "Status" column.
3.  **Loop Through Domains:** The "Loop Targets" node iterates through each domain fetched from the Google Sheet.
4.  **Get People By Domain (Apollo API):** For each domain, the "Get People By Domain" node sends a request to the Apollo.io API to find people associated with that domain.  It's configured to retrieve 10 contacts per page, starting from page 1.  It utilizes the `Domain To Enrich` column from the Google Sheets as the domain to search for.  **Note:** You'll need to replace `"Your API KEY "` with a valid Apollo API key.
5.  **Clean Up Results:** The "Clean Up Results" node processes the raw data received from Apollo, extracting key fields such as first name, last name, email, website URL, LinkedIn URL, phone number, company information, and professional details.
6.  **Loop Over Results:** The "Loop Over Results" node splits the batch from the "Clean Up Results" node into invidual batches that can be processed by the next node.
7.  **Get Person Info (Apollo API):** The "Get Person Info" node retrieves person data.
8.  **Clean Up:** The "Clean Up" node extracts key fields like first name, last name, email, LinkedIn URL, title, Twitter, Facebook, organization name, headline, and photo URL from the response of the API request to the previous node, "Get Person Info."
9.  **Write Results to Google Sheets:** The "Results To Results Sheet" node appends the extracted contact information to a designated "Results" sheet in the same Google Sheets document. The data includes first name, last name, title, email, LinkedIn profile URL, and the domain of the company (obtained from the initial target domain list).
10. **Loop Again:** The workflow then loops back to process the next domain from the list.

## Services:

-   **Google Sheets:** Used for reading target domains and writing extracted contact information.
-   **Apollo.io API:** Used to retrieve contact information based on domain and to retreive info on individual people.

## Hashtags:

#n8n #automation #leadgeneration #salesprospecting #ApolloAPI
