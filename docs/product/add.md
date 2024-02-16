
import Note from "@site/src/components/Note.js";

# Add Product

## Definition
Product add api is created to add products in "product" table.

**ENDPOINT** - `POST - /products`

<Note>Add Product API is only made for Admin/Shaad and can only access by the same user authority in roleId.</Note>

## Request Body
Request body should consist of these attributes mentioned in below table.

| Attribute | Type | Required | Minimum Value | Maximum
| ---- | ---- | --------- | -------- | --------
| `name` | string | true | 1 | - 
| `description` | string | true | 1 | -
| `base_price` | number | true | 1 | -
| `carrier_id` | number | true | 1 | -
| `country_id` | number | true | 1 | -
| `commission` | decimal(2,2) | true | 1 | -


## Response Body

### Request Full-filed 

```js
{ 
    success: true,
    message: "Product Added successfully"
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
