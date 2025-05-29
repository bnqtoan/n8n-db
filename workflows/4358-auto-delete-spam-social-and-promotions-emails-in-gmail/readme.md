# Clean My Mail

## Use cases:

-   **Automated Email Cleanup:** Regularly delete emails from specific categories like SPAM, Social, and Promotions to keep your inbox tidy and manageable.
-   **Scheduled Maintenance:** Run the workflow periodically (e.g., every 3 days) to automatically remove unwanted emails without manual intervention.
-   **Reduce Email Clutter:** Efficiently clear out promotional emails and social media updates, helping you focus on important communications.

## How it works:

The workflow is designed to automatically clean up emails from your Gmail account based on predefined categories (SPAM, Social, Promotions).

1.  **Trigger:** The workflow starts with a "Run Every 3 Days (Trigger)" node, which initiates the process at a set interval.
2.  **Fetch Emails:** Three "Fetch" nodes ("Fetch SPAM Emails", "Fetch Social Emails", and "Fetch Promotion Emails") connect to your Gmail account and retrieve all emails with the specified labels (SPAM, CATEGORY\_SOCIAL, and CATEGORY\_PROMOTIONS, respectively).
3.  **Combine Emails:** The "Combine All Fetched Emails" node merges the lists of emails fetched from the three categories into a single list.
4.  **Split Email IDs:** The "Split Email IDs (One per item)" node splits the merged list into individual email IDs.
5.  **Delete Emails:** The "Delete All Mails" node uses the Gmail API to delete each email based on its ID.

## Services:

-   Gmail API

## Hashtags:

#n8n #gmail #automation #emailmanagement #workflow
