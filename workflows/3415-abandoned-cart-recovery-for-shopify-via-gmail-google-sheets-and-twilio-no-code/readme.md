# Abandoned Cart Recovery Email Automation Workflow

## Use cases:
- **Recover lost sales:** Automatically sends emails to customers who have added items to their cart but haven't completed the purchase, reminding them of their selection and encouraging them to return and finalize the order.
- **Offer discounts to incentivize purchase:** Provides a discount code within the recovery email to motivate customers to complete their purchase.
- **Track recovery efforts:** Logs email sending status and cart value to a Google Sheet for performance monitoring and analysis of abandoned cart recovery efforts.

## How it works:
1. **Shopify Trigger:** The workflow starts when a new checkout is created in Shopify (i.e., a customer adds items to their cart and proceeds to checkout).
2. **Extract Key Values:** Extracts customer email, checkout token, and other relevant information from the Shopify checkout data.
3. **Wait some hours:** Pauses the workflow for a specified amount of time to allow the customer to complete the purchase on their own.
4. **GET Checkout Status:** After the waiting period, it retrieves the current status of the checkout from Shopify.
5. **Completed Checkout?:** Checks if the checkout has been completed (i.e., the customer has made a purchase).
6. **Fetch Cart:** If the checkout is not completed, the workflow retrieves the cart details using the cart token, email and the checkout ID.
7. **Apply Global Discount Code:** Creates a discount code and associates it with a URL to be used in the abandoned cart email.
8. **Send Email (Gmail):** Sends a personalized abandoned cart recovery email to the customer, including a link to their cart and a discount code to incentivize purchase.
9. **Log to Google Sheet:** Logs the customer's email, the time the recovery email was sent, cart value, and discount code in a Google Sheet.
10. **Wait some days:** Pauses the workflow for a specified amount of time after the email.
11. **Send SMS (Twilio):** Sends a sms to the customer, including a link to their cart and a discount code to incentivize purchase.
12. **Wait 24 Hours:** Pauses the workflow for 24 hours after the sms.
13. **Loop Over Items:** Loop over data.
14. **GET Checkout Status1:** Get checkout status to check.

## Services:
- Shopify
- Gmail
- Google Sheets
- Twilio
- Airtable

## Hashtags:
#n8n #automation #ecommerce #abandonedcart #emailmarketing
