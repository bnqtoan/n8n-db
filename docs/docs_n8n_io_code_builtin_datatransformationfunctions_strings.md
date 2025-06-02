[](https://github.com/n8n-io/n8n-docs/edit/main/docs/code/builtin/data-transformation-functions/strings.md "Edit this page")

# Strings[#](#strings "Permanent link")

A reference document listing built-in convenience functions to support data transformation in [expressions](../../../../glossary/#expression-n8n) for strings.

JavaScript in expressions

You can use any JavaScript in expressions. Refer to [Expressions](../../../expressions/) for more information.

### base64Encode(): A base64 encoded string. [#](#string-base64Encode "Permanent link")

Encode a string as base64.

* * *

### base64Decode(): A plain string. [#](#string-base64Decode "Permanent link")

Convert a base64 encoded string to a normal string.

* * *

### extractDomain(): String [#](#string-extractDomain "Permanent link")

Extracts a domain from a string containing a valid URL. Returns undefined if none is found.

* * *

### extractEmail(): String [#](#string-extractEmail "Permanent link")

Extracts an email from a string. Returns undefined if none is found.

* * *

### extractUrl(): String [#](#string-extractUrl "Permanent link")

Extracts a URL from a string. Returns undefined if none is found.

* * *

### extractUrlPath(): String [#](#string-extractUrlPath "Permanent link")

Extract the path but not the root domain from a URL. For example, `"https://example.com/orders/1/details".extractUrlPath()` returns `"/orders/1/details/"`.

* * *

### hash(algo?: Algorithm): String [#](#string-hash "Permanent link")

Returns a string hashed with the given algorithm.

#### Function parameters[#](#function-parameters "Permanent link")

algoOptionalString enum

Which hashing algorithm to use.

Default: `md5`

One of: `md5`, `base64`, `sha1`, `sha224`, `sha256`, `sha384`, `sha512`, `sha3`, `ripemd160`

* * *

### isDomain(): Boolean [#](#string-isDomain "Permanent link")

Checks if a string is a domain.

* * *

### isEmail(): Boolean [#](#string-isEmail "Permanent link")

Checks if a string is an email.

* * *

### isEmpty(): Boolean [#](#string-isEmpty "Permanent link")

Checks if a string is empty.

* * *

### isNotEmpty(): Boolean [#](#string-isNotEmpty "Permanent link")

Checks if a string has content.

* * *

### isNumeric(): Boolean [#](#string-isNumeric "Permanent link")

Checks if a string only contains digits.

* * *

### isUrl(): Boolean [#](#string-isUrl "Permanent link")

Checks if a string is a valid URL.

* * *

### parseJson(): Object [#](#string-parseJson "Permanent link")

Equivalent of `JSON.parse()`. Parses a string as a JSON object.

* * *

### quote(mark?: String): String [#](#string-quote "Permanent link")

Returns a string wrapped in the quotation marks. Default quotation is `"`.

#### Function parameters[#](#function-parameters_1 "Permanent link")

markOptionalString

Which quote mark style to use.

Default: `"`

* * *

### removeMarkdown(): String [#](#string-removeMarkdown "Permanent link")

Removes Markdown formatting from a string.

* * *

### replaceSpecialChars(): String [#](#string-replaceSpecialChars "Permanent link")

Replaces non-ASCII characters in a string with an ASCII representation.

* * *

### removeTags(): String [#](#string-removeTags "Permanent link")

Remove tags, such as HTML or XML, from a string.

* * *

### toBoolean(): Boolean [#](#string-toBoolean "Permanent link")

Convert a string to a boolean. `"false"`, `"0"`, `""`, and `"no"` convert to `false`.

* * *

### toDateTime(): Date [#](#string-toDateTime "Permanent link")

Converts a string to a [Luxon date object](https://docs.n8n.io/code/cookbook/luxon/).

* * *

### toDecimalNumber(): Number [#](#string-toDecimalNumber "Permanent link")

See [toFloat](#string-toFloat)

* * *

### toFloat(): Number [#](#string-toFloat "Permanent link")

Converts a string to a decimal number.

* * *

### toInt(): Number [#](#string-toInt "Permanent link")

Converts a string to an integer.

* * *

### toSentenceCase(): String [#](#string-toSentenceCase "Permanent link")

Formats a string to sentence case.

* * *

### toSnakeCase(): String [#](#string-toSnakeCase "Permanent link")

Formats a string to snake case.

* * *

### toTitleCase(): String [#](#string-toTitleCase "Permanent link")

Formats a string to title case. Will not change already uppercase letters to prevent losing information from acronyms and trademarks such as iPhone or FAANG.

* * *

### toWholeNumber(): Number [#](#string-toWholeNumber "Permanent link")

Converts a string to a whole number.

* * *

### urlDecode(entireString?: Boolean): String [#](#string-urlDecode "Permanent link")

Decodes a URL-encoded string. It decodes any percent-encoded characters in the input string, and replaces them with their original characters.

#### Function parameters[#](#function-parameters_2 "Permanent link")

entireStringOptionalBoolean

Whether to decode characters that are part of the URI syntax (true) or not (false).

* * *

### urlEncode(entireString?: Boolean): String [#](#string-urlEncode "Permanent link")

Encodes a string to be used/included in a URL.

#### Function parameters[#](#function-parameters_3 "Permanent link")

entireStringOptionalBoolean

Whether to encode characters that are part of the URI syntax (true) or not (false).

* * *