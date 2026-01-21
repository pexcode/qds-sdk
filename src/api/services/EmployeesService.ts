/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { employeeAttributes } from '../models/employeeAttributes';
import type { employeeCreationAttributes } from '../models/employeeCreationAttributes';
import type { employeeUpdateAttributes } from '../models/employeeUpdateAttributes';
import type { HttpSuccess } from '../models/HttpSuccess';
import type { UserId } from '../models/UserId';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class EmployeesService {
    /**
     * @returns any Ok
     * @throws ApiError
     */
    public static employeeList(): CancelablePromise<Array<employeeAttributes>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/admin/employee',
        });
    }
    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static addNewEmployee(
        requestBody: employeeCreationAttributes,
    ): CancelablePromise<HttpSuccess> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/admin/employee',
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
    public static updateEmployee(
        id: UserId,
        requestBody: employeeUpdateAttributes,
    ): CancelablePromise<HttpSuccess> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/admin/employee/{id}',
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
    public static deleteEmployee(
        id: UserId,
    ): CancelablePromise<HttpSuccess> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/admin/employee/{id}',
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
    public static restore(
        id: UserId,
    ): CancelablePromise<HttpSuccess> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/admin/employee/{id}',
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
    public static resetEmployeePassword(
        id: UserId,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/admin/employee/reset-password/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @param formData
     * @returns any Ok
     * @throws ApiError
     */
    public static uploadEmployeeAvatar(
        id: UserId,
        formData: {
            file: Blob;
        },
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/admin/employee/{id}/avatar',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
    /**
     * @param id
     * @returns any Ok
     * @throws ApiError
     */
    public static getEmployeeInfo(
        id: UserId,
    ): CancelablePromise<employeeAttributes> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/admin/employee/{id}/info',
            path: {
                'id': id,
            },
        });
    }
}
