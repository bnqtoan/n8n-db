# WordPress to Medium Publisher

## Use Cases:

-   **Automated Content Repurposing:** Automatically publish blog posts from a WordPress site to Medium, expanding the content's reach to a new audience.
-   **Content Backup and Mirroring:** Create a backup of WordPress content on Medium, ensuring content redundancy and availability on multiple platforms.
-   **Streamlined Content Distribution:** Simplify the process of sharing content on Medium, reducing manual effort and ensuring consistent publishing.

## How it Works:

This workflow automates the process of extracting blog posts from a WordPress site and publishing them on Medium.

1.  **Trigger:** The workflow starts manually with the "When clicking Execute Workflow" trigger node.
2.  **Fetch Blog Index:** The "HTTP Request" node fetches the HTML content of a specified blog URL (e.g., `https://mailsafi.com/blog/`).
3.  **Extract Post Information:** The first "HTML" node extracts blog post titles and links from the index page using CSS selectors.
4.  **Split Posts:** The "Item Lists" node then splits this data into individual items for each blog post.
5.  **Limit the number of Posts:** Limit the number of posts you want to publish.
6.  **Loop Through Posts:** "Loop Over Items" splits the execution into multiple branches depending on the total items found on previous node.
7.  **Fetch Post Content:** For each post, a second "HTTP Request" node fetches the HTML content of the individual blog post page, reading the URL of each individual blog posts.
8.  **Extract Post Content:** The second "HTML" node extracts the post's title and main content.
9.  **Publish to Medium:** The "Medium" node publishes the extracted content to Medium, using the post title as the Medium article title and the extracted HTML content as the article body. It also adds tags for categorization.

## Services:

-   **WordPress (via HTTP Request):** Used as the source for blog post content.
-   **Medium:** Used as the destination platform for publishing content.

## Hashtags:

#n8n #automation #wordpress #medium #contentmarketing
