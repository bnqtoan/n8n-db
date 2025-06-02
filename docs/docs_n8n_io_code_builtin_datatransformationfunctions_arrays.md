[](https://github.com/n8n-io/n8n-docs/edit/main/docs/code/builtin/data-transformation-functions/arrays.md "Edit this page")

# Arrays[#](#arrays "Permanent link")

A reference document listing built-in convenience functions to support data transformation in [expressions](../../../../glossary/#expression-n8n) for arrays.

JavaScript in expressions

You can use any JavaScript in expressions. Refer to [Expressions](../../../expressions/) for more information.

### average(): Number [#](#array-average "Permanent link")

Returns the value of elements in an array

* * *

### chunk(size: Number): Array [#](#array-chunk "Permanent link")

Splits arrays into chunks with a length of size

#### Function parameters[#](#function-parameters "Permanent link")

sizeRequiredNumber

The size of each chunk.

* * *

### compact(): Array [#](#array-compact "Permanent link")

Removes empty values from the array.

* * *

### difference(arr: Array): Array [#](#array-difference "Permanent link")

Compares two arrays. Returns all elements in the base array that aren't present in arr.

#### Function parameters[#](#function-parameters_1 "Permanent link")

arrRequiredArray

The array to compare to the base array.

* * *

### intersection(arr: Array): Array [#](#array-intersection "Permanent link")

Compares two arrays. Returns all elements in the base array that are present in arr.

#### Function parameters[#](#function-parameters_2 "Permanent link")

arrRequiredArray

The array to compare to the base array.

* * *

### first(): Array item [#](#array-first "Permanent link")

Returns the first element of the array.

* * *

### isEmpty(): Boolean [#](#array-isEmpty "Permanent link")

Checks if the array doesn't have any elements.

* * *

### isNotEmpty(): Boolean [#](#array-isNotEmpty "Permanent link")

Checks if the array has elements.

* * *

### last(): Array item [#](#array-last "Permanent link")

Returns the last element of the array.

* * *

### max(): Number [#](#array-max "Permanent link")

Returns the highest value in an array.

* * *

### merge(arr: Array): Array [#](#array-merge "Permanent link")

Merges two Object-arrays into one array by merging the key-value pairs of each element.

#### Function parameters[#](#function-parameters_3 "Permanent link")

arrRequiredArray

The array to merge into the base array.

* * *

### min(): Number [#](#array-min "Permanent link")

Gets the minimum value from a number-only array.

* * *

### pluck(fieldName?: String): Array [#](#array-pluck "Permanent link")

Returns an array of Objects where keys equal the given field names.

#### Function parameters[#](#function-parameters_4 "Permanent link")

fieldNameOptionalString

The key(s) you want to retrieve. You can enter as many keys as you want, as comma-separated strings.

* * *

### randomItem(): Array item [#](#array-randomItem "Permanent link")

Returns a random element from an array.

* * *

### removeDuplicates(key?: String): Array [#](#array-removeDuplicates "Permanent link")

Removes duplicates from an array.

#### Function parameters[#](#function-parameters_5 "Permanent link")

keyOptionalString

A key, or comma-separated list of keys, to check for duplicates.

* * *

### renameKeys(from: String, to: String): Array [#](#array-renameKeys "Permanent link")

Renames all matching keys in the array. You can rename more than one key by entering a series of comma separated strings, in the pattern oldKeyName, newKeyName.

#### Function parameters[#](#function-parameters_6 "Permanent link")

fromRequiredString

The key you want to rename.

toRequiredString

The new name.

* * *

### smartJoin(keyField: String, nameField: String): Array [#](#array-smartJoin "Permanent link")

Operates on an array of objects where each object contains key-value pairs. Creates a new object containing key-value pairs, where the key is the value of the first pair, and the value is the value of the second pair. Removes non-matching and empty values and trims any whitespace before joining.

#### Function parameters[#](#function-parameters_7 "Permanent link")

keyFieldRequiredString

The key to join.

nameFieldRequiredString

The value to join.

#### Example

##### Basic usage

1
2
3
4

`// Input {{ [{"type":"fruit", "name":"apple"},{"type":"vegetable", "name":"carrot"} ].smartJoin("type","name") }} // Output [Object: {"fruit":"apple","vegetable":"carrot"}]`

* * *

### sum(): Number [#](#array-sum "Permanent link")

Returns the total sum all the values in an array of parsable numbers.

* * *

### toJsonString(): String [#](#array-toJsonString "Permanent link")

Convert an array to a JSON string. Equivalent of `JSON.stringify`.

* * *

### union(arr: Array): Array [#](#array-union "Permanent link")

Concatenates two arrays and then removes duplicate.

#### Function parameters[#](#function-parameters_8 "Permanent link")

arrRequiredArray

The array to compare to the base array.

* * *

### unique(key?: String): Array [#](#array-unique "Permanent link")

Remove duplicates from an array.

#### Function parameters[#](#function-parameters_9 "Permanent link")

keyOptionalString

A key, or comma-separated list of keys, to check for duplicates.

* * *