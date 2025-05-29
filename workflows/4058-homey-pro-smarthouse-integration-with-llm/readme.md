# Smarthus_Agent

## Use cases:

- **Voice-Controlled Home Automation:** Allows users to manage their smart home devices using voice commands in Norwegian. For example, a user can say "Slå på TV-en i stuen" (Turn on the TV in the living room), and the workflow will execute the appropriate actions.
- **Context-Aware Actions:** The assistant can understand context and act accordingly. For example, if a user says "Det er kaldt i stuen" (It's cold in the living room), the assistant can turn on the fireplace.
- **Customized Room Settings:** Users can set specific scenes or modes for different rooms. For example, "Hjemmekontor" (Home office) in the bedroom can adjust lighting and other devices for work.

## How it works:

1.  **Input Trigger:** The workflow starts with a "Workflow Input Trigger" node, which receives the user's query (text command).
2.  **Language Model Interaction:** The "Smarthus Agent" node takes the user query and uses the OpenAI Chat Model (specifically GPT-4) to understand the intent. The system message provides context, defining the agent as a Norwegian-speaking smart home assistant.
3.  **Tool Selection:** Based on the user's intent, the "Smarthus Agent" selects the appropriate "Tool Workflow" node to execute the command. These tools represent specific actions, such as turning on/off devices, adjusting lighting, or controlling blinds in different rooms (e.g., "Slå på TV-en i stuen," "Steng gardiner i hovedetasjen").
4.  **Execution of Actions:** The selected "Tool Workflow" (each representing an action) is triggered to perform the desired action. Each tool workflow node has placeholder for WORKFLOW_ID_PLACEHOLDER, which should be replaced by other workflows.
5.  **Output:** The "output" node captures the result of the action and presents it to the user.

## Services:

- OpenAI (for language understanding via the Chat Model)
- Home automation systems (the workflow interacts with devices, likely via a separate system like Homey, although specific APIs are not detailed).

## Hashtags:

#n8n #smarthus #automation #AI #homeautomation
