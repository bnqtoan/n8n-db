# Quiz - Estudos

## Use cases

- **Personalized Learning:** Users can engage in customized quizzes on WhatsApp to reinforce their understanding of specific topics.
- **Educational Tool:** Tutors or educators can deploy this workflow to offer interactive quizzes to students, enhancing learning outcomes.
- **Knowledge Assessment:** Individuals can use this workflow to test their knowledge on various subjects, identifying areas for improvement.

## How it works

1.  **WhatsApp Trigger:** The workflow starts when a user sends a message via WhatsApp.
2.  **Fetch User Data:** It checks a Supabase database to see if the user exists.
3.  **User Check:** Determines if the user's name and study topic are already stored.
4.  **Missing Information:**
    -   If the user's name is missing, the workflow asks for it via WhatsApp and updates the Supabase database.
    -   If the study topic is missing, the workflow asks for it via WhatsApp and updates the Supabase database.
5.  **Merge Inputs:** Combines the fetched user data and other relevant information.
6.  **AI Agent:** The AI Agent, configured with a Portuguese BR system message, generates a quiz on the specified topic using the OpenAI Chat Model. It leverages a Simple Memory node to retain context during the conversation with the user.
7.  **Send Message to User:** The generated quiz questions are sent back to the user via WhatsApp.

## Services

-   **WhatsApp:** Used for user interaction and delivering quiz questions.
-   **Supabase:** Stores user data, including name and study topic.
-   **OpenAI:** Generates quiz questions based on the defined topic using GPT-4o-mini.

## Hashtags

#n8n #automation #whatsapp #quiz #education
