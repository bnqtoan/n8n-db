# RAG Workflow For Stock Earnings Report Analysis

## Use Cases:
- **Automated Financial Analysis:** Generate reports on a company's financial performance over multiple quarters by analyzing earnings reports.
- **Trend Identification:** Automatically identify key trends, outliers, and insights from financial data to support investment decisions.
- **Executive Briefing:** Create concise executive summaries of earnings reports, focusing on revenue, expenses, and profitability.

## How it works:
1. **Trigger:** The workflow is initiated manually using the "When clicking ‘Test workflow’" node.
2. **List Files:** Retrieves a list of file URLs (pointing to earnings report PDFs) from a specified Google Sheets document using the "List Of Files To Load (Google Sheets)" node.
3. **Loop through files:** Loops through the files to load
4. **Download Files:** Downloads the PDF earnings reports from Google Drive using the "Download File From Google Drive" node, based on the URLs retrieved from Google Sheets.
5. **Load PDFs to Vector Store:** Loads the PDF content into a pinecone vectorstore
6. **AI Agent Question Answering:** The "AI Agent" node receives a prompt "Give me a report on Google's last 3 quarter earnings. Format it in markdown. Focus on the differences and trends. Spot any outliers.". The agent uses the "Vector Store Tool" to retrieve information from the Pinecone vector store to answer the prompt. The prompt is configured to provide the agent a system message to use the Google Docs Tool.
7. **Save Report:** Saves the generated report to a specified Google Docs document using the "Save Report to Google Docs" node.

## Services:
- Google Sheets
- Google Drive
- Pinecone
- Google Gemini (PaLM) Api
- Google Docs

## Hashtags:
#n8n #automation #RAG #financialanalysis #googledocs
