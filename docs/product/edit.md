
import Note from "@site/src/components/Note.js";

# Edit Product

## Definition
Product Edit api is created to Edit products in "product" table.

**ENDPOINT** - `Put - /products/:id`

<Note>Edit Product API is only made for Admin/Shaad, Distributor, Retailer and can only access by the same user authority in roleId.</Note>

## Request Body
Request body should consist of these attributes mentioned in below table.

<Note>`product_id` value in params is required for `PUT - /product` for all user roles.</Note>

### Admin/Shaad - Request Body 
| Attribute | Type | Required | Minimum Value | Maximum
| ---- | ---- | --------- | -------- | --------
| `commission` | decimal(2,2) | false | 1 | - 
| `is_active` | number | false | 1 | -

### Distributor - Request Body 
| Attribute | Type | Required | Minimum Value | Maximum
| ---- | ---- | --------- | -------- | --------
| `recommended_commission` | decimal(2,2) | true | 1 | - 
| `final_commission` | decimal(2,2) | true | 1 | -
| `retailer_id` | number | true | 1 | -

### Retailer - Request Body 
| Attribute | Type | Required | Minimum Value | Maximum
| ---- | ---- | --------- | -------- | --------
| `recommended_commission` | decimal(2,2) | true | 1 | - 
| `final_commission` | decimal(2,2) | true | 1 | -


## Response Body

### Request Full-filed 

```js
{ 
    success: true,
    message: "Product Updated successfully"
}

```

### Request Error

```js
{
    success: false,
    message: error.message,
}
```
## `Developer - Harsh`



