[](https://github.com/n8n-io/n8n-docs/edit/main/docs/code/cookbook/expressions/check-incoming-data.md "Edit this page")

# Check incoming data[#](#check-incoming-data "Permanent link")

At times, you may want to check the incoming data. If the incoming data doesn't match a condition, you may want to return a different value. For example, you want to check if a variable from the previous node is empty and return a string if it's empty. Use the following code snippet to return `not found` if the variable is empty.

1

`{{$json["variable_name"]? $json["variable_name"] :"not found"}}`

The above expression uses the ternary operator. You can learn more about the ternary operator [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator).

As an alternative, you can use the [nullish coalescing operator (??)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) or the [logical or operator (||)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR):

1
2

`{{ $x ?? "default value" }} {{ $x || "default value" }}`

In either of the above two cases, the value of `$x` will be used if it's set to a non-null, non-false value. The string `default value` is the fallback value.