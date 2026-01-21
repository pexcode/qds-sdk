/**
 * Stringified UUIDv4.
 * See [RFC 4112](https://tools.ietf.org/html/rfc4122)
 */
type BranchId$1 = string;

/**
 * Stringified UUIDv4.
 * See [RFC 4112](https://tools.ietf.org/html/rfc4122)
 */
type CostId = string;

type CalculateCostAttributes = {
    costId: CostId;
    branchId: BranchId$1;
    recipientLng?: number;
    recipientLat?: number;
    recipientAddress?: string;
    recipientCityId: number;
    isExpress: boolean;
    isPickup: boolean;
};

type CheckBlackListAttribute = {
    phone?: string;
    fullName?: string;
    address?: string;
    email?: string;
};

declare enum PacketType {
    PACKET = "Packet",
    DOCUMENT = "Document"
}

/**
 * Stringified UUIDv4.
 * See [RFC 4112](https://tools.ietf.org/html/rfc4122)
 */
type TenantId = string;

type costModelAttributes = {
    id: CostId;
    tenantId: TenantId;
    branchId: BranchId$1;
    type: PacketType;
    typeId: number;
    modelV1: boolean;
    costPerKilometer: number;
    costPerKg: number;
    expressServiceFee: number;
    taxRate: number;
    fuelSurcharge: number;
    cityBaseCosts: number;
    unit: string;
    currency: string;
    maxLong: number;
    maxWidth?: number;
    weight: number;
    isDeleted: boolean;
    createdAt?: string;
    updatedAt?: string;
};

/**
 * Stringified UUIDv4.
 * See [RFC 4112](https://tools.ietf.org/html/rfc4122)
 */
type UserId = string;

type branchesAttributes = {
    costModel?: Array<costModelAttributes> | null;
    id: BranchId$1;
    userId: UserId;
    tenantId: TenantId;
    cityId: number;
    'R': number;
    onlyInternal: boolean;
    availableOnlinePayment: boolean;
    isOnlyEndpoint: boolean;
    isDeleted: boolean;
    workHours: string;
    plz?: number;
    address: string;
    name: string;
    avatar?: string;
    phone?: string;
    rank?: number;
    lat?: number;
    lng?: number;
    createdAt?: string;
    updatedAt?: string;
    isActive: boolean;
};

