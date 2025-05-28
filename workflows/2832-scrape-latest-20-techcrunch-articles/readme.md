# Scrape Latest 20 TechCrunch Articles

## Use cases:

- **Content Aggregation:** Automatically gather the latest articles from TechCrunch and store them in a database or spreadsheet for further analysis or reporting.
- **Newsletter Creation:** Compile a summary of the latest TechCrunch articles to include in a curated newsletter for subscribers.
- **Real-time Monitoring:** Monitor TechCrunch for specific keywords or topics and receive notifications when new articles matching those criteria are published.

## How it works:

1.  **Trigger:** The workflow starts manually when you click "Test workflow".
2.  **Request TechCrunch Latest Page:** It sends an HTTP request to the TechCrunch "latest" page (`https://techcrunch.com/latest/0`) to retrieve the HTML content.
3.  **Parse a posts box:** It parses the main HTML response to extract the HTML of the `ul.wp-block-post-template` that contains all the posts.
4.  **Parse all posts:** It extracts all the posts ( `li.wp-block-post` ) from the box in the previous step.
5.  **Split out the posts:** Splits the HTML content so each post can be parsed individually.
6.  **Parse each post in detail:** For each post, it extracts the image URL, title, article URL, and creation timestamp.
7.  **Request a post detail page:**  It uses the URL extracted in the previous step to request the full content of each article.
8.  **Parse a post's content and metadata:** Parses the detail page to extract the full article content, title, thumbnail image, and creation timestamp.
9.  **Save the values:**  Saves the extracted data (URL, creation timestamp, image URL, content, and title) into a structured format, making it available for further use.

## Services:

-   TechCrunch (via HTTP requests)

## Hashtags:

#n8n #automation #webscraping #TechCrunch #contentaggregation
