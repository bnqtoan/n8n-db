[](https://github.com/n8n-io/n8n-docs/edit/main/docs/code/builtin/data-transformation-functions/objects.md "Edit this page")

# Objects[#](#objects "Permanent link")

A reference document listing built-in convenience functions to support data transformation in expressions for objects.

JavaScript in expressions

You can use any JavaScript in expressions. Refer to [Expressions](../../../expressions/) for more information.

### isEmpty(): Boolean [#](#object-isEmpty "Permanent link")

Checks if the Object has no key-value pairs.

* * *

### merge(object: Object): Object [#](#object-merge "Permanent link")

Merges two Objects into a single Object using the first as the base Object. If a key exists in both Objects, the key in the base Object takes precedence.

#### Function parameters[#](#function-parameters "Permanent link")

objectRequiredObject

The Object to merge with the base Object.

* * *

### hasField(fieldName: String): Boolean [#](#object-hasField "Permanent link")

Checks if the Object has a given field. Only top-level keys are supported.

#### Function parameters[#](#function-parameters_1 "Permanent link")

fieldNameRequiredString

The field to search for.

* * *

### removeField(key: String): Object [#](#object-removeField "Permanent link")

Removes a given field from the Object

#### Function parameters[#](#function-parameters_2 "Permanent link")

keyRequiredString

The field key of the field to remove.

* * *

### removeFieldsContaining(value: String): Object [#](#object-removeFieldsContaining "Permanent link")

Removes fields with a given value from the Object.

#### Function parameters[#](#function-parameters_3 "Permanent link")

valueRequiredString

The field value of the field to remove.

* * *

### keepFieldsContaining(value: String): Object [#](#object-keepFieldsContaining "Permanent link")

Removes fields that do not match the given value from the Object.

#### Function parameters[#](#function-parameters_4 "Permanent link")

valueRequiredString

The field value of the field to keep.

* * *

### compact(): Object [#](#object-compact "Permanent link")

Removes empty values from an Object.

* * *

### toJsonString(): String [#](#object-toJsonString "Permanent link")

Convert an object to a JSON string. Equivalent of `JSON.stringify`.

* * *

### urlEncode(): String [#](#object-urlEncode "Permanent link")

Transforms an Object into a URL parameter list. Only top-level keys are supported.

* * *