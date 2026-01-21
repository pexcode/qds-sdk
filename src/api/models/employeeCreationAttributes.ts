/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BranchId } from './BranchId';
export type employeeCreationAttributes = {
    branchId: BranchId;
    role: number;
    phone: string;
    name: string;
    position: string;
    atWork: boolean;
    workHours: number;
    avatar?: string;
    address: string;
    country?: string;
    countryId: number;
    cityId: number;
    email: string;
    password: string;
};

