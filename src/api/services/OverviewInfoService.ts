/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BranchId } from '../models/BranchId';
import type { OverviewType } from '../models/OverviewType';
import type { tripsVehicleAttributes } from '../models/tripsVehicleAttributes';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OverviewInfoService {
    /**
     * @param id
     * @returns any Ok
     * @throws ApiError
     */
    public static getBranchOverviewCount(
        id: BranchId,
    ): CancelablePromise<OverviewType> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/overview/count/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @returns any Ok
     * @throws ApiError
     */
    public static getTripsOverviewList(
        id: BranchId,
    ): CancelablePromise<Array<tripsVehicleAttributes>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/overview/trips/{id}',
            path: {
                'id': id,
            },
        });
    }
}
