
import Note from "@site/src/components/Note.js";

# Top-ups Filter (Orders)

## Definition
Top-up Get api is created to Fetch Top-ups from "Top-up" table.

**ENDPOINT** - `GET - /topups`

<Note>Get Top-up API is only made for Retailer and can only access by the same user authority in roleId.</Note>

## Request Query
Request query should consist of these key-value pairs mentioned in below table.

### Distributor/Distributor User - Request Query 
| Attribute | Type | Required | Minimum Value | Maximum
| ---- | ---- | --------- | -------- | --------
| `account_no` | string | true | 1 | - 
| `transaction_id` | string | false | 1 | -
| `phone_code` | string | false | 1 | -
| `mobile_number` | string | false | 1 | -
| `requested_by` | string | false | 1 | -
| `carrier_id` | number | false | 1 | -
| `topup_amount_source_currency` | decimal(10,2) | false | 1 | -
| `credited_at` | date(YYYY-MM-DD - YYYY-MM-DD) | false | 1 | -
| `status_type_id` | number | false | 1 | -

### Retailer - Request Query 
| Attribute | Type | Required | Minimum Value | Maximum
| ---- | ---- | --------- | -------- | --------
| `transaction_id` | string | false | 1 | -
| `phone_code` | string | false | 1 | -
| `mobile_number` | string | false | 1 | -
| `requested_by` | string | false | 1 | -
| `carrier_id` | number | false | 1 | -
| `topup_amount_source_currency` | decimal(10,2) | false | 1 | -
| `credited_at` | date(YYYY-MM-DD - YYYY-MM-DD) | false | 1 | -
| `status_type_id` | number | false | 1 | -


## Response Body

### Request Full-filed for Distributor/Distributor User
#### Request Full-filled

```js
{
    "success": true,
    "message": "Records successfully fetched",
    "data": {
        "count": {
            "total_topups": 2,
            "total_commission_earned": "3.80",
            "total_topup_amount": "380.0000",
            "total_carrier": 1,
            "total_countries": 1
        },
        "records": [
            {
                "transaction_id": "AISJSISKSISND2",
                "phone_code": "+91",
                "mobile_number": "09999999999",
                "requested_by": "",
                "credited_at": "2024-02-21T08:47:22.000Z",
                "topup_amount_source_currency": "190.0000",
                "topup_amount_converted_currency": "380.0000",
                "original_currency_type": "1",
                "converted_currency_type": "2",
                "commission": null,
                "service_fee": "2.00",
                "vat": "8.00",
                "total_amount_source_currency": "200.0000",
                "carrier": "Etisalat",
                "status": "In Process"
            },
            {
                "transaction_id": "AISJSISKSISND1",
                "phone_code": "+91",
                "mobile_number": "09999999999",
                "requested_by": "",
                "credited_at": "2024-02-21T08:46:36.000Z",
                "topup_amount_source_currency": "190.0000",
                "topup_amount_converted_currency": "380.0000",
                "original_currency_type": "1",
                "converted_currency_type": "2",
                "commission": null,
                "service_fee": "2.00",
                "vat": "8.00",
                "total_amount_source_currency": "200.0000",
                "carrier": "Etisalat",
                "status": "Successful"
            },
            {
                "transaction_id": "AISJSISKSISND",
                "phone_code": "+91",
                "mobile_number": "09999999999",
                "requested_by": "",
                "credited_at": "2024-02-21T08:44:23.000Z",
                "topup_amount_source_currency": "190.0000",
                "topup_amount_converted_currency": "380.0000",
                "original_currency_type": "1",
                "converted_currency_type": "2",
                "commission": "2.00",
                "service_fee": "2.00",
                "vat": "8.00",
                "total_amount_source_currency": "200.0000",
                "carrier": "Etisalat",
                "status": "Successful"
            }
        ],
        "total_records_count": 3
    }
}

```
#### Request Error
```js
{
    success: false,
    message: error.message,
}
```
### Request Full-filed for Distributor/Distributor User
#### Request Full-Filled
```js
{
    "success": true,
    "message": "Records successfully fetched",
    "data": {
        "count": {
            "total_topups": 5,
            "total_commission_earned": "29.20",
            "total_topup_amount": "550.0000",
            "total_carrier": 1,
            "total_countries": 2
        },
        "records": [
            {
                "transaction_id": "KMY6LN4P9CMQXGSG",
                "phone_code": "+92",
                "mobile_number": "0000000000",
                "requested_by": "Customer 3",
                "credited_at": "2024-02-22T06:59:42.000Z",
                "topup_amount_source_currency": "90.0000",
                "topup_amount_converted_currency": "180.0000",
                "original_currency_type": "INR",
                "converted_currency_type": "USA",
                "commission": "6.00",
                "service_fee": "10.00",
                "vat": "12.00",
                "total_amount_source_currency": "0.0000",
                "carrier": "Etisalat",
                "status": "Successful"
            },
            {
                "transaction_id": "MZLLPQ60P1T25YYW",
                "phone_code": "+91",
                "mobile_number": "0000000000",
                "requested_by": "Customer 2",
                "credited_at": "2024-02-22T05:46:13.000Z",
                "topup_amount_source_currency": "90.0000",
                "topup_amount_converted_currency": "180.0000",
                "original_currency_type": "INR",
                "converted_currency_type": "USA",
                "commission": "6.00",
                "service_fee": "10.00",
                "vat": "12.00",
                "total_amount_source_currency": "0.0000",
                "carrier": "Etisalat",
                "status": "Successful"
            },
            {
                "transaction_id": "FRFZ5H9VVIEZAPT8",
                "phone_code": "+91",
                "mobile_number": "0000000000",
                "requested_by": "Customer 2",
                "credited_at": "2024-02-22T05:45:29.000Z",
                "topup_amount_source_currency": "90.0000",
                "topup_amount_converted_currency": "180.0000",
                "original_currency_type": "INR",
                "converted_currency_type": "USA",
                "commission": "6.00",
                "service_fee": "10.00",
                "vat": "12.00",
                "total_amount_source_currency": "0.0000",
                "carrier": "Etisalat",
                "status": "Successful"
            },
            {
                "transaction_id": "FP91QGH74WWWSZYT",
                "phone_code": "+91",
                "mobile_number": "0000000000",
                "requested_by": "Customer 2",
                "credited_at": "2024-02-22T05:42:25.000Z",
                "topup_amount_source_currency": "90.0000",
                "topup_amount_converted_currency": "180.0000",
                "original_currency_type": "INR",
                "converted_currency_type": "USA",
                "commission": "6.00",
                "service_fee": "10.00",
                "vat": "12.00",
                "total_amount_source_currency": "0.0000",
                "carrier": "Etisalat",
                "status": "Successful"
            },
            {
                "transaction_id": "AISJSISKSISND3",
                "phone_code": "+91",
                "mobile_number": "09999999999",
                "requested_by": "Customer 1",
                "credited_at": "2024-02-22T04:27:55.000Z",
                "topup_amount_source_currency": "190.0000",
                "topup_amount_converted_currency": "380.0000",
                "original_currency_type": "1",
                "converted_currency_type": "2",
                "commission": "4.00",
                "service_fee": "2.00",
                "vat": "8.00",
                "total_amount_source_currency": "200.0000",
                "carrier": "Etisalat",
                "status": "Successful"
            }
        ],
        "total_records_count": 5
    }
}
```

#### Request Error
```js
{
    success: false,
    message: error.message,
}
```

## `Developer - Harsh`
