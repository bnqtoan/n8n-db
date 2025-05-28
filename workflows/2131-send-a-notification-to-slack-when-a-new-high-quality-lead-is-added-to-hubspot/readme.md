# Notify Sales Rep of High-Quality Leads from HubSpot

## Use cases:

- Automatically notify a sales representative in Slack when a new lead with high revenue potential is created in HubSpot.
- Filter newly created leads based on specific criteria (e.g., revenue, number of employees) and send targeted notifications to relevant team members.
- Improve sales team efficiency by providing real-time alerts for promising leads, enabling quicker follow-up.

## How it works:

1.  **Trigger every 5 minutes:** The workflow starts with a `Schedule Trigger` that runs every 5 minutes.
2.  **Get leads created last 5 minutes:** It fetches recently created leads from HubSpot using the `HubSpot` node, filtering for leads created in the last 5 minutes using the `since` parameter. The Hubspot node uses the `HubspotOAuth2Api` credential.
3.  **Keep the ones that make more than $5M in revenue:** A `Filter` node checks if the `annualrevenue` property of each lead is greater than $5,000,000. Only leads that meet this condition are passed on.
4.  **Notify sales rep:** The workflow sends a message to a specific user in Slack using the `Slack` node. The message includes the company name, website, revenue, and number of employees of the high-quality lead. The Slack node uses the `slackOAuth2Api` credential.

## Services:

-   HubSpot
-   Slack

## Hashtags:

#n8n #automation #sales #hubspot #slack
