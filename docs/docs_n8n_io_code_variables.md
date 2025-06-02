[](https://github.com/n8n-io/n8n-docs/edit/main/docs/code/variables.md "Edit this page")

# Custom variables[#](#custom-variables "Permanent link")

Feature availability

*   Available on Self-hosted Enterprise and Pro Cloud plans.
*   You need access to the n8n instance owner account to create and edit variables. All users can use existing variables.

Available in version 0.225.0 and above.

Custom variables are read-only variables that you can use to store and reuse values in n8n workflows.

Variables are shared

When you create a variable, it's available to everyone on your n8n instance.

## Create variables[#](#create-variables "Permanent link")

To create a new variable:

1.  On the **Variables** page, select **Add Variable**.
2.  Enter a **Key** and **Value**. The maximum key length is 50 characters, and the maximum value length is 220 characters. n8n limits the characters you can use in the key and value to lowercase and uppercase letters, numbers, and underscores (`A-Z`, `a-z`, `0-9`, `_`).
3.  Select **Save**. The variable is now available for use in all workflows in the n8n instance.

## Edit and delete variables[#](#edit-and-delete-variables "Permanent link")

To edit or delete a variable:

1.  On the **Variables** page, hover over the variable you want to change.
2.  Select **Edit** or **Delete**.

## Use variables in workflows[#](#use-variables-in-workflows "Permanent link")

You can access variables in the Code node and in [expressions](../../glossary/#expression-n8n):

1
2

`// Access a variable $vars.<variable-name>`

All variables are strings.

During workflow execution, n8n replaces the variables with the variable value. If the variable has no value, n8n treats its value as `undefined`. Workflows don't automatically fail in this case.

Variables are read-only. You must use the UI to change the values. If you need to set and access custom data within your workflow, use [Workflow static data](../cookbook/builtin/get-workflow-static-data/).