## pexcode.com

## quickdeliverysystem.com

## QDS-sdk

### install qds-sdk (npm)

```bash

npm i @pexcode/qds-sdk

```

### install qds-print sdk (npm)

```bash

npm i @pexcode/qds-print-sdk

```

## Description

This is a library published under an pexcode to help users and developers to use quickdeliverysystem api.

## Usage

### Get company data like shipping centers and cost model

```bash
### useing and declare

import QDSystem from "@pexcode/qds-sdk"
const qds = new QDSystem("your key token")

qds.me().then(async result => {  console.log(result)  }) .catch(err => {console.log(err) })

```

### Check black list function

```bash
### useing and declare

import QDSystem from "@pexcode/qds-sdk"
const qds = new QDSystem("your key token")

let query = {full_name:""}
or
let query = {number:""}
or
let query = {email:""}

qds.CheckBlackList({query}).then(async result => {  console.log(result)  }) .catch(err => {console.log(err) })

```

CheckBlackList

### Get shipping companies list in city as (JSON)

```bash
### useing and declare

import QDSystem from "@pexcode/qds-sdk"
const qds = new QDSystem("your key token")


### Using a request to get a list of shipping companies.
### The parameter is the city ID, which represents the source city for sending the package

const param=1 int
const result = await qds.GET_companies(param)
console.log(result)

```

### Get packages list as (JSON):

```bash
### Using and declaring the QDSystem SDK

import QDSystem from "@pexcode/qds-sdk"
const qds = new QDSystem("your-key-token");

### Using a request to get a list of orders/packages
### Parameters:
### - {page: 1} (integer, defaults to 1)
### - {page_size: 10} (integer, defaults to 10)
### Example: searchOptions = { page: 2, page_size: 20, uid: 1 }

let searchOptions = { uid: 1 }; // For more details, visit the [developer's blog](https://quickdeliverysystem.com/blog/how-use-api-quick-delivery-system-v-1-0/)

const result = await qds.GET_List(searchOptions);
console.log(result);
```

### Push package to our server (You can cancel the package later, as long as it has not been prepared or assigned to a shipping company.):

```bash
### Using and declaring the QDSystem SDK

import QDSystem from "@pexcode/qds-sdk"
const qds = new QDSystem("your-key-token");

### Declaring data
 let data = {
    cost_package: 50,  // Cost of the package (set to 0 if the company supports cash on delivery, useful for online shops)
    src_id: Number(id),  // Source city ID
    id_cost: Number(cost),  // Cost model ID from the companies list

    uid: Number(id),  // User ID (set to 0 if not used; can be used for sorting packages by user in your system)
    sender_name: "Sender name or shop name",  // Name of the sender or shop
    sender_address: "Sender's address (used in case the package is returned)",  // Sender's address
    sender_email: "Sender's email",  // Email of the sender (can be null)

    dest_address: "Receiver's address",  // Address of the package receiver
    dest_lat: "Latitude (GPS) of the receiver's location",  // Receiver's location latitude (GPS)
    dest_lng: "Longitude (GPS) of the receiver's location",  // Receiver's location longitude (GPS)
    dest_city: Number(id_city),  // Destination city ID from companies list
    dest_email: "Receiver's email",  // Email of the receiver (can be null)
    dest_name: "Receiver's full name",  // Full name of the package receiver
    dest_number: "Receiver's phone number",  // Contact number of the package receiver

    verification: 1,  // Verification status (1 for verified)
    note: "Special notes about the package, e.g., fragile, contains glass, or product ID",  // Additional information about the package
    price_package: 0,  // Price of the package (set to 0 for free shipping or testing)
    isTesting: false  // Set to true if this is a test package
};

###  Using function
   qds.POST_One(data).then(async result => {
       console.log(result);
    })
      .catch(err => {
        console.log(err);
      })


## After that, you need to prepare the package, print the information, and attach it securely to the package.
```

### Shipping costs vary between companies and shipping centers due to several factors.

### How calculate the shipping cost .

```bash
### Using and declaring the QDSystem SDK

import QDSystem from "@pexcode/qds-sdk"
const qds = new QDSystem("your-key-token");

### Declaring data

    let data = {
    dest_city: Number(id_city),  // Destination city ID from the companies list
    dest_address: "Receiver's address",  // Address of the package receiver
    dest_lat: "Latitude (GPS) of the receiver's location",  // Receiver's location latitude (GPS)
    dest_lng: "Longitude (GPS) of the receiver's location",  // Receiver's location longitude (GPS)
    id_cost: Number(cost),  // Cost model ID from the companies list
    src_id: Number(id),  // Source city ID
};

// Using the function to calculate shipping cost
qds.calculateCost(data).then(async (result) => {
    console.log(result);  // Logs the result of the cost calculation
}).catch((err) => {
    console.log(err);  // Logs any error that occurs
});


```

## After that, you need to prepare the package, print the information, and attach it securely to the package.

[follow print package](https://www.npmjs.com/package/@pexcode/qds-print-sdk)

### After preparing the package and attaching the information, and once you are sure it is ready to hand over to the shipping company, use the following function:

```bash
### Using and declaring the QDSystem SDK

import QDSystem from "@pexcode/qds-sdk"
const qds = new QDSystem("your-key-token");

### Declaring data
 let searchOptions = {
      id: id // id of the package from the function  (POST_One)
};

###  Using function

 qds.SendDataToCenter(searchOptions).then(result => {
    console.log(result);
    }).catch(err => {
       console.log(err);
    })

```

### Cancel the package and delete the associated data.

```bash
### Using and declaring the QDSystem SDK

import QDSystem from "@pexcode/qds-sdk"
const qds = new QDSystem("your-key-token");

### Declaring data
 let searchOptions = {
      id: id // id of the package from the function  (POST_One)
};

 qds.Cancel_One(searchOptions).then(result => {
    console.log(result);
    }).catch(err => {
       console.log(err);
    })

```

### Requirements

Before getting started, ensure you have the Key token from quickdeliverysystem
