/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { citiesAttributes } from '../models/citiesAttributes';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ShippingControllerService {
    /**
     * @returns any Ok
     * @throws ApiError
     */
    public static getCities(): CancelablePromise<Array<citiesAttributes>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/cities',
        });
    }
}
