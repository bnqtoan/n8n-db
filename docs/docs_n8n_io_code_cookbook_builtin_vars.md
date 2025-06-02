[](https://github.com/n8n-io/n8n-docs/edit/main/docs/code/cookbook/builtin/vars.md "Edit this page")

# `vars`[#](#vars "Permanent link")

Feature availability

*   Available on Self-hosted Enterprise and Pro and Enterprise Cloud plans.
*   You need access to the n8n instance owner account to create variables.

`vars` contains all [Variables](../../../variables/) for the active environment. It's read-only: you can access variables using `vars`, but must set them using the UI.

[JavaScript](#__tabbed_1_1)[Python](#__tabbed_1_2)

1
2

`// Access a variable $vars.<variable-name>`

1
2

`# Access a variable _vars.<variable-name>`

`vars` and `env`

`vars` gives access to user-created variables. It's part of the [Environments](../../../../source-control-environments/) feature. `env` gives access to the [configuration environment variables](../../../../hosting/configuration/environment-variables/) for your n8n instance.