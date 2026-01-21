/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BranchId } from './BranchId';
import type { MovementsStatusAttributes } from './MovementsStatusAttributes';
import type { TenantId } from './TenantId';
import type { UserId } from './UserId';
export type movementsAttributes = {
    id: string;
    tripId: string;
    branchId: BranchId;
    userId: UserId;
    tenantId: TenantId;
    deliveryId: UserId;
    startAt?: string;
    endAt?: string;
    status: MovementsStatusAttributes;
    createdAt?: string;
    updatedAt?: string;
    packagesCount?: number;
};

