# Notion to Linkedin

## Use cases:

- Automatically share daily content from a Notion database to your LinkedIn profile, saving time and ensuring consistent posting.
- Schedule and publish articles, blog posts, or announcements stored in Notion to LinkedIn at a specific time each day.
- Streamline social media content creation by managing all content in Notion and automating the publishing process to LinkedIn.

## How it works:

1.  The workflow starts with a **Schedule Trigger** that runs every day at 3 PM.
2.  It uses the **Notion** node to **Filter the table for the day's post** in a specified Notion database, retrieving the entry for the current day based on the "Date" property.
3.  The workflow uses the **Notion** node to **Fetch the content on the page**, for each block of the Notion page.
4.  The **Aggregate the Notion blocks** node extract the content and images.
5.  The **Format the post** node formats the Notion content into a suitable text format for LinkedIn.
6.  The **Download image** node retrieve the image to be posted
7.  The **Merge** node combine the formatted text and the image URL.
8.  The **Publish on LinkedIn** node posts the formatted text and image to LinkedIn.
9.  Finally, the **Update post status in notion database** node updates the "Status" property of the Notion page to "Published".

## Services:

-   Notion
-   LinkedIn

## Hashtags:

#n8n #automation #Notion #LinkedIn #SocialMedia
