
import Note from "@site/src/components/Note.js";

# Update Credit Request

## Definition
Update Credit Request api is created to update credit type status in "credit_transaction" table.

**ENDPOINT** - `PUT - /transactions/request/:id`

<Note>Update Credit Request API is only made for Admin/Distributor and can only access by the same user authority in roleId.</Note>
<Note backgroundColor="#9FFF4A">"/:id" is the unique `transaction_id`</Note>

## Request Structure

### Request Body - Admin
Request body should consist of these attributes mentioned in below table.
| Attribute | Type | Required | Minimum Value | Maximum
| ---- | ---- | --------- | -------- | --------
| `credit_status_type_id` | number | true | 1 | -

### Request Body - Distributor
Request body should consist of these attributes mentioned in below table.
| Attribute | Type | Required | Minimum Value | Maximum
| ---- | ---- | --------- | -------- | --------
| `credit_status_type_id` | number | true | 1 | -

## Response Structure

### Request Full-filed 
```js
{ 
    success: true,
    message: "Credit transaction updated successfully"
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
