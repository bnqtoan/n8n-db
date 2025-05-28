# TikTok Video Automation Tool

## Use cases:

- **Automated Content Creation:** Generate TikTok videos from a script, including image and video sourcing, without manual intervention. This is ideal for businesses or influencers looking to maintain a consistent posting schedule.
- **Marketing Campaign Automation:** Create different versions of a TikTok video based on a base script and automatically distribute them through various channels (WhatsApp, email, Telegram, and TikTok).
- **Content Repurposing:** Repurpose existing content or scripts into engaging TikTok videos, saving time and resources on content creation.

## How it works:

1.  **Trigger:** The workflow starts with one of four triggers: "On form submission", "WhatsApp Trigger", or "Telegram Trigger".
2.  **Script Generation:** Based on the trigger input, a script is generated using "Script Prompter", "Script Organizer", "Script Generator", and "Outliner" nodes. These nodes likely use AI to create a video script.
3.  **Image and Video Sourcing:** The script is then split into individual prompts ("Split Out"), which are used to generate image requests ("Image Prompter" and "Request Image"). The workflow waits for the image to be generated ("Wait For Image") and retrieves it ("Get Image"). Video is requested ("Request Video"), and workflow wait for its end ("Wait For Video"), and retrieve the final product ("Get Video").
4.  **Asset Management:** The generated content and the script ("Script Generator") is then uploaded to Cloudinary ("Upload to Cloudinary").
5.  **Content Merging and Editing:** All the generated assets and the original script are merged ("Merge") and prepared to be used by the editor ("Create Editor JSON" and "Set JSON Variable").
6.  **Video Editing and Rendering:** The content are sent to the editor. ("Editor") After the video is renderized ("Rendering") it is retrieved ("Get Final Video").
7.  **Distribution:** The final video is sent to different platforms, this is selected by the node "Choose Output". Options are: Gmail ("Send To Gmail"), Outlook ("Send To Outlook"), WhatsApp ("Send To WhatsApp"), Telegram ("Telegram"), and direct upload to TikTok ("Upload Directly To TikTok").

## Services:

-   **Cloudinary:** Used for storing assets.
-   **OpenAI (LangChain):** Used for script and image prompting.
-   **Gmail:** Used for email sending.
-   **Microsoft Outlook:** Used for email sending.
-   **Telegram:** Used for form submission and sending messages.
-   **TikTok:** Used for video uploading.
-   **WhatsApp:** Used for trigger the flow and sending messages.

## Hashtags:

#n8n #TikTokAutomation #VideoCreation #ContentMarketing #WorkflowAutomation
