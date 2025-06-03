[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/core-nodes/n8n-nodes-base.filter.md "Edit this page")

# Filter[#](#filter "Permanent link")

Filter items based on a condition. If the item meets the condition, the Filter node passes it on to the next node in the Filter node output. If the item doesn't meet the condition, the Filter node omits the item from its output.

## Node parameters[#](#node-parameters "Permanent link")

Create filter comparison **Conditions** to perform your filter.

*   Use the data type dropdown to select the data type and comparison operation type for your condition. For example, to filter for dates after a particular date, select **Date & Time > is after**.
*   The fields and values to enter into the condition change based on the data type and comparison you select. Refer to [Available data type comparisons](#available-data-type-comparisons) for a full list of all comparisons by data type.

Select **Add condition** to create more conditions.

### Combining conditions[#](#combining-conditions "Permanent link")

You can choose to keep items:

*   When they meet all conditions: Create two or more conditions and select **AND** in the dropdown between them.
*   When they meet any of the conditions: Create two or more conditions and select **OR** in the dropdown between them.

You can't create a mix of AND and OR rules.

## Node options[#](#node-options "Permanent link")

*   **Ignore Case**: Whether to ignore letter case (turned on) or be case sensitive (turned off).
*   **Less Strict Type Validation**: Whether you want n8n to attempt to convert value types based on the operator you choose (turned on) or not (turned off). Turn this on when facing a "wrong type:" error in your node.

## Templates and examples[#](#templates-and-examples "Permanent link")

**Scrape business emails from Google Maps without the use of any third party APIs**

by Akram Kadri

[View template details](https://n8n.io/workflows/2567-scrape-business-emails-from-google-maps-without-the-use-of-any-third-party-apis/)

**Build Your First AI Data Analyst Chatbot**

by Solomon

[View template details](https://n8n.io/workflows/3050-build-your-first-ai-data-analyst-chatbot/)

**Autonomous AI crawler**

by Oskar

[View template details](https://n8n.io/workflows/2315-autonomous-ai-crawler/)

[Browse Filter integration templates](https://n8n.io/integrations/filter/), or [search all templates](https://n8n.io/workflows/)

## Available data type comparisons[#](#available-data-type-comparisons "Permanent link")

### String[#](#string "Permanent link")

String data type supports these comparisons:

*   exists
*   does not exist
*   is empty
*   is not empty
*   is equal to
*   is not equal to
*   contains
*   does not contain
*   starts with
*   does not start with
*   ends with
*   does not end with
*   matches regex
*   does not match regex

### Number[#](#number "Permanent link")

Number data type supports these comparisons:

*   exists
*   does not exist
*   is empty
*   is not empty
*   is equal to
*   is not equal to
*   is greater than
*   is less than
*   is greater than or equal to
*   is less than or equal to

### Date & Time[#](#date-time "Permanent link")

Date & Time data type supports these comparisons:

*   exists
*   does not exist
*   is empty
*   is not empty
*   is equal to
*   is not equal to
*   is after
*   is before
*   is after or equal to
*   is before or equal to

### Boolean[#](#boolean "Permanent link")

Boolean data type supports these comparisons:

*   exists
*   does not exist
*   is empty
*   is not empty
*   is true
*   is false
*   is equal to
*   is not equal to

### Array[#](#array "Permanent link")

Array data type supports these comparisons:

*   exists
*   does not exist
*   is empty
*   is not empty
*   contains
*   does not contain
*   length equal to
*   length not equal to
*   length greater than
*   length less than
*   length greater than or equal to
*   length less than or equal to

### Object[#](#object "Permanent link")

Object data type supports these comparisons:

*   exists
*   does not exist
*   is empty
*   is not empty