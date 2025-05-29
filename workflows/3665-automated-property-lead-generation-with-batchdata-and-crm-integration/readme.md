# Real Estate Market Scanning

## Use cases:
- Automatically identify promising real estate investment opportunities based on equity, ownership status, and market changes.
- Send real-time alerts to a sales team about high-potential properties that meet specific investment criteria.
- Monitor a real estate market for changes in property status, market value, or ownership, allowing for timely intervention or offers.

## How it works:
1. **Schedule Market Scan:** The workflow starts with a scheduled trigger that runs at a defined interval (e.g., hourly).
2. **BatchData API Configuration:** Sets up the API key and search parameters (city, state, minimum/maximum market value, equity, property type, and limit) for the BatchData API.
3. **Query BatchData Properties:** Sends a POST request to the BatchData API to retrieve a list of properties matching the search parameters.
4. **Get Previous Results:** Retrieves property data from previous workflow runs to track changes over time.  This data is stored using n8n's `getWorkflowStaticData` function, ensuring persistence across executions.
5. **Compare Results:** Compares the current property list with the previous one to identify new and changed properties based on market value, status, owner status, and last sale date.
6. **Split Properties:** Splits the combined list of new and changed properties into individual items for further processing.
7. **Filter High Potential:** Filters properties based on equity percentage (larger than 40%) and absentee owner status.
8. **Get Property Details:** Retrieves detailed information for each high-potential property from the BatchData API.
9. **Format Email Content:** Formats the property details into a human-readable email and Slack message, including property address, market value, equity, owner status, and a Google Maps link.
10. **Send Email Alert:** Sends an email alert with the formatted property information to a specified email address.
11. **Post to Slack:** Sends a Slack notification with key property details and a Google Maps link to a designated Slack channel.

## Services:
- BatchData API: For property data retrieval.
- Email (SMTP): For sending email alerts.
- Slack: For sending instant notifications.
- Google Maps: For providing a direct link to the property location.

## Hashtags:
#n8n #realestate #automation #property #leadgeneration
