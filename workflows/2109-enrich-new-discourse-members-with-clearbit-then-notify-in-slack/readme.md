# Enrich New Discourse Members and Notify in Slack for High-Value Leads

## Use cases:

- **Lead Generation:** Automatically identify high-potential leads from new members joining a Discourse forum and notify the sales team in Slack for immediate follow-up.
- **Community Engagement:** Recognize and engage with influential members of a community by identifying their company details and importance, fostering stronger relationships.
- **Targeted Marketing:** Gain insights into the demographics and company affiliations of the community to tailor marketing efforts and content strategies.

## How it works:

1.  **Trigger:** The workflow starts when a new user joins a Discourse forum, triggering the "On new Discourse user" webhook.
2.  **Filter common personal emails:** Filter the most common personal emails(@gmail, @yahoo, @hotmail, @proton) to save on enrichment credits.
3.  **Enrich User Data:** The "Enrich user with Clearbit" node uses the new user's email address to fetch their professional information (e.g., job title, company, LinkedIn profile) from Clearbit. If a user is not found on Clearbit, the workflow continues on an alternative path.
4.  **Get Company Info:** The "Get company info" node uses the company domain extracted from the Clearbit data to get company information.
5.  **Filter High-Value Leads:** The workflow filters these enriched profiles based on criteria such as company size (minimum 30 employees) and Alexa Global Rank (less than 100,000), identifying "high-value" leads.
6.  **Slack Notification:** If a user meets the defined criteria, a message is posted to a specified Slack channel, including the user's name, job title, company, industry, profile picture, and links to their LinkedIn profile and email.

## Services:

-   **Discourse:**  A forum platform that triggers the workflow upon new user registration.
-   **Clearbit:** A data enrichment platform used to retrieve professional information about users based on their email addresses.
-   **Slack:** A messaging platform where notifications about high-value leads are posted.

## Hashtags:

#n8n #automation #leadgeneration #clearbit #slack
