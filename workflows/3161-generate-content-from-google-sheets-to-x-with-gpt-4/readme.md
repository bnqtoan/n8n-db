# Social Media Content Automation

## Use cases:

*   **Automated Social Media Posting:** Generate and post content to social media platforms like Twitter based on ideas stored in a Google Sheet, saving time and effort on manual content creation.
*   **Content Calendar Management:** Streamline your content calendar by automatically updating a Google Sheet with posting status, generated content, and timestamps for better tracking.
*   **AI-Powered Content Generation:** Leverage OpenAI's GPT models to generate engaging social media posts from simple content ideas, enhancing content quality and variety.

## How it works:

1.  **Get Content Ideas (Google Sheets):** The workflow starts by fetching content ideas and platform information from a specified Google Sheet.  It reads data from columns A, B, and C of 'Sheet1'.
2.  **Generate Post with OpenAI:**  The retrieved idea and platform are passed to the OpenAI node, where a social media post is generated using the GPT-4 model. The prompt instructs the model to create an engaging and concise post tailored to the specified platform.
3.  **Check Platform (IF):** This node checks if the platform is equal to Twitter.
4.  **Post to Twitter:**  If the platform is Twitter, the generated text from OpenAI is posted to Twitter.
5.  **Update Google Sheet (Google Sheets):** The workflow concludes by updating the Google Sheet with the posting status ("Posted"), the generated text, and the timestamp of the post. This information is appended to columns D, E, and F of 'Sheet1'.

## Services:

*   Google Sheets
*   OpenAI
*   Twitter

## Hashtags:

#n8n #automation #socialmedia #contentcreation #openai
