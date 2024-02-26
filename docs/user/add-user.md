
import Note from "@site/src/components/Note.js";

# Add User

## Definition
User add api is created to add any users within shaad in "Users" table.
<Note backgroundColor="#FF6A4A">Admin cannot be created.</Note>

**ENDPOINT** - `POST - /users`

<Note>Add Users API is only made for Admin/Shaad and Distributor and can only access by the same user authority in roleId.</Note>

## Request Body
Request body should consist of these attributes mentioned in below table.

| Attribute | Type | Required | Minimum Value | Maximum
| ---- | ---- | --------- | -------- | --------
| `name` | string | true | 1 | - 
| `email` | string | true | 1 | -
| `commission` | decimal(2,2) | true | 1 | -
| `address` | string | true | 1 | -
| `city` | string | true | 1 | -
| `state_id` | number | true | 1 | -
| `country_id` | number | true | 1 | -
| `zip` | number | true | 1 | -
| `phone_number` | number | true | 1 | -
| `phone_code` | number | true | 1 | -
| `credit_limit` | decimal(10,4) | true | 1 | -
| `billing_type_id` | number | true | 1 | -


## Response Body

### Request Full-filed 

```js
{ 
    success: true,
    message: "Users Added successfully"
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