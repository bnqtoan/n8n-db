[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.homeassistant.md "Edit this page")

# Home Assistant node[#](#home-assistant-node "Permanent link")

Use the Home Assistant node to automate work in Home Assistant, and integrate Home Assistant with other applications. n8n has built-in support for a wide range of Home Assistant features, including getting, creating, and checking camera proxies, configurations, logs, services, and templates.

On this page, you'll find a list of operations the Home Assistant node supports and links to more resources.

Credentials

Refer to [Home Assistant credentials](../../credentials/homeassistant/) for guidance on setting up authentication.

This node can be used as an AI tool

This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](../../../../advanced-ai/examples/using-the-fromai-function/).

## Operations[#](#operations "Permanent link")

*   Camera Proxy
    *   Get the camera screenshot
*   Config
    *   Get the configuration
    *   Check the configuration
*   Event
    *   Create an event
    *   Get all events
*   Log
    *   Get a log for a specific entity
    *   Get all logs
*   Service
    *   Call a service within a specific domain
    *   Get all services
*   State
    *   Create a new record, or update the current one if it already exists (upsert)
    *   Get a state for a specific entity
    *   Get all states
*   Template
    *   Create a template

## Templates and examples[#](#templates-and-examples "Permanent link")

[Browse Home Assistant integration templates](https://n8n.io/integrations/home-assistant/), or [search all templates](https://n8n.io/workflows/)

## Related resources[#](#related-resources "Permanent link")

Refer to [Home Assistant's documentation](https://developers.home-assistant.io/docs/api/rest/) for more information about the service.