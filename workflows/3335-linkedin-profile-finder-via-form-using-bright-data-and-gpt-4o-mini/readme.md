# LinkedIn Profile Finder via Form using Bright Data & GPT-4o-mini

## Use cases:

1.  **Sales Prospecting:** Automatically find and analyze LinkedIn profiles of potential leads based on their name and company, then receive a personalized follow-up email with outreach suggestions.
2.  **Recruitment:** Streamline candidate sourcing by identifying potential hires on LinkedIn and generating initial outreach strategies.
3.  **Market Research:** Gain insights into key personnel within target companies and develop tailored marketing campaigns or partnership proposals.

## How it works:

1.  **Form Submission:** The workflow starts when a user submits a form with the full name and company of the person they want to analyze using the "When User Completes Form" node.
2.  **LinkedIn Profile Search:** The workflow constructs a Google search URL tailored to find the person's LinkedIn profile using the "Edit Url LinkedIn" node. The Bright Data node fetches the Google search results while avoiding detection as a bot..
3.  **Company Data Search:** The workflow does the same to get information about the company the person works at.
4.  **Profile Extraction and Parsing:** The "Extract Body and Title from Website" node extracts the title and body content from the Google search results of the LinkedIn search. This data is passed to "Parse Google Results", which uses GPT-4o-mini to identify and extract LinkedIn profile information.
5. **Company Extraction and Parsing:** The "Extract Body and Title from Website1" node extracts the title and body content from the Google search results of the Company search. This data is passed to "Parse Google Results for Company", which uses GPT-4o-mini to identify and extract company data.
6.  **Matching Profiles:** The "Get only Matching Profiles" node filters the parsed results to identify entries that strongly match the provided name and company.
7.  **Profile Limiting:** The "Limit to 1 Profile" node limits the results to the top matching profile.
8.  **Profile Verification:** The "LinkedIn Profile is Found?" node checks if a matching profile was found. If not, the workflow triggers a "Form Not Found" response.
9.  **Follow-up Email Generation:** Combines the information from both LinkedIn profile and Company, which are send to a "Create a Followup for Company and Person" node to generate personalized suggestions, a concrete outreach step, and a tailwind styled raw html report.
10. **Email Sending:** The workflow sends email using the "Send Email" node, this action triggers a confirmation form in the "Form Email Sent" node.

## Services:

*   n8n
*   Bright Data
*   OpenAI (GPT-4o-mini)
*   Google Search
*   SMTP (for sending emails)

## Hashtags:

#n8n #automation #sales #linkedin #gpt4
