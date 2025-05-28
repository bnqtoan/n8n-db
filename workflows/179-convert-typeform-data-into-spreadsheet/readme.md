## n8n Workflow: Typeform to NextCloud Spreadsheet

### Use cases:

*   **Collect and Append Survey Data:** Automatically gather responses from a Typeform survey and append them to an existing spreadsheet stored in NextCloud. This allows for real-time data aggregation and analysis.
*   **Problem Reporting System:** Use Typeform for problem reporting. Submitted issues are automatically added to a central spreadsheet in NextCloud for tracking and resolution.

### How it works:

1.  **Typeform Trigger:** The workflow starts when a new submission is received in the specified Typeform form.
2.  **NextCloud (Download):** Downloads an existing spreadsheet file (e.g., "Problems.xls") from a specified path in NextCloud.
3.  **Spreadsheet File (Read):** Reads the data from the downloaded spreadsheet file, converting it into a format n8n can manipulate.
4.  **Merge:** Combines the data from the Typeform submission with the data from the spreadsheet. The default merge mode will append the Typeform data as a new row.
5.  **Spreadsheet File (Write):** Converts the merged data back into a spreadsheet file.
6.  **NextCloud (Upload):** Uploads the modified spreadsheet file back to the original path in NextCloud, effectively updating the file with the new Typeform submission.

### Services:

*   Typeform
*   NextCloud

### Hashtags:

#n8n #automation #typeform #nextcloud #spreadsheet
