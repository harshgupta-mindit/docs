
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
### Request Full-filed for Retailer
#### Request Full-Filled
```js
{
    "success": true,
    "message": "Records successfully fetched",
    "data": {
        "count": {
            "total_topups": 6,
            "total_commission_earned": "2146.50",
            "total_topup_amount": "190869.7732",
            "total_carrier": 2,
            "total_countries": 3
        },
        "records": [
            {
                "transaction_id": "138XXXXX",
                "phone_code": "+93",
                "mobile_number": "777",
                "requested_by": "akira",
                "credited_at": "2024-02-28T11:46:04.000Z",
                "topup_amount_source_currency": "90000.0000",
                "topup_amount_converted_currency": "2885.6864",
                "original_currency_type": "TRY",
                "converted_currency_type": "USD",
                "commission": null,
                "service_fee": "144.28",
                "vat": "28.86",
                "total_amount_source_currency": "95400.0000",
                "carrier": "Etisalat",
                "status": "Successful"
            },
            {
                "transaction_id": "138XXXXX",
                "phone_code": "+91",
                "mobile_number": "777777777",
                "requested_by": "Hello",
                "credited_at": "2024-02-28T11:47:08.000Z",
                "topup_amount_source_currency": "883.3500",
                "topup_amount_converted_currency": "30.5100",
                "original_currency_type": "TRY",
                "converted_currency_type": "USD",
                "commission": "1.89",
                "service_fee": "1.35",
                "vat": "0.27",
                "total_amount_source_currency": "833.5000",
                "carrier": "Roshan",
                "status": "Successful"
            },
            {
                "transaction_id": "43748680",
                "phone_code": "+90",
                "mobile_number": "8076039559",
                "requested_by": "Sunny",
                "credited_at": "2024-02-28T11:44:51.000Z",
                "topup_amount_source_currency": "0.0000",
                "topup_amount_converted_currency": "0.0000",
                "original_currency_type": "",
                "converted_currency_type": "",
                "commission": "0.00",
                "service_fee": "0.00",
                "vat": "0.00",
                "total_amount_source_currency": "0.0000",
                "carrier": "Etisalat",
                "status": "Failed"
            },
            {
                "transaction_id": "138XXXXX",
                "phone_code": "+93",
                "mobile_number": "77777777",
                "requested_by": "akira",
                "credited_at": "2024-02-28T11:43:54.000Z",
                "topup_amount_source_currency": "90000.0000",
                "topup_amount_converted_currency": "2885.6491",
                "original_currency_type": "TRY",
                "converted_currency_type": "USD",
                "commission": null,
                "service_fee": "144.28",
                "vat": "28.86",
                "total_amount_source_currency": "95400.0000",
                "carrier": "Etisalat",
                "status": "Successful"
            },
            {
                "transaction_id": "138XXXXX",
                "phone_code": "+93",
                "mobile_number": "77777777",
                "requested_by": "akira",
                "credited_at": "2024-02-28T11:42:39.000Z",
                "topup_amount_source_currency": "0.5860",
                "topup_amount_converted_currency": "0.0188",
                "original_currency_type": "TRY",
                "converted_currency_type": "USD",
                "commission": "199.85",
                "service_fee": "0.00",
                "vat": "0.00",
                "total_amount_source_currency": "6233.7667",
                "carrier": "Etisalat",
                "status": "Successful"
            },
            {
                "transaction_id": "987654321",
                "phone_code": "+93",
                "mobile_number": "999999999",
                "requested_by": "akira",
                "credited_at": "2024-02-28T07:29:16.000Z",
                "topup_amount_source_currency": "9974.8372",
                "topup_amount_converted_currency": "319.9650",
                "original_currency_type": "TRY",
                "converted_currency_type": "USD",
                "commission": "21.34",
                "service_fee": "16.00",
                "vat": "3.20",
                "total_amount_source_currency": "11238.6490",
                "carrier": "Etisalat",
                "status": "Successful"
            },
            {
                "transaction_id": "43748680",
                "phone_code": "+93",
                "mobile_number": "888866666",
                "requested_by": "akira",
                "credited_at": "2024-02-28T07:23:12.000Z",
                "topup_amount_source_currency": "9974.8372",
                "topup_amount_converted_currency": "319.9686",
                "original_currency_type": "TRY",
                "converted_currency_type": "USD",
                "commission": "21.34",
                "service_fee": "16.00",
                "vat": "3.20",
                "total_amount_source_currency": "11238.6490",
                "carrier": "Etisalat",
                "status": "Failed"
            },
            {
                "transaction_id": "987654321",
                "phone_code": "+93",
                "mobile_number": "999999999",
                "requested_by": "gargi",
                "credited_at": "2024-02-28T07:21:58.000Z",
                "topup_amount_source_currency": "11.0000",
                "topup_amount_converted_currency": "0.3528",
                "original_currency_type": "TRY",
                "converted_currency_type": "USD",
                "commission": null,
                "service_fee": "0.02",
                "vat": "0.00",
                "total_amount_source_currency": "11.6600",
                "carrier": "Etisalat",
                "status": "In Process"
            },
            {
                "transaction_id": "43748680",
                "phone_code": "+93",
                "mobile_number": "888866666",
                "requested_by": "gargi",
                "credited_at": "2024-02-28T07:20:04.000Z",
                "topup_amount_source_currency": "11.0000",
                "topup_amount_converted_currency": "0.3528",
                "original_currency_type": "TRY",
                "converted_currency_type": "USD",
                "commission": null,
                "service_fee": "0.02",
                "vat": "0.00",
                "total_amount_source_currency": "11.6600",
                "carrier": "Etisalat",
                "status": "Successful"
            },
            {
                "transaction_id": "43748680",
                "phone_code": "+93",
                "mobile_number": "888866666",
                "requested_by": "alira",
                "credited_at": "2024-02-28T07:17:03.000Z",
                "topup_amount_source_currency": "19.0000",
                "topup_amount_converted_currency": "0.6095",
                "original_currency_type": "TRY",
                "converted_currency_type": "USD",
                "commission": null,
                "service_fee": "0.03",
                "vat": "0.01",
                "total_amount_source_currency": "20.1400",
                "carrier": "Etisalat",
                "status": "Failed"
            }
        ],
        "total_records_count": 12
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
