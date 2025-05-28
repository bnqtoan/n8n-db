## Readme for n8n Workflow

### Use cases:

*   **Conditional Logic based on External Command Output:** This workflow can be used to execute a command-line script and then perform different actions based on the boolean output of that script.
*   **Dynamic Workflow Branching:** By parsing the output of an external command, the workflow can make decisions on which path to follow, allowing for flexible and adaptive automation.
*   **Configuration-Driven Automation:** The external command can provide configuration values, which the workflow then uses to customize its behavior.

### How it works:

1.  **Execute Command:** The workflow starts by executing the command `echo "{ \"value1\": true, \"value2\": 1 }"`. This node simulates an external script or program that returns a JSON string as its standard output.
2.  **To Flow Data:** Takes the standard output from the "Execute Command" node, parses the JSON string, and converts it into a JavaScript object within the n8n workflow. Specifically, the `JSON.parse(item.stdout)` part ensures the output becomes usable data.
3.  **IF:** An "IF" node then evaluates a condition. The condition checks if the `value1` field (a boolean) from the parsed JSON output of the "Execute Command" node is equal to `true`.  If it is true, the workflow proceeds down the "true" path; otherwise, it proceeds down the "false" path (though no nodes are currently connected to either).

### Services:

*   None (This workflow relies primarily on n8n's internal nodes and command-line execution.)

### Hashtags:

#n8n #automation #conditionalLogic #workflow #commandLine
