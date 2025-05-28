## Readme

### Use cases:

*   **Regular Data Backup:** This workflow can be used to create periodic backups of data stored in a Google Sheet. By reading the sheet's content and then writing it back to the same sheet effectively creates a new version, though potentially overwriting any manual changes if not carefully managed.
*   **Scheduled Data Refresh/Update (with Caution):** The workflow can, with the right data transformation in between the read and write operations (not present in this workflow), refresh the data in a Google Sheet every two hours based on an external source or some calculation. **Important:** As configured, this workflow currently just reads and rewrites the same data, so it's crucial to add data manipulation steps to make it useful for updates.

### How it works:

1.  **Trigger (Cron):** The workflow starts every two hours, as defined in the Cron node.
2.  **Read Sheet:** The "Read Sheet" node reads all data from the specified range ("Data!A:G") in a Google Sheet. It extracts the raw data.
3.  **Write Sheet 1 & 2:** The "Write Sheet 1" and "Write Sheet 2" nodes simultaneously write the data that was read back into the **same range** in the **same Google Sheet.** Critically, the "operation" is set to "update". As configured this duplicates the write, which isn't especially useful.  The range is dynamically referenced from the range set in the "Read Sheet" node.

**Important Note:**  As configured, this workflow simply reads and rewrites the same data back to the same Google Sheet. To make it truly useful, you would need to add additional nodes between the "Read Sheet" and "Write Sheet" nodes to transform or manipulate the data before writing it back. Without those nodes, it is a redundant operation, or at best, a very crude backup (with overwrite risk).

### Services:

*   Google Sheets

### Hashtags:

#n8n #automation #googleSheets #scheduler #dataBackup
