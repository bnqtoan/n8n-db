# Prepare CSV files with GPT-4

## Use cases:

- **Generating Mock Data for Testing:** Quickly create CSV files filled with realistic-looking but fictional user data, which can be used to test software applications or data processing pipelines.
- **Populating Demo Environments:**  Automatically generate CSV files to populate demo environments with sample data, showcasing the features and functionalities of a product or service.
- **Creating Datasets for Educational Purposes:**  Educators can use this workflow to easily generate diverse datasets in CSV format for students to practice data analysis, visualization, or machine learning techniques.

## How it works:

1.  **Manual Trigger:** The workflow starts when you manually execute it using the "When clicking 'Execute Workflow'" node.
2.  **GPT-4 Data Generation:** The "OpenAI" node uses the GPT-4 model to generate a list of 10 random users as a JSON array, with names and surnames starting with the same letter. It generates three different lists, each containing 10 records.
3.  **Splitting into Batches:** The "Split In Batches" node processes each of the 3 JSON responses from OpenAI individually.
4.  **Parsing the JSON:** The "Parse JSON" node extracts the content from the GPT-4 response (the JSON array string) and converts it into a JavaScript array.
5.  **Making a JSON Table:** The "Make JSON Table" node transforms the array of JSON objects into a format suitable for creating a CSV file.
6.  **Converting to CSV:** The "Convert to CSV" node converts the JSON data into CSV format, naming the files `funny_names_1.csv`, `funny_names_2.csv`, and `funny_names_3.csv` respectively.  It also sets the first row as the header row.
7.  **Stripping UTF BOM bytes:** The "Strip UTF BOM bytes" node removes the Byte Order Mark (BOM) from the beginning of the CSV file, preventing potential issues with CSV parsing in some applications.
8.  **Create valid binary:** The "Create valid binary" node converts the string back to a binary.
9.  **Saving to Disk:** The "Save to Disk" node saves the generated CSV file to the `.n8n` directory. The filename is derived from the name created by "Convert to CSV."

## Services:

*   OpenAI (GPT-4)
*   Local Disk (for saving the files)

## Hashtags:

#n8n #automation #GPT4 #CSV #DataGeneration
