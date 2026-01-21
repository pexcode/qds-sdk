/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BranchId } from './BranchId';
import type { TenantId } from './TenantId';
import type { UserId } from './UserId';
export type employeeAttributes = {
    id: UserId;
    branchId: BranchId;
    tenantId: TenantId;
    room: string;
    role: number;
    phone: string;
    name: string;
    position: string;
    atWork: boolean;
    workHours: number;
    avatar?: string;
    cardId?: string;
    address: string;
    country?: string;
    countryId: number;
    cityId: number;
    birthday?: string;
    confirmedAt?: string;
    email: string;
    status: number;
    createdAt?: string;
    updatedAt?: string;
    blockedAt?: string;
};

