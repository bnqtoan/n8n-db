[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/core-nodes/n8n-nodes-base.html.md "Edit this page")

# HTML[#](#html "Permanent link")

The HTML node provides operations to help you work with HTML in n8n.

HTML Extract node

The HTML node replaces the HTML Extract node from version 0.213.0 on. If you're using an older version of n8n, you can still view the [HTML Extract node documentation](https://github.com/n8n-io/n8n-docs/blob/86fe33b681621e618e3adcab9a27e8605dbc23ad/docs/integrations/builtin/core-nodes/n8n-nodes-base.htmlextract.md).

Cross-site scripting

When using the HTML node to generate an HTML template you can introduce [XSS (cross-site scripting)](https://owasp.org/www-community/attacks/xss/). This is a security risk. Be careful with un-trusted inputs.

## Operations[#](#operations "Permanent link")

*   [**Generate HTML template**](#generate-html-template): Use this operation to create an HTML template. This allows you to take data from your workflow and output it as HTML.
*   [**Extract HTML content**](#extract-html-content): Extract contents from an HTML-formatted source. The source can be in JSON or a binary file (`.html`).
*   [**Convert to HTML Table**](#convert-to-html-table): Convert content to an HTML table.

The node parameters and options depend on the operation you select. Refer to the sections below for more details on configuring each operation.

## Generate HTML template[#](#generate-html-template "Permanent link")

Create an HTML template. This allows you to take data from your workflow and output it as HTML.

You can include:

*   Standard HTML
*   CSS in `<style>` tags.
*   JavaScript in `<script>` tags. n8n doesn't execute the JavaScript.
*   Expressions, wrapped in `{{}}`.

You can use [Expressions](../../../../code/expressions/) in the template, including n8n's [Built-in methods and variables](../../../../code/builtin/overview/).

## Extract HTML Content[#](#extract-html-content "Permanent link")

Extract contents from an HTML-formatted source. The source can be in JSON or a binary file (`.html`).

Use these parameters:

### Source Data[#](#source-data "Permanent link")

Select the source type for your HTML content. Choose between:

*   **JSON**: If you select this source data, enter the **JSON Property**: the name of the input containing the HTML you want to extract. The property can contain a string or an array of strings.
*   **Binary**: If you select this source data, enter the **Input Binary Field**: the name of the input containing the HTML you want to extract. The property can contain a string or an array of strings.

### Extraction Values[#](#extraction-values "Permanent link")

*   **Key**: Enter the key to save the extracted value under.
*   **CSS Selector**: Enter the CSS selector to search for.
*   **Return Value**: Select the type of data to return. Choose from:
    *   **Attribute**: Return an attribute value like `class` from an element.
        *   If you select this option, enter the name of the **Attribute** to return the value of.
    *   **HTML**: Return the HTML that the element contains.
    *   **Text**: Return the text content of the element.
        *   If you choose this option, you can also enter a comma-separated list of selectors to skip in the **Skip Selectors**.
    *   **Value**: Return the value of an input, select, or text area.
*   **Return Array**: Choose whether to return multiple extraction values as an array (turned on) or as a single string (turned off).

### Extract HTML Content options[#](#extract-html-content-options "Permanent link")

You can also configure this operation with these options:

*   **Trim Values**: Controls whether to remove all spaces and newlines from the beginning and end of the values (turned on) or leaves them (turned off).
*   **Clean Up Text**: Controls whether to remove leading whitespaces, trailing whitespaces, and line breaks (newlines) and condense multiple consecutive whitespaces into a single space (turned on) or to leave them as-is (turned off).

## Convert to HTML Table[#](#convert-to-html-table "Permanent link")

This operation expects data from another node. It has no parameters. It includes these options:

*   **Capitalize Headers**: Controls whether to capitalize the table's headers (turned on) or not (turned off).
*   **Custom Styling**: Controls whether to use custom styling (turned on) or not (turned off).
*   **Caption**: Enter a caption to add to the table.
*   **Table Attributes**: Enter any attributes to apply to the `<table>`, such as style attributes.
*   **Header Attributes**: Enter any attributes to apply to the table's headers `<th>`.
*   **Row Attributes**: Enter any attributes to apply to the table's rows `<tr>`.
*   **Cell Attributes**: Enter any attributes to apply to the table's cells `<td>`.

## Templates and examples[#](#templates-and-examples "Permanent link")

**Scrape and summarize webpages with AI**

by n8n Team

[View template details](https://n8n.io/workflows/1951-scrape-and-summarize-webpages-with-ai/)

**Pulling data from services that n8n doesn’t have a pre-built integration for**

by Jonathan

[View template details](https://n8n.io/workflows/1748-pulling-data-from-services-that-n8n-doesnt-have-a-pre-built-integration-for/)

**Automated Web Scraping: email a CSV, save to Google Sheets & Microsoft Excel**

by Mihai Farcas

[View template details](https://n8n.io/workflows/2275-automated-web-scraping-email-a-csv-save-to-google-sheets-and-microsoft-excel/)

[Browse HTML integration templates](https://n8n.io/integrations/html/), or [search all templates](https://n8n.io/workflows/)