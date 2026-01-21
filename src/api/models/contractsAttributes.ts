/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TenantId } from './TenantId';
export type contractsAttributes = {
    id: string;
    tenantId: TenantId;
    unid?: string;
    name: string;
    supportExcelExporting: boolean;
    supportLiveTracking: boolean;
    supportBlackList: boolean;
    supportWhiteList: boolean;
    supportAi: boolean;
    isMonthly: boolean;
    supportAPI: boolean;
    isExpired: boolean;
    subscription: number;
    amount: number;
    maxBranchesCount: number;
    maxEmployeesCount: number;
    maxApiCount: number;
    contractLink?: string;
    expireAt: string;
    updatedAt?: string;
    createdAt?: string;
};

