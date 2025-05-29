# WA-Bot-Module-Catalog-v1-db-sell-full

## Use cases:

- **WhatsApp-based Product Catalog:** Allows users to browse and purchase products directly through a WhatsApp chatbot.
- **Automated Sales Assistant:** Provides instant responses to customer inquiries about product availability, pricing, and details.
- **Personalized Product Recommendations:** Guides users to find relevant products based on their input and preferences.

## How it works:

1.  **WhatsApp Trigger:** The workflow starts when a user sends a message via WhatsApp.
2.  **Initialization:** Sets up the initial state of the conversation.
3.  **Get Bot Status:** Retrieves the current status of the bot from a PostgreSQL database.
4.  **Start?:** Checks if the bot is in a started state. If not, it transitions to the "Starts" node.
5.  **Starts:** Updates the bot's status in the PostgreSQL database to indicate that it has started.
6.  **Commands:** Directs the workflow based on the user's input.
7.  **Main Menu:** Sends the main menu options to the user via WhatsApp.
8.  **List?:** Determines whether the user has requested a product list.
9.  **Get Card products/Get Card products :** Queries the PostgreSQL database to retrieve product information.
10. **Union Number with Question:** Combines product numbers with corresponding questions for user selection.
11. **Union list:** Merges the list of products.
12. **List Cards:** Sends the product list to the user via WhatsApp.
13. **Get Card product:** Retrieves the specific product's details from the PostgreSQL database based on the user's choice.
14. **Card:** Sends the selected product information to the user via WhatsApp.

## Services:

-   WhatsApp
-   PostgreSQL

## Hashtags:

#n8n #WhatsApp #chatbot #ecommerce #automation
