/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HttpSuccess } from '../models/HttpSuccess';
import type { usersAttributes } from '../models/usersAttributes';
import type { usersUpdateAttributes } from '../models/usersUpdateAttributes';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MyInfoService {
    /**
     * @returns any Ok
     * @throws ApiError
     */
    public static getMe(): CancelablePromise<usersAttributes> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/me',
        });
    }
    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static patchMe(
        requestBody: usersUpdateAttributes,
    ): CancelablePromise<usersAttributes> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/me',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param formData
     * @returns any Ok
     * @throws ApiError
     */
    public static uploadAvatar(
        formData: {
            avatar: Blob;
        },
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/avatar',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static passwordChange(
        requestBody: {
            newPassword: string;
            password: string;
        },
    ): CancelablePromise<HttpSuccess> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/change-password',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
