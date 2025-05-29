# Calculate ICP Person Scoring from LinkedIn Profiles

## Use Cases

- **Lead Qualification:** Automatically score leads based on their LinkedIn profiles to prioritize outreach efforts. Sales and marketing teams can quickly identify high-potential prospects (Ideal Customer Profile - ICP) based on seniority, technical skills, and AI interest.
- **Market Research:** Analyze a list of LinkedIn profiles to understand industry trends and identify key individuals with specific skill sets and experience.
- **Talent Acquisition:** Evaluate potential candidates based on their LinkedIn profiles to assess their suitability for roles requiring specific technical expertise and seniority levels, particularly in AI-related fields.

## How it Works

1.  **Trigger:** The workflow is manually triggered using the "When clicking ‘Test workflow’" node.
2.  **Fetch LinkedIn Profile URL:**  The "Get person" node fetches a LinkedIn profile URL and row number from a specified Google Sheet.
3.  **Extract and Score:** The "Calculate ICP PersonScoring" node uses the Airtop node with a detailed prompt to extract information from the LinkedIn profile, including full name, job title, employer, location, connections, followers, About section text, AI interest level, seniority level, and technical depth. It then calculates an ICP score based on AI interest, technical depth, and seniority.
4.  **Format Response:** The "Format response" node takes the extracted data and formats it into a simplified JSON structure, including the original row number, LinkedIn URL, and calculated ICP score.
5.  **Update Google Sheet:** The "Update row" node updates the original Google Sheet with the calculated ICP score, linking it to the correct LinkedIn profile URL and row number.

## Services

-   **Google Sheets:** Used to store and retrieve LinkedIn profile URLs and store the resulting ICP scores.
-   **Airtop:** Used to extract the data and calculate the ICP Score from the LinkedIn profile based on the prompt and output schema.

## Hashtags

#n8n #automation #leadscoring #linkedin #icp
