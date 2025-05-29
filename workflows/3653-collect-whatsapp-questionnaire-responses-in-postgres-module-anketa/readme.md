# WA-Bot-Module-Anketa-v1-db-sell-full

## Use cases:

- **Lead Qualification via WhatsApp:** Automate the process of collecting information from potential customers through an interactive questionnaire on WhatsApp, helping to qualify leads for sales teams.
- **Customer Onboarding:** Guide new customers through an onboarding process by asking a series of questions to gather necessary information and personalize their experience.
- **Automated Customer Surveys:** Conduct automated surveys via WhatsApp to gather feedback from customers on products, services, or experiences.

## How it works:

1.  **WhatsApp Trigger:** The workflow starts when a message is received on WhatsApp via the "WhatsApp Trigger" node.
2.  **Initialization:** The "Initialization" node performs initial setup tasks when a message is received.
3.  **Get Bot Status:**  The "Get Bot Status" node queries a PostgreSQL database to check the current status of the bot for the user.
4.  **Define Flow:** The "Define Flow" node determines which path the workflow should take based on the bot's status.  It can lead to different actions:
    *   "Starts":  Initializes or continues a conversation (Upsert Bot Status on START)
    *   "Commands":  If the user sends a command, this route executes (Main Menu, Starts Test)
    *   "Get prev Answer":  Retrieves previous answers
5.  **Upsert Bot Status on START:** The "Upsert Bot Status on START" node updates the bot's status in the PostgreSQL database.
6.  **Starts Test:**  The "Starts Test" node sends the first question.
7.  **Get First Question:** The "Get First Question" node queries a PostgreSQL database to retrieve the first question of the survey.
8.  **First Question:** The "First Question" node sends the question to the user via WhatsApp.
9.  **Update Bot Status on ANKETA:** The "Update Bot Status on ANKETA" node updates the bot status on the PostgreSQL database, indicating that the user is now answering a question.
10. **Add prev Answer \*\*\* :** The "Add prev Answer" node update in PostgreSQL database the prev answer of the user
11. **Get prev Answer:** The "Get prev Answer" node queries a PostgreSQL database to retrieve the previous answer of the user.
12. **Is Question found? :** The "Is Question found?" node checks if the question was found.
13. **Get Available Questions:** The "Get Available Questions" node queries a PostgreSQL database to retrieve the available questions.
14. **Is Questions available?:** The "Is Questions available?" node checks if there is any question available.
15. **Question:** The "Question" node sends the next question to the user via WhatsApp.
16. **Add prev Answer:** The "Add prev Answer" node store the previous answer in PostgreSQL database.
17. **Add Answer:** The "Add Answer" node adds the user's answer to the PostgreSQL database.
18. **Finish Anketa:** The "Finish Anketa" node sends a final message to the user.
19. **Update Bot Status on START:**  The "Update Bot Status on START" node updates the bot's status in the PostgreSQL database.

## Services:

-   WhatsApp
-   PostgreSQL

## Hashtags:

#n8n #whatsapp #automation #chatbot #survey
