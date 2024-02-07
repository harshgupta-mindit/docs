
import Note from "@site/src/components/Note.js";

# Transaction *

## Definition
Product Get api is created to Fetch products from "product" table.
API Endpoints can be access by <b>Admin/Shaad, Distributor and Retailer </b>.

<Note> Text.</Note>

## Transaction Add

**ENDPOINT** - `POST - /transaction` <br/>

### Request Body 
Request body should consist of these key-value pairs mentioned in below table.
| Attribute | Type | Required | Minimum Value | Maximum
| ---- | ---- | --------- | -------- | --------
| `product_no` | string | false | 1 | - 
| `name` | string | false | 1 | -
| `product_price` | decimal(10,2) | false | 1 | -
| `carrier_id` | number | false | 1 | -
| `country_id` | number | false | 1 | -
| `distributor_commission` | decimal(10,2) | false | 1 | -
| `is_active` | number | false | 1 | -

### Response Body
#### Request Full-filed 
```js
{
    success: true,
    message: "Transaction done successfully",
}
```
#### Request Error
```js
{
    success: false,
    message: "Transaction falied",
    error: error.message
}
```


## Transaction Get
**ENDPOINT** - `GET - /transaction` <br/>
### Request Query 
Request query should consist of these key-value pairs mentioned in below table.
### Response Body
#### Request Full-filed 
#### Request Error



