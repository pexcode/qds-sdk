/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BranchId } from '../models/BranchId';
import type { CalculateCostAttributes } from '../models/CalculateCostAttributes';
import type { HttpSuccess } from '../models/HttpSuccess';
import type { packageEventsAttributes } from '../models/packageEventsAttributes';
import type { packagesAttributes } from '../models/packagesAttributes';
import type { PackagesCreationAttributes } from '../models/PackagesCreationAttributes';
import type { packagesUpdateAttributes } from '../models/packagesUpdateAttributes';
import type { PacketId } from '../models/PacketId';
import type { PaginatedResponse_packagesAttributes_ } from '../models/PaginatedResponse_packagesAttributes_';
import type { ShippingOption } from '../models/ShippingOption';
import type { ShippingServiceData } from '../models/ShippingServiceData';
import type { tripsVehicleAttributes } from '../models/tripsVehicleAttributes';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PackagesService {
    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static createNewPacket(
        requestBody: PackagesCreationAttributes,
    ): CancelablePromise<packagesAttributes> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/packages/add',
            body: requestBody,
            mediaType: 'application/json',
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
            url: '/api/packages/find/{id}',
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
    public static updateOne(
        id: PacketId,
        requestBody: packagesUpdateAttributes,
    ): CancelablePromise<HttpSuccess> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/packages/update/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static updatePackageStatus(
        id: PacketId,
        requestBody: {
            comment?: string;
            status: number;
        },
    ): CancelablePromise<HttpSuccess> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/packages/update-status/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param page
     * @param pageSize
     * @param fromDate
     * @param toDate
     * @param search
     * @param searchIn
     * @returns any Ok
     * @throws ApiError
     */
    public static getList(
        page?: number,
        pageSize?: number,
        fromDate?: string,
        toDate?: string,
        search?: string,
        searchIn?: 'uuid' | 'recipientName' | 'recipientPhone' | 'recipientEmail' | 'senderName' | 'senderEmail',
    ): CancelablePromise<PaginatedResponse_packagesAttributes_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/packages/list',
            query: {
                'page': page,
                'page_size': pageSize,
                'fromDate': fromDate,
                'toDate': toDate,
                'search': search,
                'searchIn': searchIn,
            },
        });
    }
    /**
     * @param id
     * @returns any Ok
     * @throws ApiError
     */
    public static trackingPackage(
        id: PacketId,
    ): CancelablePromise<Array<packageEventsAttributes>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/packages/track/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    public static transfer(): CancelablePromise<HttpSuccess> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/packages/transfer',
        });
    }
    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static calculateShippingCost(
        requestBody: CalculateCostAttributes,
    ): CancelablePromise<ShippingServiceData> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/packages/shipping/calculate/cost',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param toCityId
     * @param tripType
     * @param toBranchId
     * @returns any Ok
     * @throws ApiError
     */
    public static getProposedShippingTrips(
        toCityId: number,
        tripType: ShippingOption,
        toBranchId?: BranchId,
    ): CancelablePromise<Array<tripsVehicleAttributes>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/packages/shipping/proposed/trips/{toCityId}/{tripType}',
            path: {
                'toCityId': toCityId,
                'tripType': tripType,
            },
            query: {
                'toBranchId': toBranchId,
            },
        });
    }
}
