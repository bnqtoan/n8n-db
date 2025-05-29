# My workflow

## Use cases:

- Dynamically identify OAuth2 settings (authorization URI, token URI, audience) for various APIs based on their name.
- Automate the configuration of applications and services that require OAuth2 authentication.
- Simplify the process of integrating with new APIs by automatically discovering the necessary OAuth2 endpoints.

## How it works:

1.  The workflow is triggered when executed by another workflow, receiving an OAuth service name as input (e.g., "Atlassian").
2.  The "LLM Bus" node utilizes an AI agent (powered by Langchain) to analyze the service name and identify the corresponding OAuth2 settings. The agent uses a detailed prompt that instructs it to find the service name, audience, authorization URI, and token URI, along with a confidence score indicating the reliability of the information.
3.  The AI agent uses the OpenRouter Chat Model (latitudegames/wayfarer-large-70b-llama-3.3) to generate the potential OAuth2 configuration based on its prompt.
4.  The "Conform JSON" node extracts the key information (service name, audience, authorization URI, token URI, details, and confidence score) from the LLM output and formats it into a structured JSON output, according to your process expectation.

## Services:

-   OpenRouter: Provides access to the latitudegames/wayfarer-large-70b-llama-3.3 large language model.
-   Atlassian API: Used as an example and potential data source for OAuth information.
-   Sage API: Used as an example and potential data source for OAuth information.
-   SAP HANA Cloud Platform: Used as an example and potential data source for OAuth information.
-   Google API: Used as an example and potential data source for OAuth information.

## Hashtags:

#n8n #automation #OAuth2 #API #AI
