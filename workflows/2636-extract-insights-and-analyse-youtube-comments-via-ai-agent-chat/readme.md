# AI Agent To Chat With YouTube & Analyze Content

## Use cases:

- **Content Strategy Improvement:** Helping content creators understand audience preferences by analyzing comments, transcribing videos, and evaluating thumbnails to tailor future content.
- **Market Research for YouTube:** Businesses can use this workflow to gather insights from YouTube videos and comments related to their industry, competitors, or target audience.
- **AI-Powered YouTube Assistant:** Build an AI assistant that can answer questions about YouTube channels, videos, and content trends, providing users with quick and accurate information.

## How it works:

This workflow empowers users to extract insights from YouTube videos through an AI agent. It starts by listening for chat messages containing user queries. The AI Agent node processes these queries and uses a set of tools to retrieve relevant information. The workflow has 2 different way to start, one from chat trigger and the other from "Execute Workflow Trigger" that can be triggered by API call

**Key nodes and steps:**

1.  **When chat message received:** (Chat Trigger): Listens for incoming chat messages to start the workflow.
2.  **Execute Workflow Trigger:** Execute the workflow by API call
3.  **AI Agent:** (Langchain Agent): The core node that processes user requests and orchestrates the use of various tools to gather information from YouTube. It uses OpenAI's language model.
4.  **Postgres Chat Memory:** Stores and retrieves conversation history to provide context for the AI agent.
5.  **OpenAI Chat Model:** Integrates OpenAI's language model for generating responses and interacting with users.
6.  **Switch:** Routes the workflow based on the command specified in the "Execute Workflow Trigger" node.
7.  **YouTube Data API:** (Multiple HTTP Request nodes): Interacts with the YouTube Data API to fetch channel details, video descriptions, comments, and search results based on the AI agent's requests.
8.  **Apify API:** (HTTP Request node): Uses the Apify API to transcribe YouTube videos.
9.  **OpenAI (Image Analysis):** Uses the OpenAI API to analyze video thumbnails based on a prompt.
10. **LangChain Tools:** Custom tools ("get_channel_details", "get_video_description", "get_list_of_videos", "get_list_of_comments", "search", "analyze_thumbnail", "video_transcription") provide specific functionalities to the AI agent, such as retrieving video details, comments, and performing searches.

## Services:

-   YouTube Data API
-   OpenAI API
-   Apify API
-   PostgreSQL

## Hashtags:

#n8n #automation #youtube #aiagent #contentstrategy
