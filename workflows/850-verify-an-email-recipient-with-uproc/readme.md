# Verify Email

## Use cases:

*   **Lead Qualification:** Automatically verify email addresses collected through lead generation forms to ensure they are valid and deliverable before adding them to your CRM.
*   **Email List Cleaning:** Regularly check the deliverability of email addresses in your marketing lists to reduce bounce rates and improve sender reputation.
*   **Account Verification:** Verify a user's email address during registration to prevent fake or disposable email accounts.

## How it works:

1.  The workflow starts with a **"On clicking 'execute'"** Manual Trigger node, which initiates the workflow execution.
2.  The **"Create Email Item"** Function Item node sets the email address to `mcolomer@gmail.com`.
3.  The **"Check Email Exists"** Uproc node uses the Uproc service to verify if the email address exists and is deliverable. It uses the email address set in the previous node as input.
4.  The **"Email Exists?"** IF node checks the response from the Uproc node. If the response indicates the email is "deliverable," the workflow proceeds along the "true" branch; otherwise, it follows the "false" branch (though no action is currently defined for either branch).

## Services:

*   Uproc (with the `checkEmailExists` tool)

## Hashtags:

#n8n #emailverification #automation #emailmarketing #leadgeneration
