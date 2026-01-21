/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BranchId } from './BranchId';
import type { CostId } from './CostId';
import type { PacketType } from './PacketType';
import type { TenantId } from './TenantId';
export type costModelAttributes = {
    id: CostId;
    tenantId: TenantId;
    branchId: BranchId;
    type: PacketType;
    typeId: number;
    modelV1: boolean;
    costPerKilometer: number;
    costPerKg: number;
    expressServiceFee: number;
    taxRate: number;
    fuelSurcharge: number;
    cityBaseCosts: number;
    unit: string;
    currency: string;
    maxLong: number;
    maxWidth?: number;
    weight: number;
    isDeleted: boolean;
    createdAt?: string;
    updatedAt?: string;
};

