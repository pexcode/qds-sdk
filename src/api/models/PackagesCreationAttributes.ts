/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BillingType } from './BillingType';
import type { CostId } from './CostId';
import type { EndpointId } from './EndpointId';
import type { PacketType } from './PacketType';
import type { ProofOfDeliveryType } from './ProofOfDeliveryType';
import type { ShippingOption } from './ShippingOption';
import type { TenantId } from './TenantId';
export type PackagesCreationAttributes = {
    futureTenantId?: TenantId;
    recipientCityId: number;
    recipientAddress: string;
    recipientLng?: number;
    recipientLat?: number;
    senderName: string;
    senderAddress: string;
    senderEmail?: string;
    recipientEmail?: string;
    type: PacketType;
    recipientName: string;
    recipientPhone: string;
    note: string;
    shippingCost: number;
    packetCost?: number;
    costId?: CostId;
    showCostBox: boolean;
    isPaid: boolean;
    isPaidOnline: boolean;
    endpoint?: EndpointId;
    pickup: boolean;
    includeProducts: boolean;
    shippingOption: ShippingOption;
    billingType: BillingType;
    proofOfDeliveryType?: ProofOfDeliveryType;
    proposedDeliveryDate?: string | null;
    tripId?: string;
    senderPhone: string;
};

