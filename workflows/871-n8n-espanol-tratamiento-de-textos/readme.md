# N8N Español - Ejemplos

## Use cases:

*   **Text Transformation Playground:**  Experiment with different text manipulation functions like converting to uppercase, lowercase, or replacing specific words.
*   **Data Preprocessing:**  Prepare text data for further analysis or use in other applications by cleaning and standardizing it.
*   **Educational Tool:**  Demonstrate and teach basic string manipulation techniques using a visual workflow.

## How it works:

This workflow showcases basic string manipulation techniques in n8n.

1.  The workflow is triggered manually using the "On clicking 'execute'" node.
2.  The "Set" node defines a string variable named "mensaje" with the initial value "Un León pasea por la Sabana Africana".
3.  The "Minúsculas" node converts the "mensaje" string to lowercase using the `.toLowerCase()` function and outputs the result.
4.  The "Mayúsculas" node converts the "mensaje" string to uppercase using the `.toUpperCase()` function and outputs the result.
5.  The "Replace" node replaces "Un León" with "Una Jirafa" in the "mensaje" string using the `.replace()` function and outputs the modified string.
6.  The "Merge" node combines the outputs from the "Minúsculas" and "Mayúsculas" nodes into a single stream.
7.  The "Resultado" node combines the outputs of the "Merge" node and "Replace" node into a single stream, effectively grouping all the transformed strings.

## Services:

*   None. This workflow primarily uses n8n's built-in nodes and functionalities.

## Hashtags:

#n8n #automation #workflow #stringmanipulation #textprocessing
