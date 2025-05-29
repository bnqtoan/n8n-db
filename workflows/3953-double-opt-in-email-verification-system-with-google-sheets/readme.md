# 🔐 Double Opt-In Email Verification System with Google Sheets

## Use cases:

- **Newsletter Subscription:**  Ensure users genuinely want to subscribe to a newsletter by requiring them to verify their email address before being added to the mailing list.
- **Account Creation:**  Implement a double opt-in process for new user registrations to prevent spam accounts and improve the quality of user data.
- **Promotional Offers:**  Verify email addresses before sending out promotional offers or discounts to ensure that the intended recipients are legitimate and interested.

## How it works:

1. **Form Submission:** The workflow starts when a user submits their email address through the "On form submission" and "Email Form" nodes.
2. **Code Generation:** A unique verification code is generated using the "Generate Code" node.
3. **Data Storage:** The submitted email and generated code are temporarily stored in a Google Sheet using the "Store Data" node.
4. **Email Sending:** An email containing the verification code and a link to a verification form is sent to the user via the "Send Email" node.
5. **Verification Form:** The user submits the verification code through the "Verification Form" node.
6. **Code Verification:** The "Check Code" node compares the submitted code with the stored code.
7. **Conditional Flow:**
    - **Correct Code:** If the codes match, the workflow proceeds to the "Main Form" node, where the user can access the main content or complete the registration process with the "Continue With Your Flow" node.
    - **Incorrect Code:** If the codes don't match, the "Incorrect Code Form" node displays an error message.
8. **Second Check:** After submitting the "Incorrect Code Form," the "Second Check" node determines whether to redirect the user to the "Main Form" if they somehow get verified, or to reset the process and send a new verification code via the "Reset Form" node, which loops back to the "Email Form" node.

## Services:

- Google Sheets
- Email (likely using SMTP or a dedicated email service)

## Hashtags:

#n8n #automation #doubleoptin #emailverification #googlesheets
