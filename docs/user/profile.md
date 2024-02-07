import Tag from "@site/src/components/Tag.js";
import Note from "@site/src/components/Note.js";

# Profile

## Definition
Users Profile API can be access by any user only if the user is authenticated and request consist of required data such as "user.id".

<!-- <Note> Text.</Note> -->

**ENDPOINT** - `GET - /users/profile` <br/>

## Request Query 
No request query is required to get profile details.

### Request Full-filed 
```js
{
    "success": true,
    "data": {
        "id": 93,
        "name": "china",
        "email": "china321@mailinator.com",
        "role_id": 2,
        "role": "Distributor"
    },
    "message": "User profile successfully fetched!"
}
```
### Request Error
```js
{
    success: false,
    message: error.message,
    error: error.errors
}
```

