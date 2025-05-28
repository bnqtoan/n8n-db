# Low-code API for Flutterflow apps

## Use cases:

- **Mobile App Data Retrieval:**  A Flutterflow mobile app needs to fetch customer data from a database to display in a user profile screen.
- **Data Aggregation for Reports:** A Flutterflow app requires aggregated data (e.g., a list of students and their grades) from a database to generate reports.
- **Simplified Backend for Flutterflow:** Serving as a lightweight backend for a Flutterflow application, handling data retrieval and transformation without complex server-side code.

## How it works:

1.  **Webhook Trigger ("On new flutterflow call"):** The workflow starts when it receives a GET request from a Flutterflow app at a specific webhook URL.
2.  **Data Retrieval ("Customer Datastore (n8n training)"):** This node retrieves customer data, simulating a database query using a training node.  In a real-world scenario, this would be replaced by a database connector (e.g., Postgres, MySQL) or an API call. It is configured to `getAllPeople`.
3.  **Data Transformation ("insert into variable"):** The retrieved data (presumably a JSON array of customer objects) is assigned to a variable called `students`.
4.  **Data Aggregation ("Aggregate variable"):** The students object is aggregated in a single object.
5.  **Respond to Flutterflow ("Respond to flutterflow"):** The workflow responds to the Flutterflow app with the transformed data in JSON format. The response body contains the content of the aggregated variable from step 4.

## Services:

-   Flutterflow (via Webhook)
-   **Intended:** Database (e.g., PostgreSQL, MySQL) or any API

## Hashtags:

#n8n #flutterflow #lowcode #API #automation
