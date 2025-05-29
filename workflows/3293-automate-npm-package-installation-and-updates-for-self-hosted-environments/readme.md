# Install npm Libraries

## Use cases

1.  **Automated Dependency Management:** Automatically install required npm libraries for your n8n instance on a schedule or upon initialization. This ensures that your workflows always have the necessary dependencies available, especially useful in dynamic environments.
2.  **Consistent Environment Setup:** Guarantee a consistent n8n environment across multiple instances or deployments by automatically installing a predefined set of npm libraries. This eliminates manual setup and reduces the risk of errors.
3.  **On-Demand Library Installation:** Trigger the installation of specific npm libraries manually when needed, allowing for quick adaptation to new workflow requirements without downtime.

## How it works

1.  **Trigger:** The workflow starts with one of three triggers:
    *   **Manual Trigger:** Initiates the workflow manually.
    *   **Schedule Trigger:** Starts the workflow on a defined schedule.
    *   **Instance Trigger:** Triggers the workflow when the n8n instance initializes.
2.  **Set Libraries (libraries\_set):** Defines a string containing a comma-separated list of npm library names (e.g., "axios,cheerio,node-fetch").
3.  **Convert to Array (libraries\_array):** Converts the comma-separated string of library names into an array.
4.  **Split Into Items (libraries\_split):** Splits the array of library names into individual items, each representing a library to install.
5.  **Install Library (library\_install):** Executes a bash script for each library item:
    *   The script checks if the library is already installed by looking for its directory in `node_modules`.
    *   If the library isn't installed, it uses `npm install` to install it.
    *   The script verifies the installation by checking for the existence of the library directory after the install command.
    *   Logs the installation progress and any errors encountered.

## Services

*   **npm:** Node Package Manager is used to install the javascript libraries.

## Hashtags

#n8n #automation #npm #libraries #dependencyManagement
