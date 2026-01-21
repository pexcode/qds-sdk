/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BranchId } from './BranchId';
import type { ScheduledTripsType } from './ScheduledTripsType';
import type { ShippingOption } from './ShippingOption';
import type { WeekDay } from './WeekDay';
export type TripVehicleCreationAttributes = {
    scheduled: ScheduledTripsType | null;
    vehicleId: string;
    branchId: BranchId;
    tripType: ShippingOption;
    tripAt: (WeekDay | string) | null;
    fromCityId: number;
    toCityId: number;
    toBranchId?: BranchId;
    time: string | null;
};

