# Advance Stock Analysis (both Technical and Trends) Using GPT4o Powered AI Agent

## Use cases:

- **Automated Stock Analysis Reports:** Generate and send weekly stock analysis reports to subscribers, providing them with valuable insights for their investment decisions.
- **Personalized Investment Recommendations:** Provide individual investors with personalized recommendations based on technical analysis, sentiment analysis, and market trends.
- **Financial Advisor Assistance:** Assist financial advisors in making informed investment decisions by providing them with detailed stock analysis reports.

## How it works:

1.  **Trigger:** The workflow is triggered either by a user filling out a form with a stock ticker and email or by a weekly schedule.
2.  **AI Agent Initialization:** The workflow initializes an AI agent powered by GPT-4o, which is designed to analyze stocks by combining technical analysis and news sentiment.
3.  **Data Retrieval:**
    -   Retrieves the current stock ticker from form submission or workflow trigger.
    -   Uses the 'technical_analysis' tool, which fetches chart data from Chart-img API and historical price and technical indicators from the Twelve Data API.
    -   Uses the 'trends_analysis' tool, which fetches news sentiment data for the stock from Alpha Vantage API.
4.  **Data Analysis:** The AI agent analyzes the retrieved data and generates a comprehensive report with investment recommendations.
5.  **Output Formatting:**
    -   The AI agent outputs a structured JSON object that includes the stock symbol, analysis date, recommendation, sentiment analysis, technical analysis, top articles, and hot topics.
    -   The JSON output is then parsed and used to fill an HTML template for the final report.
6.  **HTML Report Generation:** The workflow generates a fully styled, responsive HTML email (with proper RTL layout) in Hebrew, including the analysis results, charts, and recommendations.
7.  **Email Sending:** The HTML email is sent to the user's email address specified in the form submission.

## Services:

-   **Chart-img API:** Generates visual stock charts.
-   **Twelve Data API:** Provides historical stock prices and technical indicators.
-   **Alpha Vantage API:** Provides financial news and sentiment analysis.
-   **OpenAI (GPT-4o):** Powers the AI agent for analysis, pattern recognition, and recommendation generation.
-   **SMTP:** Used for sending the final email reports.

## Hashtags:

#n8n #automation #stockanalysis #AIagent #GPT4o
