/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BarChartsAttributes } from '../models/BarChartsAttributes';
import type { BranchId } from '../models/BranchId';
import type { LineChartsAttributes } from '../models/LineChartsAttributes';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AnalysisService {
    /**
     * @param id
     * @param year
     * @returns any Ok
     * @throws ApiError
     */
    public static getChart(
        id: BranchId,
        year: number,
    ): CancelablePromise<BarChartsAttributes> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/analysis/Charts/bar/{id}/{year}',
            path: {
                'id': id,
                'year': year,
            },
        });
    }
    /**
     * @param id
     * @param year
     * @returns any Ok
     * @throws ApiError
     */
    public static getDeliveryRate(
        id: BranchId,
        year: number,
    ): CancelablePromise<LineChartsAttributes> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/analysis/Charts/line/{id}/{year}',
            path: {
                'id': id,
                'year': year,
            },
        });
    }
}
