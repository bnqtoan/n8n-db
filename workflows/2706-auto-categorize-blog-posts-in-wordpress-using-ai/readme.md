# Auto categorize wordpress template

## Use cases:

*   **Automatically Categorize Existing Blog Posts:**  You have a large library of uncategorized or poorly categorized WordPress posts and want to use AI to quickly and accurately assign them to the correct categories.
*   **Streamline Content Organization:** Maintain a well-organized blog by ensuring new posts are automatically assigned to the most relevant category, improving site navigation and user experience.
*   **Improve Content Discoverability:** Enhance the discoverability of your content by using AI to assign categories that align with the primary focus of each post.

## How it works:

1.  **Trigger:** The workflow is manually triggered using the "When clicking ‘Test workflow’" node.
2.  **Get All WordPress Posts:** The "Get All Wordpress Posts" node fetches all posts from your WordPress site using the WordPress API.
3.  **AI-Powered Categorization:** The "AI Agent" node takes the title of each WordPress post and uses an AI model (OpenAI Chat Model) to determine the most relevant category ID based on a predefined set of categories.  The AI Agent uses a prompt to instruct the model on how to categorize posts based on the title.
4.  **Update WordPress Post:** The "Wordpress" node updates the category of the corresponding WordPress post using the WordPress API. It uses the ID of the post fetched and the categorized output from the AI model to update the category in the post.

## Services:

*   **WordPress:**  The workflow interacts with a WordPress website to retrieve and update blog posts.
*   **OpenAI:** The workflow uses OpenAI's Chat Model to categorize blog posts based on their titles.

## Hashtags:

#n8n #automation #wordpress #ai #contentmanagement
