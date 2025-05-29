# Top Deals Notifier

## Use cases:

-   **Personalized Deal Notifications:** Users can receive daily or weekly email updates on the best deals from MediaMarkt, tailored to their selected categories (e.g., "Cell Phones," "TV & Home Theater").
-   **Automated Deal Scouting:** Individuals looking for specific products can automate the process of finding the best prices by filtering deals by category and receiving them directly in their inbox.
-   **Curated Gift Ideas:**  This workflow can be used to generate a list of potential gift ideas based on selected categories, making it easier to find presents for friends and family.

## How it works:

1.  **Form Submission:** The workflow starts when a user submits a form ("When User Completes Form"). This form captures the user's email address and preferred product categories.
2.  **Website Data Retrieval:** The workflow uses the Bright Data node ("Get MediaMarkt Offers Website") to scrape deal information from the MediaMarkt website.
3.  **HTML Extraction:** Extract the title and body html of the page.
4.  **AI-Powered Deal Categorization and Extraction:** Using the body of the web page and the categories selected in the form, the workflow utilizes an OpenAI node ("Generate List of Deals by Category") to generate a json list of deals with name, description, price, link and category.
5.  **Deal Extraction:** Parses the json to separate each deal.
6.  **Email Formatting:** The extracted deal information is formatted into an HTML email body ("Create HTML for Email") using a Handlebars template.
7.  **Email Notification:** An email is sent to the user ("Notify End User by Email") containing the formatted list of deals.
8.  **Form Completion Message:** The user sees a confirmation message ("Show Form Results Page") indicating how many deals were sent to their email.

## Services:

*   **MediaMarkt:** The workflow scrapes deals from the MediaMarkt website.
*   **Bright Data:** A proxy service used to retrieve the website content.
*   **OpenAI:** Used to process the scraped data and identify deals by category.
*   **SMTP:** Used for sending emails.

## Hashtags:

#n8n #automation #deals #webscraping #emailnotifications
