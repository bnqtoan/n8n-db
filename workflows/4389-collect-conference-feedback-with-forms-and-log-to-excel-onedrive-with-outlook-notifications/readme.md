# Conference Feedback Workflow

## Use cases:

- **Collecting post-conference feedback:** Automatically gathers feedback from attendees after a conference using a custom form.
- **Centralized data storage:** Appends feedback data to a Microsoft Excel sheet on OneDrive for easy tracking and analysis.
- **Real-time notifications:** Sends immediate email notifications to a support team upon receiving new feedback submissions.

## How it works:

1.  **Form Submission:** The workflow starts when a user submits the "Conference Feedback Form" hosted by n8n.
2.  **Data Parsing:** The "Parse Data" node extracts individual fields from the form submission, such as name, email, rating, and comments.
3.  **Sample File:** The "Sample File" node is converted to an XLSX document and passed to the next node.
4.  **Search Document:** Searches Microsoft OneDrive for a specific Excel file.
5.  **Code:** The "Code" node extracts the ID of the Excel file found and passes to the "If Document Exists" node.
6.  **Document Existence Check:** The "If Document Exists" node checks if the Excel file ID exists to prevent errors later.
7.  **Build Sheet Data:** If the document exist, the "Build Sheet Data" node prepares the data for appending to the Excel sheet on OneDrive.
8.  **Append Data:** The "Append Data" node adds the new feedback data as a new row in the specified Microsoft Excel sheet on OneDrive.
9.  **Email Notification:** The "Notify Support" node sends an email to the support team with the new feedback details.
10. **End Workflow:** Concludes the workflow after the Excel append and notification are completed.

## Services:

-   n8n Form
-   Microsoft OneDrive
-   Microsoft Excel
-   Microsoft Outlook

## Hashtags:

#n8n #automation #feedback #conference #microsoft
