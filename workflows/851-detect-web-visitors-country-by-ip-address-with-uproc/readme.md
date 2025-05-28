# location_by_ip

## Use cases:

*   **Personalized Welcome Emails:** Send welcome emails in the recipient's language based on their detected country.
*   **Content Localization:**  Redirect users to localized website content based on their geographical location inferred from their IP address.
*   **Fraud Detection:** Flag sign-ups or transactions originating from unexpected countries based on the user's IP address.

## How it works:

1.  **Manual Trigger:** The workflow starts when manually triggered.
2.  **Create IP and Email Item:** A "Function Item" node creates a data item containing a predefined IP address ("83.46.131.46") and email address ("miquel@uproc.io").
3.  **Get Location By IP:** The "Get Location By IP" node uses the Uproc API to determine the country associated with the IP address from the previous step.
4.  **User in Spain?:** The "If" node checks if the country code returned by the Uproc API is "ES" (Spain).
5.  **Send Spanish Email:** If the user is in Spain, an email written in Spanish ("Hola, ¡Gracias por registrarte!") is sent to the email address.
6.  **Send English Email:** If the user is not in Spain, an email written in English ("Hi, Thank you for your signup!") is sent to the email address.

## Services:

*   **Uproc API:** Used for IP address geolocation.
*   **AWS SES (Simple Email Service):** Used for sending emails.

## Hashtags:

#n8n #automation #geolocation #email #localization
