/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { packagesAttributes } from '../models/packagesAttributes';
import type { PacketId } from '../models/PacketId';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ExternalTrackerControllerV2Service {
    /**
     * @param id
     * @param uuid
     * @returns any Ok
     * @throws ApiError
     */
    public static trackingPackage(
        id?: PacketId,
        uuid?: string,
    ): CancelablePromise<packagesAttributes> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/external/package/track',
            query: {
                'id': id,
                'uuid': uuid,
            },
        });
    }
}
