/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TenantId } from './TenantId';
export type instructionsAttributes = {
    id: string;
    tenantId: TenantId;
    type: instructionsAttributes.type;
    en_text: string;
    ar_text: string;
    isClosed: boolean;
    createdAt?: string;
    updatedAt?: string;
};
export namespace instructionsAttributes {
    export enum type {
        ERROR = 'error',
        SUCCESS = 'success',
        WARNING = 'warning',
        INFO = 'info',
    }
}

