environment variables

[](https://github.com/n8n-io/n8n-docs/edit/main/docs/hosting/configuration/environment-variables/source-control.md "Edit this page")

# Source control environment variables[#](#source-control-environment-variables "Permanent link")

File-based configuration

You can add `_FILE` to individual variables to provide their configuration in a separate file. Refer to [Keeping sensitive data in separate files](../../configuration-methods/#keeping-sensitive-data-in-separate-files) for more details.

n8n uses Git-based source control to support environments. Refer to [Source control and environments](../../../../source-control-environments/setup/) for more information on how to link a Git repository to an n8n instance and configure your source control.

Variable

Type

Default

Description

`N8N_SOURCECONTROL_DEFAULT_SSH_KEY_TYPE`

String

`ed25519`

Set to `rsa` to make RSA the default SSH key type for [Source control setup](../../../../source-control-environments/setup/).