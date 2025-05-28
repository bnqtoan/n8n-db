# Create a WordPress post with AI

## Use cases:

- **Content Creation Automation:** Automatically generate draft articles for a WordPress blog based on user-provided keywords and desired structure (number of chapters, word count), reducing manual writing effort.
- **SEO Content Generation:** Create SEO-friendly content by leveraging AI to research topics, generate titles, subtitles, and image prompts optimized for search engines.
- **Hands-free Content Creation:** Create articles to be published on a WordPress site with the minimal interaction possible.

## How it works:

1.  **User Input:** The workflow is triggered by a form submission where the user provides keywords, the desired number of chapters, and the maximum word count for the article.
2.  **Settings:** Set the url of your WordPress instance.
3.  **Article Structure Generation:** OpenAI is used to generate the article title, subtitle, chapters (title and prompt), introduction, conclusions, and an image prompt based on the user-provided keywords and number of chapters.
4.  **Data Validation:** Checks that the data returned by OpenAI is correct.
5.  **Chapter Splitting:** The chapter details (title and prompt) are split into individual items for processing.
6.  **Chapter Content Generation:** For each chapter, OpenAI generates the text based on the chapter title, prompt, the overall article details, and content of other chapters.
7.  **Content Merging:** The generated chapter texts and titles are combined.
8.  **Final Article Assembly:** The introduction, chapters, and conclusions are assembled into a complete article with HTML formatting.
9.  **WordPress Draft Posting:** The generated article is posted as a draft on WordPress, including the title and content.
10. **Featured Image Generation:** Generate a photographic image to be used as the cover image for the article.
11. **Featured Image Upload:** The generated image is uploaded to WordPress.
12. **Featured Image Linking:** The uploaded image is set as the featured image for the created post.
13. **User Feedback:** Confirmation to the user.

## Services:

-   OpenAI
-   WordPress
-   Wikipedia

## Hashtags:

#n8n #automation #WordPress #contentcreation #AI
