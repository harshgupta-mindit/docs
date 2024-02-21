import Note from "@site/src/components/Note.js";

# Get single user profile info

## Definition

User Profile Get api created to Fetch Single user profile from "User" and "top-up" table.

**ENDPOINT** - `GET - /account-no/:id`

<Note>Get Single User info API is only made for Admin/Shaad/Distributor/Distributor's User and can only access by the same user authority in roleId.</Note>

## Request Query

Request query should consist of these key-value pairs mentioned in below table.

### Admin/Shaad - Request Params & Request Query
#### Request Params
| Attribute        | Type   | Required | Minimum Value | Maximum |
| ---------------- | ------ | -------- | ------------- | ------- |
| `id(Account no)` | string | true     | 1             | -       |
#### Request Query
`dateRangeConstant` can defined as 1=TODAY, 2=THIS_MONTH, 3=TILL_TODAY, 4=THIS_WEEK
| Attribute        | Type   | Required | Minimum Value | Maximum |
| ---------------- | ------ | -------- | ------------- | ------- |
| `dateRangeConstant(1,2,3,4)` | string/number | true     | 1             | -       |

### Distributor/Distributor User - Request Params & Request Query
#### Request Params
| Attribute        | Type   | Required | Minimum Value | Maximum |
| ---------------- | ------ | -------- | ------------- | ------- |
| `id(Account no)` | string | true     | 1             | -       |
#### Request Query
`dateRangeConstant` can defined as 1=TODAY, 2=THIS_MONTH, 3=TILL_TODAY, 4=THIS_WEEK
| Attribute        | Type   | Required | Minimum Value | Maximum |
| ---------------- | ------ | -------- | ------------- | ------- |
| `dateRangeConstant(1,2,3,4)` | string/number | true     | 1             | -       |

## Response Body

### Request Full-filled for -- Admin

```js
{
    "success": true,
    "message": "Displayed successfully",
    "data": {
        "count": {
            "total_topup_amount": "400.0000",
            "total_topup_count": 2,
            "total_retailers": 7
        },
        "record": {
            "id": 93,
            "name": "china",
            "email": "china321@mailinator.com",
            "phone_number": "8888888",
            "role_id": 2,
            "added_by_id": 0,
            "is_active": 1,
            "address": "D-Mall Pitam-Pura/NSP",
            "city": "Delhi",
            "state_id": 1,
            "country_id": 1,
            "zip": "110012",
            "createdAt": "2024-02-21T08:39:29.000Z",
            "phone_code": "+93",
            "commission": 5,
            "account_no": "D0000002",
            "credit_balance": 2000,
            "credit_day": "1",
            "billing_type_id": "1",
            "country_name": "Afghanistan",
            "country_code": "AF",
            "billing_type_name": "Credit",
            "state_name": "Badakhshan"
        }
    }
}

```

### Request Full-filled for -- Distributor/Distributor User

```js
{
    "success": true,
    "message": "Displayed successfully",
    "data": {
        "count": {
            "total_topup_amount": "400.0000",
            "total_topup_count": 2
        },
        "record": {
            "id": 92,
            "name": "John",
            "email": "delhi321@mailinator.com",
            "phone_number": "1.23E+12",
            "role_id": 3,
            "added_by_id": 93,
            "is_active": 0,
            "address": "new delhi",
            "city": "Delhi",
            "state_id": 4160,
            "country_id": 1,
            "zip": "110012",
            "createdAt": "2024-02-21T08:39:29.000Z",
            "phone_code": "244",
            "commission": 6,
            "account_no": "R0000001",
            "credit_balance": 3501,
            "billing_type_id": "1",
            "credit_day": "1",
            "country_name": "Afghanistan",
            "country_code": "AF",
            "billing_type_name": "Credit",
            "state_name": "Adana Province"
        }
    }
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
