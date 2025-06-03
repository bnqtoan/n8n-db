[](https://github.com/n8n-io/n8n-docs/edit/main/docs/manage-cloud/concurrency.md "Edit this page")

# Cloud concurrency[#](#cloud-concurrency "Permanent link")

Only for n8n Cloud

This document discusses concurrency in n8n Cloud. Read [self-hosted n8n concurrency control](../../hosting/scaling/concurrency-control/) to learn how concurrency works with self-hosted n8n instances.

Too many concurrent executions can cause performance degradation and unresponsiveness. To prevent this and improve instance stability, n8n sets concurrency limits for production executions in regular mode.

Any executions beyond the limits queue for later processing. These executions remain in the queue until concurrency capacity frees up, and are then processed in FIFO order.

## Concurrency limits[#](#concurrency-limits "Permanent link")

n8n limits the number of concurrent executions for Cloud instances according to their plan:

*   Starter and Trial: 5
*   Pro (10k workflow executions, 15 active workflows): 20
*   Pro (50k workflow executions, 50 active workflows): 50
*   Enterprise (in regular mode): 200

You can view the number of active executions and your plan's concurrency limit at the top of a project's or workflow's executions tab.

## Details[#](#details "Permanent link")

Some other details about concurrency to keep in mind:

*   Concurrency control applies only to production executions: those started from a webhook or trigger node. It doesn't apply to any other kinds, such as manual executions, sub-workflow executions, or error executions.
*   [Test evaluations](../../glossary/#evaluation-n8n) do not count towards concurrency limits. Your test evaluation concurrency limit is equal to, but separate from, your plan's regular concurrency limit.
*   You can't retry queued executions. Cancelling or deleting a queued execution also removes it from the queue.
*   On instance startup, n8n resumes queued executions up to the concurrency limit and re-enqueues the rest.

## Comparison to queue mode[#](#comparison-to-queue-mode "Permanent link")

Feature availability

Queue mode is available for Cloud Enterprise plans. To enable it, [contact n8n](https://n8n-community.typeform.com/to/y9X2YuGa).

Concurrency in queue mode is a separate mechanism from concurrency in regular mode. In queue mode, the concurrency settings determine how many jobs each worker can run in parallel. In regular mode, concurrency limits apply to the entire instance.