[](https://github.com/n8n-io/n8n-docs/edit/main/docs/code/builtin/date-time.md "Edit this page")

# Built-in date and time methods[#](#built-in-date-and-time-methods "Permanent link")

Methods for working with date and time.

Python support

You can use Python in the Code node. It isn't available in expressions.

[JavaScript](#__tabbed_1_1)[Python](#__tabbed_1_2)

Method

Description

Available in Code node?

`$now`

A Luxon object containing the current timestamp. Equivalent to `DateTime.now()`.

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

`$today`

A Luxon object containing the current timestamp, rounded down to the day. Equivalent to `DateTime.now().set({ hour: 0, minute: 0, second: 0, millisecond: 0 })`.

![✅](https://cdn.jsdelivr.net/gh/jdecked/twemoji@15.1.0/assets/svg/2705.svg ":white_check_mark:")

Method

Description

`_now`

A Luxon object containing the current timestamp. Equivalent to `DateTime.now()`.

`_today`

A Luxon object containing the current timestamp, rounded down to the day. Equivalent to `DateTime.now().set({ hour: 0, minute: 0, second: 0, millisecond: 0 })`.

n8n passes dates between nodes as strings, so you need to parse them. Luxon helps you do this. Refer to [Date and time with Luxon](../../cookbook/luxon/) for more information.

n8n provides built-in convenience functions to support data transformation in expressions for dates. Refer to [Data transformation functions | Dates](../data-transformation-functions/dates/) for more information.