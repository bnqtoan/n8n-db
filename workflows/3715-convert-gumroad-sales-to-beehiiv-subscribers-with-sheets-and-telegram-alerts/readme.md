# 2. Add Beehiiv newsletter subscribers from Gumroad sales

## Use cases:
- Automatically add customers who purchase a product on Gumroad to a Beehiiv newsletter to nurture leads and keep them informed about updates or related products.
- Collect customer data from Gumroad sales (email, product, country) and store it in a Google Sheets CRM for better sales tracking and analysis.
- Get instant Telegram notifications when a new sale occurs on Gumroad, allowing the team to track sales performance and engage with customers promptly.

## How it works:
1.  **Gumroad Sale Trigger:** The workflow starts when a new sale occurs on Gumroad.
2.  **List publications:** Retrieves a list of publications from Beehiiv.
3.  **Post subscription:** Automatically subscribes the customer's email (from the Gumroad sale) to the Beehiiv newsletter. It uses the ID of the first publication found.
4.  **Append row in CRM:** Appends the sale details (date, email, country, product name) to a specified Google Sheets document, acting as a CRM.
5.  **Set ChatID:** Sets the Telegram Chat ID.
6.  **Notify in channel:** Sends a message to a specified Telegram channel with details of the new sale, including the product name, customer email, and country.

## Services:
-   Gumroad
-   Beehiiv
-   Google Sheets
-   Telegram

## Hashtags:
#n8n #automation #Gumroad #Beehiiv #sales
