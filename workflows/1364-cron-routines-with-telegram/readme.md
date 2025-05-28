# My Workflow

## Use cases:

- **Automated Database Cleanup Notifications:** Automatically clean up old package data in your MySQL databases and receive Telegram notifications upon completion.
- **Scheduled Data Archiving:** Schedule a regular cleanup of package information older than one month and get notified through Telegram about the successful archiving.
- **On-Demand Data Cleanup via Webhook:** Trigger a data cleanup process via a webhook and receive Telegram confirmation messages, allowing for manual intervention when needed.

## How it works:

This workflow automates the process of cleaning up old package data from two MySQL databases and sends Telegram notifications upon completion. It can be triggered in three ways: manually via the "On clicking 'execute'" trigger (disabled), on a schedule using the "Cron" node, or via a webhook.

1.  **Trigger:** The workflow can be started via a Cron schedule, a Webhook call to the `limparPacotes` path, or manually.
2.  **Database Cleanup (PPM):** The `limpaPacoteCliente0` node executes a MySQL query on the PPM database. The query identifies records in the `i_objeto` table where `modulo` is 'pacoteProduto', `situacao` is 'TRANSPORTE-RECEBIDO', and the `data` is older than one month. It then updates the `modulo` of these records to 'DELETE', effectively archiving them.
3.  **Database Cleanup (OBJ):** The `limparPacoteCliente1` node executes the same MySQL query, but on the OBJ database, performing the same archiving action.
4.  **Telegram Notification (PPM):** After the cleanup on the PPM database, the `Telegram` node sends a message "LIMPOU PACOTES TRANSPORTE-RECEBIDO PONTO MIX" to the specified Telegram chat ID.
5.  **Telegram Notification (OBJ):** After the cleanup on the OBJ database, the `Telegram1` node sends a message "LIMPOU PACOTES TRANSPORTE-RECEBIDO OBJETIVA" to the same Telegram chat ID.

## Services:

-   MySQL (PPM and OBJ databases)
-   Telegram

## Hashtags:

#n8n #automation #databasecleanup #telegram #mysql
