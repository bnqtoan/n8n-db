# airflow dag_run

## Use cases

- **Automated DAG Triggering:** Trigger Apache Airflow DAGs automatically based on external events or data changes. For example, start a data pipeline when a new file is uploaded to a cloud storage bucket.
- **Parameterized DAG Runs:** Pass custom configurations to Airflow DAG runs, such as specific image tags or resource limits, without manually editing the DAG definition.
- **Real-time Monitoring of DAG Run Status:** Monitor the status of an Airflow DAG run and take actions based on its completion state (success, failure, running, queued). This enables automated error handling and downstream task execution.

## How it works

This workflow automates the process of triggering and monitoring Apache Airflow DAG runs. Here's a breakdown:

1.  **Trigger Input (`in data`):** Receives input data including the `dag_id`, `task_id`, and configuration (`conf`) for the Airflow DAG run, as well as optional `wait` and `wait_time` parameters.
2.  **Airflow API Prefix (`airflow-api`):** Sets the base URL for the Airflow API (e.g., `https://airflow.example.com`).
3.  **Trigger DAG Run (`Airflow: dag_run`):** Triggers a new DAG run using the Airflow API. It sends a POST request to `/api/v1/dags/{dag_id}/dagRuns` with the provided configuration.
4.  **Check Initial State (`if state == queued`):** Checks if the dag run state is "queued" if so it continues to wait, otherwise it is considered failed.
5.  **Wait (`Wait`):** Pauses the workflow for a specified amount of time (`wait` parameter, defaults to 10 seconds).
6.  **Get DAG Run State (`Airflow: dag_run - state`):** Retrieves the current state of the DAG run from the Airflow API using a GET request to `/api/v1/dags/{dag_id}/dagRuns/{dag_run_id}`.
7.  **State Switch (`Switch: state`):** Routes the workflow based on the DAG run state:
    *   **success:** Get the DAG result.
    *   **queued/running:** Increment a counter and continue monitoring.
    *   **failed:** Stops the workflow with an error message.
8.  **DAG Result (`Airflow: dag_run - get result`):** Retrieves the result of a specific task within the DAG run from the Airflow API.
9.  **Count (`count`):** Increments a counter to track the number of times the DAG run state has been checked.
10. **Timeout check (`If count > wait_time`):** If the count is higher then the specified wait time, the workflow will stop with an error message.
11. **Error Handling (`dag run fail`, `dag run wait too long`):** Stops the workflow and issues an error message if the DAG run fails or if the maximum wait time is exceeded.

## Services

-   **Apache Airflow:** Orchestration platform for data pipelines.

## Hashtags

#n8n #Airflow #DAG #Automation #Workflow
