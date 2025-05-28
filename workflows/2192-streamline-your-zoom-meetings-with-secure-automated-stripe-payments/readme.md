# Streamline Your Zoom Meetings with Secure, Automated Stripe Payments

## Use cases:

- **Automated Event Setup:** A fitness instructor can automatically create Zoom meeting details and Stripe payment links for each online class they offer.
- **Workshop Management:** An educational organization can easily set up paid webinars with automated registration and joining details sent to participants.
- **Consultation Scheduling:** A consultant can create a paid consultation session with a unique Zoom meeting link generated upon payment, ensuring secure and streamlined access.

## How it works:

1.  **Form Submission (`Creation Form`):** The workflow starts when a user submits a form with details like the meeting title, price, start date, hour, and minute.
2.  **Configuration (`Config`):** Sets up essential configurations like currency and Google Sheet URL.
3.  **Conditional Execution (`if is creation flow`):** Checks if the "Creation Form" node has been executed. If true, it proceeds to create a Zoom meeting and Stripe product.
4.  **Create Zoom Meeting (`Create Zoom meeting`):** Uses the Zoom API to generate a new meeting with the provided title, date, and time. A random password is created for security.
5.  **Create Stripe Product (`Create Stripe Product`):** Creates a product in Stripe with the meeting title and price specified in the form.
6.  **Create Payment Link (`Create payment link`):** Generates a Stripe payment link associated with the created product. Metadata is added to the payment link, including the Zoom link, password, ID, event title, start time, price, currency, and the ID of the Google Sheet where participants will be tracked.
7. **Create participant list (`Create participant list`):** Creates a new sheet in a Google Spreadsheet, the name is set based on the date and the name of the event.
8.  **Format event (`Format event`):** Takes data from previous steps, and prepare the data.
9. **Store event (`Store event`):** Save the new event in the first sheet, in a Google Spreadsheet, for history purpose.
10. **Send Email to Teacher (`Send email to teacher`):** Sends an email to the teacher with the payment link and Zoom meeting details.
11. **On Payment (`On payment`):** Triggered when a payment is completed in Stripe (this node needs to be enabled manually).
12. **Format Participant (`Format participant`):** Formats customer data to be saved to Google Sheets.
13. **Add Participant to List (`Add participant to list`):** Appends the participant's information to the Google Sheet for the event.
14. **Send Confirmation to Participant (`Send confirmation to participant`):** Sends a confirmation email to the participant with the Zoom meeting details.
15. **Notify Teacher (`Notify teacher`):** Sends an email notification to the teacher about the new participant registration.
16. **End (`the end`):** Final node.

## Services:

-   Zoom
-   Stripe
-   Google Sheets
-   Gmail

## Hashtags:

#n8n #automation #zoom #stripe #payments #eventmanagement
