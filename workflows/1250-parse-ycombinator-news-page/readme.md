# Ycombinator News to Spreadsheet and Email

## Use cases:

- **Daily News Aggregation:** Automatically fetches the latest news from Ycombinator, compiles it into a spreadsheet, and sends it to your email every day.
- **Monitoring News Trends:** Archive daily news headlines and URLs from Ycombinator in a spreadsheet for trend analysis.
- **Custom News Digest:** Creates a personalized news digest from Ycombinator and emails it to a distribution list.

## How it works:

1.  **Manual Trigger:** The workflow starts when you manually click the "Execute" button.
2.  **HTTP Request:** An HTTP Request node fetches the HTML content from the Ycombinator news page (`https://news.ycombinator.com/`).
3.  **HTML Extract:** The HTML Extract node parses the HTML content and extracts the news titles and corresponding URLs using CSS selectors.
4.  **List Split:** "list news url" and "list news title" splits the title and url array into individual items
5.  **Merge:** The Merge node combines the extracted news titles and URLs into a single data structure, merging the titles and URLs by index to pair them correctly.
6.  **Spreadsheet File:** The Spreadsheet File node creates a spreadsheet file (with a filename including the current date) from the merged data, storing the news titles and URLs. The sheet name is "Latest news".
7.  **Send email notification:** The Send Email node sends an email with the generated spreadsheet attached. The email includes a subject "Ycombinator news" and a message "Here are the latest news attached!". You need to configure the "To Email" and "From Email" as well as the SMTP credentials.

## Services:

-   Ycombinator News Website
-   SMTP Email Service (Configured in n8n credentials)

## Hashtags:

#n8n #automation #news #spreadsheet #email
