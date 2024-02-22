
import Note from "@site/src/components/Note.js";

# Add/Request Topup

## Definition
Topup add api is created to add Topups in "topup_transaction" table.

**ENDPOINT** - `POST - /topups`

<Note>Add Topup API is only made for <b>Retailer</b> and can only access by the same user authority in roleId.</Note>

## Request Body
Request body should consist of these attributes mentioned in below table.

| Attribute | Type | Required | Minimum Value | Maximum
| ---- | ---- | --------- | -------- | --------
| `phone_code` | string | true | 1 | - 
| `mobile_number` | string | true | 1 | -
| `requested_by` | number | true | 1 | -
| `request_id` | number | true | 1 | -
| `status_type_id` | number | true | 1 | -
| `carrier_id` | decimal(2,2) | true | 1 | -
| `topup_amount_source_currency` | decimal(2,2) | true | 1 | -
| `topup_amount_converted_currency` | decimal(2,2) | true | 1 | -
| `original_currency_type` | decimal(2,2) | true | 1 | -
| `converted_currency_type` | decimal(2,2) | true | 1 | -
| `commission` | decimal(2,2) | true | 1 | -
| `vat` | decimal(2,2) | true | 1 | -
| `credited_at` | decimal(2,2) | false | 1 | -
| `retailer_id` | decimal(2,2) | false | 1 | -
| `customer_id` | decimal(2,2) | false | 1 | -
| `customer_contact_id` | decimal(2,2) | false | 1 | -
| `response_message` | decimal(2,2) | false | 1 | -
| `operator_transaction_id` | decimal(2,2) | false | 1 | -


## Response Body

### Request Full-filed 

```js
{ 
    success: true,
    message: "Topup Added successfully"
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
