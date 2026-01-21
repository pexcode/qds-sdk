/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AppId } from './AppId';
import type { TenantId } from './TenantId';
export type appAttributes = {
    id: AppId;
    tenantId: TenantId;
    name: string;
    address: string;
    countryId: number;
    email?: string;
    disabled: boolean;
    req: number;
    last_req_at: string;
    service?: number;
    avatar?: string;
    host?: string;
    cardId?: string;
    token?: string;
    hook_url?: string;
    hash?: string;
    level_app?: string;
    totalReq: number;
    blockedAt?: string;
    createdAt?: string;
    updatedAt?: string;
    access: number;
};

