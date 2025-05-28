# Get Company by Name

## Use cases:

- **Company Data Enrichment:** Automatically retrieve company details based on the company name provided.
- **Data Validation:** Verify if a company exists in a database or an external source before creating a new entry.
- **Lead Qualification:** Check company information to qualify leads by fetching additional details.

## How it works:

1.  **Manual Trigger:** The workflow starts when manually triggered.
2.  **Create Company Item:** A Function Item node sets the company name to "Killia technologies" and country to "Spain."
3.  **Get Company by Name:** This node uses the "uproc" integration to fetch company information by name using the company name and country set in the previous step. It authenticates via the `miquel-uproc` credential.
4.  **Company Found?:** An IF node checks if the `name` field in the `message` property returned by the "Get Company by Name" node contains a value (using a regex check `.+,` checking if there is any value). If the name exists (company is found), the workflow proceeds down the "true" path (not shown in this configuration). If the company isn't found, it proceeds down the "false" path (not shown in this configuration).

## Services:

-   **uproc:** A service to get data from a third party based on the company Name.

## Hashtags:

#n8n #automation #companydata #uproc #datavalidation
