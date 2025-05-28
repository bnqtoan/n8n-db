# Real-time Lead Qualification and Routing

## Use cases:

- **Dynamic Website Content:** Display different Calendly links (one-on-one vs. group demo) on a website based on real-time lead qualification.
- **Automated Lead Segmentation:** Automatically categorize leads based on company size and other criteria for targeted marketing campaigns.
- **Enhanced Lead Enrichment:** Enrich lead data with company information from Datagma to improve lead quality and routing decisions.

## How it works:

1.  **Receive Form Submission:** The workflow starts when a form is submitted on a Webflow website, triggering the "Receive form submission from Webflow" webhook node.
2.  **Extract Email Domain:** The "Get domain from email" node extracts the domain from the submitted email address.
3.  **Verify Professional Email:** The "Verify professional email" node checks if the extracted email domain is a free email provider.
4.  **Enrich with Datagma:** The "Enrich with Datagma" node uses the extracted domain to query the Datagma API and retrieve company information such as company size, industry, founding year, LinkedIn URL, description, funding amount and company revenue. Note: You should replace YOUR\_API\_KEY with your own Datagma API Key.
5.  **Simplify Datagma Output:** The "Simplify Datagma Output" node extracts and formats specific company details from the Datagma API response.
6.  **Qualify Account:** The "Qualify Account" node uses a code block to determine if a lead qualifies for a one-on-one demo (result = 1) or a group demo (result = 2) based on company size (companies with more than 100 employees are routed to 1:1 demo).
7.  **Send Result to Webflow:** The "Send result to Webflow" node sends the qualification result back to Webflow as a JSON response, allowing the website to display the appropriate Calendly link.

## Services:

-   **Webflow:** Used for form submission and displaying dynamic content.
-   **Datagma:** Used for enriching lead data with company information.
-   **Calendly:** Used (indirectly) for scheduling demos, with different links presented based on lead qualification.

## Hashtags:

#n8n #automation #leadgeneration #leadrouting #datagma #webflow
