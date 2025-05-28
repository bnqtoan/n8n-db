# Send Discord message from Webflow form submission

## Use cases:
- Automatically create a dedicated Discord channel for each new Webflow form submission type, allowing focused discussions around specific inquiries or feedback.
- Receive instant notifications in a dedicated Discord channel when a new form is submitted on a Webflow site, ensuring timely responses and efficient handling of user data.
- Streamline communication between Webflow form users and internal teams by centralizing form submission data and discussions in relevant Discord channels.

## How it works:
1. **Webflow Form Submission Trigger:** The workflow starts when a new form is submitted on your Webflow site.
2. **List Discord Channels:** It retrieves a list of all channels in your specified Discord server.
3. **Filter existing Discord channel:** The code checks if a channel with the form name exists in Discord.
4. **Does the channel exist?:**  The workflow checks if a Discord channel with the same name as the Webflow form already exists.
5. **Create Discord channel with form name:** If the channel doesn't exist, a new Discord channel is created with a name derived from the Webflow form's name.
6. **Transform data to send message:** The data is transformed.
7. **Notify #general channel of newly created channel1:** A message is sent to the "#general" channel in Discord, notifying users about the newly created channel with a direct link.
8. **Compose Slack message:** The code formats the data from the Webflow form submission into a readable Markdown format for Discord.
9. **Send form submission to Discord channel:**  Finally, the formatted form submission is sent as a message to the corresponding Discord channel.

## Services:
- Webflow
- Discord

## Hashtags:
#n8n #automation #Webflow #Discord #formSubmission
