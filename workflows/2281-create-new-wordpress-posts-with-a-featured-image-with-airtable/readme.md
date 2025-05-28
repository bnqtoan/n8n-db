# Automate WordPress Blog Posts with Airtable and Featured Images

## Use cases:

- **Automated Content Publishing:** Schedule and automatically publish blog posts from an Airtable base to a WordPress site, saving time and effort.
- **Content Curation and Scheduling:** Curate blog content in Airtable, then use this workflow to automatically post drafts at scheduled intervals.
- **AI-Generated Content Automation:** Combine with AI content generation tools (like GPT-3) to automatically generate, schedule, and publish blog posts based on keywords and topics stored in Airtable.

## How it works:

1.  **Schedule Trigger:** The workflow starts with a Schedule Trigger, which activates the workflow at defined intervals.
2.  **Get content to post:** Retrieves blog post data from an Airtable base named "SEO Doctor" and the table "AI Generated Blog Posts" where the "Status" field is "To Post".
3.  **Filter by existing Blogs:** Filters the data retrieved from Airtable to include only entries where the "Blog Post" field exists.
4.  **Edit Fields:** Modifies the Airtable data, extracting the ID, Title, and keyword, and removing the title from the Blog Post.
5.  **Markdown to HTML:** Converts the blog post content from Markdown to HTML format.
6.  **Post on Wordpress:** Creates a new blog post on a WordPress site using the extracted title and the converted HTML content. The post is initially set as a "draft".
7.  **Get Image:** Searches for an image on Pexels using the keyword from Airtable.
8.  **Download the image:** Downloads the image from the URL provided by Pexels.
9.  **Upload Media:** Uploads the downloaded image to the WordPress media library.
10. **Set Featured Image:** Sets the uploaded image as the featured image for the newly created blog post.
11. **Update POST on Airtable:** Updates the corresponding record in Airtable, changing the "Status" field to "Posted".

## Services:

-   **Airtable:** Used as a content source and to track the status of blog posts.
-   **WordPress:** Used as the destination for publishing the blog posts.
-   **Pexels API:** Used to search for and retrieve images.

## Hashtags:

#n8n #wordpress #automation #airtable #contentmarketing
