# Google Analytics: Weekly Report

## Use cases:

- **Automated Website Performance Monitoring:** Automatically generate and send weekly reports on website traffic, user behavior, and revenue to stakeholders, enabling them to track performance trends and identify potential issues.
- **E-commerce Sales Analysis:** Track key e-commerce metrics like purchases, revenue, and average purchase value to assess the effectiveness of marketing campaigns and identify opportunities for improvement.
- **Regular KPI Reporting:** Provide consistent and timely insights into essential website KPIs without manual data gathering and report creation, saving time and ensuring data accuracy.

## How it works:

1.  **Schedule Trigger:** The workflow starts with a scheduled trigger that runs every Monday at 7 AM.
2.  **Date Calculation:** Calculation of the start and end dates for the previous year period
3.  **Google Analytics (Current Period):** The workflow queries Google Analytics to retrieve data for the last 7 days, including metrics such as page views, users, sessions, and revenue.
4.  **Data Assignment (Current Period):** The data from Google Analytics is assigned to variables in the `Assign data` node.
5.  **Data Summary (Current Period):** Summarizes the data from the current period.
6.  **Google Analytics (Previous Year):** The workflow queries Google Analytics to retrieve data for the same 7-day period in the previous year.
7.  **Data Assignment (Previous Year):** The data from Google Analytics is assigned to variables in the `Assign data1` node.
8.  **Data Summary (Previous Year):** Summarizes the data from the previous year.
9.  **Data Processing for Email:** An AI model (e.g., GPT-4o) analyzes the summarized data from both periods, calculates percentage changes, and formats the results into an HTML table with a summary.
10. **Data Processing for Telegram:** An AI model (e.g., GPT-4o-mini) converts the HTML content into plain text, formats it, and prepares it for sending via Telegram.
11. **Send Email:** The workflow sends an email containing the HTML report to a specified recipient.
12. **Send Telegram Message:** The workflow sends a Telegram message containing the processed data.

## Services:

*   Google Analytics API
*   OpenAI API (or similar AI service)
*   SMTP (for sending emails)
*   Telegram API

## Hashtags:

#n8n #googleanalytics #automation #weeklyreport #ecommerce
