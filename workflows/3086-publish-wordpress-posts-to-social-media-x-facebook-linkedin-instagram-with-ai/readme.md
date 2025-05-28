# AI Social Media Publisher from WordPress

## Use Cases

- **Automated Social Media Promotion for Blog Posts:** Automatically create and publish engaging content on various social media platforms whenever a new blog post is published on a WordPress site. This saves time and ensures consistent promotion.
- **Content Repurposing:** Repurpose existing WordPress content into tailored social media posts, optimizing each for the specific platform (Twitter, Facebook, LinkedIn, Instagram) to maximize engagement.
- **Scheduled Social Media Updates:** Schedule social media posts in advance, based on a content calendar managed within a Google Sheet, ensuring a steady stream of relevant content.

## How it Works

1.  **Trigger:** The workflow is manually triggered using the "When clicking ‘Test workflow’" node.
2.  **Fetch Post ID from Google Sheets:** The "Google Sheets" node retrieves a specific row from a Google Sheet, using the "TWITTER" column to filter the data. The Google Sheet stores the Post ID of the Wordpress articles.
3.  **Retrieve WordPress Post Content:** The "Get Post" node fetches the content of a WordPress post using the ID obtained from Google Sheets.
4.  **Generate Social Media Content:** The "Social Media Manager" node leverages the OpenRouter Chat Model to generate tailored social media content for LinkedIn, Instagram, Facebook, and Twitter (X), based on the WordPress post's title and content. The model follows specific guidelines for each platform to optimize engagement.
5.  **Generate Images:** The "Image Instagram" and "Image Facebook e Linkedin" nodes create images for Instagram, Facebook and Linkedin posts.
6.  **Publish on Social Media:** The workflow publishes the generated content on:
    *   Twitter (X) via the "Publish on X" node.
    *   LinkedIn via the "Publish on LinkedIn" node.
    *   Facebook via the "Publish on Facebook" node.
    *   Instagram via the "Publish on Instagram" node.
7.  **Update Google Sheets:** The workflow updates the Google Sheets document with a flag ("x") in the columns of the social media on which the post was published, indicating the post was successfully shared on each respective platform.

## Services

-   **Google Sheets:** Used for storing and retrieving the WordPress Post ID and tracking social media posts.
-   **WordPress:** Fetches content from a specified WordPress post.
-   **OpenRouter Chat Model:** Generates tailored social media content.
-   **OpenAI:** Generates images for Social Media.
-   **X (Twitter):** Publishes content on Twitter.
-   **LinkedIn:** Publishes content on LinkedIn.
-   **Facebook:** Publishes content on Facebook.
-   **Instagram:** Publishes content on Instagram.

## Hashtags

\#n8n \#automation \#socialmedia \#wordpress \#contentmarketing
