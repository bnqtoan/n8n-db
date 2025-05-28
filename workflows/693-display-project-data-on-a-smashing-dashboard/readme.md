# Dashboard

## Use cases:

- **Public Project Monitoring:** Track key metrics like GitHub stars, Docker pulls, and npm package health for an open-source project and display them on a unified dashboard.
- **Internal Application Health:** Monitor the usage and health of internal applications by tracking metrics like the number of active users, error rates, or API response times and visualizing them on a dashboard.
- **Product Hunt Performance Tracking:** Observe the performance of a product launch on Product Hunt by monitoring votes, comments, and reviews over time, displayed on a dedicated dashboard.

## How it works:

This workflow is designed to fetch and display various metrics from different services on a dashboard.

1.  **Trigger:** The workflow starts with a `Cron` node, which triggers the workflow execution every minute.
2.  **Configuration:** A `Dashboard Configuration` node stores configuration parameters, including hostname of the dashboard, authentication token, and IDs of contents on different services.
3.  **Data Retrieval:**
    -   It fetches data from npm, Docker Hub, GitHub, and Product Hunt using `HTTP Request` nodes.
    -   `GitHub` node retrieves data about a specific repository.
4.  **Data Transformation:** The responses from these services are then passed to `Function` nodes (`Massage npm Data`, `Massage Docker Data`, `Massage GitHub Data`, `Massage Product Hunt Data`), which format the data for display. This includes adding commas to numbers for better readability and converting data types if necessary.
5.  **Dashboard Update:** Finally, the formatted data is sent to a series of `HTTP Request` nodes to update corresponding widgets on the specified dashboard. These widgets include npm maintenance, popularity, quality, and final score; Docker stars and pulls; GitHub stars, watchers, forks, and open issues; and Product Hunt ratings, reviews, votes, and comments.

## Services:

-   **npm:** For retrieving package metrics.
-   **Docker Hub:** For retrieving Docker image metrics.
-   **GitHub:** For retrieving repository metrics.
-   **Product Hunt:** For retrieving product launch metrics.
-   **Custom Dashboard:** A dashboard service running at the configured hostname (`http://192.168.0.14:8080` in the example), which accepts POST requests to update widgets.

## Hashtags:

#n8n #automation #dashboard #monitoring #metrics
