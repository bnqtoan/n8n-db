# Spreadsheet to PostgreSQL Product Import

**Use cases**  
1. **Inventory Management** - Automatically import product data (names and EAN codes) from spreadsheets into a PostgreSQL database for centralized inventory tracking.  
2. **Product Catalog Migration** - Batch transfer product information from legacy spreadsheet-based systems to a modern database.  
3. **Data Synchronization** - Keep PostgreSQL product records updated by processing newly uploaded spreadsheet files.  

**How it works**  
1. **Read Binary File**: Loads an XLS spreadsheet (`spreadsheet.xls`) from the server.  
2. **Spreadsheet File**: Converts the binary spreadsheet data into structured JSON format.  
3. **Insert Rows1**: Imports the processed product data (name and EAN columns) into a PostgreSQL `product` table.  

**Services**  
- PostgreSQL  

**Hashtags**  
#n8n #PostgreSQL #DataImport #Automation #Workflow
