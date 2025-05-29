# Project Cost Monitoring Workflow

## Use cases:

*   **Regular Reporting:** Automatically generate and send weekly reports to different cost centers about projects missing budgeted costs.
*   **Data Quality Assurance:** Ensure project data integrity by proactively identifying and flagging incomplete cost information.
*   **Cost Tracking Improvement:** Enable timely updates to project costs by notifying the responsible teams, leading to better cost control and financial planning.

## How it works:

1.  **Schedule Trigger:** The workflow starts with a Schedule Trigger that is set to run every week.
2.  **MySQL:** Executes a SQL query against a MySQL database to retrieve a list of open, external, and active projects with a budgeted cost of 0. The query groups the results by company and cost center, and orders them by project count in descending order.
3.  **Switch:** The workflow then uses a Switch node to route the data based on the `default_cost_center` field. It checks if the cost center is "Cost Center A", "Cost Center B", "COST CENTER C" or "Cost Center D" and routes the data accordingly.
4.  **Microsoft Outlook:** Sends an email notification to `amjid@amjidali.com` using the Microsoft Outlook node. The email's subject is "Project Cost Missing", and the body includes a formatted HTML message. The email's body informs the specific cost center team about the number of active projects with missing budgeted costs. There are different outlook nodes for different cost centers.

## Services:

*   MySQL
*   Microsoft Outlook

## Hashtags:

#n8n #automation #MySQL #MicrosoftOutlook #costmonitoring
