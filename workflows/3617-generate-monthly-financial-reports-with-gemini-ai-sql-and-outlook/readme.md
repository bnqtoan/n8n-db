# My Workflow

## Use Cases

- **Automated Monthly Financial Reporting:** Automatically generate and email a comprehensive financial report for each cost center within a company on a monthly basis. This includes YTD vs. Previous Month comparisons, vertical P&L analysis, project WIP summaries, and employee statistics.
- **Business Performance Monitoring with AI Insights:** Leverage AI to analyze financial data, providing executive summaries, identifying trends, and suggesting actionable insights to improve business performance.
- **Cost Center Performance Analysis:** Deliver tailored financial reports to business managers for each cost center, enabling them to track performance against budget, monitor project progress, and understand employee productivity.

## How it Works

1.  **Schedule Trigger:** The workflow is triggered on the 5th of every month using the `Schedule Trigger` node.
2.  **Date & Time and PreviousMonth:** The `Date & Time` node gets the current date, and the `PreviousMonth` node calculates the previous month and year. This information is used to filter data for the reporting period.
3.  **Get Cost Centers with Budgets:** A MySQL query in the `Get Cost Centers with Budgets` node retrieves a distinct list of cost centers that have budget data for the specified period.
4.  **Loop Over Items:** The `Loop Over Items` node iterates through each cost center returned by the previous query.
5.  **Selected Cost Center:** The current cost center is set in the `Selected Cost Center` node as a variable.
6.  **Data Retrieval (YTD vs Previous Month1, Departments, Projects, Employees):**
    -   `YTD vs Prevoius Month1`: Executes a MySQL query to fetch Year-to-Date (YTD) and previous month budget vs. actual figures.
    -   `Departments`: Executes a MySQL query to fetch financial performance by departments (verticals) within the selected cost center.
    -   `Projects`: Executes a MySQL query to fetch project status and Work-in-Progress (WIP) metrics.
    -   `Employees`: Executes a MySQL query to retrieve employee counts for the selected cost center.
7.  **Data Transformation (CostCenter, verticalPL, WIP1, Employees1):** These `Code` nodes convert the data retrieved from the database queries into HTML tables.
8.  **Merge:** All the HTML tables generated are merged into one using the `Merge` node.
9. **Business Performance AI Agent (Analyst):** Send all the HTML tables to the AI agent, where it is going to analyze the numbers.
10. **Financial Performance:** Cleans the HTML that came out from the agent.
11. **Email Data:** This data is prepped for the email, and then sent.
12. **Microsoft Outlook2:** The final report is sent via email using the `Microsoft Outlook2` node.
13. **Wait:** The `Wait` node pauses the workflow execution to prevent overloading or email spamming, and then loops back to process the next cost center.

## Services

-   MySQL: Used as the data source for retrieving financial, project, and employee data.
-   Microsoft Outlook: Used to send the generated financial reports via email.
-   Google Gemini: Used to Analyze the Financial Performance and generate report
## Hashtags

#n8n #automation #financialreporting #businessintelligence #mysql
