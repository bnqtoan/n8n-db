# 🤙 Telegram Call In

## Use cases:

- **Automated Voice Transcription:** Transcribes voice messages received via Telegram into text for further processing or archiving.
- **Multilingual Call Routing:** Routes calls to different services based on the detected language of the voice message.
- **Voice-Based Call Center Integration:** Integrates Telegram voice messages into a call center workflow, triggering actions based on the transcribed text.

## How it works:

1.  The workflow starts with a **Telegram Trigger** node, which listens for new messages sent to a specified Telegram bot (@chpy\_demo\_bot).
2.  The incoming message is then processed by a series of nodes to determine its type. A **Type Switch** node checks the type of message received (e.g., text or voice).
3.  If the message is a voice message, the **Download Audio** node downloads the audio file from Telegram.
4.  The **Extract from File** node extracts the audio data.
5.  A **Switch** node directs the audio to the correct **Google STT** service according to the user's language using nodes such as **English**, **yue-Hant-HK**, **cmn-Hans-CN**, **cmn-Hant-TW**, and **ja-JP**,
6.  **Google STT** (Speech-to-Text) transcribes the audio into text.
7.  An **If Transcript** node verifies if a transcription was successfully created.
8.  A **Telegram Voice Input** node sets the final data to be used by the **Demo Call Center** sub-workflow.
9.  If no transcription is available, a **Demo Call Back** sub-workflow is executed using the **No Transcript Input** node to signal that the message could not be understood.
10. The transcribed text is used as input for a downstream workflow called "Demo Call Center" (via the **Input** and **Execute Workflow** nodes), simulating a call center application.
11. The other path is the **Test Trigger** that start another path to **If Telegram** node and send the result to **Telegram Test Output**.
12. Before all these steps, the workflow checks the member cache using the nodes: **Member Cache**, **If Member Cache**, **Parse Service**, **Load Memer Data**, **If Active**, **Save Member Cache**, and **Member**.

## Services:

-   Telegram
-   Google Cloud Speech-to-Text
-   Redis
-   Postgres

## Hashtags:

#n8n #automation #telegram #voicetotext #workflow
