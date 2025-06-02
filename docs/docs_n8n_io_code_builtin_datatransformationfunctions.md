[](https://github.com/n8n-io/n8n-docs/edit/main/docs/code/builtin/data-transformation-functions/index.md "Edit this page")

# Data transformation functions[#](#data-transformation-functions "Permanent link")

Data transformation functions are helper functions to make data transformation easier in [expressions](../../../glossary/#expression-n8n).

JavaScript in expressions

You can use any JavaScript in expressions. Refer to [Expressions](../../expressions/) for more information.

For a list of available functions, refer to the page for your data type:

*   [Arrays](arrays/)
*   [Dates](dates/)
*   [Numbers](numbers/)
*   [Objects](objects/)
*   [Strings](strings/)

## Usage[#](#usage "Permanent link")

Data transformation functions are available in the expressions editor.

The syntax is:

1

`{{ dataItem.function() }}`

For example, to check if a string is an email:

1
2
3

`{{ "example@example.com".isEmail() }}  // Returns true`