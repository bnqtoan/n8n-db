# Get the logo, icon, and information of a company and store it in Airtable

## Use cases:

*   **Brand Asset Management:** Automatically collect and store brand assets (logos, icons) and company information in a centralized Airtable database for easy access and management.
*   **Competitor Analysis:** Gather branding information from competitor websites and store it in Airtable for comparative analysis.
*   **Marketing Automation:** Enrich marketing databases with brand assets and company details for personalized marketing campaigns.

## How it works:

1.  **Manual Trigger:** The workflow starts when you manually execute it.
2.  **Brandfetch (Logo & Icon):** The workflow uses the Brandfetch node to retrieve the logo and icon of a specified company (`n8n.io` in this example).
3.  **Brandfetch (Company Info):** It then uses another Brandfetch node to get the company name and details based on the same domain.
4.  **Set:** The Set node extracts the company name, icon URL, and logo URL from the previous nodes and stores them in new variables.
5.  **Airtable:** Finally, the workflow appends a new record to a specified Airtable table ("Table 1" in application "app5cseR9ZKgtU3dc") with the extracted company information, logo URL, and icon URL.

## Services:

*   Brandfetch API
*   Airtable

## Hashtags:

#n8n #automation #brandassets #airtable #brandfetch
