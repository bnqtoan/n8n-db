# Appointment Scheduling Workflow with AI Qualification and Approval

## Use cases:

- **Automated Appointment Scheduling:** Allow potential clients to book appointments through a form, streamlining the scheduling process and reducing manual effort.
- **AI-Powered Enquiry Qualification:** Use AI to automatically assess the relevance of appointment requests, ensuring that valuable time is spent on qualified leads.
- **Admin Approval Workflow:** Implement a human-in-the-loop approval process for appointments, giving administrators control over the final scheduling decisions.

## How it works:

1.  **Form Submission (n8n Form Trigger):** The workflow starts when a user submits a form with their name, email, and enquiry.
2.  **AI-Powered Enquiry Qualification (Enquiry Classifier):** The user's enquiry is sent to an AI text classifier, which determines if the enquiry is relevant based on predefined categories (e.g., AI, automation, digital products).
    *   If the enquiry is deemed not relevant, the user is redirected to a "Decline" form (Decline), suggesting alternative contact methods.
3.  **Terms and Conditions (Terms & Conditions):** If the enquiry is relevant, the user is presented with a form to accept the terms and conditions for booking an appointment.
4.  **Date and Time Selection (Enter Date & Time):** The user then selects a desired date and time from a subsequent form. The form dynamically generates available dates, excluding weekends.
5.  **Data Aggregation (Get Form Values):** The information from the initial form and the date/time selection form is combined into a single data structure.
6.  **Acknowledgement Email (Send Receipt):** A confirmation email is sent to the user, summarizing their appointment request.
7.  **Approval Process (Trigger Approval Process + Execute Workflow Trigger, Summarise Enquiry):**
    *   A sub-workflow (Trigger Approval Process + Execute Workflow Trigger) is triggered to handle the approval process. This separates the user experience from the approval workflow.
    *   The enquiry is summarized via AI (Summarise Enquiry node) to send a summary to the admin user.
8.  **Admin Approval (Wait for Approval):** An email is sent to the administrator with an "Approve" or "Decline" button. The workflow pauses until the admin makes a selection.
9.  **Appointment Creation or Rejection (Create Appointment, Send Rejection):**
    *   If the admin approves the request, a Google Calendar event is created with the user as an attendee.
    *   If the admin declines the request, a rejection email is sent to the user.
10. **Form End (Form End):** The user will be redirected to a final form stating their request was sent.

## Services:

-   **Gmail:** Used for sending confirmation emails to users and approval requests to the administrator, and sending rejection emails.
-   **Google Calendar:** Used to create calendar events when an appointment is approved.
-   **OpenAI:** Used for categorizing user enquiries and summarizing the text.

## Hashtags:

#n8n #automation #workflow #appointmentscheduling #AI
