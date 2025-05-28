# Namesilo Bulk Domain Availability [Template]

## Use cases:

*   **Domain Name Research:** Quickly check the availability of a list of potential domain names for a new business or project.
*   **Domain Flipping:** Identify and acquire available domain names that have potential resale value.
*   **Brand Protection:** Regularly monitor the availability of domain names related to your brand to prevent cybersquatting.

## How it works:

1.  **Set Data:** The workflow starts by defining a list of domain names and your Namesilo API key. You need to replace `"YOUR_API_KEY"` with your actual Namesilo API key.
2.  **Convert & Split Domains:** The list of domains is split into batches of 200, as per Namesilo's API limit.
3.  **Loop Over Domains:** Iterates through each batch of domains.
4.  **Namesilo Requests:** For each batch, an HTTP request is sent to the Namesilo API to check the availability of the domains.
5.  **Parse Data:** The JSON response from the Namesilo API is parsed to extract the availability status (Available or Unavailable) for each domain.
6.  **Wait:** Pauses the workflow execution for 5 minutes to avoid hitting Namesilo's rate limits.
7.  **Merge Results:** Merges results of each Domain availability status into a single array.
8.  **Convert to Excel:** Converts the merged results into an Excel file (`domain_results.xlsx`).

## Services:

*   Namesilo API

## Hashtags:

#n8n #automation #domain #namesilo #api
