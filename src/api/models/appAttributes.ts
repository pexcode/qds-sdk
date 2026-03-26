/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AppId } from './AppId';
import type { AppLevel } from './AppLevel';
import type { ClientAttributes } from './ClientAttributes';
import type { LimitedAppAttributes } from './LimitedAppAttributes';
import type { TenantId } from './TenantId';
export type appAttributes = {
    id: AppId;
    tenantId: TenantId;
    clientId: string;
    countryId: number;
    isActive: boolean;
    currentRequestCount: number;
    lastRequestAt: string;
    host?: string;
    token?: string;
    hook_url?: string;
    hookToken?: string;
    hash?: string;
    appLevel: AppLevel;
    blockedAt?: string;
    createdAt?: string;
    updatedAt?: string;
    expireDate: string;
    limitedApp?: LimitedAppAttributes;
    clientInfo?: ClientAttributes;
};

