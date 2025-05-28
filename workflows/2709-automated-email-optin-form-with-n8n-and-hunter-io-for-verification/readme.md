# Email form

## Use cases:

- Automatically subscribe users to a mailing list after they submit a form, ensuring only valid email addresses are added.
- Validate email addresses submitted through a form to reduce bounce rates and improve the quality of your mailing list.
- Grow your email list by offering valuable content or services in exchange for email subscriptions via a form.

## How it works:

1.  **Submit form:** A user submits their email address via a form.
2.  **Verify email:** The workflow uses the Hunter.io service to verify the submitted email address.
3.  **Check if the email is valid:** The workflow checks the response from Hunter.io to determine if the email address is valid.
4.  **Add contact to list:** If the email is valid, the workflow adds the email address as a contact to a specified list in SendGrid.
5.  **Email is not valid, do nothing:** If the email address is not valid, the workflow does nothing.

## Services:

-   Hunter.io: Used for email verification.
-   SendGrid: Used for managing contacts and lists.

## Hashtags:

#n8n #automation #emailvalidation #sendgrid #hunterio
