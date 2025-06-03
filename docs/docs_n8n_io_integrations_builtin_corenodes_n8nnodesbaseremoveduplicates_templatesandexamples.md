[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/core-nodes/n8n-nodes-base.removeduplicates/templates-and-examples.md "Edit this page")

# Templates and examples[#](#templates-and-examples "Permanent link")

Here are some templates and examples for the [Remove Duplicates node](../).

Continuous examples

The examples included in this section are a sequence. Follow from one to another to avoid unexpected results.

## Templates[#](#templates "Permanent link")

**Send Personalized WhatsApp Templates Triggered by KlickTipp with Auto-Responses**

by KlickTipp

[View template details](https://n8n.io/workflows/3937-send-personalized-whatsapp-templates-triggered-by-klicktipp-with-auto-responses/)

**Generate Dynamic Images with Text & Templates using ImageKit.**

by Ahmed Alnaqa

[View template details](https://n8n.io/workflows/3519-generate-dynamic-images-with-text-and-templates-using-imagekit/)

**Sync Dartagnan Email Templates to Braze**

by Vincent LE ROUX

[View template details](https://n8n.io/workflows/3081-sync-dartagnan-email-templates-to-braze/)

[Browse Templates and examples integration templates](https://n8n.io/integrations/remove-duplicates/), or [search all templates](https://n8n.io/workflows/)

## Set up sample data using the Code node[#](#set-up-sample-data-using-the-code-node "Permanent link")

Create a workflow with some example input data to try out the Remove Duplicates node.

1.  Add a Code node to the canvas and connect it to the Manual Trigger node.
2.  In the Code node, set **Mode** to **Run Once for Each Item** and **Language** to **JavaScript**.
3.  Paste the following JavaScript code snippet in the **JavaScript** field:
    
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
    20
    21
    22
    
    `let data =[];  return {   data: [     { id: 1, name: 'Taylor Swift', job: 'Pop star', last_updated: '2024-09-20T10:12:43.493Z' },     { id: 2, name: 'Ed Sheeran', job: 'Singer-songwriter', last_updated: '2024-10-05T08:30:59.493Z' },     { id: 3, name: 'Adele', job: 'Singer-songwriter', last_updated: '2024-10-07T14:15:59.493Z' },     { id: 4, name: 'Bruno Mars', job: 'Singer-songwriter', last_updated: '2024-08-25T17:45:12.493Z' },     { id: 1, name: 'Taylor Swift', job: 'Pop star', last_updated: '2024-09-20T10:12:43.493Z' },  // duplicate     { id: 5, name: 'Billie Eilish', job: 'Singer-songwriter', last_updated: '2024-09-10T09:30:12.493Z' },     { id: 6, name: 'Katy Perry', job: 'Pop star', last_updated: '2024-10-08T12:30:45.493Z' },     { id: 2, name: 'Ed Sheeran', job: 'Singer-songwriter', last_updated: '2024-10-05T08:30:59.493Z' },  // duplicate     { id: 7, name: 'Lady Gaga', job: 'Pop star', last_updated: '2024-09-15T14:45:30.493Z' },     { id: 8, name: 'Rihanna', job: 'Pop star', last_updated: '2024-10-01T11:50:22.493Z' },     { id: 3, name: 'Adele', job: 'Singer-songwriter', last_updated: '2024-10-07T14:15:59.493Z' },  // duplicate     //{ id: 9, name: 'Tom Hanks', job: 'Actor', last_updated: '2024-10-17T13:58:31.493Z' },     //{ id: 0, name: 'Madonna', job: 'Pop star', last_updated: '2024-10-17T17:11:38.493Z' },     //{ id: 15, name: 'Bob Dylan', job: 'Folk singer', last_updated: '2024-09-24T08:03:16.493Z'},     //{ id: 10, name: 'Harry Nilsson', job: 'Singer-songwriter', last_updated: '2020-10-17T17:11:38.493Z' },     //{ id: 11, name: 'Kylie Minogue', job: 'Pop star', last_updated: '2024-10-24T08:03:16.493Z'},   ] }`
    
4.  Add a Split Out node to the canvas and connect it to the Code node.
5.  In the Split Out node, enter `data` in the **Fields To Split Out** field.

## Removing duplicates from the current input[#](#removing-duplicates-from-the-current-input "Permanent link")

1.  Add a Remove Duplicates node to the canvas and connect it to the Split Out node. Choose **Remove items repeated within current input** as the **Action** to start.
2.  Open the Remove Duplicates node and ensure that the **Operation** is set to **Remove Items Repeated Within Current Input**.
3.  Choose **All fields** in the **Compare** field.
4.  Select **Execute step** to run the Remove Duplicates node, removing duplicated data in the current input.

n8n removes the items that have the same data across all fields. Your output in table view should look like this:

**id**

**name**

**job**

**last\_updated**

1

Taylor Swift

Pop star

2024-09-20T10:12:43.493Z

2

Ed Sheeran

Singer-songwriter

2024-10-05T08:30:59.493Z

3

Adele

Singer-songwriter

2024-10-07T14:15:59.493Z

4

Bruno Mars

Singer-songwriter

2024-08-25T17:45:12.493Z

5

Billie Eilish

Singer-songwriter

2024-09-10T09:30:12.493Z

6

Katy Perry

Pop star

2024-10-08T12:30:45.493Z

7

Lady Gaga

Pop star

2024-09-15T14:45:30.493Z

8

Rihanna

Pop star

2024-10-01T11:50:22.493Z

5.  Open the Remove Duplicates node again and change the **Compare** parameter to **Selected Fields**.
6.  In the **Fields To Compare** field, enter `job`.
7.  Select **Execute step** to run the Remove Duplicates node, removing duplicated data in the current input.

n8n removes the items in the current input that have the same `job` data. Your output in table view should look like this:

**id**

**name**

**job**

**last\_updated**

1

Taylor Swift

Pop star

2024-09-20T10:12:43.493Z

2

Ed Sheeran

Singer-songwriter

2024-10-05T08:30:59.493Z

## Keep items where the value is new[#](#keep-items-where-the-value-is-new "Permanent link")

1.  Open the Remove Duplicates node and set the **Operation** to **Remove Items Processed in Previous Executions**.
2.  Set the **Keep Items Where** parameter to **Value Is New**.
3.  Set the **Value to Dedupe On** parameter to `{{ $json.name }}`.
4.  On the canvas, select **Execute workflow** to run the workflow. Open the Remove Duplicates node to examine the results.

n8n compares the current input data to the items stored from previous executions. Since this is the first time running the Remove Duplicates node with this operation, n8n processes all data items and places them into the **Kept** output tab. The order of the items may be different than the order in the input data:

**id**

**name**

**job**

**last\_updated**

1

Taylor Swift

Pop star

2024-09-20T10:12:43.493Z

1

Taylor Swift

Pop star

2024-09-20T10:12:43.493Z

2

Ed Sheeran

Singer-songwriter

2024-10-05T08:30:59.493Z

2

Ed Sheeran

Singer-songwriter

2024-10-05T08:30:59.493Z

3

Adele

Singer-songwriter

2024-10-07T14:15:59.493Z

3

Adele

Singer-songwriter

2024-10-07T14:15:59.493Z

4

Bruno Mars

Singer-songwriter

2024-08-25T17:45:12.493Z

5

Billie Eilish

Singer-songwriter

2024-09-10T09:30:12.493Z

6

Katy Perry

Pop star

2024-10-08T12:30:45.493Z

7

Lady Gaga

Pop star

2024-09-15T14:45:30.493Z

8

Rihanna

Pop star

2024-10-01T11:50:22.493Z

Items are only compared against previous executions

The current input items are only compared against the stored items from previous executions. This means that items repeated within the current input aren't removed in this mode of operation. If you need to remove duplicate items within the current input _and_ across executions, connect two Remove Duplicate nodes together sequentially. Set the first to use the **Remove Items Repated Within Current Input** operation and the second to use the **Remove Items Processed in Previous Executions** operation.

5.  Open the Code node and uncomment (remove the `//` from) the line for "Tom Hanks."
6.  On the canvas, select **Execute workflow** again. Open the Remove Duplicates node again to examine the results.

n8n compares the current input data to the items stored from previous executions. This time, the **Kept** tab contains the one new record from the Code node:

**id**

**name**

**job**

**last\_updated**

9

Tom Hanks

Actor

2024-10-17T13:58:31.493Z

The **Discarded** tab contains the items processed by the previous execution:

**id**

**name**

**job**

**last\_updated**

1

Taylor Swift

Pop star

2024-09-20T10:12:43.493Z

1

Taylor Swift

Pop star

2024-09-20T10:12:43.493Z

2

Ed Sheeran

Singer-songwriter

2024-10-05T08:30:59.493Z

2

Ed Sheeran

Singer-songwriter

2024-10-05T08:30:59.493Z

3

Adele

Singer-songwriter

2024-10-07T14:15:59.493Z

3

Adele

Singer-songwriter

2024-10-07T14:15:59.493Z

4

Bruno Mars

Singer-songwriter

2024-08-25T17:45:12.493Z

5

Billie Eilish

Singer-songwriter

2024-09-10T09:30:12.493Z

6

Katy Perry

Pop star

2024-10-08T12:30:45.493Z

7

Lady Gaga

Pop star

2024-09-15T14:45:30.493Z

8

Rihanna

Pop star

2024-10-01T11:50:22.493Z

Before continuing, clear the duplication history to get ready for the next example:

7.  Open the Remove Duplicates node and set the **Operation** to **Clear Deduplication History**.
8.  Select **Execute step** to clear the current duplication history.

## Keep items where the value is higher than any previous value[#](#keep-items-where-the-value-is-higher-than-any-previous-value "Permanent link")

1.  Open the Remove Duplicates node and set the **Operation** to **Remove Items Processed in Previous Executions**.
2.  Set the **Keep Items Where** parameter to **Value Is Higher than Any Previous Value**.
3.  Set the **Value to Dedupe On** parameter to `{{ $json.id }}`.
4.  On the canvas, select **Execute workflow** to run the workflow. Open the Remove Duplicates node to examine the results.

n8n compares the current input data to the items stored from previous executions. Since this is the first time running the Remove Duplicates node after clearing the history, n8n processes all data items and places them into the **Kept** output tab. The order of the items may be different than the order in the input data:

**id**

**name**

**job**

**last\_updated**

1

Taylor Swift

Pop star

2024-09-20T10:12:43.493Z

1

Taylor Swift

Pop star

2024-09-20T10:12:43.493Z

2

Ed Sheeran

Singer-songwriter

2024-10-05T08:30:59.493Z

2

Ed Sheeran

Singer-songwriter

2024-10-05T08:30:59.493Z

3

Adele

Singer-songwriter

2024-10-07T14:15:59.493Z

3

Adele

Singer-songwriter

2024-10-07T14:15:59.493Z

4

Bruno Mars

Singer-songwriter

2024-08-25T17:45:12.493Z

5

Billie Eilish

Singer-songwriter

2024-09-10T09:30:12.493Z

6

Katy Perry

Pop star

2024-10-08T12:30:45.493Z

7

Lady Gaga

Pop star

2024-09-15T14:45:30.493Z

8

Rihanna

Pop star

2024-10-01T11:50:22.493Z

9

Tom Hanks

Actor

2024-10-17T13:58:31.493Z

5.  Open the Code node and uncomment (remove the `//` from) the lines for "Madonna" and "Bob Dylan."
6.  On the canvas, select **Execute workflow** again. Open the Remove Duplicates node again to examine the results.

n8n compares the current input data to the items stored from previous executions. This time, the **Kept** tab contains a single entry for "Bob Dylan." n8n keeps this item because its `id` column value (15) is higher than any previous values (the previous maximum value was 9):

**id**

**name**

**job**

**last\_updated**

15

Bob Dylan

Folk singer

2024-09-24T08:03:16.493Z

The **Discarded** tab contains the 13 items with an `id` column value equal to or less than the previous maximum value (9). Even though it's new, this table includes the entry for "Madonna" because its `id` value isn't larger than the previous maximum value:

**id**

**name**

**job**

**last\_updated**

0

Madonna

Pop star

2024-10-17T17:11:38.493Z

1

Taylor Swift

Pop star

2024-09-20T10:12:43.493Z

1

Taylor Swift

Pop star

2024-09-20T10:12:43.493Z

2

Ed Sheeran

Singer-songwriter

2024-10-05T08:30:59.493Z

2

Ed Sheeran

Singer-songwriter

2024-10-05T08:30:59.493Z

3

Adele

Singer-songwriter

2024-10-07T14:15:59.493Z

3

Adele

Singer-songwriter

2024-10-07T14:15:59.493Z

4

Bruno Mars

Singer-songwriter

2024-08-25T17:45:12.493Z

5

Billie Eilish

Singer-songwriter

2024-09-10T09:30:12.493Z

6

Katy Perry

Pop star

2024-10-08T12:30:45.493Z

7

Lady Gaga

Pop star

2024-09-15T14:45:30.493Z

8

Rihanna

Pop star

2024-10-01T11:50:22.493Z

9

Tom Hanks

Actor

2024-10-17T13:58:31.493Z

Before continuing, clear the duplication history to get ready for the next example:

7.  Open the Remove Duplicates node and set the **Operation** to **Clear Deduplication History**.
8.  Select **Execute step** to clear the current duplication history.

## Keep items where the value is a date later than any previous date[#](#keep-items-where-the-value-is-a-date-later-than-any-previous-date "Permanent link")

1.  Open the Remove Duplicates node and set the **Operation** to **Remove Items Processed in Previous Executions**.
2.  Set the **Keep Items Where** parameter to **Value Is a Date Later than Any Previous Date**.
3.  Set the **Value to Dedupe On** parameter to `{{ $json.last_updated }}`.
4.  On the canvas, select **Execute workflow** to run the workflow. Open the Remove Duplicates node to examine the results.

n8n compares the current input data to the items stored from previous executions. Since this is the first time running the Remove Duplicates node after clearing the history, n8n processes all data items and places them into the **Kept** output tab. The order of the items may be different than the order in the input data:

**id**

**name**

**job**

**last\_updated**

0

Madonna

Pop star

2024-10-17T17:11:38.493Z

1

Taylor Swift

Pop star

2024-09-20T10:12:43.493Z

1

Taylor Swift

Pop star

2024-09-20T10:12:43.493Z

2

Ed Sheeran

Singer-songwriter

2024-10-05T08:30:59.493Z

2

Ed Sheeran

Singer-songwriter

2024-10-05T08:30:59.493Z

3

Adele

Singer-songwriter

2024-10-07T14:15:59.493Z

3

Adele

Singer-songwriter

2024-10-07T14:15:59.493Z

4

Bruno Mars

Singer-songwriter

2024-08-25T17:45:12.493Z

5

Billie Eilish

Singer-songwriter

2024-09-10T09:30:12.493Z

6

Katy Perry

Pop star

2024-10-08T12:30:45.493Z

7

Lady Gaga

Pop star

2024-09-15T14:45:30.493Z

8

Rihanna

Pop star

2024-10-01T11:50:22.493Z

9

Tom Hanks

Actor

2024-10-17T13:58:31.493Z

15

Bob Dylan

Folk singer

2024-09-24T08:03:16.493Z

5.  Open the Code node and uncomment (remove the `//` from) the lines for "Harry Nilsson" and "Kylie Minogue."

6.  On the canvas, select **Execute workflow** again. Open the Remove Duplicates node again to examine the results.

n8n compares the current input data to the items stored from previous executions. This time, the **Kept** tab contains a single entry for "Kylie Minogue." n8n keeps this item because its `last_updated` column value (`2024-10-24T08:03:16.493Z`) is later than any previous values (the previous latest date was `2024-10-17T17:11:38.493Z`):

**id**

**name**

**job**

**last\_updated**

11

Kylie Minogue

Pop star

2024-10-24T08:03:16.493Z

The **Discarded** tab contains the 15 items with a `last_updated` column value equal to or earlier than the previous latest date (`2024-10-17T17:11:38.493Z`). Even though it's new, this table includes the entry for "Harry Nilsson" because its `last_updated` value isn't later than the previous maximum value:

**id**

**name**

**job**

**last\_updated**

10

Harry Nilsson

Singer-songwriter

2020-10-17T17:11:38.493Z

0

Madonna

Pop star

2024-10-17T17:11:38.493Z

1

Taylor Swift

Pop star

2024-09-20T10:12:43.493Z

1

Taylor Swift

Pop star

2024-09-20T10:12:43.493Z

2

Ed Sheeran

Singer-songwriter

2024-10-05T08:30:59.493Z

2

Ed Sheeran

Singer-songwriter

2024-10-05T08:30:59.493Z

3

Adele

Singer-songwriter

2024-10-07T14:15:59.493Z

3

Adele

Singer-songwriter

2024-10-07T14:15:59.493Z

4

Bruno Mars

Singer-songwriter

2024-08-25T17:45:12.493Z

5

Billie Eilish

Singer-songwriter

2024-09-10T09:30:12.493Z

6

Katy Perry

Pop star

2024-10-08T12:30:45.493Z

7

Lady Gaga

Pop star

2024-09-15T14:45:30.493Z

8

Rihanna

Pop star

2024-10-01T11:50:22.493Z

9

Tom Hanks

Actor

2024-10-17T13:58:31.493Z

15

Bob Dylan

Folk singer

2024-09-24T08:03:16.493Z