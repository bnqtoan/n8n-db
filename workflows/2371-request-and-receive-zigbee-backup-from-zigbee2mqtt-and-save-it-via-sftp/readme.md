# Zigbee2MQTT Backup to SFTP

## Use cases:

-   **Automated Zigbee2MQTT Backups:** Regularly back up your Zigbee2MQTT configuration and data to a remote server, ensuring you can quickly restore your smart home setup in case of a system failure or data loss.
-   **Scheduled Offsite Backups:** Schedule backups to run automatically at specific times (e.g., weekly) and store them on a separate server (SFTP) for redundancy and disaster recovery.

## How it works:

This workflow automates the process of backing up your Zigbee2MQTT configuration and storing it on an SFTP server. Here's how it works:

1.  **Schedule Trigger (CRON Monday 2:45 am):** The workflow is initiated by a CRON trigger, which is configured to run every Monday at 2:45 AM.
2.  **Send Zigbee2MQTT backup request:** A message is sent to the zigbee2mqtt broker in order to get the backup
3.  **MQTT Trigger - Backup Response:** The workflow listens for a specific MQTT topic (`zigbee2mqtt/bridge/response/backup`) where Zigbee2MQTT publishes the backup data.
4.  **Parse JSON Object from Message Text:** The message received from MQTT is parsed as JSON. It is expected that the data from the backup is stored within a container object, under the key `data`. The property with the actual backup data is expected to be `zip`.
5.  **Convert to File - base64 to binary:** The `zip` data, which is assumed to be in base64 format, is converted into a binary file format.
6.  **SFTP zip file content:** The binary file is then uploaded to an SFTP server. The file is stored with the name zigbee_backup_{TIMESTAMP}.zip. The {TIMESTAMP} part is replaced by the actual date and time when the workflow ran.

## Services:

-   **Zigbee2MQTT:** Open source Zigbee to MQTT bridge, providing a gateway for Zigbee devices to communicate over MQTT.
-   **MQTT Broker:** A messaging protocol that allows devices to communicate with each other. (e.g., Mosquitto)
-   **SFTP Server:** Secure File Transfer Protocol server for storing the backups.

## Hashtags:

#n8n #automation #Zigbee2MQTT #backup #SFTP
