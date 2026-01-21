/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CostId } from '../models/CostId';
import type { costModelAttributes } from '../models/costModelAttributes';
import type { costModelCreationAttributes } from '../models/costModelCreationAttributes';
import type { HttpSuccess } from '../models/HttpSuccess';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CostModelService {
    /**
     * @param id
     * @returns any Ok
     * @throws ApiError
     */
    public static deleteOne(
        id: CostId,
    ): CancelablePromise<HttpSuccess> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/model/v1/shipping/cost/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static addNewCostModel(
        requestBody: costModelCreationAttributes,
    ): CancelablePromise<costModelAttributes> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/model/v1/shipping/cost',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
