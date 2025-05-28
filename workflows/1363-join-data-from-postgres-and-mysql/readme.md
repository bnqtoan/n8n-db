# My Workflow

## Use cases:
- **Print Product Labels with Fabric Details:** Automatically generate and print product labels containing information like product description, grade, fabric composition, and width, especially useful in textile manufacturing or retail.
- **Track Fabric Roll Usage:** When a product is made, the workflow can fetch details of the specific fabric rolls used, associating them with the product for better inventory management and traceability.
- **Integrate Webhook Data with Database Information:** Receive product grade details via webhook, augment it with data from MySQL and PostgreSQL databases, and prepare it for generating product labels.

## How it works:

1.  **Webhook Trigger (emitirEtiqueta):** The workflow starts when a POST request is sent to the `/emitirEtiqueta` endpoint. The request body should contain `id_produto_grade` and `id_movimentacao_detalhe` properties along with an array called `rolos` that should contains an `objectId` property.
2.  **Fetch Configuration (PegarConfiguracaoImpressao):** An HTTP Request node fetches configuration details (presumably database connection settings) from a URL (`http://localhost:1337/parse/config`). It sends a `X-Parse-Application-Id` header.
3.  **Extract Roll IDs (trataRetorno):** A Function node extracts the `objectId` values from the `rolos` array received in the webhook body and formats them into a new `idRolos` array for subsequent database queries.
4.  **Fetch Roll Data (dadosRolo):** A PostgreSQL node queries the `tecido_rolo` table to retrieve information about the fabric rolls based on the `idRolos` extracted in the previous step.  It uses the `objectId` values of the rolls obtained from the webhook trigger.
5.  **Fetch Product Data (dadosProduto):** A MySQL node executes a complex query to retrieve product details, grade information, fabric width, and composition based on the `id_produto_grade` received in the webhook. The query uses the database configuration fetched earlier.
6.  **Merge Data (roloProduto):** The Merge node combines the data retrieved from the PostgreSQL (fabric roll data) and MySQL (product data) nodes, using `id_movimentacao_detalhe` as the key to merge the data.
7.  **Output:** The merged data is now ready for further processing, such as generating a label or sending it to a printing service.

## Services:

*   MySQL
*   PostgreSQL
*   HTTP (Likely a Parse Server instance)

## Hashtags:

#n8n #automation #workflow #fabric #productlabel