# User Empowerment Demo

## Use cases:

- **Updating Shopper Information**: Allows users to change their name and email address in a Baserow database through a web form.
- **Weekly Shopping List Email**: Sends a formatted shopping list to a user based on the current week's requirements from a Baserow database.
- **Centralized User Management**: Acts as a demo for basic user management by linking web form submissions to database updates and personalized emails.

## How it works:

1. **Change Shopper Form (Webhook)**: Listens for a webhook call on the `/newshopper` path. When triggered, it retrieves the current shopper's information from Baserow.
2. **Get Present Shopper (Baserow)**: Fetches the present shopper's data from the Baserow database.
3. **Create Shopper Form (Set)**: Creates an HTML form prepopulated with the shopper’s current data, allowing users to change their name and email.
4. **Submit Shopper (Webhook)**: Captures the new shopper information when the form on the `/submit-shopper` path is submitted via a POST request.
5. **Get Former Shopper (Baserow)**: Retrieves the former shopper's details from the Baserow database.
6. **Set New Shopper Info (Set)**: Extracts the new name and email from the form submission and sets them as variables.
7. **Update Shopper (Baserow)**: Updates the shopper's information in the Baserow database with the newly provided name and email.
8. **Create Response Page (Set)**: Generates an HTML response page to confirm the shopper's information has been updated.
9. **Cron**: Schedules a task to run every week on Friday.
10. **Get Shopping List (Baserow)**: Fetches a list of items from the "Shopping List" table.
11. **Format Shopping List (Item Lists)**: Formats the shopping list items into a single, aggregated list.
12. **Get Shopper (Baserow)**: Retrieves shopper's email.
13. **Send Shopping List (Email Send)**: Sends the formatted shopping list to the shopper via email.

## Services:

- Baserow: A no-code database used to store and manage shopper information and shopping lists.
- SMTP (via Google Mail): Used for sending emails.

## Hashtags:

#n8n #automation #workflow #noCode #userManagement
