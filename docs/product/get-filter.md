
import Note from "@site/src/components/Note.js";

# Filter Products

## Definition
Product Get api is created to Fetch products from "product" table.

**ENDPOINT** - `GET - /products`

<Note>Get Product API is only made for Admin/Shaad, Distributor, Retailer and can only access by the same user authority in roleId.</Note>

## Request Query
Request query should consist of these key-value pairs mentioned in below table.

### Admin/Shaad - Request Query 
| Attribute | Type | Required | Minimum Value | Maximum
| ---- | ---- | --------- | -------- | --------
| `product_no` | string | false | 1 | - 
| `name` | string | false | 1 | -
| `base_price` | decimal(10,2) | false | 1 | -
| `carrier_id` | number | false | 1 | -
| `country_id` | number | false | 1 | -
| `commission` | decimal(10,2) | false | 1 | -
| `is_active` | number | false | 1 | -

### Distributor - Request Query 
| Attribute | Type | Required | Minimum Value | Maximum
| ---- | ---- | --------- | -------- | --------
| `account_no` | number | false | 1 | - 
| `product_no` | string | false | 1 | - 
| `name` | string | false | 1 | -
| `base_price` | decimal(10,2) | false | 1 | -
| `carrier_id` | number | false | 1 | -
| `country_id` | number | false | 1 | -
| `updatedAt` | date(YYYY-MM-DD - YYYY-MM-DD) | false | 1 | -
| `is_active` | number | false | 1 | -

### Retailer - Request Query 
| Attribute | Type | Required | Minimum Value | Maximum
| ---- | ---- | --------- | -------- | --------
| `product_no` | string | false | 1 | - 
| `name` | string | false | 1 | -
| `carrier_id` | number | false | 1 | -
| `country_id` | number | false | 1 | -
| `updatedAt` | date(YYYY-MM-DD - YYYY-MM-DD) | false | 1 | -


## Response Body

### Request Full-filed 

```js
{
    "success": true,
    "message": "Records successfully fetched",
    "data": {
        "count": {
            "total_countries": 2,
            "total_carriers": 1,
            "total_products": 9,
            "total_active_products": 8
        },
        "records": [
            {
                "product_id": 1,
                "product_name": "Product 1",
                "product_no": "P001",
                "product_description": "Happy",
                "product_price": "100.00",
                "carrier_id": 1,
                "country_id": 1,
                "is_active": 1,
                "commission": "12.00",
                "distributor_price": "112.00",
                "createdAt": "2024-02-02T05:59:48.000Z",
                "updatedAt": "2024-02-05T06:17:45.000Z",
                "carrier_name": "Roshan",
                "country_name": "Afghanistan"
            },
            {
                "product_id": 2,
                "product_name": "Product 2",
                "product_no": "P002",
                "product_description": "Pappy",
                "product_price": "200.00",
                "carrier_id": 1,
                "country_id": 1,
                "is_active": 1,
                "commission": "1.00",
                "distributor_price": "202.00",
                "createdAt": "2024-02-02T05:59:48.000Z",
                "updatedAt": "2024-02-02T05:59:48.000Z",
                "carrier_name": "Roshan",
                "country_name": "Afghanistan"
            },
            {
                "product_id": 3,
                "product_name": "Product 3",
                "product_no": "P003",
                "product_description": "Sappy",
                "product_price": "300.00",
                "carrier_id": 1,
                "country_id": 1,
                "is_active": 1,
                "commission": "2.00",
                "distributor_price": "306.00",
                "createdAt": "2024-02-02T05:59:48.000Z",
                "updatedAt": "2024-02-02T05:59:48.000Z",
                "carrier_name": "Roshan",
                "country_name": "Afghanistan"
            },
            {
                "product_id": 4,
                "product_name": "Product 4",
                "product_no": "P004",
                "product_description": "Tappy",
                "product_price": "400.00",
                "carrier_id": 1,
                "country_id": 1,
                "is_active": 0,
                "commission": "1.00",
                "distributor_price": "404.00",
                "createdAt": "2024-02-02T05:59:48.000Z",
                "updatedAt": "2024-02-02T05:59:48.000Z",
                "carrier_name": "Roshan",
                "country_name": "Afghanistan"
            },
            {
                "product_id": 5,
                "product_name": "Product 5",
                "product_no": "P005",
                "product_description": "Zappy",
                "product_price": "500.00",
                "carrier_id": 1,
                "country_id": 1,
                "is_active": 1,
                "commission": "2.00",
                "distributor_price": "510.00",
                "createdAt": "2024-02-02T05:59:48.000Z",
                "updatedAt": "2024-02-02T05:59:48.000Z",
                "carrier_name": "Roshan",
                "country_name": "Afghanistan"
            },
            {
                "product_id": 18,
                "product_name": "Product 12",
                "product_no": "P006",
                "product_description": null,
                "product_price": "34.00",
                "carrier_id": 1,
                "country_id": 1,
                "is_active": 1,
                "commission": "18.00",
                "distributor_price": "346.12",
                "createdAt": "2024-02-05T10:25:29.000Z",
                "updatedAt": "2024-02-05T10:25:29.000Z",
                "carrier_name": "Roshan",
                "country_name": "Afghanistan"
            },
            {
                "product_id": 19,
                "product_name": "Product13",
                "product_no": "P007",
                "product_description": null,
                "product_price": "34.00",
                "carrier_id": 1,
                "country_id": 1,
                "is_active": 1,
                "commission": "22.00",
                "distributor_price": "347.48",
                "createdAt": "2024-02-05T10:26:58.000Z",
                "updatedAt": "2024-02-05T10:26:58.000Z",
                "carrier_name": "Roshan",
                "country_name": "Afghanistan"
            },
            {
                "product_id": 20,
                "product_name": "Product24",
                "product_no": "P008",
                "product_description": null,
                "product_price": "34.00",
                "carrier_id": 1,
                "country_id": 231,
                "is_active": 1,
                "commission": "43.00",
                "distributor_price": "3414.62",
                "createdAt": "2024-02-05T10:28:21.000Z",
                "updatedAt": "2024-02-05T10:28:21.000Z",
                "carrier_name": "Roshan",
                "country_name": "Turkey"
            },
            {
                "product_id": 21,
                "product_name": "Product 34",
                "product_no": "P009",
                "product_description": null,
                "product_price": "54.00",
                "carrier_id": 1,
                "country_id": 231,
                "is_active": 1,
                "commission": "34.00",
                "distributor_price": "5418.36",
                "createdAt": "2024-02-05T10:30:15.000Z",
                "updatedAt": "2024-02-05T10:30:15.000Z",
                "carrier_name": "Roshan",
                "country_name": "Turkey"
            }
        ]
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




