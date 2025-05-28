# Kalk und Welk Podcast Feed Generator

## Use cases:

- **Create a custom RSS feed for the "Kalk und Welk" podcast from ARD Audiothek:** Users can subscribe to this feed in their podcast player of choice to receive automatic updates when new episodes are released, even if the official platform doesn't offer a standard RSS feed.
- **Integrate podcast episodes into other applications:** The generated RSS feed can be used as a data source to display the latest episodes of "Kalk und Welk" on a website or within another application.
- **Archive and track podcast episodes:** By subscribing to the generated feed, users can easily track and archive all episodes of the podcast for personal or research purposes.

## How it works:

1. **Trigger:** The workflow is initiated manually via the "On clicking 'execute'" node or via webhook with the "Feed" node.
2. **Get overview page:** An HTTP Request node fetches the HTML content of the "Kalk und Welk" overview page on the ARD Audiothek website.
3. **Extract links:** The HTML Extract node parses the fetched HTML, extracting all links to individual episode pages. It looks for `a` tags with `href` attributes containing `/episode/`.
4. **Split out lists:** Splits the list of links into individual items to be processed in the following nodes.
5. **Remove duplicate links:** The Item Lists node removes any duplicate links from the extracted list, ensuring each episode is only processed once.
6. **Get episode page:** For each unique episode link, another HTTP Request node fetches the HTML content of the individual episode page.
7. **Extract script:** The HTML Extract node then extracts the content of the second `<script>` tag on the episode page.  This script tag contains a JSON object with the episode's metadata.
8. **Parse JSON:** A Set node parses the extracted script content as JSON.  The workflow keeps only the `data` field after parsing.
9. **Define feed items:** A Function node transforms the extracted JSON data into RSS `<item>` elements. It constructs the necessary XML structure, including title, enclosure (audio URL), GUID, publication date, and description, using data extracted from the JSON. It also constructs the RSS `<channel>` element with podcast metadata. Crucially, it escapes HTML to prevent XML parsing errors.
10. **Serve feed:** A Respond to Webhook node sends the generated RSS feed as the response, with the correct `Content-Type` header (`application/rss+xml`).

## Services:

- **ARD Audiothek:** The workflow scrapes data from the ARD Audiothek website.

## Hashtags:

#n8n #automation #podcast #RSS #webscraping
