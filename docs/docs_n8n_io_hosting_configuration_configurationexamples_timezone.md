[](https://github.com/n8n-io/n8n-docs/edit/main/docs/hosting/configuration/configuration-examples/time-zone.md "Edit this page")

# Set the self-hosted instance timezone[#](#set-the-self-hosted-instance-timezone "Permanent link")

The default timezone is America/New\_York. For instance, the Schedule node uses it to know at what time the workflow should start. To set a different default timezone, set `GENERIC_TIMEZONE` to the appropriate value. For example, if you want to set the timezone to Berlin (Germany):

1

`export GENERIC_TIMEZONE=Europe/Berlin`

You can find the name of your timezone [here](https://momentjs.com/timezone/).

Refer to [Environment variables reference](../../environment-variables/timezone-localization/) for more information on this variable.