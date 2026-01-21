/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AppId } from '../models/AppId';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class GenerateAppTokenService {
    /**
     * @param id
     * @returns any Ok
     * @throws ApiError
     */
    public static generateAppToken(
        id: AppId,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/app/v1/token/{id}',
            path: {
                'id': id,
            },
        });
    }
}
