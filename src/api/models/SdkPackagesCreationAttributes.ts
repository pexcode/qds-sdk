/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BillingType } from './BillingType';
import type { BranchId } from './BranchId';
import type { ClientCreationAttributes } from './ClientCreationAttributes';
import type { CostId } from './CostId';
import type { EndpointId } from './EndpointId';
import type { PacketType } from './PacketType';
import type { ProofOfDeliveryType } from './ProofOfDeliveryType';
import type { ShippingOption } from './ShippingOption';
import type { TenantId } from './TenantId';
export type SdkPackagesCreationAttributes = {
    senderPhone: string;
    shippingOption: ShippingOption;
    billingType: BillingType;
    proofOfDeliveryType: ProofOfDeliveryType;
    branchId: BranchId;
    costId: CostId;
    futureTenantId?: TenantId;
    receiverCityId: number;
    type: PacketType;
    note: string;
    packageCost?: number;
    endpoint?: EndpointId;
    pickup: boolean;
    includeProducts: boolean;
    isTesting: boolean;
    receiverInfo: ClientCreationAttributes;
};

