
import Note from "@site/src/components/Note.js";

# Commission History

## Definition
Commission History Get api is created to Fetch Commission History for all user from "commission_history" table.

**ENDPOINT** - `GET - /products/commission-history`

<Note>Get Commission History API is only made for Admin/Shaad, Distributor, Retailer and can only access by the same user authority in roleId.</Note>

## Request Query
Request query has not effect on this get request.

### Admin/Shaad - Request Query 
| Attribute | Type | Required | Minimum Value | Maximum
| ---- | ---- | --------- | -------- | --------
| `product_id` | number | true | 1 | - 

### Distributor - Request Query 
| Attribute | Type | Required | Minimum Value | Maximum
| ---- | ---- | --------- | -------- | --------
| `product_id` | number | true | 1 | - 
| `account_no` | number | true | 1 | - 

### Retailer - Request Query 
| Attribute | Type | Required | Minimum Value | Maximum
| ---- | ---- | --------- | -------- | --------
| `product_id` | number | true | 1 | - 


## Response Body

### Request Full-filed 

```js
{
    "success": true,
    "message": "Records successfully fetched",
    "data": [
        {
            "id": 7,
            "user_id": 93,
            "role_id": 2,
            "recommended_commission": "4.00",
            "final_commission": "8.00",
            "updatedAt": "2024-02-08T12:51:47.000Z",
            "updated_for_user_id": 92,
            "product_id": 1,
            "product_name": "Product 1",
            "product_price": "100.00",
            "role": "Distributor"
        },
        {
            "id": 6,
            "user_id": 92,
            "role_id": 3,
            "recommended_commission": "6.00",
            "final_commission": "7.00",
            "updatedAt": "2024-02-08T10:55:40.000Z",
            "updated_for_user_id": 0,
            "product_id": 1,
            "product_name": "Product 1",
            "product_price": "100.00",
            "role": "Retailer"
        },
        {
            "id": 5,
            "user_id": 93,
            "role_id": 2,
            "recommended_commission": "4.00",
            "final_commission": "6.00",
            "updatedAt": "2024-02-08T10:49:02.000Z",
            "updated_for_user_id": 92,
            "product_id": 1,
            "product_name": "Product 1",
            "product_price": "100.00",
            "role": "Distributor"
        },
        {
            "id": 4,
            "user_id": 93,
            "role_id": 2,
            "recommended_commission": "4.00",
            "final_commission": "5.00",
            "updatedAt": "2024-02-08T10:46:36.000Z",
            "updated_for_user_id": 92,
            "product_id": 1,
            "product_name": "Product 1",
            "product_price": "100.00",
            "role": "Distributor"
        }
    ]
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
