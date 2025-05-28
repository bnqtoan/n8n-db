# Text Automations using Apple Shortcuts

## Use cases:

- **Quick Translation:** Translate selected text to English or Spanish directly from any application using a keyboard shortcut.
- **Content Adjustment:** Shorten or lengthen text snippets to fit specific space constraints or content requirements.
- **Grammar Correction:** Correct grammatical errors in text without altering the original content or meaning.

## How it works:

1.  The workflow is triggered by an **Apple Shortcut** via a **Webhook**. The shortcut sends the selected text and the type of request (translate to English/Spanish, correct grammar, make shorter/longer).
2.  The **Switch** node routes the request to the appropriate **OpenAI** node based on the `type` parameter received from the webhook.
3.  Each **OpenAI** node is configured with a specific prompt for the desired text transformation (translation, grammar correction, etc.).  It receives the selected text from the webhook.
4.  The **OpenAI** node processes the text according to its prompt and returns a JSON object containing the transformed text.
5.  The **Respond to Shortcut** node receives the transformed text from the **OpenAI** node and sends it back to the Apple Shortcut, which then replaces the original selected text with the transformed text.  The `replaceAll('\\n', '<br/>')` expression replaces newlines with HTML line breaks in the response, making it suitable for display in apps that support HTML.

## Services:

-   Apple Shortcuts
-   OpenAI API

## Hashtags:

#n8n #automation #appleShortcuts #openai #textAutomation
