# Assign values to variables using the Set node

## Use cases

*   **Data Initialization:** Initialize variables with default values at the beginning of a workflow. This can be useful for setting up initial states or configurations.
*   **Testing and Debugging:** Assign specific values to variables for testing different scenarios within a workflow. This allows you to simulate various inputs and verify the workflow's behavior.

## How it works

1.  The workflow starts with a "Manual Trigger" node, which initiates the workflow when manually executed.
2.  The "Set" node then defines and assigns values to three variables:
    *   A number variable named "number" is assigned the value 20.
    *   A string variable named "string" is assigned the text "From n8n with love".
    *   A boolean variable named "boolean" is set to true.

## Services

*   None. This workflow does not interact with any external services.

## Hashtags

#n8n #automation #variables #setData #workflow
