# Monitor Job Changes

## Use cases:
- **Lead Generation:** Identify potential leads within your network who have recently changed jobs and tailor outreach strategies accordingly.
- **Relationship Management:** Stay informed about career advancements of your contacts to foster stronger professional relationships.
- **Market Intelligence:** Track industry trends by monitoring job changes and identifying emerging roles and skills.

## How it works:
The workflow is triggered manually. It then navigates to the LinkedIn "Job Changes" page, extracts the latest job changes, and structures the extracted data into a clean JSON format.
1.  **Manual Trigger:** The workflow starts when the user clicks the "Test workflow" button.
2.  **Extract Job Changes:** The Airtop node uses a profile to go to the LinkedIn job changes page and extracts the name, new position, LinkedIn profile URL, and position function of the people who changed jobs.
3.  **Edit Fields:**  The extracted data and restructures it into `data.modelResponse`.

## Services:
- LinkedIn
- Airtop

## Hashtags:
#n8n #automation #linkedin #jobchanges #leadgeneration
