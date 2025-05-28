# Password Protect PDF File

## Use cases

*   **Document Security:** Automatically password-protect sensitive PDF documents before sharing them, such as financial statements, legal contracts, or confidential reports.
*   **Content Restriction:** Secure PDF files used for internal training or educational purposes to prevent unauthorized access or modification.
*   **Secure Archiving:** Password-protect important PDF archives to ensure long-term data security and compliance with regulatory requirements.

## How it works

This workflow automates the process of downloading a PDF file, applying password protection, and then saving the secured file to both local disk and Google Drive. Here's a breakdown:

1.  **Manual Trigger:** The workflow starts when you manually click the "Test workflow" button.
2.  **Download PDF File:** An HTTP Request node downloads a demo PDF file from a specified URL.
3.  **Protect File with Password:** Another HTTP Request node sends the downloaded PDF to ConvertAPI, along with a user-defined password ("mypassword"). ConvertAPI password-protects the PDF file.
4.  **Write Result File to Disk:** The password-protected PDF is saved locally as "document.pdf".
5.  **Google Drive Upload:** The password-protected PDF is also uploaded to a specified folder in Google Drive with the name "test-password.pdf".

## Services

*   **ConvertAPI:** Used to password-protect the PDF file.
*   **Google Drive:** Used for storing the password-protected PDF file.

## Hashtags

#n8n #PDF #PasswordProtect #Automation #GoogleDrive
