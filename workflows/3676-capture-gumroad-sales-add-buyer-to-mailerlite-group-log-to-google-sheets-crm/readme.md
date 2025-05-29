# Gumroad Sale Trigger

## Use cases:

- **Automated Lead Capture and Nurturing:** When a sale occurs on Gumroad, automatically add the customer's email to a MailerLite group, triggering a targeted email sequence to nurture the lead and encourage repeat purchases.
- **Real-time Sales Tracking:** Log every Gumroad sale in a Google Sheets spreadsheet, providing a centralized CRM to track sales volume, customer demographics (country), and product performance in real-time.
- **Personalized Customer Communication:** Capture customer data from Gumroad sales and use it to personalize email marketing campaigns in MailerLite, improving engagement and conversion rates.

## How it works:

1.  **Gumroad Sale Trigger:** The workflow starts when a new sale occurs on Gumroad. The `Gumroad Sale Trigger` node listens for webhook events from Gumroad.
2.  **Add Subscriber to MailerLite:** The `add subscriber to MailerLite` node adds the customer's email address (captured from the Gumroad sale) to your MailerLite account. It also captures the customer's country and adds it to MailerLite as a custom field.
3.  **Assign to Group:** The `Assign to group` node adds the newly created subscriber to a specific group in MailerLite (in this case, group ID `152489030254069581`). This triggers a specific email sequence for new customers acquired through Gumroad.
4.  **Append Row in CRM:** The `append row in CRM` node appends a new row to a Google Sheets spreadsheet. This row includes the date of the sale, the customer's email address, the customer's country, and the name of the product purchased.

## Services:

-   Gumroad
-   MailerLite
-   Google Sheets

## Hashtags:

#n8n #automation #gumroad #mailerlite #googlesheets
