
import Note from "@site/src/components/Note.js";

# Request Credit*

## Definition
Credit request api is created to request Topups in "credit_transaction" table.

**ENDPOINT** - `POST - /transactions/request`

<Note>Request Credit API is only made for Distributor/Retailer and can only access by the same user authority in roleId.</Note>

## Request Structure

### Request Body - Admin
Request body should consist of these attributes mentioned in below table.
| Attribute | Type | Required | Minimum Value | Maximum
| ---- | ---- | --------- | -------- | --------
| `amount` | string | true | 1 | - 
| `account_no` | string | true | 1 | -

### Request Body - Distributor
Request body should consist of these attributes mentioned in below table.
| Attribute | Type | Required | Minimum Value | Maximum
| ---- | ---- | --------- | -------- | --------
| `amount` | string | true | 1 | - 
| `account_no` | string | true | 1 | -


## Response Structure

### Request Full-filed 

```js
{ 
    success: true,
    message: "Credit transaction done successfully"
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
