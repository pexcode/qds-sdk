/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ServerService {
    /**
     * @returns any Ok
     * @throws ApiError
     */
    public static server(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/',
        });
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    public static messageKeys(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/message-keys',
        });
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    public static packetStatusKeys(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/status-keys',
        });
    }
}
