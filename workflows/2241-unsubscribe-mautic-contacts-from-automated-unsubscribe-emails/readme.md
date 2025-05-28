# Unsubscribe Mautic contacts from automated unsubscribe emails

## Use cases:

- **Automated Unsubscription Handling:** Automatically process unsubscribe requests received via email, ensuring contacts are removed from specific Mautic segments and, optionally, added to a "Do Not Contact" list.
- **Compliance with Email Marketing Regulations:** Help comply with regulations like GDPR and CAN-SPAM by efficiently managing unsubscribe requests and preventing further marketing emails to opted-out contacts.
- **Improved Email List Hygiene:** Maintain a clean and engaged email list by promptly removing contacts who have unsubscribed, reducing bounce rates and improving sender reputation.

## How it works:

1.  **Gmail Trigger:** The workflow starts with a "Gmail Trigger" node, which monitors a specified Gmail inbox for new emails every minute.  It's configured to include emails in the spam and trash folders.
2.  **Edit Fields:** The "Edit Fields" node sets the email address and the unsubscribe message.
3.  **Is automated unsubscribe?:** The "Is automated unsubscribe?" node verifies if the email received meets two conditions: if the "To" field contains the word "unsubscribe" and if the "From" field is not equal to the specified email address in the Edit Fields node.
4.  **Extract Email from 'From' Field:** Extracts the email address from the "From" field of the email. It uses a code node to handle cases where the email address is wrapped in carets (`<` and `>`).
5.  **Extract Unique Email Addresses:** Takes email addresses and extracts only unique entries to prevent duplicates.
6.  **Get Mautic Contact ID from Email Address:** The "Get Mautic Contact ID from Email Address" node uses the extracted email to search for a corresponding contact in Mautic.
7.  **If Contact Exists in Mautic:** Checks if a contact was found in Mautic. It proceeds only if a contact ID is present.
8.  **Add to unsubscribed segment:** Add contact to the "unsubscribed segment" in Mautic.
9.  **Remove newsletter segment:** Remove contact to the "newsletter segment" in Mautic.
10. **Reply Unsubscribe Message:** Replies to the email with a confirmation message.
11. **Add to Do Not Contact List:** Optionally adds the contact to a "Do Not Contact" list in Mautic (this node is currently disabled).

## Services:

-   Gmail
-   Mautic

## Hashtags:

#n8n #automation #mautic #gmail #emailmarketing
