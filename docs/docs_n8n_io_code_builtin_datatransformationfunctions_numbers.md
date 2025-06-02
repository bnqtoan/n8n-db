[](https://github.com/n8n-io/n8n-docs/edit/main/docs/code/builtin/data-transformation-functions/numbers.md "Edit this page")

# Numbers[#](#numbers "Permanent link")

A reference document listing built-in convenience functions to support data transformation in [expressions](../../../../glossary/#expression-n8n) for numbers.

JavaScript in expressions

You can use any JavaScript in expressions. Refer to [Expressions](../../../expressions/) for more information.

### ceil(): Number [#](#number-ceil "Permanent link")

Rounds up a number to a whole number.

* * *

### floor(): Number [#](#number-floor "Permanent link")

Rounds down a number to a whole number.

* * *

### format(locales?: LanguageCode, options?: FormatOptions): String [#](#number-format "Permanent link")

This is a wrapper around [Intl.NumberFormat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat). Returns a formatted string of a number based on the given LanguageCode and FormatOptions. When no arguments are given, transforms the number in a like format 1.234.

#### Function parameters[#](#function-parameters "Permanent link")

localesOptionalString

An IETF BCP 47 language tag.

Default: `en-US`

optionsOptionalObject

Configure options for number formatting. Refer to [MDN | Intl.NumberFormat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat) for more information.

* * *

### isEven(): Boolean [#](#number-isEven "Permanent link")

Returns true if the number is even. Only works on whole numbers.

* * *

### isOdd(): Boolean [#](#number-isOdd "Permanent link")

Returns true if the number is odd. Only works on whole numbers.

* * *

### round(decimalPlaces?: Number): Number [#](#number-round "Permanent link")

Returns the value of a number rounded to the nearest whole number, unless a decimal place is specified.

#### Function parameters[#](#function-parameters_1 "Permanent link")

decimalPlacesOptionalNumber

How many decimal places to round to.

Default: `0`

* * *

### toBoolean(): Boolean [#](#number-toBoolean "Permanent link")

Converts a number to a boolean. `0` converts to `false`. All other values convert to `true`.

* * *

### toDateTime(format?: String): Date [#](#number-toDateTime "Permanent link")

Converts a number to a [Luxon date object](https://docs.n8n.io/code/cookbook/luxon/).

#### Function parameters[#](#function-parameters_2 "Permanent link")

formatOptionalString enum

Can be `ms` (milliseconds), `s` (seconds), or `excel` (Excel 1900). Defaults to milliseconds.

* * *