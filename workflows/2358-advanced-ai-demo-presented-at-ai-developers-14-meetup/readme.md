# My Workflow

## Use cases:

- **Categorize incoming emails using AI:** Automatically assign labels to incoming emails in Gmail based on their content, such as "automation" or "music."
- **Chat with a PDF document:** Load a PDF document (e.g., a whitepaper) into a Pinecone vector store and use a chat model to answer questions based on the document's content.
- **AI-powered appointment booking:** Use an AI agent to manage appointment scheduling, checking calendar availability, and booking appointments with a specified tool.

## How it works:

1.  **Categorize incoming emails with AI:** The workflow monitors a Gmail inbox for new emails. It uses an OpenAI Chat Model to classify the email's content into predefined categories (e.g., "automation," "music"). Based on the classification, it adds corresponding labels to the email in Gmail.
2.  **Chat with a PDF document:** This part of the workflow downloads a PDF from a specified URL, splits the text into chunks, generates embeddings using OpenAI, and stores these embeddings in a Pinecone vector store. A chat trigger initiates a conversation, retrieves relevant content from the vector store based on the user's query, and uses an OpenAI Chat Model to answer the question, providing context from the PDF.
3.  **AI-powered appointment booking:** This workflow uses a chat trigger to initiate an appointment booking process. An AI agent, powered by an Anthropic Chat Model, interacts with the user to understand their scheduling needs. It utilizes tools like "Get calendar availability" (Google Calendar API) to check for available time slots and "Book appointment" (Google Calendar API) to create an appointment. A window buffer memory stores the conversation history for context.

## Services:

-   Gmail
-   Google Calendar API
-   OpenAI
-   Anthropic
-   Pinecone

## Hashtags:

#n8n #automation #AI #Langchain #appointmentBooking
