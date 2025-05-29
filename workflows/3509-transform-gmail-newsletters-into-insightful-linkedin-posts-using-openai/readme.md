# Transform Gmail Newsletters into Insightful LinkedIn Posts Using OpenAI

## Use cases:

- **Content Curation:** Automatically transform industry newsletters received in Gmail into engaging LinkedIn posts, saving time and effort in content creation.
- **Thought Leadership:** Share key insights and updates from curated newsletters with your LinkedIn network, establishing yourself as a knowledgeable voice in your field.
- **Social Media Automation:** Streamline your social media presence by automating the process of extracting valuable content from newsletters and publishing it on LinkedIn.

## How it works:

1.  **Trigger:** The workflow starts manually with the "When clicking ‘Test workflow’" node.
2.  **Fetch Emails from Gmail:** The "Gmail" node retrieves the latest email from Gmail, filtering by the sender `decodeai@ghost.io`.
3.  **Extract News Items:** The "Extract News Items" node utilizes OpenAI to identify and summarize the top 5 news items from the email content. It extracts a headline and provides a concise summary for each.
4.  **Split Into Items**: The "Split Out" node breaks apart the 5 news items into 5 individual items to be processed by the next nodes.
5.  **Create LinkedIn Posts:** The "Create LinkedIn Posts" node uses OpenAI again to generate a concise and subtly humorous LinkedIn post for each news item based on its headline and summary. The prompt encourages a smart, deadpan style.
6.  **Post to LinkedIn:** Finally, the "LinkedIn" node publishes the generated post to your LinkedIn profile.

## Services:

-   Gmail
-   OpenAI
-   LinkedIn

## Hashtags:

#n8n #automation #linkedin #openai #contentmarketing
