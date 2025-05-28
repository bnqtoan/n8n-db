# ScrapeNinja: AI Generated Web Scraper

## Use cases

*   **News Aggregation:** Automatically extract news headlines, scores, and comment counts from websites like Hacker News and compile them into a structured format.
*   **Competitor Monitoring:** Scrape competitor websites to track product updates, pricing changes, or new feature releases.
*   **Research Data Collection:** Gather data from various websites for research purposes, such as collecting article titles, authors, and publication dates.

## How it works

1.  **Manual Trigger:** The workflow starts with a manual trigger, initiating the scraping process.
2.  **Scrape Website:** The "ScrapeNinja" node fetches the HTML content of a specified URL (defaulting to Hacker News).
3.  **Cleanup HTML:** The "Cleanup HTML" node uses ScrapeNinja to remove unnecessary HTML tags and attributes, cleaning the HTML for better processing by the LLM.
4.  **Generate JS eval code via LLM:** The "Generate JS eval code via LLM" node uses a Large Language Model (LLM), specifically Google Gemini, to generate JavaScript code (using cheerio) that can extract specific data points from the HTML. It's instructed to create a `cheerio.js` function to extract news items, including URL, title, score, and comments. The LLM uses the cleaned HTML from the previous step to formulate the JavaScript code.
5.  **Eval generated code to extract data:** The "Eval generated code to extract data" node uses the "ScrapeNinja" node to execute the dynamically generated JavaScript code against the cleaned HTML. This node uses `extract-custom` operation to execute the javascript code obtained in the previous step.
6.  **End:** The extracted data is then available as output from the "Eval generated code to extract data" node.

## Services

*   **ScrapeNinja:** Web scraping service.
*   **Google Gemini API (PaLM API):** Language model for code generation.
*   **Cheerio:** Is not a service but a library used within the LLM to parse and extract data from HTML.

## Hashtags

#n8n #webscraping #automation #AI #LLM
