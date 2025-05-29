# Monitor ProductHunt

## Use cases:

- **Daily Product Monitoring:** Automatically receive a daily digest of new product launches on ProductHunt related to specific keywords (e.g., AI Agents).
- **Competitive Analysis:** Track competitor product launches in a specific niche and get notified via Slack.
- **Trend Identification:** Identify emerging trends on ProductHunt by monitoring relevant product categories and receiving updates on new launches.

## How it works:

1.  **Trigger Daily:** The workflow starts with a "Trigger daily" node that executes the workflow every day at 6:00 AM.
2.  **Define relevant products:** The "Define relevant products" node sets the keyword(s) to search for on ProductHunt (e.g., "AI Agents").
3.  **Look up products:** The "Look up products" node uses the Airtop node to query ProductHunt, extracts up to 5 product launches related to the defined keywords, including their titles and URLs. The Airtop node uses a prompt to format the extracted data. If it cannot find any relevant products, it returns \[NA].
4.  **Found products?:** The "Found products?" node checks if the Airtop node returned any relevant products. It looks for \[NA] which indicates no products were found.
5.  **Send slack message:** If the Airtop node found relevant products, the "Send slack message" node sends a formatted message to a specified Slack channel with the extracted product information.

## Services:

-   ProductHunt: As a source to extract information about product launches.
-   Airtop: To use AI to extract the titles and URLs from ProductHunt.
-   Slack: To send notifications about new products.

## Hashtags:

#n8n #automation #ProductHunt #Slack #Airtop
