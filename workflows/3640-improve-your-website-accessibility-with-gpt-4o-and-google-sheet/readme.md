# My Workflow

## Use cases:
1.  **SEO Optimization:** Automatically identify images on a webpage with missing or short alternative text (alt text) and generate optimized alt text suggestions for improved search engine ranking.
2.  **Accessibility Enhancement:** Ensure web content is accessible to visually impaired users by generating descriptive alt text for images, making the website more inclusive.
3.  **Content Auditing:** Quickly audit a website's images to ensure all images have appropriate alt text, helping maintain website quality and compliance with accessibility standards.

## How it works:

1.  **Manual Trigger:** The workflow starts when you manually trigger it using the "When clicking 'Test workflow'" node.
2.  **Set Page Link:** The "Page Link" node sets the target URL and base URL for the website you want to analyze.
3.  **Download HTML:** The "Download HTML" node retrieves the HTML content of the specified webpage using an HTTP request.
4.  **Get Images urls with altText:** The "Get Images urls with altText" node parses the HTML to extract all `<img>` tags, identifies their `src` (source URL) and `alt` attributes, and calculates the length of the `alt` text. It handles both absolute and relative URLs.
5.  **Store Results:** The "Store Results" node appends the extracted image data (index, source URL, alt text, alt text length) to a specified Google Sheet.
6.  **Download Results:** The "Download Results" node retrieves the image data from the Google Sheet.
7.  **altLength < 50:** The "altLength < 50" node filters the images, selecting only those with `alt` text shorter than 100 characters.
8.  **Limit records:** The "Limit records" node limits the amount of records to a max of 5.
9.  **Loop Over Items:** The "Loop Over Items" node iterates through each image with short `alt` text.
10. **Generate altText:** The "Generate altText" node uses the OpenAI Langchain node to generate a new, descriptive `alt` text for each image, based on the image source URL, with a maximum length of 150 characters.
11. **Update Results:** The "Update Results" node updates the Google Sheet with the newly generated `alt` text for the corresponding images.

## Services:

*   Google Sheets
*   OpenAI API (via Langchain)

## Hashtags:

#n8n #automation #SEO #accessibility #altText
