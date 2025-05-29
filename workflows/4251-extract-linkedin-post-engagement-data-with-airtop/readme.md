# LinkedIn Post Engagement Data Extractor - Template

## Use cases
- **Social Media Analytics:** Extract engagement data from LinkedIn posts to measure the effectiveness of content and campaigns.
- **Lead Generation:** Identify individuals who are interacting with specific content and gather their profile information for potential leads.
- **Competitive Analysis:** Analyze the engagement on competitor's LinkedIn posts to understand what resonates with their audience.

## How it works
1.  The workflow is triggered either via a form submission or when executed by another workflow.
2.  The "Map fields" node takes the input data (Airtop Profile and LinkedIn Post URL) and assigns it to the corresponding variables.
3.  The "Airtop" node uses the provided LinkedIn Post URL and an Airtop profile to extract engagement data. It uses a prompt to instruct the agent to extract details such as the number of reactions, comments, reposts, and information about commenters (name, job title, and profile URL).
4.  The "Parse engagement analysis response" node parses the JSON response from Airtop and transforms it into a structured JSON format.

## Services
- Airtop
- LinkedIn

## Hashtags
#n8n #LinkedIn #Automation #SocialMedia #Engagement
