/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HttpSuccess } from '../models/HttpSuccess';
import type { ReportCreationAttributes } from '../models/ReportCreationAttributes';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PackagesReportService {
    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static createNewReport(
        requestBody: ReportCreationAttributes,
    ): CancelablePromise<HttpSuccess> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/package/report',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
