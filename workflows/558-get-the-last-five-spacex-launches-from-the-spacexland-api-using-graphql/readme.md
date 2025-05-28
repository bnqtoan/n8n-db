# SpaceX Launches Data Fetcher

## Use cases:

- **Retrieve and analyze recent SpaceX launch data:**  Quickly fetch information about the last 5 SpaceX launches, including mission details, launch sites, and associated media links.
- **Monitor rocket specifications:** Extract details about the rockets used in past launches, such as rocket name, core reuse count, and payload information.
- **Gather information on ships involved in launches:**  Obtain data on the ships involved in the launches, including their names, home ports, and images.

## How it works:

1.  **Manual Trigger:** The workflow starts when you manually click the "execute" button in n8n.
2.  **GraphQL Query to SpaceX API:**  The "GraphQL" node sends a query to the SpaceX GraphQL API (`https://api.spacex.land/graphql/`). This query retrieves the `mission_name`, `launch_date_local`, `launch_site`, `links`, `rocket`, and `ships` data for the last 5 launches.
3.  **Data Retrieval:** The GraphQL node retrieves the response from the API.

## Services:

-   SpaceX GraphQL API (`https://api.spacex.land/graphql/`)

## Hashtags:

#n8n #SpaceX #GraphQL #API #Automation
