/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BranchId } from '../models/BranchId';
import type { HttpSuccess } from '../models/HttpSuccess';
import type { movementsAttributes } from '../models/movementsAttributes';
import type { MovementsStatusAttributes } from '../models/MovementsStatusAttributes';
import type { tripsVehicleAttributes } from '../models/tripsVehicleAttributes';
import type { TripVehicleCreationAttributes } from '../models/TripVehicleCreationAttributes';
import type { UserId } from '../models/UserId';
import type { vehicleAttributes } from '../models/vehicleAttributes';
import type { vehicleCreationAttributes } from '../models/vehicleCreationAttributes';
import type { vehicleUpdateAttributes } from '../models/vehicleUpdateAttributes';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VehiclesService {
    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static addNewVehicle(
        requestBody: vehicleCreationAttributes,
    ): CancelablePromise<vehicleAttributes> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/vehicle',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    public static getVehicleList(): CancelablePromise<Array<vehicleAttributes>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/vehicle',
        });
    }
    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static createVehicleTrip(
        requestBody: TripVehicleCreationAttributes,
    ): CancelablePromise<HttpSuccess> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/vehicle/create-trip',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param vehicleId
     * @param page
     * @param toBranchId
     * @param toCityId
     * @param deliveryId
     * @param fromDate
     * @param toDate
     * @param scheduled
     * @returns any Ok
     * @throws ApiError
     */
    public static getTripsList(
        vehicleId?: string,
        page: number = 1,
        toBranchId?: BranchId,
        toCityId?: number,
        deliveryId?: UserId,
        fromDate?: string,
        toDate?: string,
        scheduled?: string,
    ): CancelablePromise<Array<tripsVehicleAttributes>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/vehicle/trips/list',
            query: {
                'vehicleId': vehicleId,
                'page': page,
                'toBranchId': toBranchId,
                'toCityId': toCityId,
                'deliveryId': deliveryId,
                'fromDate': fromDate,
                'toDate': toDate,
                'scheduled': scheduled,
            },
        });
    }
    /**
     * @param id
     * @returns any Ok
     * @throws ApiError
     */
    public static getTripInfo(
        id: string,
    ): CancelablePromise<tripsVehicleAttributes> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/vehicle/trips/{id}',
            query: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @returns any Ok
     * @throws ApiError
     */
    public static getVehicleInfo(
        id: string,
    ): CancelablePromise<vehicleAttributes> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/vehicle/{id}',
            query: {
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
    public static updateVehicle(
        id: string,
        requestBody: vehicleUpdateAttributes,
    ): CancelablePromise<HttpSuccess> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/vehicle/{id}',
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
    public static deleteVehicle(
        id: string,
    ): CancelablePromise<HttpSuccess> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/vehicle/{id}',
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
    public static restoreVehicle(
        id: string,
    ): CancelablePromise<HttpSuccess> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/vehicle/{id}',
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
    public static deleteVehicleTrip(
        id: string,
    ): CancelablePromise<HttpSuccess> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/vehicle/trip/{id}',
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
    public static getMovementList(
        id: string,
    ): CancelablePromise<Array<movementsAttributes>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/vehicle/movement/trip/{id}',
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
    public static createMovement(
        id: string,
    ): CancelablePromise<HttpSuccess> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/vehicle/movement/trip/{id}',
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
    public static updateMovement(
        id: string,
        requestBody: {
            status: MovementsStatusAttributes;
        },
    ): CancelablePromise<HttpSuccess> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/vehicle/movement/trip/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
