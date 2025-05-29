# N8N Financial Tracker Telegram Invoices to Notion with AI Summaries & Reports

## Use cases:

- **Automated Expense Tracking:** Users can send photos of invoices or receipts to a Telegram bot, and the workflow automatically extracts the relevant information (date, items, prices, total) and stores it in a Notion database.
- **AI-Powered Expense Categorization:** The workflow utilizes AI to categorize expenses (e.g., Food & Beverage, Transportation) based on the invoice data, providing a structured view of spending habits.
- **Scheduled Spending Reports:** The workflow generates weekly spending reports with charts, summarizing expenses by category and delivering them to a Telegram group or private chat.

## How it works:

1.  **Telegram Trigger:** The workflow is initiated when a user sends a photo to a Telegram bot.
2.  **Get Telegram File:** The workflow use the Telegram file ID from Telegram trigger to get file information to get the image.
3.  **Get Image Info:** Get more detail about the image
4.  **AI Data Extraction (Google Gemini Chat Model & Basic LLM Chain):** The image is sent to Google Gemini, which extracts the relevant information from the invoice using OCR and AI prompting. The AI prompt is defined in the "Basic LLM Chain" node, specifying the desired output format (JSON array object) and categories.
5.  **Data Structuring (Parse To your object | Table):**  The AI's output is parsed into a structured JSON format.
6.  **Split Out | data transaction:** Split data from AI
7.  **Notion Integration (Record To Notion Database):** The extracted and structured data is then added as a new page in a specified Notion database, with each data point (name, quantity, price, total, category) mapped to the corresponding database columns.
8.  **Telegram Confirmation (Sendback to chat and give summarize text):** A confirmation message summarizing the recorded expense is sent back to the user via Telegram.
9.  **Report Scheduling (Schedule Trigger | for send chart report):** A scheduled trigger initiates the report generation process at a defined interval (e.g., weekly).
10. **Fetch Recent Data (Get Recent Data from Notions):** Retrieves transactions from Notion for the report period, filtering by "past week" by default.
11. **Summarize Transaction Data:** Aggregates the expenses by category to prepare the data for chart generation.
12. **Data Conversion (Convert Data to JSON chart payload):** Formats the summarized data into a JSON payload suitable for creating a chart.
13. **Chart Generation (Generate Chart):** Creates a chart image (e.g., bar chart) visualizing the spending by category using QuickChart.
14. **Report Delivery (Send Chart Image to Group or Private Chat):** Sends the generated chart image to a specified Telegram chat or group.

## Services:

-   Telegram Bot API
-   Google Gemini API
-   Notion API
-   QuickChart API

## Hashtags:

#n8n #automation #finance #notion #telegram #ai
