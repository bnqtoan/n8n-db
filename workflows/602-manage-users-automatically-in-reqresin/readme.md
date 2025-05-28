# My Workflow

## Use cases:

*   **Testing APIs:** This workflow can be used to test different HTTP methods (GET, POST, PATCH) against an API endpoint, ensuring that the API behaves as expected for various requests.
*   **Simulating User Interactions:** The workflow simulates user actions by creating a new user (POST) and then modifying an existing user's information (PATCH) via an API.
*   **Learning and Experimentation:** New n8n users can use this workflow as a starting point to understand how to chain HTTP requests together and pass data between them.

## How it works:

1.  **Manual Trigger:** The workflow starts when the "On clicking 'execute'" node is manually triggered in n8n.
2.  **GET Request:** An HTTP Request node then sends a GET request to `https://reqres.in/api/users`. This retrieves a list of users from the API.
3.  **POST Request:** The subsequent HTTP Request node sends a POST request to the same endpoint, `https://reqres.in/api/users`.  It includes a body with the name "Neo" and job "Programmer", which simulates creating a new user.
4.  **PATCH Request:** Finally, another HTTP Request node sends a PATCH request to `https://reqres.in/api/users/2`. This updates the job title of user with ID 2 to "The Chosen One".

## Services:

*   reqres.in (A fake online REST API for testing and prototyping)

## Hashtags:

#n8n #automation #HTTP #API #testing
