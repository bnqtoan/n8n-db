# PG&E Daily Cost Tracker

## Use cases:

- **Daily Energy Cost Monitoring:** Automatically track your daily electricity and gas consumption costs from your PG&E account.
- **Automated Reporting:** Receive daily email reports detailing your energy expenses, broken down by natural gas and electricity.
- **Cost Analysis:** Archive the daily reports for future analysis to identify trends in energy consumption and costs.

## How it works:

1.  **Schedule Trigger:** The workflow starts at 8:00 AM every day using the "Schedule Trigger" node.
2.  **Variables:** Sets the PG&E username, password, and recipient email address using the "Variables" node.  **Note:** You must manually enter your PG&E credentials in this node for the workflow to function.
3.  **Create Session:** Opens a session with Airtop using the "Create session" node, configured with the `cesar-prod` profile.
4.  **Create Browser Window:** Creates a browser window and navigates to the PG&E login page (`https://m.pge.com/`) using the "Create browser window" node.
5.  **Type Username:** Enters the PG&E username into the username field using the "Type username" node and the `PGE_Username` variable
6.  **Type Password:** Enters the PG&E password into the password field and presses "Enter" using the "Type password" node and the `PGE_Password` variable.
7.  **Close modal (if any):** closes the modal in the page, if it exists.
8.  **Wait 5 secs:** Wait 5 seconds for the page to load.
9.  **Go to "Energy Usage Details":** Clicks on the "ENERGY USAGE DETAILS" element to navigate to the energy usage details page.
10. **Go to "Energy Costs":** Clicks on the "ENERGY COSTS" element to navigate to the energy costs page.
11. **Go to "Electricity and Gas":** Clicks on the "COMBINED" tab in the page.
12. **Extract Costs:** Extracts the daily energy costs from the webpage using Airtop's extraction capabilities with a detailed prompt for formatting. The prompt instructs Airtop to extract date, total combined costs, natural gas costs, and electricity costs, or if gas costs aren't available, to report only on electricity costs.
13. **End Session:** Terminates the Airtop session using the "End session" node.
14. **Send Email:** Sends an email with the extracted energy costs report using the "Send email" node, with subject "Daily energy costs report" to the email specified in the "Variables" node.

## Services:

-   **PG&E:** The workflow interacts with the PG&E website to retrieve energy consumption data.
-   **Airtop:** Browser automation tool used to interact with the PG&E website.
-   **Gmail:** Used to send the daily energy cost report via email.

## Hashtags:

#n8n #automation #PGE #energytracking #costmonitoring
