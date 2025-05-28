# Selenium Ultimate Scraper Workflow

## Use Cases:

1.  **Competitor Analysis:** Scrape product details, pricing, and customer reviews from competitor websites to gain insights into their strategies and offerings.
2.  **Lead Generation:** Extract contact information (emails, phone numbers) from websites related to a specific industry or niche to build a targeted lead list.
3.  **Market Research:** Collect data from various online sources, such as news articles, forums, and social media, to identify trends, sentiments, and emerging topics in a specific market.

## How it Works:

1.  **Webhook Trigger:** The workflow starts when a webhook receives a request with a subject, target URL (optional), and data requirements.
2.  **Google Search (Conditional):** If no target URL is provided, the workflow uses Google Search to find relevant URLs based on the subject and website domain.
3.  **URL Extraction:** Extracts the first matching URL from the Google search results.
4.  **Information Extraction Preparation:** Use Open AI model to extract the perfect URL for information extraction.
5.  **Selenium Session:** Creates a Selenium WebDriver session to control a Chrome browser.
6.  **Cookie Injection (Conditional):** If cookies are provided in the webhook request, they are injected into the Selenium browser session.
7.  **Navigate to URL:** The Selenium browser navigates to the target URL (either provided directly or extracted from Google search).
8.  **Webpage Analysis with Screenshot:** A screenshot of the webpage is taken. The image and subject are sent to OpenAI's image analysis API to extract relevant information.
9.  **Data Extraction:** Extract data from the text from Open AI with Information extractor node.
10. **Respond to Webhook:** The extracted data is sent back as a response to the webhook request.
11. **Error Handling:** The workflow includes error handling to manage scenarios such as blocked requests, page crashes, and cookie injection failures. In case of an error, a screenshot is taken, and the error information is sent back to the webhook.
12. **Selenium Session Cleanup:** At the end of the workflow, the Selenium session is always deleted to release resources.

## Services:

*   **Google Search:** Used for finding relevant URLs.
*   **Selenium WebDriver:** Used for browser automation.
*   **OpenAI API:** Used for image analysis and information extraction.
*   **ip-api.com** Used to debug IP address

## Hashtags:

#n8n #automation #webscraping #selenium #openai #informationextraction
