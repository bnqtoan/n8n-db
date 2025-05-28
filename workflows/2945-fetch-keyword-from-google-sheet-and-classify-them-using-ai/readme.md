# Keyword Analysis Workflow

## Use cases:

- **SEO Keyword Research:** Automatically identify if keywords are related to known software, services, tools, or apps, aiding in targeted SEO efforts.
- **Market Research:** Quickly analyze a list of keywords to determine the prevalence of specific software solutions within search queries.
- **Content Strategy:** Inform content creation by highlighting keywords associated with particular software or services, enabling focused content development.

## How it works:

1.  The workflow starts with a manual trigger ("When clicking ‘Test workflow’") or fetches keywords from a Google Sheet ("Fetch Keywords from Sheet"). The Google Sheet contains a list of keywords.
2.  The keywords are processed in batches ("Process Keywords in Batches") to manage API rate limits. Batches are set to 6.
3.  A "Wait" node ("Prevent API Rate Limiting") introduces a delay, preventing API rate limiting.
4.  For each keyword, the "AI Agent" node uses a language model (OpenAI) to determine if the keyword is related to a known IT software, service, tool, or app. The system message prompts the agent to respond with "yes" or "no".
5. The "OpenAI Chat Model" node uses the `gpt-4o-mini` model.
6. The "Structured Output Parser" node defines the json scheme example for the AI agent output.
7.  The "Update Sheet with Analysis Results" node writes the analysis results ("yes" or "no") back to the Google Sheet, in the "Service?" column, alongside the original keyword. The row number from the input is used to match the row to be updated.

## Services:

-   Google Sheets
-   OpenAI API

## Hashtags:

#n8n #automation #keywordresearch #SEO #AIService
