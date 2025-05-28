# Standup Bot - Initialize

## Use cases:

- **Initial Configuration:** This workflow is designed to initialize the configuration file for a standup bot, pre-filling it with default values. This simplifies the initial setup process.
- **Configuration Reset:**  If the existing configuration becomes corrupted or needs to be reset to default values, this workflow provides a quick way to overwrite the existing configuration file with fresh defaults.
- **Parameter Template:** Serves as a template or starting point for new users to understand the required configuration parameters for the standup bot.

## How it works:

1. **Manual Trigger:** The workflow starts when the "On clicking 'execute'" node is manually triggered within the n8n interface.
2. **Default Configuration:**  The "Use Default Config" node sets default values for several configuration parameters within a JSON structure. These parameters include:
    - `config.slashCmdToken`:  The token used to verify slash commands from Mattermost.
    - `config.mattermostBaseUrl`:  The base URL of the Mattermost instance.
    - `config.botUserToken`:  The token for the bot user in Mattermost.
    - `config.n8nWebhookUrl`:  The webhook URL in n8n that the bot will use for actions.
    - `config.botUserId`: The ID of the bot user in Mattermost.
3. **JSON to Binary Conversion:** The "Move Binary Data" node converts the JSON data containing the default configuration into a binary file format.
4. **Write to File:** The "Write Binary File" node writes the binary data to a file named `standup-bot-config.json` located in the `/home/node/.n8n/` directory.  This file then persists the initial bot configuration.

## Services:

- Mattermost (Based on parameter names, implies interaction with Mattermost API)

## Hashtags:

#n8n #automation #Mattermost #standupbot #configuration
