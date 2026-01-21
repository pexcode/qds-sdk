/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { contractsAttributes } from '../models/contractsAttributes';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SubscriptionsControllerService {
    /**
     * @returns any Ok
     * @throws ApiError
     */
    public static getTenantSubscriptions(): CancelablePromise<Array<contractsAttributes>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/subscriptions/list',
        });
    }
}
