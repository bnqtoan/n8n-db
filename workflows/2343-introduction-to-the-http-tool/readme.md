# My Workflow

## Use cases:

*   **Webpage Scraping AI Agent:** Automatically extract information from specific websites, like issue tracking systems (e.g., GitHub), and have an AI summarize the findings. This can be used for monitoring project progress, gathering research data, or tracking competitor activity.
*   **Activity Suggestion AI:** Based on user input regarding preferences and constraints (e.g., desired activity type, number of participants), the AI suggests relevant activities by querying an external API. Useful for event planning, educational purposes, or combating boredom.
*   **Intelligent API Interaction:** Allows an AI agent to interact with APIs. User can send a request to the AI and the AI uses the API to produce a meaningful response.

## How it works:

This workflow demonstrates how to build AI agents that can interact with external APIs to fetch data and provide intelligent responses. It consists of two main sections:

1.  **Webpage Scraping Agent**
    *   A **Manual Trigger** initiates the workflow.
    *   The **Set ChatInput** node defines the initial question/request to be answered by the AI, in this case a request to get the latest 10 issues from a github repo
    *   The **AI Agent** node acts as the core, processing the input and using connected tools.
    *   The **Webscraper Tool** node, which leverages the Firecrawl API, fetches content from a specified URL.
    *   The **OpenAI Chat Model** node is used to generate human-like text based on the scraped information and the initial query.

2.  **Activity Suggestion Agent**
    *   A **Manual Trigger** initiates the workflow.
    *   The **Set ChatInput1** node defines the initial question/request to be answered by the AI, in this case a request to suggest something to do that involves learning something new
    *   The **AI Agent1** node acts as the core, processing the input and using connected tools.
    *   The **Activity Tool** node leverages the bored API, which suggests activities given a set of parameters like the type of activity and number of participants
    *   The **OpenAI Chat Model1** node is used to generate human-like text based on the suggested activity and the initial query.

## Services:

*   **OpenAI:** Provides the language model for generating responses.
*   **Firecrawl API:** Used for scraping webpage content.
*   **Bored API:** Used for suggesting activities.
*   **Github:** Used as an example of a page being scraped.

## Hashtags:

#n8n #AIagent #automation #webscraping #APIintegration
