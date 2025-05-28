# Receive updates when a form submission occurs in your Webflow website

## Use cases:

*   **Lead Capture Notification:** Get instantly notified in a messaging app like Slack or Microsoft Teams whenever a new lead submits a form on your Webflow website.
*   **CRM Integration:** Automatically add new form submissions to your CRM (e.g., HubSpot, Salesforce) as new leads or contacts.
*   **Email Marketing Automation:** Subscribe users to an email list in a platform like Mailchimp or SendGrid when they submit a specific form, triggering automated email sequences.

## How it works:

This workflow is triggered by a new form submission on your Webflow website.

1.  **Webflow Trigger:** The workflow starts with the "Webflow Trigger" node. This node listens for form submission events from your specified Webflow site. It's authenticated using OAuth2 credentials. When a form is submitted, the trigger activates and passes the form data to the next node(s) (if there were any connected).

## Services:

*   Webflow

## Hashtags:

#n8n #Webflow #Automation #FormSubmissions #LeadGeneration
