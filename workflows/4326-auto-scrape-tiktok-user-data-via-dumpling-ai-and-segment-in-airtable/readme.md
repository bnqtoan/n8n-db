# Auto-Scrape TikTok User Data via Dumpling AI and Segment in Airtable

## Use cases:

- **Influencer Marketing:** Automatically identify and qualify TikTok influencers based on follower count for potential collaborations and marketing campaigns.
- **Market Research:** Gather data on TikTok users and their engagement metrics to analyze trends, audience demographics, and content performance.
- **Competitive Analysis:** Track competitor TikTok accounts, monitor their growth, and analyze their content strategy to gain insights and improve your own content.

## How it works:

This workflow automates the process of scraping TikTok profile data, filtering based on follower count, and storing the results in Airtable.

1.  **Watch for New TikTok Handles in Airtable:** Monitors a specified Airtable table for new TikTok usernames added to a designated column.
2.  **Get TikTok Profile Data via Dumpling AI:** Uses the Dumpling AI API to retrieve TikTok profile data for each username obtained from Airtable.
3.  **Check if Follower Count is 100k or More:**  A conditional node that checks if the follower count of the TikTok profile is greater than or equal to 100,000.
4.  **Update Record with Basic TikTok Stats:** If the follower count is less than 100k, update the record with basic information.
5.  **Update Record with All TikTok Stats:** If the follower count is greater or equals to 100k, update the record with more information.

## Services:

-   Airtable
-   Dumpling AI

## Hashtags:

#n8n #automation #tiktok #airtable #dataScraping
