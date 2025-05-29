# My Workflow

## Use cases:

1.  **Track Daily Nutritional Intake:** Users can quickly log their meals by sending a text or voice message to a Telegram bot. The workflow automatically extracts nutritional information and stores it in a Google Sheet for later analysis.
2.  **Estimate Nutrient Content from Meal Descriptions:** If precise nutritional data isn't available, the workflow provides an estimated breakdown of calories, macronutrients, and electrolytes based on a description of the meal.
3.  **Personalized Dietary Logging:** Individuals with specific dietary needs or goals (e.g., athletes, people with diabetes) can use this workflow to monitor their intake of key nutrients and ensure they are meeting their requirements.

## How it works:

1.  **Receive Telegram Message:** The workflow starts when a message is received via a Telegram bot (`Receive Telegram message`). It checks if the message contains a voice note.
2.  **Handle Voice Messages (If Applicable):** If the message is a voice note (`If it's a voice message`):
    *   The audio file is downloaded from Telegram (`Get Audio File`).
    *   The audio is transcribed to text using OpenAI's transcription service (`Transcribe Recording`).
    *   The transcribed text is set as the `chatInput` (`Set chatInput from voice`).
3.  **Handle Text Messages:** If the message is a text message (`If it's a voice message`):
    *   The text of the message is set as the `chatInput` (`Set chatInput from message`).
4.  **Extract Nutritional Information:**  The `chatInput` is passed to an agent (`List of Ingredients and nutrients`), who extract key nutrients and their quantities.
5.  **Split the data into multiple items:** Then, it splits the data into multiple elements to add the date after.
6.  **Add Date:** The date is formatted and added to each item (`Add date`).
7.  **Store in Google Sheets:** Each extracted nutrient along with its amount and unit, is appended as a new row in a specified Google Sheet (`Store in sheet`).
8. **Respond to User:** The bot send a feedback message to the user.

## Services:

*   Telegram: For receiving user input and sending confirmation messages.
*   OpenAI: For transcribing voice messages and extracting nutritional information.
*   Google Sheets: For storing the extracted nutritional data.

## Hashtags:

#n8n #automation #nutrition #telegram #openai #googleSheets
