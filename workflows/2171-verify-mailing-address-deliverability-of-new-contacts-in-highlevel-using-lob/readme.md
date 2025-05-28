# HighLevel Mailing Address Verification

## Use cases:

*   **New Contact Verification:** Automatically verify the mailing address of new contacts added to HighLevel to ensure deliverability.
*   **Address Correction:** Identify potentially incorrect or misspelled addresses entered manually into HighLevel.
*   **Lead Qualification:** Use address deliverability as a factor in lead qualification and segmentation.

## How it works:

1.  **CRM Webhook Trigger:** The workflow starts when a new contact is added in HighLevel, triggering a webhook.
2.  **Set Address Fields:** Extracts and sets the address, city, state and zip code from the webhook data.
3.  **Address Verification:** Sends the address information to the Lob.com API for verification.
4.  **Switch:** Based on the `deliverability` status received from Lob.com, the workflow branches into two paths.
5.  **Update HighLevel - Deliverable/NOT Deliverable:** Based on the switch node, tags the contact as either "Mailing Address Deliverable" or "Mailing Address NOT Deliverable" in HighLevel, based on if the address is deliverable or not.

## Services:

*   [HighLevel](https://www.gohighlevel.com/): CRM platform.
*   [Lob.com](https://www.lob.com/): Address verification API.

## Hashtags:

#n8n #automation #HighLevel #addressVerification #CRM
