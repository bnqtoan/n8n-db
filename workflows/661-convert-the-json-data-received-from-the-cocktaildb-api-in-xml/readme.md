# Convert the JSON data received from the CocktailDB API in XML

## Use cases:

*   **Data Transformation for Legacy Systems:** Convert JSON data from modern APIs like TheCocktailDB into XML format for integration with older systems that only support XML.
*   **Custom Data Feeds:** Generate XML feeds from API data for use in applications or platforms that require XML-based data inputs.
*   **Data Archiving:** Store API data in XML format for long-term archiving or compliance purposes.

## How it works:

1.  The workflow is manually triggered by the "On clicking 'execute'" node.
2.  The "HTTP Request" node fetches JSON data from TheCocktailDB's random cocktail API endpoint (`https://www.thecocktaildb.com/api/json/v1/1/random.php`).
3.  The "XML" node transforms the received JSON data into XML format.

## Services:

*   TheCocktailDB API

## Hashtags:

#n8n #automation #API #JSONtoXML #DataTransformation
