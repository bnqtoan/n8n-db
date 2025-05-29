# Amazon Ads AI Optimization

## Use cases:

- **Automated Ad Optimization Recommendations:** Automatically analyzes Amazon Ads reports to generate data-driven recommendations for campaign adjustments, keyword optimization, and targeting improvements, saving time and improving ad performance.
- **Budget Scaling and Bid Strategy:** Provides insights on budget allocation, bid multipliers, and bid adjustments based on historical data, enabling more efficient ad spending and increased sales.
- **Performance Monitoring and Reporting:** Simplifies the process of extracting key performance indicators (KPIs) from ad reports and delivering concise, actionable insights via email, ensuring timely monitoring and optimization of ad campaigns.

## How it works:

1.  **Trigger:** The workflow is triggered manually or can be scheduled to run automatically.
2.  **Email Configuration:** The workflow set send to and subject for email.
3.  **List Files:** The workflow lists files in a specified Google Drive folder containing Amazon Ads reports.
4.  **File Processing:**
    *   It checks if the file is in XLSX format.
    *   It downloads the file from Google Drive.
    *   If the file is an XLSX file, it extracts the data using the "Extract XLSX Data" node.
    *   If the file is a CSV file, it extracts the data using the "Extract CSV Data" node.
    *   It preserves the file name to use it in the next steps.
5.  **Merge Data:** Merges data extracted from both XLSX and CSV files.
6.  **Format Data:** Formats the extracted data into a structured format with keys like `search_terms`, `campaigns`, `targeting`, `placement`, and `budgets`.
7.  **AI Analysis:** Sends the structured data to OpenAI's GPT-4o model for analysis and optimization recommendations. The AI is instructed to provide recommendations on campaign adjustments, keyword recommendations, and targeting recommendations.
8.  **Email Notification:** Sends an email containing the AI-generated optimization instructions, including campaign adjustments, keyword recommendations, and targeting recommendations.

## Services:

-   Google Drive: Used for storing and accessing Amazon Ads reports.
-   OpenAI: Used for AI-powered analysis and optimization recommendations (GPT-4o).
-   Gmail: Used for sending email notifications with optimization instructions.
-   Amazon Ads

## Hashtags:

#n8n #automation #amazonads #ai #advertising
