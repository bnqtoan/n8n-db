# Convert Parquet, Avro, ORC & Feather via ParquetReader to JSON

## Use cases:

- **Data Conversion for Analysis:** Convert data stored in Parquet, Avro, ORC, or Feather formats to JSON for easier analysis and manipulation in systems that prefer JSON.
- **Data Integration:**  Integrate data from various sources (databases, data lakes, etc.) that output in Parquet, Avro, ORC, or Feather formats into applications that require JSON input.
- **API Data Processing:** Automatically convert file-based data received through an API into JSON format for further processing or storage.

## How it works:

1.  **Webhook Trigger:** The workflow starts when a `POST` request is sent to the `/webhook-test/convert` endpoint with a file (Parquet, Avro, ORC, or Feather) attached in the `file` field.
2.  **Send to Parquet API:** The uploaded file is then sent as `multipart/form-data` to the `https://api.parquetreader.com/parquet` API endpoint. The `binaryPropertyName` is set to `file0`.
3.  **Parse API Response:** The response from the API, which includes parsed data, schema, and metadata, is processed. The `Parse API Response` node converts the stringified `data` and `meta_data` fields into actual JSON arrays and objects, respectively.

## Services:

-   [ParquetReader API](https://api.parquetreader.com/parquet): An external API service that converts Parquet, Avro, ORC, and Feather files to JSON.

## Hashtags:

#n8n #automation #parquet #avro #orc #feather #json #dataconversion
