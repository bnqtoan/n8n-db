# Generate SEO Seed Keywords Using AI

## Use cases:

1.  **Kickstart SEO Strategy:** Quickly generate a list of relevant seed keywords for a new website or business based on the ideal customer profile (ICP).
2.  **Identify New Keyword Opportunities:** Expand an existing SEO strategy by uncovering fresh, targeted keywords that align with evolving customer needs and industry trends.
3.  **Content Ideation:** Use the generated seed keywords as a starting point for brainstorming content topics and creating content that resonates with the target audience.

## How it works:

1.  **Trigger:** The workflow starts when you manually trigger it.
2.  **Set Ideal Customer Profile (ICP):** Defines the characteristics, pain points, goals, current solutions, and expertise level of the ideal customer. **Important**: You need to replace the default values with the specific details of your ICP.
3.  **Aggregate for AI node:** Combines the ICP data into a single data structure for the AI node.
4.  **AI Agent:** Uses an AI model (Anthropic in this case, but configurable) to generate a list of seed keywords based on the defined ICP. The AI is instructed to analyze the ICP, generate 15-20 relevant keywords, and format the output as an array of strings.  The cost to run is approximately $0.02-0.05 using Claude Sonnet 3.5. You **must** connect this to your own AI API.
5.  **Split Out:** Separates the array of keywords into individual items for further processing.
6.  **Connect to your own database:** This node is a placeholder.  You **must** connect this to your own database (e.g., Google Sheets, Airtable, PostgreSQL) to output the generated keywords for storage or further analysis.

## Services:

*   AI API (e.g., Anthropic, OpenAI)
*   Database (e.g., Google Sheets, Airtable, PostgreSQL) - User Defined.

## Hashtags:

#n8n #automation #SEO #AI #keywords
