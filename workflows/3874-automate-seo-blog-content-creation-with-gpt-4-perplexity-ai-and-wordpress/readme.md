# Blog WordPress Copy to Sell

## Use cases:

- **Automated Blog Content Creation:** Automatically generates blog posts from idea creation to content writing and publishing to WordPress, ideal for maintaining a consistent posting schedule.
- **Repurposing Content for Sales:** Extracts and adapts blog content for sales purposes, saving time and effort in creating sales materials.
- **Content Enrichment and SEO Optimization:** Enhances existing blog posts with relevant images, excerpts, and optimized content, improving SEO and audience engagement.

## How it works:

1.  **Trigger:** The workflow is initiated either manually via "When clicking 'Test workflow'" or on a schedule using "Schedule Trigger". Alternatively it can also be trigger from another workflow via "When Executed by Another Workflow".
2.  **Idea Generation:** "Idea creator" uses a Langchain agent with memory ("Simple Memory") to generate blog post ideas, utilizing tools like "get brand brief" and "Check History" (Google Sheets) to tailor the ideas. The "OpenAI 4.1 mini3" node is used as the language model.
3.  **Category Rewrite:** The "Category rewrite" node processes the category information.
4.  **Content Writing:** Based on the blog idea, "Perplexity Research" gathers information and "Cleanup Links" formats data for the "Content writer" node. The "Content writer" uses the OpenAI 4.1 mini as a language model to generate the content for the post.
5.  **HTML Cleanup & WordPress Upload:** The "Cleanup HTML" node formats the generated content, and then uploads it to WordPress via the "Wordpress" node.
6.  **Image Handling:** "Write prompt to search image" generate search prompt using LLM from "OpenAI 4.1 mini1". The workflow then retrieves an image from Pexels using "Get Image from Pexcel," downloads it with "Download Image," and uploads it to WordPress using "Upload Image to Wordpress" and then sets the image to WordPress Post by using "Set Image on Wordpress Post".
7.  **Excerpt Creation:** The "Excerpt creator" using language model "OpenAI 4.1 mini2" generate the excerpt and update it to wordpress via "WordPress excerpt add".
8.  **Post Processing:** The "Markdown" node converts the content to Markdown format and "Update list of blog post" and "Update base post" updates relevant google sheets.
9.  **(Optional) Data Aggregation:** "When Executed by Another Workflow" trigger the workflow and reads data from "Notion", aggregate it and edit fields to prepare data for rest of the workflow.

## Services:

-   **WordPress:** For blog post creation and management.
-   **Pexels:** For fetching images.
-   **Google Sheets:** For storing and updating data related to blog posts and history.
-   **OpenAI:** For content generation, idea creation, and excerpt creation.
-   **Perplexity Research:** For gathering information
-   **Notion:** (Optional) read data to aggregate.

## Hashtags:

#n8n #automation #wordpress #blogging #contentcreation
