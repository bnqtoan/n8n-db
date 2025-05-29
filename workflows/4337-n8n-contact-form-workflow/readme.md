# Contact Form Automation

## Use cases:

- **Website Contact Form:** Automate the process of receiving and responding to contact form submissions on a website.
- **Lead Generation:** Capture lead information from a contact form, send a confirmation email, and redirect the user to a specific page for further engagement.
- **Customer Support:** Streamline customer support by automatically forwarding inquiries submitted through a contact form to a dedicated support email address.

## How it works:

1.  **On form submission:** The workflow starts when a user submits the contact form embedded on a website. The form is defined with fields like "First Name," "Last Name," "Email," "Company," and "Message."
2.  **Send Email to Support:** The information submitted through the form is then used to generate and send an email to a specified support email address (akhilgadiraju@email.com). The email includes all the details provided in the form submission.
3.  **If Email Sent:** After attempting to send the email, the workflow checks if the email was successfully sent. It validates the `messageId` to determine success.
4.  **Confirmation Form:** If the email was sent successfully, a confirmation form is displayed to the user, thanking them for their message and informing them that a response will be sent shortly. This form then redirects to the specified LinkedIn profile.
5.  **Redirect Form:** After submission confirmation, the user is redirected to a predefined URL (https://www.linkedin.com/in/akhilv7/).
6.  **Form:** If there’s an error during the email sending process, an error message form is displayed to the user.
7.  **End (Success)/End (Error):** The workflow ends with a success or error message being triggered to display it to the user based on whether the email was sent.

## Services:

-   **SMTP:** Used for sending emails.

## Hashtags:

#n8n #automation #contactform #email #workflow
