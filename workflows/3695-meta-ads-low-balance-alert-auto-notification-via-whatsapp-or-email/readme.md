# [template] Balance Query Ad Account Meta Ads Facebook

## Use cases:

- **Daily Balance Check:** Automatically check the balance of your Facebook Ads account at a scheduled time each day to avoid unexpected ad shutdowns due to insufficient funds.
- **Prepaid Account Monitoring:** Specifically monitor prepaid ad accounts and trigger email notifications when the balance falls below a certain threshold, allowing for timely top-ups.
- **Performance-Based Notifications:** Integrate with other data sources (like ad performance metrics from Google Sheets) to trigger balance checks only when certain performance criteria are met, optimizing resource usage.

## How it works:

The workflow automates the process of querying the balance of a Facebook Ads account and optionally sending email notifications based on the balance.

1.  **Trigger:** The workflow starts either on a schedule (using the "Start by Period" trigger) or manually (using the "Start by Click" trigger).
2.  **Mapping:** The "Mapping" node likely sets up initial data or parameters required for the subsequent steps, though its exact function is not fully clear without more information on its configuration.
3.  **Customer Base (Google Sheets):** Retrieves data from a Google Sheet, possibly containing a list of customer or account details.
4.  **Loop Over Items:** Iterates through the items fetched from Google Sheets.
5.  **Meta Ads (HTTP Request):** Queries the Facebook Ads API to retrieve the account balance. This requires proper authentication and API endpoint configuration within the node.
6.  **Is it Prepaid? (IF):** Checks if the ad account is a prepaid account.
7.  **Base Value & Base Value 1 (IF):** This nodes, are likely used to determine which google sheet and Gmail nodes to use, depending on which value is true
8.  **Evolution & Evolution1 (HTTP Request):** Uses the facebook api to get more information.
9.  **Google Sheets & Google Sheets1:** Sends the information to a google sheet.
10. **Gmail & Gmail1 (Gmail - Disabled):** Sends an email notification, presumably if the balance is low (Node is disabled).
11. **Replace Me:** A placeholder node; its function is unclear without further configuration details.
12. **Wait:** pauses the excecution based on a specified time.

## Services:

-   Facebook Ads API (via HTTP Request)
-   Google Sheets
-   Gmail

## Hashtags:

#n8n #facebookads #automation #balancecheck #workflow
