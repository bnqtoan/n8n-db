[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/core-nodes/n8n-nodes-base.xml.md "Edit this page")

# XML[#](#xml "Permanent link")

Use the XML node to convert data from and to XML.

Binary files

If your XML is within a binary file, use the [Extract from File](../n8n-nodes-base.extractfromfile/) node to convert it to text first.

## Node parameters[#](#node-parameters "Permanent link")

*   **Mode**: The format the data should be converted from and to.
    *   **JSON to XML**: Converts data from JSON to XML.
    *   **XML to JSON**: Converts data from XML to JSON.
*   **Property Name**: Enter the name of the property which contains the data to convert.

## Node options[#](#node-options "Permanent link")

These options are available regardless of the **Mode** you select:

*   **Attribute Key**: Enter the prefix used to access the attributes. Default is `$`.
*   **Character Key**: Enter the prefix used to access the character content. Default is `_`.

All other options depend on the selected **Mode**.

### JSON to XML options[#](#json-to-xml-options "Permanent link")

These options only appear if you select **JSON to XML** as the **Mode**:

*   **Allow Surrogate Chars**: Set whether to allow using characters from the Unicode surrogate blocks (turned on) or not (turned off).
*   **Cdata**: Set whether to wrap text nodes in `<![CDATA[ ... ]]>` instead of escaping when it's required (turned on) or not (turned off).
    *   Turning this option on doesn't add `<![CDATA[ ... ]]>` if it's not required.
*   **Headless**: Set whether to omit the XML header (turned on) or include it (turned off).
*   **Root Name**: Enter the root element name to use.

### XML to JSON options[#](#xml-to-json-options "Permanent link")

These options only appear if you select **XML to JSON** as the **Mode**:

*   **Explicit Array**: Set whether to put child nodes in an array (turned on) or create an array only if there's more than one child node (turned off).
*   **Explicit Root**: Set whether to get the root node in the resulting object (turned on) or not (turned off).
*   **Ignore Attributes**: Set whether to ignore all XML attributes and only create text nodes (turned on) or not (turned off).
*   **Merge Attributes**: Set whether to merge attributes and child elements as properties of the parent (turned on) or key attributes off a child attribute object (turned off). This option is ignored if **Ignore Attribute** is turned on.
*   **Normalize**: Set whether to trim whitespaces inside the text nodes (turned on) or not to trim them (turned off).
*   **Normalize Tags**: Set whether to normalize all tag names to lowercase (turned on) or keep tag names as-is (turned off).
*   **Trim**: Set whether to trim the whitespace at the beginning and end of text nodes (turned on) or to leave the whitespace as-is (turned off).

## Templates and examples[#](#templates-and-examples "Permanent link")

**Generating Keywords using Google Autosuggest**

by Imperol

[View template details](https://n8n.io/workflows/2155-generating-keywords-using-google-autosuggest/)

**💡🌐 Essential Multipage Website Scraper with Jina.ai**

by Joseph LePage

[View template details](https://n8n.io/workflows/2957-essential-multipage-website-scraper-with-jinaai/)

**Get your website indexed by Google automatically**

by Eduard

[View template details](https://n8n.io/workflows/2210-get-your-website-indexed-by-google-automatically/)

[Browse XML integration templates](https://n8n.io/integrations/xml/), or [search all templates](https://n8n.io/workflows/)