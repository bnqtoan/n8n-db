# 🛎️ Taxi Service

## Use cases:

1.  **Automated Taxi Booking:** Users can interact with a chatbot or messaging platform to book a taxi. The workflow handles the user's request, finds available taxis, and confirms the booking, providing a seamless experience.
2.  **Intelligent Route Planning:** Based on user input, the workflow can leverage AI to determine the best route and estimated fare, offering users accurate and real-time information.
3.  **Multilingual Support:** The workflow can provide support in multiple languages (English, Chinese, Japanese), making the service accessible to a broader user base.

## How it works:

1.  The workflow starts with a `Flow Trigger` or `Test Trigger` to initiate the process.
2.  User input (e.g., booking request) is received via the trigger and processed by the `Input` or `Test Fields` node.
3.  The workflow checks for cached service data in `Service Cache`. If not found, it retrieves service data from a Postgres database (`Load Service Data`).
4.  The workflow uses an AI Agent (`AI Agent`) powered by xAI's Grok-2-1212 model (`xAI @grok-2-1212`) to understand the user's request, plan the route and calculate the distance with `Find Route Distance`.
5.  User session data is managed using Redis (`Update User Session`, `Route Data`, `Create Route Data`, `Delete Route Data`, `Reset Session`). User memory is managed using Postgres (`Postgres Chat Memory`, `Load User Memory`, `Save User Memory`)
6.  The calculated route is parsed using a `Parse Route` node.
7.  The parsed route data is then passed to a `Taxi Service Provider` workflow (using the Execute Workflow node). The language is set accordingly using a switch statement.
8.  Finally, the results are sent to the `Output` node, which can be used to communicate the booking confirmation or any other relevant information back to the user. If any error occur, a Call Back workflow is triggered.

## Services:

*   **Postgres:** Used for storing service data and user memory.
*   **Redis:** Used for caching service data and managing user sessions.
*   **xAI Grok-2-1212:** AI model used for language processing and route planning.
*   **Taxi Service Provider Workflow:** An external workflow responsible for handling the actual taxi booking.

## Hashtags:

#n8n #automation #taxi #AI #workflow
