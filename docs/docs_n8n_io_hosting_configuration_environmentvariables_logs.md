environment variables

[](https://github.com/n8n-io/n8n-docs/edit/main/docs/hosting/configuration/environment-variables/logs.md "Edit this page")

# Logs environment variables[#](#logs-environment-variables "Permanent link")

File-based configuration

You can add `_FILE` to individual variables to provide their configuration in a separate file. Refer to [Keeping sensitive data in separate files](../../configuration-methods/#keeping-sensitive-data-in-separate-files) for more details.

This page lists environment variables to set up logging for debugging. Refer to [Logging in n8n](../../../logging-monitoring/logging/) for details.

## n8n logs[#](#n8n-logs "Permanent link")

Variable

Type

Default

Description

`N8N_LOG_LEVEL`

Enum string: `info`, `warn`, `error`, `debug`

`info`

Log output level. Refer to [Log levels](../../../logging-monitoring/logging/#log-levels) for details.

`N8N_LOG_OUTPUT`

Enum string: `console`, `file`

`console`

Where to output logs. Provide multiple values as a comma-separated list.

`N8N_LOG_FILE_COUNT_MAX`

Number

`100`

Max number of log files to keep.

`N8N_LOG_FILE_SIZE_MAX`

Number

`16`

Max size of each log file in MB.

`N8N_LOG_FILE_LOCATION`

String

`<n8n-directory-path>/logs/n8n.log`

Log file location. Requires N8N\_LOG\_OUTPUT set to `file`.

`DB_LOGGING_ENABLED`

Boolean

`false`

Whether to enable database-specific logging.

`DB_LOGGING_OPTIONS`

Enum string: `query`, `error`, `schema`, `warn`, `info`, `log`

`error`

Database log output level. To enable all logging, specify `all`. Refer to [TypeORM logging options](https://orkhan.gitbook.io/typeorm/docs/logging#logging-options)

`DB_LOGGING_MAX_EXECUTION_TIME`

Number

`1000`

Maximum execution time (in milliseconds) before n8n logs a warning. Set to `0` to disable long running query warning.

`CODE_ENABLE_STDOUT`

Boolean

`false`

Set to `true` to send Code node logs to process's stdout for debugging, monitoring, or logging purposes.

`NO_COLOR`

any

`undefined`

Set to any value to output logs without ANSI colors. For more information, see the [no-color.org website](https://no-color.org/).

## Log streaming[#](#log-streaming "Permanent link")

Refer to [Log streaming](../../../../log-streaming/) for more information on this feature.

Variable

Type

Default

Description

`N8N_EVENTBUS_CHECKUNSENTINTERVAL`

Number

`0`

How often (in milliseconds) to check for unsent event messages. Can in rare cases send message twice. Set to `0` to disable it.

`N8N_EVENTBUS_LOGWRITER_SYNCFILEACCESS`

Boolean

`false`

Whether all file access happens synchronously within the thread (true) or not (false).

`N8N_EVENTBUS_LOGWRITER_KEEPLOGCOUNT`

Number

`3`

Number of event log files to keep.

`N8N_EVENTBUS_LOGWRITER_MAXFILESIZEINKB`

Number

`10240`

Maximum size (in kilo-bytes) of an event log file before a new one starts.

`N8N_EVENTBUS_LOGWRITER_LOGBASENAME`

String

`n8nEventLog`

Basename of the event log file.