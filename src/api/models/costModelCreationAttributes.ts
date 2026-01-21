/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BranchId } from './BranchId';
import type { PacketType } from './PacketType';
export type costModelCreationAttributes = {
    branchId: BranchId;
    type: PacketType;
    typeId: number;
    costPerKilometer: number;
    costPerKg: number;
    expressServiceFee: number;
    taxRate: number;
    cityBaseCosts: number;
    unit: string;
    currency: string;
    weight: number;
};

