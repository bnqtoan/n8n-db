[](https://github.com/n8n-io/n8n-docs/edit/main/docs/code/cookbook/code-node/console-log.md "Edit this page")

# Output to the browser console with `console.log()` or `print()` in the Code node[#](#output-to-the-browser-console-with-consolelog-or-print-in-the-code-node "Permanent link")

You can use `console.log()` or `print()` in the Code node to help when writing and debugging your code.

For help opening your browser console, refer to [this guide by Balsamiq](https://balsamiq.com/support/faqs/browserconsole/).

## console.log (JavaScript)[#](#consolelog-javascript "Permanent link")

For technical information on `console.log()`, refer to the [MDN developer docs](https://developer.mozilla.org/en-US/docs/Web/API/Console/log).

For example, copy the following code into a Code node, then open your console and run the node:

1
2

`let a = "apple"; console.log(a);`

## print (Python)[#](#print-python "Permanent link")

For technical information on `print()`, refer to the [Real Python's guide](https://realpython.com/python-print/).

For example, set your Code node **Language** to **Python**, copy the following code into the node, then open your console and run the node:

1
2

`a = "apple" print(a)`

### Handling an output of `[object Object]`[#](#handling-an-output-of-object-object "Permanent link")

If the console displays `[object Object]` when you print, check the data type, then convert it as needed.

To check the data type:

1

`print(type(myData))`

#### JsProxy[#](#jsproxy "Permanent link")

If `type()` outputs `<class 'pyodide.ffi.JsProxy'>`, you need to convert the JsProxy to a native Python object using `to_py()`. This occurs when working with data in the n8n node data structure, such as node inputs and outputs. For example, if you want to print the data from a previous node in the workflow:

1
2
3
4
5
6

`previousNodeData = _("<node-name>").all(); for item in previousNodeData: 	# item is of type <class 'pyodide.ffi.JsProxy'> 	# You need to convert it to a Dict 	itemDict = item.json.to_py() 	print(itemDict)`

Refer to the Pyodide documentation on [JsProxy](https://pyodide.org/en/stable/usage/api/python-api/ffi.html#pyodide.ffi.JsProxy) for more information on this class.