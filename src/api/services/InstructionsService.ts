/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HttpSuccess } from '../models/HttpSuccess';
import type { instructionsAttributes } from '../models/instructionsAttributes';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class InstructionsService {
    /**
     * @param page
     * @param pageSize
     * @returns any Ok
     * @throws ApiError
     */
    public static getList(
        page: number = 1,
        pageSize: number = 10,
    ): CancelablePromise<Array<instructionsAttributes>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/instructions',
            query: {
                'page': page,
                'page_size': pageSize,
            },
        });
    }
    /**
     * @param id
     * @returns any Ok
     * @throws ApiError
     */
    public static closeOne(
        id: string,
    ): CancelablePromise<HttpSuccess> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/instructions/close/{id}',
            path: {
                'id': id,
            },
        });
    }
}
