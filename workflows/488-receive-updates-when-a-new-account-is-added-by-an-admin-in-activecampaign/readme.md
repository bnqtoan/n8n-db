## n8n Workflow: ActiveCampaign Account Added Notification

### Use cases:

*   **New Account Monitoring:** Automatically track when an administrator adds a new account in ActiveCampaign, allowing for timely onboarding processes.
*   **Real-time Reporting:** Generate immediate reports on new account creation activity for auditing and performance analysis.

### How it works:

This workflow is triggered when an account is added in ActiveCampaign by an administrator. The `ActiveCampaign Trigger` node listens for the `account_add` event specifically triggered by an `admin` source. Upon receiving the event, the workflow executes (although this example shows a very simple trigger and could be expanded).

**Key Nodes:**

*   **ActiveCampaign Trigger:**  This node is the starting point, configured to listen for the "account\_add" event originating from an "admin" in ActiveCampaign.

### Services:

*   ActiveCampaign

### Hashtags:

#n8n #ActiveCampaign #Automation #CRM #Webhook
