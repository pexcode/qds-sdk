/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { branchesAttributes } from './branchesAttributes';
export type citiesAttributes = {
    id: number;
    countryId: number;
    ar_name: string;
    en_name: string;
    topic_name?: string;
    lat: string;
    lng: string;
    createdAt?: string;
    updatedAt?: string;
    branches?: Array<branchesAttributes> | null;
};

