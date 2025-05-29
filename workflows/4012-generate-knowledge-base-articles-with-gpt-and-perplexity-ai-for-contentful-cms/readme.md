# Auto Knowledge Base Article Generator

## Use cases:

- **Automated Content Creation:** Generate initial drafts of knowledge base articles based on user-provided titles and desired improvements.
- **Content Revision and Enhancement:** Improve existing knowledge base articles by automatically incorporating suggested revisions and updates.
- **Streamlined Knowledge Base Population:** Quickly populate a knowledge base with high-quality, well-structured articles on various topics.

## How it works:

1.  **Chat Trigger:** The workflow starts when a chat message is received, prompting the user for a topic to write about, using the "When chat message received" node.
2.  **Initialize Count:** Setting count to 0, to avoid infinite loops of feedback for the agent.
3.  **AI Writer Agent:** Using OpenAI to generates a JSON structured draft article (title, slug, category, description, keywords, content, metaTitle, metaDescription, readingTime, difficulty).
4.  **Create Perplexity Content:** Then calls Perplexity AI to conduct in-depth research on the title provided and augment the content with additional data and citations.
5.  **Format Perplexity Output & Add Citations:** Formats the content with sources.
6.  **Merge:** It then merges the response of both agents.
7.  **AI Editor Agent:**  An editorial AI assistant reviews the article, focusing on clarity, specificity, and overall quality. It determines if improvements are needed and sets an "action" field ("rewrite" or "submit") accordingly.
8.  **Check Limit:** Checks if iterationCount is larger or equal to 3. If it is, the workflow stops.
9.  **Iterate or Submit:** If the article needs improvement ("rewrite"), the workflow loops back to the "AI Writer Agent" to revise the content based on the editor's feedback.  If the article is deemed high quality ("submit"), the workflow proceeds to publish the article.
10. **Submit Tool:** If the quality is determined to be good after no more than 3 iterations, publish the content to contentful via calling another workflow.

## Services:

*   Perplexity AI: Used for in-depth research and content generation, providing citations and expanding on the initial article.
*   OpenAI: Utilized through the "AI Writer Agent" and "AI Editor Agent" for content creation, revision, and editorial review.
*   Contentful: This service is used to publish the article using another n8n workflow (it can be easily swapped to any other content management system)

## Hashtags:

#n8n #automation #knowledgebase #contentgeneration #AI
