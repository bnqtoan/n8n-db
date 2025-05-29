# LinkedIn Post Generation & Approval Automation

## Use Cases:

- **Automated Content Curation:** Generate LinkedIn posts from a curated list of topics, descriptions, and instructions stored in a Google Sheet, streamlining the content creation process.
- **Social Media Campaign Management:** Schedule and automate the creation and approval of LinkedIn posts for marketing campaigns, ensuring consistent and timely content delivery.
- **Employee Advocacy Program:** Simplify the process of creating pre-approved LinkedIn posts for employees to share, increasing brand visibility and engagement.

## How it works:

1.  **Schedule and Data Retrieval:** The workflow starts on a defined schedule. It retrieves data (Post Description, Instructions, Image URL, row\_number and Status) from a Google Sheet where the "Status" column is set to "Pending".
2.  **AI-Powered Content Generation:** The "Generate Post Content" node uses OpenAI's GPT model to generate a LinkedIn post based on the data retrieved from Google Sheets. The post is formatted and limited to 1300 characters.
3.  **Content Approval via Gmail:** The generated post content, along with the original description and instructions, is sent to a specified email address for approval. The approver can choose to "Yes" (Approve), "No" (Request Changes), or "Cancel".
4.  **Approval Handling and Regeneration:** Based on the approver's response:
    *   If "Yes," the workflow proceeds to post the content.
    *   If "No," the workflow uses OpenAI to regenerate the content based on the feedback provided in the email and resends it for approval.
    *   If "Cancel," the workflow updates the Google Sheet with the status "Cancelled."
5.  **Image Handling and Posting:** The workflow checks if an image URL is provided in the Google Sheet.
    *   If an image URL exists, it downloads the image and posts the content to LinkedIn with the image.
    *   If no image URL is provided, it posts the content to LinkedIn without an image.
6.  **Google Sheet Update:** After the post is successfully published or cancelled, the workflow updates the Google Sheet with the post's LinkedIn URL, sets the status to "Completed" or "Cancelled", and updates the Status Column using the initial row\_number..

## Services:

*   Google Sheets
*   OpenAI
*   Gmail
*   LinkedIn

## Hashtags:

#n8n #automation #linkedin #contentcreation #socialmedia
