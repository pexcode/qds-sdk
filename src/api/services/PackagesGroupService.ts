/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HttpSuccess } from '../models/HttpSuccess';
import type { PacketId } from '../models/PacketId';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PackagesGroupService {
    /**
     * @param tripId
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static createPackagesGroupMovementBulk(
        tripId: string,
        requestBody: Array<PacketId>,
    ): CancelablePromise<HttpSuccess> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/packagesGroup/create/{tripId}',
            path: {
                'tripId': tripId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
