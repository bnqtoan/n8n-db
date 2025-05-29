# My workflow 11

## Use cases:

- **Lead Generation:** Automatically find and verify email addresses for potential leads from a list of names and company websites, streamlining the prospecting process.
- **Recruitment:** Generate email addresses for potential candidates based on their name and company, enhancing outreach efforts.
- **Sales Automation:** Construct and validate email addresses for contacts in a CRM system, ensuring accurate and deliverable contact information for sales campaigns.

## How it works:

1.  The workflow starts when you manually trigger it using the "When clicking ‘Test workflow’" node.
2.  It fetches rows from a Google Sheet ("Get Rows") where the 'Status' column is 'false'. This sheet contains first names, last names, website domains, and other relevant information.
3.  For each row, it uses the domain name to search for email patterns on RocketReach via the Serper.dev API ("Get Email Pattern").
4.  It checks if the Serper.dev API returns any snippets of data ("Has Snippet Results?").
5.  If snippets are found, it loops through the results, extracting the first three snippets for analysis ("Loop Over Items").
6.  It sends the snippets and contact details (first name, last name, domain) to an AI Agent. The AI Agent is configured to analyze the snippets, identify the email pattern used by the company, and construct a likely email address ("AI Agent"). It leverages a prompt to give the agent specific instructions and output format. The AI model used here is `openai/o3-mini` model from OpenRouter, using the "OpenRouter Chat Model" node.
7.  The AI Agent's output is parsed using "Structured Output Parser" based on the expected JSON format.
8.  The workflow verifies the constructed email address using the Prospeo API ("Verify Email").
9.  Finally, it updates the corresponding row in the Google Sheet ("Update Rows") with the constructed email, the identified email pattern, confidence level, and email verification status. The status of the row is updated to "TRUE" after email creation, pattern finding, confidence, and verification.

## Services:

-   **Google Sheets:** Used for reading initial data and updating the results.
-   **Serper.dev:** Used to search for email patterns on RocketReach.
-   **OpenRouter:** Used to access the OpenAI `o3-mini` model for email pattern analysis and construction.
-   **Prospeo:** Used to verify the deliverability of the constructed email address.

## Hashtags:

#n8n #automation #emailFinding #leadGeneration #salesAutomation
