/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BranchId } from './BranchId';
import type { TenantId } from './TenantId';
import type { UserId } from './UserId';
export type routingAttributes = {
    id: string;
    tenantId: TenantId;
    deliveryId: UserId;
    branchId: BranchId;
    vehicleId: string;
    tripId: string;
    movementsId: string;
    road: Record<string, any>;
    roadData: Record<string, any>;
    packageCount: number;
    km: number | null;
    time: number | null;
    createdAt?: string;
    updatedAt?: string;
};

