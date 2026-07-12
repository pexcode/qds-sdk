## pexcode.com

## quickdeliverysystem.com

## QDS-sdk
# ⚠️ إشعار إيقاف المشروع / Project Discontinued

> **العربية**

## تم إيقاف المكتبة

تم إيقاف تطوير هذه المكتبة بشكل نهائي، ولن يتم إصدار أي تحديثات أو إصلاحات أو ميزات جديدة.

كما تم إيقاف الدعم الفني الخاص بها، ولن تتم مراجعة أو معالجة البلاغات (Issues) أو طلبات السحب (Pull Requests) أو طلبات الميزات.

**استخدام هذه المكتبة يكون على مسؤوليتك الشخصية بالكامل.** ولا يتحمل مالك المشروع أو المساهمون فيه أي مسؤولية عن أي أضرار أو خسائر أو أعطال أو مشكلات أمنية أو فقدان للبيانات أو أي آثار قد تنتج عن استخدامها.

إذا كنت لا تزال بحاجة إلى هذه المكتبة، فيمكنك إنشاء نسخة (Fork) منها وصيانتها بنفسك.

---

> **English**

## Library Discontinued

This library has been permanently discontinued and is no longer maintained. No further updates, bug fixes, security patches, or new features will be released.

Technical support has also been discontinued. Issues, Pull Requests, and feature requests will no longer be reviewed or addressed.

**This library is provided "as is" and is used entirely at your own risk.** The project owner and contributors accept no responsibility or liability for any damages, losses, security issues, compatibility problems, data loss, or any other consequences resulting from its use.

If you still need this library, you are welcome to fork the repository and maintain your own version.

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

## Usage read documentation 
coming soon

```bash
### useing and declare

import QDSystem from "@pexcode/qds-sdk"
const qds = new QDSystem("your key token")

const result =  await qds.MyInfo()

```


## After that, you need to prepare the package, print the information, and attach it securely to the package.

[follow print package](https://www.npmjs.com/package/@pexcode/qds-print-sdk)

### After preparing the package and attaching the information, and once you are sure it is ready to hand over to the shipping company, use the following function:

### Requirements

Before getting started, ensure you have the Key token from https://quickdeliverysystem.com
