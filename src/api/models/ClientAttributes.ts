/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TenantId } from './TenantId';
import type { UserId } from './UserId';
export type ClientAttributes = {
    id: string;
    tenantId: TenantId;
    userId?: UserId;
    appId?: string;
    countryId: number;
    cityId: number;
    firstName: string;
    lastName: string;
    postCode?: string;
    address: string;
    phone: string;
    email?: string;
    isVerified: boolean;
    lng?: number;
    lat?: number;
    comment?: string;
    hasBan?: boolean;
    createdAt?: string;
    updatedAt?: string;
};

