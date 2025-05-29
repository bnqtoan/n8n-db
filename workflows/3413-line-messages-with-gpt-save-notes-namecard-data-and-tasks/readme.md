# MiniBear Webhook

## Use cases:

- **Automated Task Management:** Create tasks in Microsoft To Do directly from Line messages by starting the message with "T ".
- **Contact Information Extraction:** Automatically extract contact details from images of business cards sent via Line and save them to a structured format and forward it to Make.com
- **Intelligent Image Analysis:** Analyze images sent via Line to identify the content, and send summary to MS Teams, such as namecards, text on screen, or other objects, and extract text from them.

## How it works:

1.  **Line Webhook:** The workflow is triggered by a message sent to the Line bot. The node listens for POST requests on the specified path (`/minibear`).
2.  **Line Loading Animation:** Immediately sends a loading animation back to the user in Line, indicating that the bot is processing the request.
3.  **Switch:** Routes the workflow based on the content and type of the Line message:
    *   If the message starts with "T ", it's treated as a task and routed to the task management section.
    *   If the message type is "text", it sends the message to Microsoft Teams channel.
    *   If the message type is "image", it retrieves the image content.
    *   If the message type is "audio", it sends a "Not Supported 1" reply
    *   If none of above, it sends a "Not Supported 2" reply
4.  **Task Management (if message starts with "T "):**
    *   **Microsoft To Do:** Creates a new task in Microsoft To Do with the message content (excluding "T ").
    *   **Line Reply (Text)1:** Sends a confirmation message back to the user in Line, confirming that the task has been created.
5.  **Save Message in Teams (if message is text):**
    *   **Microsoft Teams:** Sends the received Line message to a specific channel in Microsoft Teams.
    *   **Line Reply (Text):** Sends a confirmation message back to the user in Line, confirming that the message has been saved.
6.  **Image Recognition**
    *   **Get Image:** Retrieves the image content from Line.
    *   **Image Router:** Identify the Image and do the appropriate actions
        *   **If Namecard:** Extract data, create task, upload to OneDrive, then trigger HTTP request to Make.com to add the data into MS Excel 365
        *   **Other Images:** Use OpenRouter Chat Model to extract text from image and send to MS Teams with Line Reply(image)
7.  **Namecard Data Extraction**
    *   **Get Image3:** Retrieves the image content from Line.
    *   **NamecardExtract:** Uses OpenRouter Chat Model to extract the data in JSON format
    *   **Microsoft To Do1:** Create a follow-up task in MS To Do.
    *   **HTTP Request:** Trigger another workflow in Make.com to create new rows in MS Excel 365
    *   **Line Reply Namecard:** Send feedback to Line.
8. **Other Images Data Extraction**
    * **Get Image2:** Retrieves the image content from Line.
    * **Other Images:** Use OpenRouter Chat Model to extract text from image and send to MS Teams with Line Reply(image)

## Services:

-   Line API
-   Microsoft To Do
-   Microsoft Teams
-   Microsoft OneDrive
-   OpenRouter Chat Model
-   Make.com

## Hashtags:

#n8n #automation #linebot #taskmanagement #imageRecognition
