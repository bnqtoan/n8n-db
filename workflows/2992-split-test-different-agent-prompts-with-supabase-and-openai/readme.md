# A/B Split Testing

## Use cases:

- **Optimize Chatbot Responses:** Test different prompts or system messages for a chatbot to improve user engagement, satisfaction, or task completion rates.
- **Experiment with AI Agent Behaviors:** Evaluate how different agent personalities or instructions affect the quality and style of AI-generated content or responses.
- **Enhance Conversational AI:** Determine the most effective way to guide users through a conversation by testing alternative initial prompts or agent configurations.

## How it works:

1.  **Receive Chat Message:** The workflow starts when a new chat message is received (using the "When chat message received" trigger). The trigger expects a `chatInput` and `sessionId` property in the message.
2.  **Check Session Existence:** It checks if a session ID from the message exists in a Supabase table named `split_test_sessions`. This table stores the session ID and a boolean value (`show_alternative`) that determines which prompt will be used.
3.  **Conditional Prompt Assignment:**
    *   If the session exists, the workflow retrieves the assigned `show_alternative` value from Supabase.
    *   If the session doesn't exist, a new entry is created in Supabase with a randomly assigned `show_alternative` value (either `true` or `false`). The `show_alternative` value is randomly assigned using `Math.random() < 0.5`, which means 50% of new sessions will get the alternative prompt.
4.  **Define Path Values:** Defines the value of the baseline and alternative prompts.
5.  **Select the prompt:** Based on the boolean `show_alternative` value, it selects a value from the Define Path Values node and assigns this value to a `prompt` variable.
6.  **AI Agent Interaction:** The selected prompt and the user's `chatInput` is used to interact with the "AI Agent". The System Message of the agent is set with the previously selected prompt value.
7. **Utilize OpenAI Chat Model:** The AI Agent uses an OpenAI Chat Model (GPT-4o-mini) to generate a response.
8.  **Store Chat History:** Chat history is stored in a Postgres database, using the `sessionId` as a key.

## Services:

*   Supabase (Database): Stores session IDs and the assigned prompt version (`show_alternative`).
*   OpenAI: Utilizes the OpenAI API (Chat Model) to generate responses based on the selected prompt.
*   PostgreSQL: Store Chat History.

## Hashtags:

#n8n #automation #ABtesting #AIagent #OpenAI
