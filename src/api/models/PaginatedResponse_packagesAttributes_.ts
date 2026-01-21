/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { packagesAttributes } from './packagesAttributes';
export type PaginatedResponse_packagesAttributes_ = {
    rows: Array<packagesAttributes>;
    pagination: {
        first_row_no?: (string | number);
        total_pages: number;
        total_rows: number;
        page_size: number;
        page: number;
    };
};

