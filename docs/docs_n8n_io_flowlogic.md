[](https://github.com/n8n-io/n8n-docs/edit/main/docs/flow-logic/index.md "Edit this page")

# Flow logic[#](#flow-logic "Permanent link")

n8n allows you to represent complex logic in your workflows.

This section covers:

*   [Splitting with conditionals](/flow-logic/splitting/)
*   [Merging data](/flow-logic/merging/)
*   [Looping](/flow-logic/looping/)
*   [Waiting](/flow-logic/waiting/)
*   [Sub-workflows](/flow-logic/subworkflows/)
*   [Error handling](/flow-logic/error-handling/)
*   [Execution order in multi-branch workflows](/flow-logic/execution-order/)

## Related sections[#](#related-sections "Permanent link")

You need some understanding of [Data](../data/) in n8n, including [Data structure](../data/data-structure/) and [Data flow within nodes](../data/data-flow-nodes/).

When building your logic, you'll use n8n's [Core nodes](../integrations/builtin/core-nodes/), including:

*   Splitting: [IF](../integrations/builtin/core-nodes/n8n-nodes-base.if/) and [Switch](../integrations/builtin/core-nodes/n8n-nodes-base.switch/).
*   Merging: [Merge](../integrations/builtin/core-nodes/n8n-nodes-base.merge/), [Compare Datasets](../integrations/builtin/core-nodes/n8n-nodes-base.comparedatasets/), and [Code](../integrations/builtin/core-nodes/n8n-nodes-base.code/).
*   Looping: [IF](../integrations/builtin/core-nodes/n8n-nodes-base.if/) and [Loop Over Items](../integrations/builtin/core-nodes/n8n-nodes-base.splitinbatches/).
*   Waiting: [Wait](../integrations/builtin/core-nodes/n8n-nodes-base.wait/).
*   Creating sub-workflows: [Execute Workflow](../integrations/builtin/core-nodes/n8n-nodes-base.executeworkflow/) and [Execute Workflow Trigger](../integrations/builtin/core-nodes/n8n-nodes-base.executeworkflowtrigger/).
*   Error handling: [Stop And Error](../integrations/builtin/core-nodes/n8n-nodes-base.stopanderror/) and [Error Trigger](../integrations/builtin/core-nodes/n8n-nodes-base.errortrigger/).