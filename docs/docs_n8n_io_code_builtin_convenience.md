[](https://github.com/n8n-io/n8n-docs/edit/main/docs/code/builtin/convenience.md "Edit this page")

# Convenience methods[#](#convenience-methods "Permanent link")

n8n provides these methods to make it easier to perform common tasks in [expressions](../../../glossary/#expression-n8n).

Python support

You can use Python in the Code node. It isn't available in expressions.

[JavaScript](#__tabbed_1_1)[Python](#__tabbed_1_2)

Method

Description

Available in Code node?

`$evaluateExpression(expression: string, itemIndex?: number)`

Evaluates a string as an expression. If you don't provide `itemIndex`, n8n uses the data from item 0 in the Code node.

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

`$ifEmpty(value, defaultValue)`

The `$ifEmpty()` function takes two parameters, tests the first to check if it's empty, then returns either the parameter (if not empty) or the second parameter (if the first is empty). The first parameter is empty if it's:

*   `undefined`
*   `null`
*   An empty string `''`
*   An array where `value.length` returns `false`
*   An object where `Object.keys(value).length` returns `false`

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

`$if()`

The `$if()` function takes three parameters: a condition, the value to return if true, and the value to return if false.

![❌](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/274c.svg ":x:")

`$max()`

Returns the highest of the provided numbers.

![❌](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/274c.svg ":x:")

`$min()`

Returns the lowest of the provided numbers.

![❌](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/274c.svg ":x:")

Method

Description

`_evaluateExpression(expression: string, itemIndex?: number)`

Evaluates a string as an expression. If you don't provide `itemIndex`, n8n uses the data from item 0 in the Code node.

`_ifEmpty(value, defaultValue)`

The `_ifEmpty()` function takes two parameters, tests the first to check if it's empty, then returns either the parameter (if not empty) or the second parameter (if the first is empty). The first parameter is empty if it's:

*   `undefined`
*   `null`
*   An empty string `''`
*   An array where `value.length` returns `false`
*   An object where `Object.keys(value).length` returns `false`