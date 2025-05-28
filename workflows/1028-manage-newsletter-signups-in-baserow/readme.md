# Newsletter Signup

A workflow to handle newsletter signups, email confirmation, and subscriber management using n8n, Baserow, and Email.

## Use cases:

1.  Collecting user information (first name, last name, and email address) through a custom HTML form.
2.  Automatically adding new subscribers to a Baserow database upon form submission.
3.  Sending a confirmation email to new subscribers with a unique link to verify their email address.

## How it works:

1.  **Signup Webhook**: Listens for GET requests on the `/signup` path.
2.  **Create HTML Form**: Generates an HTML form and provides this to the Webhook.
3. **Create Form File**: Converts the HTML to a binary file.
4.  **Submit Webhook**: Listens for POST requests on the `/submit` path, triggered when the HTML form is submitted.
5.  **Extract Submitted Values**: Parses the form data from the webhook request, and stores the submitted values such as `fname`, `lname`, `eaddress` and generates a unique identifier (GUID).
6.  **Add New Subscriber**: Adds the extracted data, including the generated GUID, as a new row in a Baserow database table via an HTTP POST request.
7.  **Send Email**: Sends a confirmation email to the subscriber using the provided email address. The email includes a unique confirmation link to `/confirm` webhook with GUID.
8.  **Create Response Page**: Generates an HTML for thankyou message.
9. **Create Form File**: Converts the HTML to a binary file.
10. **Confirm Webhook**: Listens for GET requests on the `/confirm` path, triggered when the user clicks the confirmation link in the email.
11. **Extract GUID**: Extracts the GUID from the confirmation webhook URL.
12. **Get Subscribers**: Searches the Baserow database for a subscriber with a matching GUID using an HTTP GET request.
13. **Update Subscriber**: Updates the corresponding subscriber's record in Baserow to mark them as confirmed (`true`).
14. **Create Confirmation Page**: Generates an HTML confirmation page.
15. **Create Form File**: Converts the HTML to a binary file.

## Services:

-   Baserow: Used as a database to store subscriber information.
-   Google Mail: Used to send confirmation emails to subscribers.

## Hashtags:

\#n8n \#automation \#workflow \#newsletter \#baserow #emailconfirmation
