/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BranchId } from './BranchId';
import type { ScheduledTripsType } from './ScheduledTripsType';
import type { ShippingOption } from './ShippingOption';
import type { TenantId } from './TenantId';
import type { UserId } from './UserId';
import type { WeekDay } from './WeekDay';
export type tripsVehicleAttributes = {
    id: string;
    tenantId: TenantId;
    branchId: BranchId;
    deliveryId: UserId;
    userId: UserId;
    vehicleId: string;
    tripType: ShippingOption;
    tripAt: (WeekDay | string) | null;
    fromCityId: number;
    toCityId: number;
    toBranchId?: BranchId;
    scheduled: ScheduledTripsType | null;
    isDeleted: boolean;
    time: string | null;
    createdAt?: string;
    updatedAt?: string;
};

