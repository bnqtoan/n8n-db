# Social Listening

## Use cases:

- **Brand Monitoring:** Automatically analyze mentions of a brand on social media to understand customer sentiment, identify potential crises, and track the effectiveness of marketing campaigns.
- **Competitor Analysis:** Monitor competitor brands, products, or campaigns to identify trends, strengths, and weaknesses in the market.
- **Trend Identification:** Analyze conversations around specific topics or keywords to identify emerging trends, understand public opinion, and inform product development or content strategy.

## How it works:

1.  **Data Extraction:** The workflow starts with the "When clicking ‘Test workflow’" node, which acts as a manual trigger. Then, the "Google Sheets" node fetches data from a specified Google Sheet.
2.  **Initial Data Preparation:** A defined amount of row is taken from the data to be used as a base for the upcoming analysis.
3.  **Topic extraction:** The workflow uses a chain of "analysis topics proposal" and "Unified AI Agent for analysis" to create the prompts for the next analysis.
4.  **Results enhancement:** The raw results will be used to generate other data to make a final report with better quality.
5.  **Analysis and Summarization:** Then, the workflow uses a "Summarization of the unalysed results" node to get an AI-powered summary of the key points.
6.  **Final Report Generation:** All the analysis will be given to the "Final report editor" that create a formated report.
7.  **Report Revision and Formatting:** The "Revisor and HTML formating agent" will revise and edit the report generated in the last step.
8.  **Optional Completion Agents:** The workflow ends in the "Completion agents (optional)" node that can execute any number of completion agents that enhance the report's data.
9.  **Delivery:** The workflow finishes by sending the final report via Gmail.

## Services:

-   Google Sheets
-   OpenAI
-   Gmail

## Hashtags:

#n8n #automation #sociallistening #AI #datascience
