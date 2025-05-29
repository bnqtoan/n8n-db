# Scrape Books from URL with Dumpling AI, Clean HTML, Save to Sheets, Email as CSV

## Use Cases

- **Price Monitoring:** Automatically track and monitor the prices of books on a specific website, receiving updates via email when there are changes, particularly price drops.
- **Competitor Analysis:** Gather data on books offered by competitors, sort them by price, and analyze their offerings to inform business decisions.
- **Personalized Book Recommendations:** Scrape book data based on specific criteria, sort them, and receive a CSV file with the most relevant books based on defined preferences.

## How it Works

This workflow automates the process of extracting book data from a website, cleaning it, and delivering it as a CSV file via email.

1.  **Google Sheets Trigger**: The workflow starts when a new URL is added to a specified Google Sheet.
2.  **Scrape Website Content with Dumpling AI**: The URL from the Google Sheet is sent to Dumpling AI, which scrapes the website and returns the HTML content.
3.  **Extract all books from the page**: Extracts all the book entries based on the CSS selector `.row > li`.
4.  **Split HTML Array into Individual Books**: Splits the extracted HTML content into individual book items.
5.  **Extract individual book price**: Extracts the title and price from each book.
6.  **Sort by Price**: Sorts the extracted book data by price in descending order.
7.  **Convert to CSV File**: Converts the sorted data into a CSV file format.
8.  **Send CSV via e-mail**: Finally, the workflow sends an email with the generated CSV file attached.

## Services

-   **Google Sheets**: Used as a trigger to initiate the workflow and store the URLs to be scraped.
-   **Dumpling AI**: A web scraping service used to extract HTML content from websites.
-   **Gmail**: Used to send the final CSV file as an email attachment.

## Hashtags

#n8n #automation #webscraping #books #googlesheets
