# Groundhogg CRM Address Verification Workflow

## Use cases:

-   **Automated Address Validation:** Automatically verify the mailing addresses of new contacts added to Groundhogg CRM to ensure deliverability.
-   **Data Cleansing:** Check for misspellings and inaccuracies in manually entered addresses, improving data quality.
-   **Triggered Actions Based on Deliverability:**  Automatically tag contacts or trigger follow-up actions based on whether their address is deliverable or not.

## How it works:

1.  **CRM Webhook Trigger:** The workflow starts when a new contact is added to Groundhogg CRM, triggering a webhook.
2.  **Set Address Fields:** The "Set Address Fields" node extracts the address, city, state, and zip code from the webhook data.
3.  **Address Verification:** The "Address Verification" node sends the address information to the Lob.com API for verification.
4.  **Switch:** The "Switch" node analyzes the `deliverability` response from Lob.com. If the address is "deliverable", it proceeds to the next step for deliverable addresses; otherwise, it proceeds for non-deliverable addresses.
5.  **Update Groundhogg - Deliverable/NOT Deliverable:** Based on the address's deliverability status, the workflow updates the contact in Groundhogg CRM. It applies tags indicating whether the address is deliverable or not.

## Services:

-   **Groundhogg CRM:** Customer Relationship Management system that triggers the workflow and is updated with address verification status.
-   **Lob.com:**  Address verification API used to validate mailing addresses.

## Hashtags:

#n8n #automation #CRM #addressverification #groundhogg
