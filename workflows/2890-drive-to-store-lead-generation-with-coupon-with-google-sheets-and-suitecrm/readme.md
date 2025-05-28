# Automate Drive-To-Store Lead Generation System (with coupon) on SuiteCRM

## Use cases:

1.  **Drive-to-Store Marketing Campaigns:** Automatically capture leads from online forms, assign unique coupons, and add them to SuiteCRM for targeted marketing efforts. This encourages potential customers to visit physical stores.
2.  **Lead Enrichment and Qualification:** Enhance lead data collected from forms with coupon information, which can be used to segment and prioritize leads based on their potential value.
3.  **Coupon Distribution and Tracking:** Streamline the distribution of coupons and track their usage by linking coupon codes to individual leads in SuiteCRM and logging the data in Google Sheets. This allows businesses to measure the effectiveness of their marketing campaigns.

## How it works:

1.  **Form Submission:** The workflow starts when a user submits a form (configured in the "On form submission" node).
2.  **Extract Form Fields:** The "Form Fields" node extracts the data (Name, Surname, Email, Phone) submitted from the form.
3.  **Check for Duplicate Lead:** The "Duplicate Lead?" node verify if the lead already exists on google sheet.
4.  **Check If Duplicate:** The "Is Duplicate?" node verify the google sheet result, if lead is duplicate the workflow return a "KO" response, otherwise go ahead.
5.  **Retrieve Coupon:** The "Get Coupon" node search for the first available coupon on Google Sheets.
6.  **Get Token:** The "Token SuiteCRM" get the token to connect to SuiteCRM instance.
7.  **Create Lead in SuiteCRM:** The "Create Lead SuiteCRM" node then creates a new lead in SuiteCRM, populating the fields with data extracted from the form and the assigned coupon code. The node uses an HTTP Request to create the Lead on SuiteCRM using the SuiteCRM API.
8.  **Update Google Sheets:** The "Update Lead" node logs the new lead information, the assigned coupon code and the SuiteCRM Lead ID in Google Sheets, marking the coupon as assigned.
9.  **Respond to Webhook:** Finally, the "Respond OK" node sends a confirmation response back to the webhook trigger, indicating that the lead has been successfully created in SuiteCRM.

## Services:

*   Google Sheets
*   SuiteCRM

## Hashtags:

#n8n #automation #SuiteCRM #leadgeneration #coupon
