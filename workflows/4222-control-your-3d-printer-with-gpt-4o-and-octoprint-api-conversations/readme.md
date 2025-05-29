# OctoPrint Manager

## Use cases:

- **Voice-Controlled 3D Printing:** Control your OctoPrint enabled 3D printer using natural language commands via a chat interface. For example, you can ask the agent to "pause the print," "check the printer status," or "list available jobs."
- **Automated Print Management:** Remotely monitor and manage 3D printing jobs, including starting, pausing, resuming, and canceling prints, all through a conversational AI interface.
- **Intelligent Print Troubleshooting:** Use the AI agent to diagnose and resolve printing issues by querying the printer status, checking the current job details, and suggesting actions based on the data.

## How it works:

1.  The workflow is triggered either manually via the "When clicking ‘Test workflow’" node, which starts a print job, or by a message received through the "When chat message received" webhook, acting as the primary entry points.
2.  When started via the webhook, the message is passed to an "AI Agent" which leverages the OpenAI Chat Model to understand the user's intent. The "Simple Memory" node stores the conversation history for context.
3.  The AI Agent has access to multiple "Tools" which make API requests to OctoPrint. These tools include:
    *   "List OctoPrint Jobs": retrieves the list of available print jobs.
    *   "Get OctoPrint Printer Status": fetches the printer's current status.
    *   "Pause OctoPrint Job": pauses the current print.
    *   "Cancel OctoPrint Job": cancels the current print.
    *   "Resume OctoPrint Job": resumes a paused print.
    *   "Connect OctoPrint to Printer": connect to the 3d printer.
    *   "Get Current Print Job Details": gets the details of the current print job.
    *   "Get OctoPrint Printer Connection Status": get the connection status of the printer.
    *   "Start OctoPrint Job": start a print job.
4.  The AI Agent uses these tools based on the user's request, interacts with OctoPrint, and provides a response to the user.
5. The "Discord" node sends a message with the output of the AI agent to a Discord channel.
6. Optionally, the workflow can be triggered with the "When clicking ‘Test workflow’" node that use the "Stage OctoPrint Job" node to send a start command directly to OctoPrint.

## Services:

*   OctoPrint API
*   OpenAI API
*   Discord API

## Hashtags:

#n8n #automation #OctoPrint #3Dprinting #AIagent
