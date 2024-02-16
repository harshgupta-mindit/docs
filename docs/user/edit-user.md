
import Note from "@site/src/components/Note.js";

# Edit User

## Definition
User Edit api is created to Edit Users in "Users" table.

**ENDPOINT** - `Put - /users`

<Note>Edit User API is only made for Admin/Shaad, Distributor and can only access by the same user authority in roleId.</Note>

## Request Body
Request body should consist of these attributes mentioned in below table.

<Note>`user_id` value in params is required for `PUT - /users` for all user roles to edit data for that particular user.</Note>

### Admin/Shaad - Request Body 
| Attribute | Type | Required | Minimum Value | Maximum
| ---- | ---- | --------- | -------- | --------
| `name` | string | false | 1 | - 
| `email` | string | false | 1 | -
| `commission` | decimal(2,2) | false | 1 | -
| `address` | string | false | 1 | -
| `city` | string | false | 1 | -
| `state_id` | number | false | 1 | -
| `country_id` | number | false | 1 | -
| `zip` | number | false | 1 | -
| `phone_number` | number | false | 1 | -
| `phone_code` | number | false | 1 | -
| `is_active` | boolean | false | 1 | -

### Distributor - Request Body 
| Attribute | Type | Required | Minimum Value | Maximum
| ---- | ---- | --------- | -------- | --------
| `name` | string | false | 1 | - 
| `email` | string | false | 1 | -
| `commission` | decimal(2,2) | false | 1 | -
| `address` | string | false | 1 | -
| `city` | string | false | 1 | -
| `state_id` | number | false | 1 | -
| `country_id` | number | false | 1 | -
| `zip` | number | false | 1 | -
| `phone_number` | number | false | 1 | -
| `phone_code` | number | false | 1 | -
| `is_active` | boolean | false | 1 | -


## Response Body

### Request Full-filed 

```js
{ 
    success: true,
    message: "User updated successfully"
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
