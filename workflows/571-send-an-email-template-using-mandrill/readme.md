# My Workflow

## Use cases:

*   **Welcome Email Automation:** Automatically sends a welcome email to new users upon registration or subscription to a service.
*   **Transactional Email Delivery:** Delivers transactional emails, such as order confirmations or password reset instructions, based on specific triggers.

## How it works:

1.  The workflow is manually triggered by clicking the "execute" button in n8n.
2.  The "Mandrill" node then sends an email using the Mandrill (now Mailchimp Transactional Email) service. It sends a welcome email using the "welcomeemailv2" template to `user@example.com` from `example@yourdomain.com`. The Mandrill API credentials are used for authentication.

## Services:

*   Mailchimp Transactional Email (formerly Mandrill)

## Hashtags:

#n8n #emailautomation #transactionalemail #welcomeemail
