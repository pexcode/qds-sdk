/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HttpSuccess } from '../models/HttpSuccess';
import type { loginAttributes } from '../models/loginAttributes';
import type { usersCreationAttributes } from '../models/usersCreationAttributes';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthService {
    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static login(
        requestBody: loginAttributes,
    ): CancelablePromise<{
        authKey: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static register(
        requestBody: usersCreationAttributes,
    ): CancelablePromise<HttpSuccess> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/register',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static registerConfirm(
        requestBody: {
            key: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/register-confirm',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static passwordResetRequest(
        requestBody: {
            email: string;
        },
    ): CancelablePromise<HttpSuccess> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/password-reset-request',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param key
     * @returns void
     * @throws ApiError
     */
    public static passwordResetVerify(
        key: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/auth/password-reset-verify',
            query: {
                'key': key,
            },
        });
    }
    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static passwordReset(
        requestBody: {
            key: string;
            password: string;
        },
    ): CancelablePromise<HttpSuccess> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/password-reset',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
