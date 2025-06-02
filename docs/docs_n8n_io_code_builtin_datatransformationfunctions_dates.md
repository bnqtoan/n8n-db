[](https://github.com/n8n-io/n8n-docs/edit/main/docs/code/builtin/data-transformation-functions/dates.md "Edit this page")

# Dates[#](#dates "Permanent link")

A reference document listing built-in convenience functions to support data transformation in [expressions](../../../../glossary/#expression-n8n) for dates.

JavaScript in expressions

You can use any JavaScript in expressions. Refer to [Expressions](../../../expressions/) for more information.

### beginningOf(unit?: DurationUnit): Date [#](#date-beginningOf "Permanent link")

Transforms a Date to the start of the given time period. Returns either a JavaScript Date or Luxon Date, depending on input.

#### Function parameters[#](#function-parameters "Permanent link")

unitOptionalString enum

A valid string specifying the time unit.

Default: `week`

One of: `second`, `minute`, `hour`, `day`, `week`, `month`, `year`

* * *

### endOfMonth(): Date [#](#date-endOfMonth "Permanent link")

Transforms a Date to the end of the month.

* * *

### extract(datePart?: DurationUnit): Number [#](#date-extract "Permanent link")

Extracts the part defined in datePart from a Date. Returns either a JavaScript Date or Luxon Date, depending on input.

#### Function parameters[#](#function-parameters_1 "Permanent link")

datePartOptionalString enum

A valid string specifying the time unit.

Default: `week`

One of: `second`, `minute`, `hour`, `day`, `week`, `month`, `year`

* * *

### format(fmt: TimeFormat): String [#](#date-format "Permanent link")

Formats a Date in the given structure

#### Function parameters[#](#function-parameters_2 "Permanent link")

fmtRequiredString enum

A valid string specifying the time format. Refer to [Luxon | Table of tokens](https://moment.github.io/luxon/#/formatting?id=table-of-tokens) for formats.

* * *

### isBetween(date1: Date | DateTime, date2: Date | DateTime): Boolean [#](#date-isBetween "Permanent link")

Checks if a Date is between two given dates.

#### Function parameters[#](#function-parameters_3 "Permanent link")

date1RequiredDate or DateTime

The first date in the range.

date2RequiredDate or DateTime

The last date in the range.

* * *

### isDst(): Boolean [#](#date-isDst "Permanent link")

Checks if a Date is within Daylight Savings Time.

* * *

### isInLast(n?: Number, unit?: DurationUnit): Boolean [#](#date-isInLast "Permanent link")

Checks if a Date is within a given time period.

#### Function parameters[#](#function-parameters_4 "Permanent link")

nOptionalNumber

The number of units. For example, to check if the date is in the last nine weeks, enter 9.

Default: `0`

unitOptionalString enum

A valid string specifying the time unit.

Default: `minutes`

One of: `second`, `minute`, `hour`, `day`, `week`, `month`, `year`

* * *

### isWeekend(): Boolean [#](#date-isWeekend "Permanent link")

Checks if the Date falls on a Saturday or Sunday.

* * *

### minus(n: Number, unit?: DurationUnit): Date [#](#date-minus "Permanent link")

Subtracts a given time period from a Date. Returns either a JavaScript Date or Luxon Date, depending on input.

#### Function parameters[#](#function-parameters_5 "Permanent link")

nRequiredNumber

The number of units. For example, to subtract nine seconds, enter 9 here.

unitOptionalString enum

A valid string specifying the time unit.

Default: `milliseconds`

One of: `second`, `minute`, `hour`, `day`, `week`, `month`, `year`

* * *

### plus(n: Number, unit?: DurationUnit): Date [#](#date-plus "Permanent link")

Adds a given time period to a Date. Returns either a JavaScript Date or Luxon Date, depending on input.

#### Function parameters[#](#function-parameters_6 "Permanent link")

nRequiredNumber

The number of units. For example, to add nine seconds, enter 9 here.

unitOptionalString enum

A valid string specifying the time unit.

Default: `milliseconds`

One of: `second`, `minute`, `hour`, `day`, `week`, `month`, `year`

* * *

### toDateTime(): Date [#](#date-toDateTime "Permanent link")

Converts a JavaScript date to a [Luxon date object](https://docs.n8n.io/code/cookbook/luxon/).

* * *