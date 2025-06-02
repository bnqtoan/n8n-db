environment variables

[](https://github.com/n8n-io/n8n-docs/edit/main/docs/hosting/configuration/environment-variables/binary-data.md "Edit this page")

# Binary data environment variables[#](#binary-data-environment-variables "Permanent link")

File-based configuration

You can add `_FILE` to individual variables to provide their configuration in a separate file. Refer to [Keeping sensitive data in separate files](../../configuration-methods/#keeping-sensitive-data-in-separate-files) for more details.

By default, n8n uses memory to store binary data. Enterprise users can choose to use an external service instead. Refer to [External storage](../../../scaling/external-storage/) for more information on using external storage for binary data.

Variable

Type

Default

Description

`N8N_AVAILABLE_BINARY_DATA_MODES`

String

`filesystem`

A comma separated list of available binary data modes.

`N8N_BINARY_DATA_STORAGE_PATH`

String

`N8N_USER_FOLDER/binaryData`

The path where n8n stores binary data.

`N8N_DEFAULT_BINARY_DATA_MODE`

String

`default`

The default binary data mode. `default` keeps binary data in memory. Set to `filesystem` to use the filesystem, or `s3` to AWS S3. Note that binary data pruning operates on the active binary data mode. For example, if your instance stored data in S3, and you later switched to filesystem mode, n8n only prunes binary data in the filesystem. This may change in future.