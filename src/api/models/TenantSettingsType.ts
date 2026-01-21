/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BillingType } from './BillingType';
import type { ProofOfDeliveryType } from './ProofOfDeliveryType';
import type { WeekDay } from './WeekDay';
export type TenantSettingsType = {
    workDays: Array<WeekDay>;
    workHours: (string | Array<string>);
    shippingDays: Array<WeekDay>;
    webSiteUrl: string;
    workOnHolidays: boolean;
    supportMultiCities: boolean;
    internationalCompany: boolean;
    supportBusiness?: boolean;
    notificationByEmail: boolean;
    notificationBySMS: boolean;
    disableChangeCostModelPrice: boolean;
    disableExportExcelData: boolean;
    disableCreateCostModel: boolean;
    smtpConfig?: {
        port: number;
        password: string;
        host: string;
        user: string;
    };
    supportsReturn: boolean;
    returnPolicyUrl: string;
    billingType: BillingType;
    supportsPickupFromWarehouse: boolean;
    proofOfDeliveryType?: ProofOfDeliveryType;
    proofOfDeliveryRequired: boolean;
    insuranceEnabled: boolean;
    insuranceRate?: number;
    supportsPickupCash: boolean;
};

