# Extract Domain

## Use cases:
1.  **Data Enrichment:**  Extract the domain from a list of URLs scraped from the web to enrich a database or CRM with company information.
2.  **Lead Generation:** If you have a list of email addresses, extract the domain to identify potential companies and generate leads for sales or marketing.
3.  **Content Filtering:**  Extract the domain from a URL to filter content based on the source website (e.g., blocking content from specific domains).

## How it works:
1.  **Prepare data before function:** Takes a URL or email as input from the previous node (Execute Workflow Trigger).
2.  **Extract domain:**
    *   The node's code function first checks if the input is an email or a URL.
    *   If it's a URL, it extracts the hostname and then the domain, considering various TLDs (Top-Level Domains) using a large list.
    *   If it's an email, it extracts the domain part after the `@` symbol.
    *   Finally, it checks if the extracted domain belongs to a free email provider (e.g., Gmail, Outlook).
3.  The node then outputs the original input, extracted domain, and a boolean indicating whether the domain is from a free mail provider.

## Services:
*   None.

## Hashtags:
#n8n #domainextraction #urlparsing #emailparsing #automation
