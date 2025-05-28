# YogiAI

## Use cases:

- **Daily Yoga Reminder and Pose Suggestion:** Sends a daily yoga reminder with a list of suggested poses to users via Line, promoting regular practice.
- **Personalized Yoga Routine:**  Dynamically generates a yoga routine based on data from a Google Sheet, allowing for customization and variation in the poses suggested each day.
- **Yoga Pose Logging and Tracking:** Logs the daily yoga poses practiced into a Google Sheet, enabling users to track their progress and frequency of different poses.

## How it works:

1. **Scheduled Trigger:** The workflow starts at 9:30 PM (Asia/Bangkok timezone) using a `Schedule Trigger` node.
2. **Fetch Yoga Poses:**  The `Get PoseName` node retrieves yoga pose data (name, image URL, and detail page URL) from a specified range in a Google Sheet named "NotePad" within the "SerenityAI" spreadsheet.
3. **Format Pose Data:** The `Code` node transforms the fetched data into a formatted text string and extracts a list of pose names.
4. **Generate Flex Message JSON:** The `WriteJSONflex` node uses an Azure OpenAI model to generate JSON data suitable for Line's Flex Message format, which is used to display the yoga pose images and details. This involves parsing the pose data and formatting it into the required JSON structure, also uses the autofix parser to make sure that the json is corrected.
5. **Compose User-Friendly Message:** The `WritePosesToday` node utilizes an Azure OpenAI model to create a user-friendly text message that introduces the topic and lists the yoga poses for the day.
6. **Enhance Message with Emojis:** The `RewritePosesToday` node adds emojis and formats the text message from the previous step to make it more engaging and chat-friendly for Line. It also splits the message if it's too long.
7. **Combine Data for Line Push:** The `CombineAll` node merges the formatted text message and the Flex Message JSON into a single JSON structure that can be sent to Line. It uses string replacement to escape characters and format the text correctly.
8. **Fix JSON:** This step uses Azure OpenAI model again to fix JSON to avoid error before send.
9. **Send Line Push Message:** The `Line Push with Flex Bubble` node sends the combined message to a specified Line user ID via the Line Messaging API. It requires a Line Channel access token for authentication.
10. **Log Yoga Practice:** The `YogaLog` node appends the date, JSON data, and formatted text of the yoga session to a "YogaLog" sheet in the "SerenityAI" Google Sheet.
11. **Extract output data:** The `AI Agent` node utilizes an Azure OpenAI model to structure the JSON output again to be used in the next step. It used the yoga poses database in Google Sheet to make sure that output is formatted correctly.
12. **Split Out Poses:** The `Split Out` node separates the list of yoga poses into individual items.
13. **Log Each Pose:** The `YogaLog2` node appends the date, pose name, and sequence number to a "YogaLog2" sheet in the "SerenityAI" Google Sheet.

## Services:

- Google Sheets
- Azure OpenAI
- Line Messaging API

## Hashtags:

#n8n #automation #yoga #linebot #openai
