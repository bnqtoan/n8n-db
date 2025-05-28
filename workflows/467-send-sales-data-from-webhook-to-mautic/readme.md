# n8n Workflow: Mautic Contact Management

## Use cases:

- **Automated Contact Creation/Update in Mautic:** When a new student or user registers or updates their information on a platform, this workflow automatically creates or updates their contact in Mautic.
- **Dynamic Tagging based on Course Enrollment:** Automatically tags users in Mautic based on the course they are enrolled in, facilitating targeted marketing campaigns.
- **Subscription Management via Webhooks:** Handles user subscriptions and unsubscriptions to marketing emails by processing webhooks and updating contact preferences in Mautic accordingly.

## How it works:

1.  **Webhook Trigger:** The workflow starts with a `Webhook` node that listens for incoming POST requests at a specified path (`/PuHq2RQsmc3HXB/hook`).
2.  **Data Extraction:** The `Set Webhook Request` node extracts the student object and type from the webhook payload.
3.  **Type-Based Branching:** The `Switch Webhook Types` node routes the workflow based on the `type` field from the webhook. It handles "User" and "Sale" events differently.
4.  **User Lookup:** The `Find User` node searches for an existing contact in Mautic using the student's email. If the user is not found, the `If not found return -1` and `Set userFound` nodes set the `userFound` variable to -1. The `Find User To Tag Sale` node searches for user to tag by sale
5.  **Name Splitting:** The `Split Full Name` node splits the full name into first name and last name.
6.  **Merging Data:** The `@MAIN STUDENT DATA` node merges data from different sources by Index, including the result of name splitting.
7.  **Conditional Contact Creation:** The `IF NOT userFound` node checks if a user was found in Mautic. If not (userFound is -1), the `Mautic` node creates a new contact with the extracted information. If the user exists, the flow will take the false route.
8.  **Subscription Management:** The `Switch User.type` node determines the next action based on the type of user event (update, unsubscribe, subscribe). The `Update User`, `Unsubscribe User`, and `Remove unsubscribe` nodes update the user in Mautic respectively. The node `IF unsubscribe_from_marketing_emails` checks if the user is unsubscribing from the emails.
9.  **Tagging User:** The `Tag User` node adds a tag to the user.
10. **Contact Update (Conditional):** The `Update User` node is used to update a user's information in Mautic.

## Services:

*   Mautic

## Hashtags:

#n8n #automation #mautic #crm #webhook
