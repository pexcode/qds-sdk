/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { branchesAttributes } from '../models/branchesAttributes';
import type { branchesCreationAttributes } from '../models/branchesCreationAttributes';
import type { branchesUpdateAttributes } from '../models/branchesUpdateAttributes';
import type { BranchId } from '../models/BranchId';
import type { HttpSuccess } from '../models/HttpSuccess';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BranchesControllerService {
    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static createNewBranch(
        requestBody: branchesCreationAttributes,
    ): CancelablePromise<HttpSuccess> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/branches',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    public static getList(): CancelablePromise<Array<branchesAttributes>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/branches/list',
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static updateOne(
        id: BranchId,
        requestBody: branchesUpdateAttributes,
    ): CancelablePromise<HttpSuccess> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/branches/update/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @returns any Ok
     * @throws ApiError
     */
    public static deleteOne(
        id: BranchId,
    ): CancelablePromise<HttpSuccess> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/branches/delete/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @param isActive
     * @returns any Ok
     * @throws ApiError
     */
    public static changeBranchStatus(
        id: BranchId,
        isActive: boolean,
    ): CancelablePromise<HttpSuccess> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/branches/status/{id}',
            path: {
                'id': id,
            },
            query: {
                'isActive': isActive,
            },
        });
    }
    /**
     * @param id
     * @returns any Ok
     * @throws ApiError
     */
    public static getCenterInfo(
        id: BranchId,
    ): CancelablePromise<branchesAttributes> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/branches/{id}/info',
            path: {
                'id': id,
            },
        });
    }
}
