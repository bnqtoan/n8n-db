# My Workflow

## Use cases:

- **Automated LinkedIn Connection Building:** This workflow can automate the process of finding and connecting with new profiles on LinkedIn based on specific criteria.
- **Personalized Outreach:** It can send personalized connection requests and follow-up messages using AI to increase acceptance rates.
- **Lead Generation:** The workflow can be used to scrape profile data, check for existing connections, and initiate contact, effectively generating leads for sales or recruitment.

## How it works:

1.  **Profile Scraping:** The workflow starts either with a form submission (``Fill Out Keywords``) or a schedule (``Schedule Trigger``). It scrapes profile data using browser automation (``Profile Scraper`` or ``Get Profiles``).
2.  **Data Processing:** The scraped data is split into individual profiles (``Split Out``, ``Loop Over Items``, ``Loop Over Items2``).
3.  **Connection Check:** The workflow verifies if a profile is already a connection (``Check Connection``). If not already connected, determine if the person is a connection via a google sheet trigger.
4.  **Conditional Logic:** Based on connection status (``If connection``, ``If connection1``), different actions are triggered.
5.  **Connection Request:** If the profile is not a connection, a connection request is sent via browser automation (``Invite Sender``). Connection limits can be managed (``Set Connection Limit``) and a wait node (``Wait1``) is activated.
6.  **Personalized Message Generation:** Scraped profile information is organized (``Organise Infomation``), then fed to an AI Agent (``AI Agent``) powered by an OpenAI Chat Model (``OpenAI Chat Model``) to generate a personalized message.
7.  **Personalised Message Send:** The workflow send Personalised Message with browser automation (``Send Personalised Message``).
8.  **Stat Update:** Updates the Google Sheet (``Stat Update``).
9.  **Error Handling:** If errors occur, the workflow can loop back to a browser flow node (``add browser flow if it gives error``), but purpose unclear.

## Services:

-   **Google Sheets:** Used for storing and updating profile data and connection status.
-   **Gmail:** Potentially used for sending emails as part of the connection process.
-   **Browserflow:** Used for automating browser actions, primarily for scraping data and sending connection requests on platforms like LinkedIn.
-   **OpenAI:** Utilized via the OpenAI Chat Model node for generating personalized messages.

## Hashtags:

#n8n #automation #linkedin #leadgeneration #browserautomation
