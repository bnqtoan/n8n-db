# Hugging Face to Notion

## Use cases:

*   **Automated Research Tracking:** Automatically collect and store new research papers from Hugging Face in a Notion database for personal or team knowledge management.
*   **AI-Powered Summarization:** Use OpenAI to extract key information from paper abstracts, making it easier to quickly understand the content of new publications.
*   **Content Curation and Organization:** Curate a collection of AI research papers, automatically categorized and summarized, for sharing with colleagues or building a research library.

## How it works:

1.  **Schedule Trigger:** The workflow starts with a Schedule Trigger, running daily on weekdays at 8 AM.
2.  **Request Hugging Face Paper:** It fetches the list of papers published on Hugging Face for the previous day.
3.  **Extract Hugging Face Paper:** Extracts the URLs of the papers from the Hugging Face page.
4.  **Split Out:** Split the urls in different batches.
5.  **Loop Over Items:** Iterates through the extracted URLs.
6.  **Check Paper URL Existed:** Checks if the paper URL already exists in a specified Notion database.
7.  **If:** Checks if the URL exists if true goes back to Loop Over Items, if false continues to the next node.
8.  **Request Hugging Face Paper Detail:** Retrieves the details (title, abstract) of each new paper from Hugging Face.
9.  **Extract Hugging Face Paper Abstract:** Extracts the abstract and title of the paper.
10. **OpenAI Analysis Abstract:** Uses OpenAI to analyze the abstract, extracting key details such as the core introduction, keywords, key data/results, technical details, and assigns academic classifications, outputting the information as a JSON object.
11. **Store Abstract Notion:** Stores the extracted and analyzed information in a Notion database, including the paper's URL, title, abstract, scrap date, classification, technical details, data/results, keywords, and core introduction.

## Services:

*   Hugging Face
*   Notion
*   OpenAI

## Hashtags:

#n8n #automation #workflow #HuggingFace #Notion #OpenAI #research
