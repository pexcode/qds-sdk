/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { blacklistAttributes } from '../models/blacklistAttributes';
import type { CheckBlackListAttribute } from '../models/CheckBlackListAttribute';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BlackListService {
    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static checkBlackList(
        requestBody: CheckBlackListAttribute,
    ): CancelablePromise<blacklistAttributes> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/package/blacklist',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
