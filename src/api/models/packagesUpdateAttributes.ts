/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EndpointId } from './EndpointId';
import type { ShippingOption } from './ShippingOption';
import type { UserId } from './UserId';
export type packagesUpdateAttributes = {
    recipientCityId?: number;
    recipientAddress?: string;
    recipientLng?: number;
    recipientLat?: number;
    senderName?: string;
    senderAddress?: string;
    senderPhone?: string;
    senderEmail?: string;
    recipientEmail?: string;
    recipientName?: string;
    recipientPhone?: string;
    note?: string;
    shippingCost?: number;
    endpoint?: EndpointId;
    shippingOption?: ShippingOption;
    deliveryId?: UserId;
    stage?: number;
    isTesting?: boolean;
};

