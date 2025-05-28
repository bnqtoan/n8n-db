## Postgres Data Ingestion Workflow

This workflow automates the process of generating and inserting sample sensor data into a PostgreSQL database.

### Use cases:

*   **Simulating Sensor Data:** Useful for testing and development environments where real-time sensor data is unavailable.
*   **Database Load Testing:** Can be used to populate a PostgreSQL database with data for performance and scalability testing.
*   **Demo Environment:** Provides a simple way to showcase database functionalities with automatically generated data.

### How it works:

1.  **Cron Trigger:** The workflow starts every minute based on the configuration of the Cron node.
2.  **Generate Sensor Data (Function Node):** The Function node generates random sensor data, including a `sensor_id`, a random `value` between 1 and 100, a timestamp, and sets `notification` to false.
3.  **Insert into Postgres (Postgres Node):** The generated data is then inserted into the `n8n` table in the PostgreSQL database, using the specified `sensor_id`, `value`, `time_stamp`, and `notification` columns.

### Services:

*   **PostgreSQL:** The workflow interacts with a PostgreSQL database to store the generated sensor data.

### Hashtags:

#n8n #PostgreSQL #DataIngestion #Automation #Database
