# Template | Get notified when Meta Ads balance is low

## Use cases:

- **Budget Monitoring:** Automatically receive notifications when your Meta Ads account balance drops below a predefined threshold (e.g., $400), preventing unexpected ad campaign interruptions.
- **Proactive Refills:** Get alerted in advance to refill your ad account, ensuring continuous ad campaign performance without manual checks.
- **Client Management:** For agencies, monitor multiple client ad accounts and notify the relevant teams or clients when balances are low, maintaining seamless service.

## How it works:

This workflow is designed to monitor your Meta Ads account balance and send a notification via Telegram when the balance falls below a specified amount. Here's a step-by-step breakdown:

1.  **Scheduler (Every 12h):** The workflow starts with a `Schedule Trigger` node that runs every 12 hours.
2.  **Method 1 & Method 2 (Facebook Graph API):** The workflow uses `Facebook Graph API` to fetch the ad account balance using two different methods. These nodes are configured to retry up to 5 times with a 5-second wait between attempts if the request fails.
3.  **Edit Fields:** `Edit Fields` nodes, presumably to transform the data from the `Facebook Graph API` calls into a format suitable for comparison and messaging.
4.  **Lower than 400 ? (IF):** An `IF` node checks if the fetched balance is lower than 400.
5.  **Send message (Telegram):** If the balance is below 400, a `Telegram` node sends a notification to a specified Telegram channel or user.
6.  **No Operation, do nothing:** If the balance is not below 400, a `No Operation` node does nothing, and the workflow ends for that execution.

## Services:

-   **Meta Ads (Facebook Graph API):** Used to retrieve the ad account balance.
-   **Telegram:** Used to send notifications about the balance.

## Hashtags:

#n8n #automation #metaads #facebookapi #telegram #budgetmonitoring
