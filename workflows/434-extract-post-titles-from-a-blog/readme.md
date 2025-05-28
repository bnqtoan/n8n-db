## n8n Workflow: HackerNoon Headline Extractor

This workflow extracts headlines and URLs from the HackerNoon website.

**Use cases:**

*   **Content Aggregation:** Automatically gather the latest headlines from HackerNoon to populate a news aggregator or dashboard.
*   **Market Research:** Track trending topics on HackerNoon for market research and analysis.
*   **Personal Learning:** Get a daily digest of the latest articles on HackerNoon to stay updated on relevant topics.

**How it works:**

1.  The workflow starts with a **Manual Trigger** node, which is activated when you click "Execute" in n8n.
2.  The **HTTP Request** node fetches the HTML content from the HackerNoon homepage (`https://hackernoon.com/`).
3.  The first **HTML Extract** node extracts all `<h2>` elements from the HTML and returns their HTML content as an array of "item" data.
4.  The second **HTML Extract** node then iterates through each "item" extracted in the previous step and, for each, extracts the text content of the `<a>` tag as "title" and the `href` attribute of the `<a>` tag as "url".

**Services:**

*   HackerNoon Website (via HTTP Request)

**Hashtags:**

#n8n #automation #webscraping #hackernoon #headlines
