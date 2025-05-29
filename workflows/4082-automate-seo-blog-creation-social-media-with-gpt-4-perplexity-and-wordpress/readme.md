# Automated Blog writer with social media promotion agent

## Use Cases

- **Content Creation and Promotion:** Automatically generates blog posts based on a schedule or trigger, then promotes the content across various social media platforms.
- **Brand Management:** Streamlines the process of creating and distributing content aligned with a specific brand, ensuring consistency in messaging and visual style.
- **SEO Optimization:** Automates the inclusion of relevant excerpts and images to improve blog post visibility and engagement, enhancing SEO performance.

## How It Works

1.  **Trigger:** The workflow is initiated either by a schedule (`Schedule Trigger`) or manually (`When clicking ‘Test workflow’`). Alternatively, it can be triggered by another workflow (`When Executed by Another Workflow`) and by Notion
2.  **Idea Generation:** An AI agent (`Idea creator`) leverages a memory buffer (`Simple Memory`), retrieves brand information from Google Sheets (`get brand brief`), and uses OpenAI (`OpenAI 4.1 mini3`) to generate blog post ideas. The results are parsed using (`Structured Output Parser1`).
3.  **Content Creation:**
    *   The workflow uses research from Perplexity (`Perplexity Research1`), cleans up links (`Cleanup Links`), and then generates the main content of the blog post (`Content writer`) using OpenAI (`OpenAI 4.1 mini`).
    *   The HTML content is cleaned (`Cleanup HTML`) before proceeding.
4.  **WordPress Integration:**
    *   The generated content is used to create a WordPress post (`Wordpress`).
    *   Based on the content, a featured image is selected. The workflow uses another chain, consisting of OpenAI (`OpenAI 4.1 mini1`), Pexels API (`Get Image from Pexcel`), and image manipulation nodes (`Download Image`, `Upload Image to Wordpress`, `Set Image on Wordpress Post`) to find and set the image.
    *   An excerpt is created using OpenAI (`OpenAI 4.1 mini2`) and added to the WordPress post.
5.  **Social Media Promotion:**
    *   The workflow updates a Google Sheets document (`Update list of blog post`) with the new blog post details. The google sheet document is updated to a database(`Add too Data Bank`).
    *   The workflow generates social media content using OpenAI (`gpt-4.1 mini`) and an AI agent (`Social Media Content Creator`), optimized for platforms like Instagram, Facebook, and X (formerly Twitter).
    *   The workflow uploads the media to Cloudinary (`Post image Cloudinary`)
    *   The content is then posted to:
        *   Instagram (`Upload media to Instagram`, `Publish Post on IG`)
        *   Facebook (`Facebook Post1`)
        *   X (`X`)
6. **Aggregation and Notification:** The workflow aggregates the created posts and sends notification via Gmail (`Gmail`).

## Services

-   **OpenAI:** Used for content generation, image prompt creation, and social media content creation.
-   **Google Sheets:** Used for retrieving brand information and updating blog post lists.
-   **WordPress:** Used for creating and publishing blog posts.
-   **Perplexity API:** Used for content research.
-   **Pexels API:** Used for retrieving blog images.
-   **Facebook Graph API:** Used for posting content on Facebook and Instagram.
-   **X (Twitter) API:** Used for posting content on X.
-   **Cloudinary:** Used for media hosting.
-   **Gmail:** Used for sending notifications.
-   **Notion:** Used for trigger event

## Hashtags

#n8n #automation #blogging #socialmedia #contentcreation
