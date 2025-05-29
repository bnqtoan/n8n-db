# Report by period of Meta Ads campaigns

## Use cases:

- **Automated Performance Reporting:** Schedule daily, weekly, or monthly reports on Meta Ads campaign performance.
- **Conversion Tracking and Alerts:** Monitor ad campaigns for conversions and send notifications via email or WhatsApp when specific conversion criteria are met.
- **Campaign Optimization Insights:** Gather data on ad performance across different creative elements and time periods to identify trends and inform optimization strategies.

## How it works:

1.  **Schedule Trigger (Start Time):** The workflow starts on a predefined schedule.
2.  **Fetch Ad Accounts (Ad Accounts):** Retrieves a list of ad accounts from a Google Sheet.
3.  **Batch Processing (Click Next):** Splits the list of ad accounts into batches for processing.
4.  **Set Data (Set Data):** Prepare the data for the call to Meta Ads API
5.  **Fetch Ads Data (Ads by Period):** Queries the Meta Graph API to retrieve performance data for each ad account within a specified period.
6. **Conditional Branching (So if):** Decide to search for new creative elements if there are new changes or not
7. **Retrieve data by creative** (Data by Creative) get the new data by creative if needed
8.  **Save Data (Save Data):** Save the raw data into a Google Sheet.
9.  **Conversion Filtering (Filter if there was Conversion):** Checks if the conversion count is greater than 0. if so, continue, if not, goes back to the Click Next node.
10. **Rename Titles (Rename Titles):** Rename the column titles to a more readable output.
11. **Data Aggregation (Agregar):** Aggregates the data received.
12. **Text dismember (Dismember Text):** Dismember and reformat text
13. **Switch (Switch):** Choose between sending the report via Email or Whatsapp.
14. **Send Report (Send by Email/Send by WhatsApp):** Sends the formatted report via email or WhatsApp based on the switch.
15. **Loop (Return to the loop):** Returns to click next, and follows the loop until there are no more data.

## Services:

-   **Google Sheets:** Used for storing ad account IDs and saving the processed report data.
-   **Meta Graph API (Facebook Graph API):**  Used to retrieve the performance metrics for Meta Ads campaigns.
-   **Gmail:** Used to send the report by email.
-   **WhatsApp:** Used to send the report by Whatsapp.

## Hashtags:

#n8n #metaads #automation #reporting #marketing
