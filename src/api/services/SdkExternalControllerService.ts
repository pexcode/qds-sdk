/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { appAttributes } from '../models/appAttributes';
import type { branchesAttributes } from '../models/branchesAttributes';
import type { CalculateCostAttributes } from '../models/CalculateCostAttributes';
import type { ShippingServiceData } from '../models/ShippingServiceData';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SdkExternalControllerService {
    /**
     * @returns any Ok
     * @throws ApiError
     */
    public static getTenantBranches(): CancelablePromise<Array<branchesAttributes>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/app/v2/tenant-branches',
        });
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    public static getMyInfo(): CancelablePromise<appAttributes> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/app/v2/me-info',
        });
    }
    /**
     * @param cityId
     * @returns any Ok
     * @throws ApiError
     */
    public static getListOfCity(
        cityId: number,
    ): CancelablePromise<Array<branchesAttributes>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/app/v2/place/{city}',
            query: {
                'cityId': cityId,
            },
        });
    }
    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static calculateCost(
        requestBody: CalculateCostAttributes,
    ): CancelablePromise<ShippingServiceData> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/app/v2/shipping/cost',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
