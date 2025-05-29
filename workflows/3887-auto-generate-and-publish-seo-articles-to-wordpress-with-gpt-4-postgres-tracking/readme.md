# Auto WordPress Blog Generator (GPT + Postgres + WP Media)

## Use cases:

- **Automated Content Creation:** Generate blog posts on a WordPress site on a recurring schedule, reducing manual effort and ensuring consistent content output.
- **SEO Optimization:** Create unique article titles and well-structured content using GPT, improving search engine rankings.
- **Category Diversification:** Automatically select and write about the least-used categories in your blog, expanding content coverage.

## How it works:

This workflow automates WordPress blog post creation using GPT, PostgreSQL, and WordPress Media.

1.  **Schedule Trigger:** Triggers the workflow based on a defined schedule (e.g., every few hours).
2.  **Configuration:** Load WordPress domain and other configurations.
3.  **Load Categories:** Retrieves all WordPress categories from your site.
4.  **Category Filter:** Filters out excluded categories based on predefined IDs.
5.  **Load Used Categories:** Queries a PostgreSQL database to find the least recently used category.
6.  **Picks Less Used:** Chooses the least-used category for the next post.
7.  **10 Latest Headlines:** Get the names and descriptions of the 10 latest articles for the selected category from Postgres
8.  **AI Agent SEO Headings:** Generates a unique article title using GPT, based on the category and the latest headlines.
9.  **New Article Title:** Prepares the new article title.
10. **Merge Heading:** Merges the heading with its data.
11. **Combines full post meta:** Combines all the metadata into a single object.
12. **Updating posts DB:** Saves used category and title to PostgreSQL.
13. **AI Agent SEO writer:** Generates the HTML content of the blog post using GPT, following a predefined structure with headings, paragraphs, and a call to action.
14. **Extracting output:** Extracts the content block from the AI output.
15. **Placeholder creator:** Creates a placeholder cover image URL.
16. **Download Image:** Downloads the cover image from the placeholder URL.
17. **Media Upload to WP:** Uploads the downloaded image to the WordPress media library.
18. **Prepare Post JSON:** Creates the final JSON structure for the WordPress post, including the title, content, categories, and featured media.
19. **Post to WP:** Publishes the post to your WordPress site using the WordPress REST API.
20. **No Operation, do nothing:** End of the process.

## Services:

*   **OpenAI:** Uses GPT models (gpt-4.1-2025-04-14 and gpt-4.1-mini-2025-04-14) for generating article titles and content.
*   **WordPress:** Interacts with a WordPress site using the REST API to retrieve categories, upload media, and publish posts.
*   **PostgreSQL:** Stores and retrieves data about used categories to ensure content diversification.

## Hashtags:

#n8n #automation #wordpress #GPT #blogging
