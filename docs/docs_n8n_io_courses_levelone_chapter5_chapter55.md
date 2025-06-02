[](https://github.com/n8n-io/n8n-docs/edit/main/docs/courses/level-one/chapter-5/chapter-5.5.md "Edit this page")

# 5\. Calculating Booked Orders[#](#5-calculating-booked-orders "Permanent link")

In this step of the workflow you will learn how n8n structures data and how to add custom JavaScript code to perform calculations using the Code node. After this step, your workflow should look like this:

[View workflow file](/_workflows//courses/level-one/chapter-5/chapter-5.5.json)

The next step in Nathan's workflow is to calculate two values from the booked orders:

*   The total number of booked orders
*   The total value of all booked orders

To calculate data and add more functionality to your workflows you can use the Code node, which lets you write custom JavaScript code.

## About the Code node[#](#about-the-code-node "Permanent link")

Code node modes

The Code node has two operational **modes**, depending on how you want to process items:

*   **Run Once for All Items** allows you to write code to process all input items at once, as a group.
*   **Run Once for Each Item** executes your code once for each input item.

Learn more about how to use the [Code node](../../../../integrations/builtin/core-nodes/n8n-nodes-base.code/).

In n8n, the data that's passed between nodes is an array of objects with the following JSON structure:

 1
 2
 3
 4
 5
 6
 7
 8
 9
10
11
12
13
14
15
16
17
18
19

`[     {    	 "json": {   [](#__code_0_annotation_1)     		 "apple": "beets",    		 "carrot": {    			 "dill": 1    		 }    	 },    	 "binary": {   [](#__code_0_annotation_2)     		 "apple-picture": {   [](#__code_0_annotation_3)     			 "data": "....",   [](#__code_0_annotation_4)     			 "mimeType": "image/png",   [](#__code_0_annotation_5)     			 "fileExtension": "png",   [](#__code_0_annotation_6)     			 "fileName": "example.png",   [](#__code_0_annotation_7)     		 }    	 }     },     ... ]`

You can learn more about the expected format on the [n8n data structure](../../../../data/data-structure/) page.

## Configure the Code node[#](#configure-the-code-node "Permanent link")

Now let's see how to accomplish Nathan's task using the Code node.

In your workflow, add a **Code node** connected to the `false` branch of the **If node**.

With the Code node window open, configure these parameters:

*   **Mode**: Select **Run Once for All Items**.
*   **Language**: Select **JavaScript**.
    
    Using Python in code nodes
    
    While we use JavaScript below, you can also use Python in the Code node. To learn more, refer to the [Code node](../../../../code/code-node/) documentation.
    
*   Copy the Code below and paste it into the **Code** box to replace the existing code:
    
    1
    2
    3
    4
    5
    6
    7
    8
    9
    
    `let items = $input.all(); let totalBooked = items.length; let bookedSum = 0;  for (let i=0; i < items.length; i++) {   bookedSum = bookedSum + items[i].json.orderPrice; }  return [{ json: {totalBooked, bookedSum} }];`
    

Notice the format in which we return the results of the calculation:

1

`return [{ json: {totalBooked, bookedSum} }]`

Data structure error

If you don't use the correct data structure, you will get an error message: `Error: Always an Array of items has to be returned!`

Now select **Execute step** and you should see the following results:

[![Code node output](/_images/courses/level-one/chapter-five/l1-c5-5-5-code-node.png)](https://docs.n8n.io/_images/courses/level-one/chapter-five/l1-c5-5-5-code-node.png)

_Code node output_

## What's next?[#](#whats-next "Permanent link")

**Nathan 🙋**: Wow, the Code node is powerful! This means that if I have some basic JavaScript skills I can power up my workflows.

**You 👩‍🔧**: Yes! You can progress from no-code to low-code!

**Nathan 🙋**: Now, how do I send the calculations for the booked orders to my team's Discord channel?

**You 👩‍🔧**: There's an n8n node for that. I'll set it up in the next step.