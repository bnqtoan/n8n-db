# Linkedin to Airtable

## Use cases:
- Automatically save insightful content ideas from liked LinkedIn posts to an Airtable base for future reference and content creation.
- Track inspiration from LinkedIn interactions for content planning and strategy.
- Build a database of valuable industry insights and resources discovered through LinkedIn activity.

## How it works:
1.  **Schedule Trigger:** The workflow is triggered based on a defined schedule.
2.  **Fetch LinkedIn Likes:** It retrieves your liked posts from LinkedIn using the RapidAPI.  It requires your LinkedIn username and a RapidAPI key.
3.  **Split Liked Posts:** The received data is split into individual liked posts.
4.  **Filter Insightful & Recent:** Filters the liked posts based on two criteria: posts marked as "insightful" and posts from the last 7 days.
5.  **Format Content Idea:** Extracts the author's username, post text, and post URL from each filtered post to create a title, description, and source.
6.  **Prepare for Airtable:** This splits the title, description, and source to prepare the data to be added to the Airtable.
7.  **Save to Airtable:** The extracted information is then saved as a new record in a specified Airtable base and table.

## Services:
- LinkedIn (via RapidAPI)
- Airtable
- RapidAPI

## Hashtags:
#n8n #automation #linkedin #airtable #contentcreation
