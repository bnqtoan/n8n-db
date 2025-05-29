# Format US Phone Number

## Use cases:

- **Standardizing phone number input:**  Automatically formats phone numbers entered in various formats (e.g., with or without dashes, parentheses, country codes) into a consistent format for storage in a database or CRM.
- **Preparing phone numbers for SMS or calling services:** Converts raw phone numbers into the E.164 format required by many communication platforms.
- **Validating phone number length and content:** This workflow checks the phone number's validity by verifying its length and whether the initial digit is valid for US numbers.

## How it works:

1.  **Trigger:** The workflow starts when executed by another workflow, receiving a "Phone Number" as input.
2.  **Strip phone number formatting:** The "Strip phone number formatting" node removes all non-numeric characters from the input, ensuring only digits remain.
3.  **Check number of digits in phone number:** The "Check number of digits in phone number" node evaluates the length of the stripped number and routes it based on the following conditions:
    *   **Full Number:** If the phone number has greater than or equal to 11 digits.
    *   **Number:** If the phone number has exactly 10 digits.
    *   **Invalid Number:** If the phone number has less than 10 digits.
    *   **Not a Number:** If the phone number is empty.
4.  **Check if first digit is valid country code:** The "Check if first digit is valid country code" node checks if the first digit is a valid country code (=1).
5.  **Add valid country code:** If the first digit is not a valid country code, the "Add valid country code" adds the "+1" country code at the beginning of the number.
6.  **Clear invalid number:** If the "Check number of digits in phone number" finds a non-valid phone number, the "Clear invalid number" node clears the phone number field and proceeds with the formatting.
7.  **Format phone numbers:** The "Format phone numbers" node formats the phone number into several standard formats:
    *   Phone Number (Input)
    *   Phone Number
    *   Phone Number (E-164)
    *   Phone Number (National)
    *   Phone Number (Full National)
    *   Phone Number (International)
    *   Extension
    *   Extension (String)

## Services:

-   None. This workflow only relies on n8n's built-in nodes for data manipulation.

## Hashtags:

#n8n #automation #phonenumber #formatting #validation
