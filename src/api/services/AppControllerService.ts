/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { appAttributes } from '../models/appAttributes';
import type { AppId } from '../models/AppId';
import type { HttpSuccess } from '../models/HttpSuccess';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AppControllerService {
    /**
     * @returns any Ok
     * @throws ApiError
     */
    public static getList(): CancelablePromise<Array<appAttributes>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/app/v1/list',
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static updateOne(
        id: AppId,
        requestBody: {
            status: boolean;
        },
    ): CancelablePromise<HttpSuccess> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/app/v1/update/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
