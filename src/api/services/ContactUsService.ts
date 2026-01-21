/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { contactUsAttributes } from '../models/contactUsAttributes';
import type { HttpSuccess } from '../models/HttpSuccess';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ContactUsService {
    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static contactUs(
        requestBody: contactUsAttributes,
    ): CancelablePromise<HttpSuccess> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/contact-us',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
