# Emelia Campaign Automation

## Use cases:

*   **Automated Campaign Creation and Contact Addition:** Automatically creates a new campaign in Emelia and adds a contact to it upon a specific trigger (e.g., a new user signup).
*   **Dynamic Campaign ID Handling:** Ensures contacts are added to the correct campaign by dynamically retrieving the campaign ID of a newly created campaign.

## How it works:

This workflow automates the process of creating a campaign in Emelia and adding a contact to it.

1.  **Emelia (Create Campaign):** The workflow starts by creating a new campaign in Emelia using the "Emelia" node with the "create" operation. The campaign is named "n8n-docs".
2.  **Emelia1 (Add Contact):** After the campaign is created, the "Emelia1" node adds a contact to the specified campaign using the "addContact" operation. The `campaignId` is hardcoded as "603dfd70cbe34c3c9730fd09", the contact email is "email@example.com", and the first name is "NAME".
3.  **Emelia2 (Add Contact with Dynamic Campaign ID):** The "Emelia2" node aims to perform an unspecified action (likely adding a contact, due to the node type) to a campaign. Critically, it attempts to retrieve the campaign ID dynamically from the "Emelia" node's output using the expression `{{$node["Emelia"].json["_id"]}}`. **Note:** This assumes that the Emelia node returns a JSON object with an `_id` property representing the new campaign's ID.

## Services:

*   Emelia

## Hashtags:

#n8n #Emelia #CampaignAutomation #ContactManagement #WorkflowAutomation
