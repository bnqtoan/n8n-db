# spy tool

## Use cases:

- **Website Change Monitoring with Email Alerts:** Monitor a specific website for changes and receive an email notification when relevant content is updated. Useful for tracking competitors, news updates, or regulatory changes.
- **Automated Competitive Intelligence:** Regularly scrape a competitor's website and use AI to identify strategic changes.  Send an email summary of these changes to a designated recipient.
- **Personalized News Tracking:** Set up a workflow to monitor specific websites for news related to a particular topic.  An AI agent determines the relevance of the changes and sends an email alert only when relevant news is found.

## How it works:

1.  **New espionage assignment:**  The workflow is initiated via a Form Trigger node, taking in an "assignment_instructions" as input.  This is a text field where you specify the website to monitor and what kind of changes you're looking for.

2.  **convert message to website url & instruction:** This node uses an OpenAI Chat Model to extract the website URL and create a verbose prompt from the assignment instructions. The prompt tells the AI what to look for in changes to the website.

3.  **parse results:** Parses the JSON response from OpenAI to extract the 'website_url' and 'prompt' values.

4.  **scrape page - 1:** Scrapes the website URL from the "parse results" node. This captures the initial state of the website and stores it for later comparison.

5.  **wait 1 day:** Waits for 24 hours.

6.  **scrape page - 2:**  After the waiting period, scrapes the same website again to capture the current state.

7.  **send e-mail?:** An AI Agent compares the scraped content from "scrape page - 1" (old version) and "scrape page - 2" (new version), determines if there are relevant changes based on the original prompt, and decides whether to send an email.

8.  **Gmail:** If the AI Agent determines that an email should be sent, this node sends an email to the specified recipient ("tom@sleak.chat") with a summary of the relevant changes. The email subject includes the website URL.

## Services:

*   **OpenAI API:** Used for converting assignment instructions to website URL and a prompt, and used by the AI agent node to determine whether to send an email.
*   **Firecrawl API:** Used for scraping website content.
*   **Gmail API:** Used for sending email notifications.

## Hashtags:

#n8n #automation #webscraping #AI #emailnotifications