type citiesAttributes = {
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

type HttpSuccess = {
    status: number;
    message: string;
    messageKey: string;
};

/**
 * Stringified UUIDv4.
 * See [RFC 4112](https://tools.ietf.org/html/rfc4122)
 */
type AppId = string;

declare enum BillingType {
    NONE = "none",
    PREPAID = "prepaid",
    POSTPAID = "postpaid"
}

/**
 * Stringified UUIDv4.
 * See [RFC 4112](https://tools.ietf.org/html/rfc4122)
 */
type EndpointId = string;

declare enum MovementsStatusAttributes {
    PROCESSING = "processing",
    CANCELED = "canceled",
    WAITING = "waiting",
    DONE = "done"
}

type movementsAttributes = {
    id: string;
    tripId: string;
    branchId: BranchId$1;
    userId: UserId;
    tenantId: TenantId;
    deliveryId: UserId;
    startAt?: string;
    endAt?: string;
    status: MovementsStatusAttributes;
    createdAt?: string;
    updatedAt?: string;
    packagesCount?: number;
};

/**
 * Stringified UUIDv4.
 * See [RFC 4112](https://tools.ietf.org/html/rfc4122)
 */
type PacketId = string;

declare enum PlatformEnum {
    QDS = "QDS",
    ANDROID = "android",
    TRUST = "trust",
    SDK = "sdk",
    IS_APP = "isApp",
    ENDPOINT = "endpoint",
    ANY = "any"
}

declare enum ProofOfDeliveryType {
    NONE = "none",
    SIGNATURE = "signature",
    CODE = "code"
}

declare enum ShippingOption {
    STANDARD = "standard",
    EXPRESS = "express",
    SAME_DAY = "same_day"
}

type packagesAttributes = {
    url?: string;
    id: PacketId;
    adminId?: UserId;
    deliveryId?: UserId;
    tenantId?: TenantId;
    futureTenantId?: TenantId;
    appId?: AppId;
    recipientCityId?: number;
    code?: number;
    branchId?: BranchId$1;
    recipientAddress: string;
    recipientLng?: number;
    recipientLat?: number;
    senderName: string;
    senderAddress: string;
    senderEmail?: string;
    senderPhone: string;
    recipientEmail?: string;
    type: PacketType;
    recipientName: string;
    recipientPhone: string;
    note: string;
    shippingCost: number;
    packetCost?: number;
    costId?: CostId;
    paymentMethod?: string;
    paymentId?: string;
    paymentDate?: string;
    currency: string;
    showCostBox: boolean;
    km?: number;
    travelTimeInSeconds?: number;
    travelMode?: string;
    status: number;
    createdAt?: string;
    updatedAt?: string;
    uuid: string;
    roadGroupId?: string;
    wa: boolean;
    kg: number;
    roadAt?: string;
    isPaid: boolean;
    isPaidOnline: boolean;
    endpoint?: EndpointId;
    pickup: boolean;
    includeProducts: boolean;
    platform: PlatformEnum;
    isTesting: boolean;
    scanned?: string;
    stage: number;
    childrenItem?: number | null;
    shippingOption: ShippingOption;
    billingType: BillingType | null;
    proofOfDeliveryType?: ProofOfDeliveryType;
    proposedDeliveryDate?: string | null;
    tripId?: string | null;
    movementPackageGroup?: Array<movementsAttributes>;
};

type SdkPackagesCreationAttributes = {
    senderPhone: string;
    shippingOption: ShippingOption;
    billingType: BillingType;
    proofOfDeliveryType: ProofOfDeliveryType;
    branchId: BranchId$1;
    costId: CostId;
    futureTenantId?: TenantId;
    recipientCityId: number;
    recipientAddress: string;
    recipientLng: number;
    recipientLat: number;
    senderName: string;
    senderAddress: string;
    senderEmail: string;
    recipientEmail: string;
    type: PacketType;
    recipientName: string;
    recipientPhone: string;
    note: string;
    shippingCost: number;
    packetCost?: number;
    showCostBox: boolean;
    express: boolean;
    isPaid: boolean;
    isPaidOnline: boolean;
    endpoint?: EndpointId;
    pickup: boolean;
    includeProducts: boolean;
    isTesting: boolean;
};

type ShippingServiceData = {
    baseCost: string;
    distanceCost: string;
    weightCost: string;
    expressFee: string;
    fuelSurcharge: string;
    tax: string;
    totalCost: string;
    currency: string;
    distance: string;
    details: costModelAttributes;
};

type BranchId = string;
interface CalculateCost {
    dest_address: string;
    dest_city: number;
    dest_lat?: string;
    dest_lng?: string;
    costId: string;
    branchId: BranchId;
}
declare class QDSystem {
    key: string;
    constructor(tokenKey: string);
    GetList(page?: number, pageSize?: number): Promise<packagesAttributes[] | unknown>;
    CompanyList(cityId: number): Promise<citiesAttributes[] | unknown>;
    Me(): Promise<citiesAttributes[] | unknown>;
    GetOne(id: string): Promise<packagesAttributes | unknown>;
    CheckBlackList(query: CheckBlackListAttribute): Promise<CheckBlackListAttribute | unknown>;
    CancelOne(id: string): Promise<HttpSuccess | unknown>;
    ReportOne(id: string, body: any): Promise<HttpSuccess | unknown>;
    CreatePackage(payload: SdkPackagesCreationAttributes): Promise<packagesAttributes | unknown>;
    CalculateCost(params: CalculateCostAttributes): Promise<ShippingServiceData | unknown>;
    SendDataToCenter(id: string): Promise<ShippingServiceData | unknown>;
}

export { type BranchId, type CalculateCost, QDSystem as default };
