[](https://github.com/n8n-io/n8n-docs/edit/main/docs/try-it-out/quickstart.md "Edit this page")

# The very quick quickstart[#](#the-very-quick-quickstart "Permanent link")

This quickstart gets you started using n8n as quickly as possible. Its allows you to try out the UI and introduces two key features: [workflow templates](../../glossary/#template-n8n) and [expressions](../../glossary/#expression-n8n). It doesn't include detailed explanations or explore concepts in-depth.

In this tutorial, you will:

*   Load a [workflow](../../glossary/#workflow-n8n) from the workflow templates library
*   Add a node and configure it using expressions
*   Run your first workflow

## Step one: Sign up for n8n[#](#step-one-sign-up-for-n8n "Permanent link")

This quickstart uses [n8n Cloud](../../manage-cloud/overview/). A free trial is available for new users. If you haven't already done so, [sign up](https://app.n8n.cloud/register) for an account now.

## Step two: Open a workflow template[#](#step-two-open-a-workflow-template "Permanent link")

n8n provides a quickstart template using training nodes. You can use this to work with fake data and avoid setting up [credentials](../../glossary/#credential-n8n).

1.  Go to [Templates | Very quick quickstart](https://n8n.io/workflows/1700-very-quick-quickstart/).
2.  Select **Use workflow** to view the options for using the template.
3.  Select **Import template to cloud workspace** to load the template into your Cloud instance.

This workflow:

1.  Gets example data from the [Customer Datastore](../../integrations/builtin/app-nodes/n8n-nodes-base.n8ntrainingcustomerdatastore/) node.
2.  Uses the [Edit Fields](../../integrations/builtin/core-nodes/n8n-nodes-base.set/) node to extract only the desired data and assigns that data to variables. In this example, you map the customer name, ID, and description.

The individual pieces in an n8n workflow are called [nodes](../../glossary/#node-n8n). Double click a node to explore its settings and how it processes data.

## Step three: Run the workflow[#](#step-three-run-the-workflow "Permanent link")

Select **Test Workflow**. This runs the workflow, loading the data from the Customer Datastore node, then transforming it with Edit Fields. You need this data available in the workflow so that you can work with it in the next step.

## Step four: Add a node[#](#step-four-add-a-node "Permanent link")

Add a third node to message each customer and tell them their description. Use the Customer Messenger node to send a message to fake recipients.

1.  Select the **Add node** ![Add node icon](../../_images/try-it-out/add-node-small.png) connector on the Edit Fields node.
2.  Search for **Customer Messenger**. n8n shows a list of nodes that match the search.
3.  Select **Customer Messenger (n8n training)** to add the node to the [canvas](../../glossary/#canvas-n8n). n8n opens the node automatically.
4.  Use [expressions](../../code/expressions/) to map in the **Customer ID** and create the **Message**:
    1.  In the **INPUT** panel select the **Schema** tab.
    2.  Drag **Edit Fields1** > **customer\_id** into the **Customer ID** field in the node settings.
    3.  Hover over **Message**. Select the **Expression** tab, then select the expand button ![Add node icon](../../_images/common-icons/open-expression-editor.png) to open the full expressions editor.
    4.  Copy this expression into the editor:
        
        1
        
        `Hi {{ $json.customer_name }}. Your description is: {{ $json.customer_description }}`
        
5.  Close the expressions editor, then close the **Customer Messenger** node by clicking outside the node or selecting **Back to canvas**.
6.  Select **Test Workflow**. n8n runs the workflow.

The complete workflow should look like this:

[View workflow file](/_workflows/try-it-out/quickstart/very-quick-quickstart-workflow.json)

## Next steps[#](#next-steps "Permanent link")

*   Read n8n's [longer try it out tutorial](../tutorial-first-workflow/) for a more complex workflow, and an introduction to more features and n8n concepts.
*   Take the [text courses](../../courses/) or [video courses](../../video-courses/).