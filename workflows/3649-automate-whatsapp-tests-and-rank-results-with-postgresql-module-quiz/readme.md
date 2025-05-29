# WA-Bot-Module-Quiz-v1-db-sell-full

## Use cases:

- **Interactive Quiz on WhatsApp:** This workflow can be used to deliver quizzes to users via WhatsApp, providing an engaging and accessible learning or assessment experience. It can be used to test user knowledge on a particular topic.
- **Lead Generation via Quizzes:** By integrating a sales component, the workflow can be adapted to qualify leads through quizzes, offering tailored product recommendations or services based on user responses.
- **Customer Engagement and Education:** Businesses can use this workflow to educate customers about their products or services through interactive quizzes, enhancing engagement and brand awareness.

## How it works:

1.  The workflow starts with a `WhatsApp Trigger` node, which listens for incoming WhatsApp messages.
2.  The `Initialization` node prepares the workflow by setting initial variables and states.
3.  The `Get Bot Status` node retrieves the current status of the bot from a PostgreSQL database.
4.  A `Define Flow` switch node then routes the workflow based on the bot's current status and user input.
    - If the bot is in the "START" state, the `Starts` node is triggered and a new status is recorded on the `Upsert Bot Status on START` node.
    - If the bot is awaiting a command the `Commands` node forwards the user to the `Main Menu`.
    - If the bot needs an answer it is routed to the `Get Answer` node.
5.  If the user requests a list of tests, the workflow queries the database using `Get Tests` and `Get Tests` nodes, then sends a list of available tests via WhatsApp using the `List Tests` node.
6.  When the user selects a test, the workflow retrieves questions and answers from the database using the `Get Questions AND Answers` node.
7.  The questions are randomized, and the user is prompted with each question via WhatsApp using the `Request Answer` node.
8.  The user's answers are stored in the database, and the `Calculate answers` node determines the final score.
9.  Finally, the results are sent to the user via WhatsApp using the `Result` node, and the bot status is updated.

## Services:

-   WhatsApp (via n8n's WhatsApp integration)
-   PostgreSQL Database

## Hashtags:

#n8n #automation #whatsappbot #quiz #sales
