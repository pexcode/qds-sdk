/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { branchesAttributes } from '../models/branchesAttributes';
import type { citiesAttributes } from '../models/citiesAttributes';
import type { gpsAttributes } from '../models/gpsAttributes';
import type { HttpSuccess } from '../models/HttpSuccess';
import type { packagesAttributes } from '../models/packagesAttributes';
import type { PacketId } from '../models/PacketId';
import type { PaginatedResponse_packagesAttributes_ } from '../models/PaginatedResponse_packagesAttributes_';
import type { tripsVehicleAttributes } from '../models/tripsVehicleAttributes';
import type { vehicleAttributes } from '../models/vehicleAttributes';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AndroidControllerV1Service {
    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static firebaseToken(
        requestBody: {
            firebaseToken: string;
        },
    ): CancelablePromise<HttpSuccess> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/employee/firebaseToken',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static gps(
        requestBody: gpsAttributes,
    ): CancelablePromise<HttpSuccess> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/employee/geo',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param page
     * @returns any Ok
     * @throws ApiError
     */
    public static getEmployeeTripsList(
        page: number = 1,
    ): CancelablePromise<Array<tripsVehicleAttributes>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/employee/trips',
            query: {
                'page': page,
            },
        });
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    public static getEmployeeVehicle(): CancelablePromise<Array<vehicleAttributes>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/employee/vehicle',
        });
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    public static getMyBranch(): CancelablePromise<branchesAttributes> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/employee/branch',
        });
    }
    /**
     * @param id
     * @returns any Ok
     * @throws ApiError
     */
    public static getOne(
        id: PacketId,
    ): CancelablePromise<packagesAttributes> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/employee/packages/find/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param page
     * @param pageSize
     * @param fromDate
     * @param toDate
     * @returns any Ok
     * @throws ApiError
     */
    public static getList(
        page?: number,
        pageSize?: number,
        fromDate?: string,
        toDate?: string,
    ): CancelablePromise<PaginatedResponse_packagesAttributes_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/employee/packages/list',
            query: {
                'page': page,
                'page_size': pageSize,
                'fromDate': fromDate,
                'toDate': toDate,
            },
        });
    }
    /**
     * @param id
     * @returns any Ok
     * @throws ApiError
     */
    public static success(
        id: PacketId,
    ): CancelablePromise<HttpSuccess> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/employee/packages/success/{id}',
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
            method: 'GET',
            url: '/api/v1/employee/packages/cancel/{id}',
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
    public static receivedPackage(
        id: PacketId,
    ): CancelablePromise<HttpSuccess> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/employee/packages/receive/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    public static getCities(): CancelablePromise<Array<citiesAttributes>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/employee/cities',
        });
    }
}
