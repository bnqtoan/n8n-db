# xSend and check TTS (Text-to-speech) voice calls end email verification

## Use cases:

- **Two-Factor Authentication (2FA):** Implement a voice call and email-based 2FA system for user login or sensitive transactions.  Users receive a code via voice call and email and must enter both to verify their identity.
- **Account Verification:**  Verify new user accounts by sending a verification code via voice call and email during the registration process.  This ensures that the user has access to both the phone number and email address provided.
- **Password Reset:**  Enhance password reset security by sending a temporary password reset code via voice and email, requiring the user to confirm both channels before proceeding with the password change.

## How it works:

1.  **Form Submission:** The workflow starts when a user submits a form via the "On form submission" node, capturing their phone number, preferred voice and language, email address, and name.
2.  **Set Voice Code:** A static numeric code (e.g., "12345") is assigned to the `Code` variable using the "Set voice code" node. This code will be delivered via voice call.
3. **Code for voice:** Modifies the 'Code' field to add spaces between characters
4.  **Send Voice Call:** The "Send Voice" node uses the ClickSend API to make a voice call to the provided phone number. The voice call reads out the verification code previously set. The spoken message is "Your verification number is \[CODE]".
5.  **Verify Voice Code:** A form ("Verify voice code") asks the user to enter the code received via the voice call.
6.  **Is voice code correct?:** An "IF" node checks if the voice code entered by the user matches the static value (12345) set in the "Set voice code" node.
    *   If the voice code is correct, the workflow proceeds to send email.
    *   If the voice code is incorrect, the workflow presents a "Fail voice code" form to the user.
7.  **Set email Code:** A static numeric code (e.g., "56789") is assigned to the `Code Email` variable using the "Set email code" node. This code will be delivered via email.
8.  **Send Email:** The "Send Email" node sends an email to the address provided in the initial form. The email contains a verification code (e.g., 56789).
9.  **Verify Email Code:** A form ("Verify email code") asks the user to enter the code received via email.
10. **Is email code correct?:** An "IF" node checks if the voice code entered by the user matches the static value (56789) set in the "Set email code" node.
    *   If the email code is correct, the workflow displays a "Success" form.
    *   If the email code is incorrect, the workflow presents a "Fail email code" form to the user.

## Services:

*   **ClickSend:** Used to send voice calls (TTS - Text-to-Speech) for verification.
*   **SMTP:** Used for sending email verification codes.

## Hashtags:

#n8n #automation #voiceverification #emailverification #2FA
