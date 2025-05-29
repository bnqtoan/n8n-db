# Scans von PDF zu Nextcloud

## Use cases:

- **Automatic Backup of Scanned Documents:** Automatically upload scanned documents (like PDFs) from a scanner to a designated folder in Nextcloud for secure storage and backup.
- **Paperless Office Automation:** Streamline the process of digitizing physical documents and making them readily accessible in a centralized Nextcloud repository.
- **Remote Document Management:** Enables users to remotely scan documents and have them automatically uploaded to their Nextcloud, making them accessible from anywhere.

## How it works:

1.  **Schedule Trigger:** The workflow starts with a Schedule Trigger, which periodically initiates the process (e.g., every hour based on the configuration `{"rule":{"interval":[{"field":"hours"}]}}`).
2.  **HTTP Request (File List):** An HTTP Request node fetches a list of files (presumably PDF scans) from a specified URL (`http://192.168.1.100:8080/api/v1/files`). It expects a JSON response containing file information.
3.  **HTTP Request (Get File):**  For each file listed in the previous step, another HTTP Request node retrieves the actual file content from the URL (`http://192.168.1.100:8080/api/v1/files/{{ $json.name }}`). The file name is dynamically inserted into the URL using the `$json.name` expression.
4.  **Nextcloud Upload:** The file obtained in the previous step is then uploaded to a specified path (`/Scans/{{ $json.name }}`) in Nextcloud. The workflow uses binary data upload and obtains authentication information from a NextCloud account credential named "NextCloud account".  The filename is also taken from the `$json.name` property of the incoming JSON data.

## Services:

-   **Nextcloud:**  Used for storing the scanned PDF documents.
-   **ScanServJS (assumed):** Based on the provided description, this workflow uses a program named ScanServJS on `http://192.168.1.100:8080`, which exposes an API to list and retrieve scan files.

## Hashtags:

#n8n #automation #nextcloud #scans #documentmanagement
