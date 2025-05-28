# Waitlist with Email Verification

## Use cases:

- **Software Beta Program:** Allow users to sign up for a beta program, verifying their email before granting access.
- **Exclusive Content Access:** Gate access to premium content (e.g., webinars, ebooks) behind a waitlist, ensuring only verified users are added.
- **Product Pre-launch:** Build anticipation for a new product by creating a waitlist and gathering user information and intended use cases.

## How it works:

1.  **Form Submission:** The workflow starts when a user submits their information (Firstname, Lastname, Email, Company Website) through a `Form` node.
2.  **Data Cleaning:** The `Set` node standardizes the email (to lowercase) and website URL.
3.  **Verification Code Generation:** A random verification code is generated using a `Crypto` node.
4.  **Google Sheets Update:** The user's information, including the generated verification code, is added to a Google Sheet (`Google Sheets` node).
5.  **Email Sending:** An email containing the verification code is sent to the user's email address using an `Email Send` node.
6.  **Verification Form:** The user is prompted to enter the verification code via another `Form` node.
7.  **Verification Check:** The entered code is compared against the generated code.
8.  **Conditional Branching:**
    *   **If the codes match:** Their `Verified` Field in the Google Sheet is set to `TRUE`, and an additional form is presented to collect intended use case information. This information is then saved to the sheet.
    *   **If the codes do not match:** The user is looped back to the verification form to re-enter the code.
9.  **Final Google Sheets Update:**  The user's intended use for the software is stored in the Google Sheet.

## Services:

*   Google Sheets
*   SMTP (Email Sending)

## Hashtags:

#n8n #automation #waitlist #emailVerification #googleSheets
