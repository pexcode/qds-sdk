/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthZType } from '../models/AuthZType';
import type { HttpSuccess } from '../models/HttpSuccess';
import type { tenantsAttributes } from '../models/tenantsAttributes';
import type { TenantSettingsType } from '../models/TenantSettingsType';
import type { TenantsUpdateAttributes } from '../models/TenantsUpdateAttributes';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TenantControllerService {
    /**
     * @returns any Ok
     * @throws ApiError
     */
    public static getTenantInfo(): CancelablePromise<tenantsAttributes> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/tenant/info',
        });
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    public static getAuthZ(): CancelablePromise<AuthZType> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/tenant/auth-Z',
        });
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    public static getAllSettings(): CancelablePromise<TenantSettingsType> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/tenant/settings',
        });
    }
    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static updateSettings(
        requestBody: TenantSettingsType,
    ): CancelablePromise<HttpSuccess> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/tenant/settings',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static updateTenant(
        requestBody: TenantsUpdateAttributes,
    ): CancelablePromise<HttpSuccess> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/tenant/update',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param formData
     * @returns any Ok
     * @throws ApiError
     */
    public static changeAvatar(
        formData: {
            avatar: Blob;
        },
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/tenant/avatar',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
}
