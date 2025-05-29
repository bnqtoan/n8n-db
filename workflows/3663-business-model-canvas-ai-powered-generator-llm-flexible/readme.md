# Business Canvas Generator

## Use cases:

- **Startup Planning:** Generate a comprehensive business model canvas for a new startup based on a brief description of the business idea.
- **Business Model Innovation:** Quickly create different business model scenarios for an existing business to explore new opportunities or adapt to market changes.
- **Educational Tool:** Use it in business courses or workshops to teach and practice business model development.

## How it works:

1.  The workflow starts with the "When chat message received" node, which acts as a trigger. It receives a text input describing the business idea.
2.  The input is passed to ten "Langchain Agent" nodes, each responsible for generating content for a specific section of the Business Model Canvas: "Key Partners," "Key Activities," "Value Proposition," "Customer Relationship," "Customer Segments," "Key Resources," "Channels," "Cost Structure," "Revenue Streams," and the Business Title. These nodes use a large language model (LLM) to generate insights.
3.  The generated text from each agent node is then transformed into HTML paragraph elements using the "Code" nodes, ready to be embedded in the final HTML structure.
4.  The "Merge All Data" node combines all the HTML snippets generated for each canvas section.
5.  The "Turn to HTML" node assembles the individual HTML elements into a complete HTML document representing the Business Model Canvas, including basic styling.
6.  Finally, the "HTML code to HTML file" node converts the HTML code into a downloadable HTML file.

## Services:

-   Ollama LLM: Used as the default Large Language Model to generate business insights for each section of the Business Model Canvas.

## Hashtags:

#n8n #automation #workflow #businessmodel #LLM
