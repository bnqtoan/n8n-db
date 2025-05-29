# Get Database DONKI NASA With Telegram and OpenAI Model

## Use cases:

1.  **Real-time Space Weather Updates via Telegram:**  The workflow can be used to provide immediate updates on space weather events (solar flares, radiation belt enhancements, etc.) to users via Telegram, helping them stay informed about potential impacts on Earth.
2.  **Automated Briefing on Near-Earth Objects (NEOs):**  The workflow can fetch and summarize information about asteroids and NEOs, delivering a concise briefing to a user or group via Telegram.  This could be used for educational purposes or by space enthusiasts.
3.  **Customized Space Weather Alerts:** By leveraging the AI agent, the workflow can tailor the alerts and summaries based on specific user preferences, ensuring they receive only the most relevant information via Telegram. For instance, filter events by severity or type.

## How it works:

1.  **Telegram Trigger:** The workflow starts when a user interacts with the Telegram bot (e.g., sends a `/start` command).
2.  **NASA DONKI Data Retrieval:**  Multiple "n8n-nodes-base.nasaTool" nodes (DONKI High Speed Stream, DONKI Interplanetary Shock, etc.) fetch data from NASA's DONKI (Space Weather Database Of Notifications, Knowledge, Information) API.  The workflow also retrieves data from "Asteroid Neo-Feed" and "Asteroid Neo-Browse".
3.  **AI Agent Processing:** The data from DONKI and the Asteroid APIs is fed into an AI Agent node, which uses "OpenAI Chat Model" to understand and summarise the information.
4.  **Summarization with OpenAI:**  The AI Agent uses the OpenAI Chat Model to summarize and create meaningful insights from the NASA data.
5.  **Telegram Message:**  The "Telegram" node sends the summarized information back to the user via Telegram.

## Services:

*   **NASA DONKI API:** Provides space weather data.
*   **NASA Asteroid APIs:** Provides data about Near-Earth Objects.
*   **Telegram:** Messaging platform for sending updates and alerts.
*   **OpenAI:**  For language model and AI Agent capabilities.

## Hashtags:

#n8n #automation #spaceweather #telegram #openai
