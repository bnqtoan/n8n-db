# Personal Portfolio Resume CV Chatbot

## Use cases:

- **Automated Resume Q&A:** Allow potential employers or clients to ask questions about a candidate's resume and receive AI-powered answers based on the document's content.
- **Personal Portfolio Chatbot:** Integrate a chatbot on a personal portfolio website that can answer visitor questions about the person's skills, experience, and projects.
- **Daily Conversation Summary Report:** Automatically generate and send a daily email report summarizing all conversations the chatbot had with users, providing insights into common queries and engagement.

## How it works:

1. **Document Upload and Indexing:**
   - The workflow is triggered when a new resume or CV file is created or updated in a specified Google Drive folder ("Google Drive - Resume CV File Created" and "Google Drive - Resume CV File Updated" nodes).
   - The file is downloaded ("Download CV File From Google Drive" node).
   - The downloaded file is chunked and embedded using Google Gemini Embeddings ("Embeddings Google Gemini" node) and stored in a Pinecone vector store ("Pinecone - Vector Store forr CV Content" node).
2.  **Chat API Endpoint:**
    - A webhook endpoint ("Chat API - webhook" node) receives user questions.
    - The question is passed to a Langchain Agent ("Personal CV AI Agent Assistant" node) configured with a system message to act as an assistant based on the resume, using the `seanrag` Vector Store Tool.
    - The agent retrieves relevant information from the Pinecone vector store ("Resume Vector Store (Retrieval)" nodes).
    - Google Gemini Chat Model ("Google Gemini Chat Model" node) to generate a response.
    - The response is sent back to the user via webhook ("Chat API Response - Webhook" node).
    - Buffer memory for the AI ("Chat Memory - Window Buffer").

3. **(Optional) Conversation Logging:**
   - Another webhook endpoint ("Save Conversation API - Webhook" node) receives conversation details (user input, AI response, email, session ID).
   - This data is saved to a NocoDB database ("Save Conversation - NocoDB" node).
   - A response is sent back to the client.

4. **Daily Report Generation:**
   - A schedule trigger ("Schedule Trigger" node) initiates the daily report generation.
   - The workflow retrieves all conversations from the NocoDB database for the current day ("NocoDB - get all todays conversation" node).
   - The conversations are grouped by session ID and email ("Group Conversation By Unique Session + Email - Code" node).
   - The grouped data is formatted into an HTML email ("Format HTML Display For email" node).
   - The email is sent via Gmail ("Send Report To Gmail" node).

## Services:

- Google Drive
- Google Gemini (PaLM) API
- Pinecone
- NocoDB (optional)
- Gmail

## Hashtags:

#n8n #automation #chatbot #AI #resume #langchain #googledrive #googleAI #pinecone #nocodb