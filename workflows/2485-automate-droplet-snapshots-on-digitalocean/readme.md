# Automate Droplet Snapshot Management on DigitalOcean

## Use cases:

- **Cost Optimization:** Automatically delete old snapshots to reduce storage costs on DigitalOcean by maintaining only a defined number of snapshots.
- **Backup Management:** Ensure regular and up-to-date backups of your DigitalOcean droplets are created and managed without manual intervention.
- **Compliance:** Enforce snapshot retention policies by automatically removing snapshots that exceed a specified age or quantity.

## How it works:

1.  **Trigger:** The workflow is triggered every 48 hours using a Cron node.
2.  **List All Droplets:** It retrieves a list of all droplets from your DigitalOcean account using the DigitalOcean API.
3.  **List Snapshots for a Droplet:** For each droplet, it fetches all existing snapshots.
4.  **Filter:** The workflow checks if the number of snapshots for a droplet is greater than or equal to 4.
5.  **Delete a Snapshot:** If the number of snapshots exceeds the limit, it deletes the oldest snapshot.
6.  **Create a new snapshot:** It takes a new snapshot.

## Services:

- DigitalOcean API

## Hashtags:

#n8n #automation #digitalocean #snapshot #backup
