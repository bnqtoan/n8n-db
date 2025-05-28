# My Workflow

## Use cases:

*   **Personalized Greetings:** Tailor welcome messages to users based on their preferred language. For example, a website could use this workflow to display a greeting in English for English speakers and German for German speakers.
*   **Multilingual Support:** Route customer inquiries to the appropriate support team based on the language they use. This ensures efficient handling of requests and improved customer satisfaction.
*   **Data Enrichment:** Combine datasets that share a common language field to create a more comprehensive view. For instance, merge customer data with language preferences and promotional offers based on language.

## How it works:

The workflow starts with a manual trigger, which means it runs when you click "Test workflow" in the n8n interface. It then creates two sets of sample data using `Code` nodes:

1.  **Sample data (name + language):** Generates sample data containing names and their corresponding languages (Stefan - de, Jim - en, Hans - de).
2.  **Sample data (greeting + language):** Generates sample data containing greetings and their corresponding languages (Hello - en, Hallo - de).

The `Merge` node then combines these two datasets based on the matching "language" field. This results in a combined dataset with names, languages, and appropriate greetings.

## Services:

*   No external services are used in this workflow, it relies only on n8n's internal nodes.

## Hashtags:

#n8n #automation #workflow #multilingual #dataMerging
