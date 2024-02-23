
import Note from "@site/src/components/Note.js";

# Add Topup

## Definition
Topup add api is created to add Topups in "topup_transaction" table.

**ENDPOINT** - `POST - /topups`

<Note>Add Topup API is only made for Admin/Distributor and can only access by the same user authority in roleId.</Note>

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
    message: "Transaction done successfully"
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
