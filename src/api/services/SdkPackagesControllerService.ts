/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { blacklistAttributes } from '../models/blacklistAttributes';
import type { CheckBlackListAttribute } from '../models/CheckBlackListAttribute';
import type { HttpSuccess } from '../models/HttpSuccess';
import type { packagesAttributes } from '../models/packagesAttributes';
import type { PacketId } from '../models/PacketId';
import type { SdkPackagesCreationAttributes } from '../models/SdkPackagesCreationAttributes';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SdkPackagesControllerService {
    /**
     * @param id
     * @returns any Ok
     * @throws ApiError
     */
    public static getPackageDetails(
        id: PacketId,
    ): CancelablePromise<packagesAttributes> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/app/v2/packages/package-details/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param page
     * @param pageSize
     * @returns any Ok
     * @throws ApiError
     */
    public static getList(
        page: number = 1,
        pageSize: number = 10,
    ): CancelablePromise<Array<packagesAttributes>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/app/v2/packages/list',
            query: {
                'page': page,
                'page_size': pageSize,
            },
        });
    }
    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static createNewPackage(
        requestBody: SdkPackagesCreationAttributes,
    ): CancelablePromise<packagesAttributes> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/app/v2/packages/create',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @returns any Ok
     * @throws ApiError
     */
    public static sendDataToCEnter(
        id: PacketId,
    ): CancelablePromise<HttpSuccess> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/app/v2/packages/sentDataToCenter/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @returns any Ok
     * @throws ApiError
     */
    public static canceled(
        id: PacketId,
    ): CancelablePromise<HttpSuccess> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/app/v2/packages/cancel/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static reportPacket(
        id: PacketId,
        requestBody: {
            reportId: number;
        },
    ): CancelablePromise<HttpSuccess> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/app/v2/packages/report/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
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
            url: '/api/app/v2/packages/check-black-list',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
