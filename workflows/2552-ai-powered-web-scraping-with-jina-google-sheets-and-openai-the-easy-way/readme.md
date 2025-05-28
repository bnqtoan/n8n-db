# Book Price Tracker and Saver

## Use cases:

- Automatically extract book prices and details from a website and save them to a Google Sheet for price tracking and comparison.
- Monitor the availability of specific books on a website and record changes in a Google Sheet.
- Build a database of book information (title, price, availability, image, link) for creating a personal library or recommendation system.

## How it works:

1.  The workflow starts with a "When clicking 'Test workflow'" node, which triggers the workflow manually.
2.  "Jina Fetch" node fetches data from the books.toscrape.com website.
3.  The "Information Extractor" node uses a language model to parse the fetched data, extracting book details like title, price, availability, image URL, and product URL. It formats this information into a JSON array.
4.  "Split Out" node splits the extracted array into individual book entries.
5.  "Save to Google Sheets" node appends each book's information as a new row in a specified Google Sheet.

## Services:

-   Google Sheets
-   Jina AI
-   OpenAI

## Hashtags:

#n8n #automation #webscraping #googlesheets #bookprices
