# DSP Certificate w/ Google Forms

## Use cases:

- **Automated Certificate Generation:** Automatically generate and send certificates to individuals who pass a quiz or assessment via Google Forms.
- **Training Program Completion:** Upon completion of a training module and a passing score on the associated quiz, participants automatically receive a certificate.
- **Event Participation Recognition:** Issue certificates of participation to attendees who complete a feedback form or quiz after an event.

## How it works:

1.  **Google Sheets Trigger:** The workflow starts when a new row is added to a designated Google Sheet, typically linked to a Google Form.
2.  **Extract essential data:** Extracts key data (Name, Email, and Score) from the Google Sheet row that triggered the workflow.
3.  **Score Checker:** Evaluates the respondent's score against a defined passing threshold.
4.  **Conditional Branching:**
    *   If the score is below the passing criteria, the workflow stops.
    *   If the score meets or exceeds the passing criteria, the workflow proceeds to certificate generation.
5.  **Copy from your template:** A pre-designed certificate template in Google Slides is copied to a new file in Google Drive.
6.  **Replace text:**  The "[ NAME ]" placeholder within the copied Google Slides presentation is replaced with the respondent's name.
7.  **Convert to PDF:** The customized Google Slides presentation is converted into a PDF file.
8.  **Send to user's email:** The generated PDF certificate is attached to an email and sent to the respondent's email address.

## Services:

*   Google Sheets
*   Google Drive
*   Google Slides
*   Gmail

## Hashtags:

#n8n #automation #GoogleForms #Certificate #Workflow
