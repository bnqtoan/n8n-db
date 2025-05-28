# 🔍🛠️Perplexity Researcher to HTML Web Page

## Use cases:

- **Content Creation:** Automatically transform research findings from Perplexity into well-structured HTML articles for blogs or websites.
- **Information Aggregation:** Gather and convert information on specific topics into a presentable HTML format.
- **Automated Reporting:** Generate HTML reports from research data, providing a quick and easy way to share insights.

## How it works:

1.  **Webhook Trigger:** The workflow starts with a Webhook that listens for incoming requests containing a topic.
2.  **Topic Processing:**
    *   **Get Topic:** Extracts the topic from the webhook request.
    *   **If Topic Exists:** Checks if a topic is provided.
    *   **Improve Users Topic (Optional):** Uses an LLM to improve the user-provided topic by focusing on key concepts, core components, practical applications, and analysis.
    *   **If Topic:**  If the improved topic is not empty, proceed to the next step.
3.  **Perplexity Research:**
    *   **Perplexity Topic Agent:** Uses the improved topic as a prompt for the Perplexity research tool.
    *   **Call Perplexity Researcher:**  This calls this current workflow itself.
    *   The Perplexity Agent uses the `perplexity_research_tool` to perform research on the user's topic. It utilizes a system message to guide the research.
    *   **If2:** Checks if there is an output and extracts JSON object from the content
    *   **Telegram:** Send a message via Telegram
4.  **Article Creation and HTML conversion:**
    *   **Structured Output Parser:** Parses the `article` from previous LLM calls.
    *   **Article:** Saves the extracted article as a variable.
    *   **If Article:** Checks if the extracted article variable is empty.
    *   **Create HTML Article:** Uses an LLM to transform the article variable into basic HTML.
    *   **If HTML:** Checks if the generated HTML content contains a title and content.
    *   **Contents:** Saves the title and content into variables.
    *   **Basic LLM Chain:** Uses the saved title, content, and a prompt to generate a single-line, Tailwind CSS-styled HTML page
5.  **Final Response:** The generated HTML is sent as a response to the initial webhook request.

## Services:

-   **Perplexity AI:** Used via HTTP Request to research the given topic and create content.
-   **OpenAI (via n8n's Langchain nodes):** Used to improve topic, parse structured content, generate HTML, and transform content.
-   **Telegram:** Used to send messages with the topic.

## Hashtags:

#n8n #automation #LLM #HTML #Perplexity #ContentCreation
