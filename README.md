# @pexcode/qds-sdk

[![npm version](https://img.shields.io/npm/v/@pexcode/qds-sdk.svg)](https://www.npmjs.com/package/@pexcode/qds-sdk)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)

**Official TypeScript/JavaScript SDK** for the [Quick Delivery System (QDS)](https://pexcode.com) API. Use it to integrate package creation, shipping cost calculation, branch and region data, and ledger management into your Node.js or browser applications.

---

## Table of contents

- [@pexcode/qds-sdk](#pexcodeqds-sdk)
  - [Table of contents](#table-of-contents)
  - [Features](#features)
  - [Installation](#installation)
  - [Quick start](#quick-start)
  - [Authentication](#authentication)
  - [Common workflow](#common-workflow)
  - [API reference](#api-reference)
  - [Usage examples](#usage-examples)
    - [App info and branches](#app-info-and-branches)
    - [List packages and get details](#list-packages-and-get-details)
    - [Calculate shipping cost](#calculate-shipping-cost)
    - [Create a package](#create-a-package)
    - [Regions and cities (e.g. for address forms)](#regions-and-cities-eg-for-address-forms)
    - [Check blacklist](#check-blacklist)
    - [Ledger overview and entries](#ledger-overview-and-entries)
    - [Cancel or report a package](#cancel-or-report-a-package)
  - [Enums reference](#enums-reference)
  - [Error handling](#error-handling)
  - [TypeScript](#typescript)
  - [Development](#development)
  - [License](#license)

---

## Features

- **Packages** — Create, list, get details, cancel, report, and sync packages
- **Shipping costs** — Calculate cost before creating a shipment (base, distance, weight, express, tax)
- **Geography** — List regions and cities by country or region; get branches by city
- **Ledger** — Fetch ledger entries and balance overview (current balance, unpaid income and expenses)
- **Blacklist** — Check phone, name, address, or email against the blacklist
- **Typed** — Full TypeScript types and enums; also works in JavaScript
- **Lightweight** — Single dependency (axios); uses QDS API v3 at `api.pexcode.com/qs`

---

## Installation

```bash
npm install @pexcode/qds-sdk
```

Requires **Node.js** (LTS recommended). The SDK depends on **axios**, which is installed automatically.

---

## Quick start

1. Obtain your **API token** from the [Pexcode / QDS dashboard](https://pexcode.com).
2. Instantiate the client with your token.
3. Call any method on the `QDSystem` instance.

```typescript
import { QDSystem } from '@pexcode/qds-sdk';

const qds = new QDSystem('YOUR_API_TOKEN');

// Fetch your app (tenant) info
const app = await qds.MyInfo();
console.log(app.name, app.address);
```

All requests use the base URL `https://api.pexcode.com/qs` and the header `x-version: v3` by default.

---

## Authentication

Authentication is **token-based**. Pass your API token when creating the client:

```typescript
const qds = new QDSystem(process.env.QDS_API_TOKEN ?? '');
```

> **Important:** Keep your token secure. Use environment variables or a secrets manager in production.  
> Invalid or missing tokens will cause errors such as: *"Login required: Authorization header missing or invalid."*

---

## Common workflow

A typical integration flow:

1. **App & branches** — Call `MyInfo()` and `getTenantBranches()` to get your `branchId` and `costId`.
2. **Geography** — Use `GetRegionsList(countryId)` and `GetCitiesListInByRegion(regionId)` for address dropdowns.
3. **Cost** — Call `CalculateCost({ branchId, costId, recipientCityId, ... })` to get `shippingCost` and display the price.
4. **Create** — Call `CreatePackage({ ...payload })` with the same IDs and recipient data.
5. **Track** — Use `GetList()` or `GetPackageDetails(id)`, and optionally `GetMyLedger()` or `GetMyLedgerOverview()`.

---

## API reference

Every method is available on a `QDSystem` instance. When a request fails, the SDK **throws** an `Error` with the message returned by the API.

| Category | Method | Description |
|----------|--------|-------------|
| **App** | `MyInfo()` | Current app/tenant info |
| | `getTenantBranches()` | All branches for your tenant |
| **Packages** | `GetList(page?, pageSize?)` | List packages (defaults: `1`, `10`) |
| | `GetPackageDetails(id)` | Single package by ID (e.g. UUID) |
| | `CreatePackage(payload)` | Create a new package |
| | `CancelOne(id)` | Cancel a package |
| | `ReportOne(id, body)` | Report a package (request body is defined by the API) |
| | `SendDataToCenter(id)` | Send package data to the center |
| **Shipping** | `CalculateCost(params)` | Calculate shipping cost for the given parameters |
| **Geography** | `getCompanyListOfCity(cityId)` | Branches in a city |
| | `GetRegionsList(countryId)` | Regions in a country |
| | `GetCitiesListInByRegion(regionId)` | Cities in a region |
| **Ledger & safety** | `CheckBlackList(query)` | Check phone/name/address/email |
| | `GetMyLedger(year?, month?)` | Ledger entries (optional year/month filter) |
| | `GetMyLedgerOverview()` | Balance summary (current, unpaid, expected) |

---

## Usage examples

### App info and branches

```typescript
const qds = new QDSystem(process.env.QDS_TOKEN!);

const app = await qds.MyInfo();
console.log(app.name, app.tenantId, app.countryId);

const branches = await qds.getTenantBranches();
branches.forEach(b => console.log(b.id, b.name));
```

### List packages and get details

```typescript
const packages = await qds.GetList(1, 20);
const details = await qds.GetPackageDetails(packages[0].id);
console.log(details.recipientName, details.recipientAddress, details.status);
```

### Calculate shipping cost

Use `costId` and `branchId` from your tenant (for example, from `getTenantBranches()` or your config).

```typescript
import { QDSystem } from '@pexcode/qds-sdk';
import type { CalculateCostAttributes } from '@pexcode/qds-sdk';

const qds = new QDSystem('YOUR_TOKEN');

const params: CalculateCostAttributes = {
  costId: 'your-cost-uuid',
  branchId: 'your-branch-uuid',
  recipientCityId: 1,
  recipientLat: 33.3,
  recipientLng: 44.4,
  recipientAddress: '123 Street, City',
  isExpress: false,
  isPickup: false,
};

const cost = await qds.CalculateCost(params);
console.log(`${cost.totalCost} ${cost.currency}`);
// Also available: baseCost, distanceCost, weightCost, expressFee, fuelSurcharge, tax, distance, details
```

### Create a package

Use the SDK enums and `SdkPackagesCreationAttributes` to keep your types in sync with the API. Optional fields include: `futureTenantId`, `packetCost`, and `endpoint`.

```typescript
import {
  QDSystem,
  BillingType,
  PacketType,
  ProofOfDeliveryType,
  ShippingOption,
} from '@pexcode/qds-sdk';
import type { SdkPackagesCreationAttributes } from '@pexcode/qds-sdk';

const qds = new QDSystem('YOUR_TOKEN');

const payload: SdkPackagesCreationAttributes = {
  // Sender
  senderPhone: '1234567890',
  senderName: 'Sender Name',
  senderAddress: 'Sender Address',
  senderEmail: 'sender@example.com',
  // Recipient
  recipientPhone: '0987654321',
  recipientName: 'Recipient Name',
  recipientAddress: '123 Delivery St',
  recipientCityId: 1,
  recipientLat: 33.3,
  recipientLng: 44.4,
  recipientEmail: 'recipient@example.com',
  // Package & shipping
  type: PacketType.PACKET,
  note: 'Handle with care',
  shippingOption: ShippingOption.STANDARD,
  billingType: BillingType.NONE,
  proofOfDeliveryType: ProofOfDeliveryType.NONE,
  branchId: 'branch-uuid',
  costId: 'cost-uuid',
  showCostBox: true,
  isPaid: false,
  isPaidOnline: false,
  pickup: false,
  includeProducts: false,
  isTesting: true,
};

const pkg = await qds.CreatePackage(payload);
console.log(pkg.id, pkg.uuid, pkg.status);
```

### Regions and cities (e.g. for address forms)

```typescript
const regions = await qds.GetRegionsList(countryId);
for (const region of regions) {
  const cities = await qds.GetCitiesListInByRegion(region.id);
  console.log(region.name, cities.length);
}
```

### Check blacklist

```typescript
import type { CheckBlackListAttribute } from '@pexcode/qds-sdk';

const query: CheckBlackListAttribute = { phone: '1112223333' };
// Optional: fullName, address, email
const result = await qds.CheckBlackList(query);
// If the recipient is blacklisted, the API may throw (e.g. "Data not found !!!.")
```

### Ledger overview and entries

```typescript
const overview = await qds.GetMyLedgerOverview();
console.log(overview.currentBalance, overview.unpaidIncome, overview.expectedBalance);

const entries = await qds.GetMyLedger(2025, 2);
entries.forEach(e => console.log(e.amount, e.currency, e.category));
```

### Cancel or report a package

```typescript
await qds.CancelOne(packageId);
await qds.ReportOne(packageId, { reason: 'Customer request' });
```

---

## Enums reference

Use these enums when building payloads (for example, in `CreatePackage`):

| Enum | Values |
|------|--------|
| **ShippingOption** | `STANDARD`, `EXPRESS`, `SAME_DAY` |
| **BillingType** | `NONE`, `PREPAID`, `POSTPAID` |
| **PacketType** | `PACKET`, `DOCUMENT` |
| **ProofOfDeliveryType** | `NONE`, `SIGNATURE`, `CODE` |

```typescript
import { ShippingOption, BillingType, PacketType, ProofOfDeliveryType } from '@pexcode/qds-sdk';
```

---

## Error handling

The SDK does not return error objects; it **throws** when the API returns an error. Wrap calls in `try/catch` when you need to handle failures:

```typescript
try {
  const pkg = await qds.GetPackageDetails(id);
  return pkg;
} catch (err) {
  const message = err instanceof Error ? err.message : String(err);
  if (message.includes('Login required')) {
    // Token invalid or missing
  }
  if (message.includes('Data not found')) {
    // Resource does not exist or is blacklisted
  }
  throw err;
}
```

---

## TypeScript

The package includes type definitions (`dist/index.d.ts`). Import types for request payloads and responses as follows:

```typescript
import type {
  packagesAttributes,
  SdkPackagesCreationAttributes,
  CalculateCostAttributes,
  CheckBlackListAttribute,
  ShippingServiceData,
  BranchLedgerAttributes,
  SdkLedgerOverview,
  appAttributes,
  branchesAttributes,
  regionsAttributes,
  citiesAttributes,
  HttpSuccess,
} from '@pexcode/qds-sdk';
```

Enums are imported as values: `import { ShippingOption, BillingType } from '@pexcode/qds-sdk';`

---

## Development

| Command | Description |
|--------|-------------|
| `npm run build` | Compile TypeScript to `dist/` |
| `npm test` | Run Jest tests |
| `npm run build-tsup` | Build with tsup (CJS + ESM + declarations) |

The generated API client code under `src/api/` is produced from the OpenAPI spec. Run the project’s codegen script (see `package.json`) when the API specification changes.

---

## License

MIT © [Pexcode](https://github.com/pexcode/qds-sdk)
