# Scrape Trustpilot Reviews to Google Sheets

## Use cases:

- **Monitor Brand Reputation:** Automatically collect and store customer reviews from Trustpilot in a Google Sheet for easy tracking and analysis of your brand's reputation.
- **Competitor Analysis:** Scrape reviews of competitors to understand customer sentiment and identify areas for improvement in your own products or services.
- **Feedback Integration:** Integrate Trustpilot reviews into other systems or dashboards for a holistic view of customer feedback.
- **HelpfulCrowd Integration:** Scrape Trustpilot reviews and format them to be imported to HelpfulCrowd.

## How it works:

1.  **Trigger:** The workflow is triggered either manually via the "When clicking ‘Test workflow’" node or on a schedule using the "Schedule Trigger" node.
2.  **Set Global Variables:** The "Global" node sets the `company_id` (Trustpilot company identifier) and `max_page` (maximum number of pages to scrape). **Important:** Edit this node to set your desired company ID and maximum pages!
3.  **Fetch Reviews:** The "Get reviews" node uses the Trustpilot URL and pagination to fetch reviews from Trustpilot. It retrieves a specific number of pages as set in `max_page` global variable.
4.  **Parse Reviews:** The "Parse reviews" node extracts review data from the HTML content of each page using `cheerio`. It converts the HTML into JSON and extract the reviews array to be used later.
5.  **Split Reviews:** The "Split Out" node splits the array of reviews into individual review items for further processing.
6.  **Edit data for HelpfulCrowd:** The "HelpfulCrowd edits" node formats the data to match what HelpfulCrowd requires.
7.  **General Edits:** The "General edits" node extracts specific fields from each review (Date, Author, Body, Heading, Rating, Location and review_id) and formats them for use in Google Sheets.
8.  **Append to General Sheet:** The "General sheet" Google Sheets node adds the extracted and formatted data to a specified Google Sheet (trustpilot) to save the parsed reviews.
9.  **Append to HelpfulCrowd Sheet:** The "HelpfulCrowd Sheets" Google Sheets node adds the formatted data to a specified Google Sheet (helpfulcrowd) to be imported to HelpfulCrowd.

## Services:

-   Trustpilot (via HTTP Request)
-   Google Sheets
-   HelpfulCrowd

## Hashtags:

#n8n #automation #trustpilot #googlesheets #webscraping #helpfulcrowd
