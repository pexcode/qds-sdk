/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BranchId } from './BranchId';
import type { TenantId } from './TenantId';
import type { UserId } from './UserId';
export type vehicleAttributes = {
    id: string;
    tenantId: TenantId;
    branchId: BranchId;
    deliveryId?: UserId;
    type: string;
    brand: string;
    model: string;
    engineType: string;
    carId: string;
    isDeleted: boolean;
    createdAt?: string;
    updatedAt?: string;
};

