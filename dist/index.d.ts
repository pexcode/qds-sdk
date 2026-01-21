/**
 * Stringified UUIDv4.
 * See [RFC 4112](https://tools.ietf.org/html/rfc4122)
 */
type AppId = string;

declare enum AppLevel {
    PRIVATE = "private",
    PUBLIC = "public",
    NATIONAL = "national"
}

/**
 * Stringified UUIDv4.
 * See [RFC 4112](https://tools.ietf.org/html/rfc4122)
 */
type TenantId = string;

type appAttributes = {
    id: AppId;
    tenantId: TenantId;
    name: string;
    address?: string;
    countryId: number;
    email?: string;
    isActive: boolean;
    currentRequestCount: number;
    lastRequestAt: string;
    avatar?: string;
    host?: string;
    token?: string;
    hook_url?: string;
    hash?: string;
    appLevel: AppLevel;
    maxRequestCount: number;
    blockedAt?: string;
    createdAt?: string;
    updatedAt?: string;
    expireDate: string;
};

/**
 * Stringified UUIDv4.
 * See [RFC 4112](https://tools.ietf.org/html/rfc4122)
 */
type BranchId = string;

/**
 * Stringified UUIDv4.
 * See [RFC 4112](https://tools.ietf.org/html/rfc4122)
 */
type CostId = string;

declare enum PacketType {
    PACKET = "Packet",
    DOCUMENT = "Document"
}

type costModelAttributes = {
    id: CostId;
    tenantId: TenantId;
    branchId: BranchId;
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
    id: BranchId;
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

type CalculateCostAttributes = {
    costId: CostId;
    branchId: BranchId;
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

type HttpSuccess = {
    status: number;
    message: string;
    messageKey: string;
};

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
    branchId: BranchId;
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
    branchId?: BranchId;
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
    branchId: BranchId;
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

declare class QDSystem {
    constructor(tokenKey: string);
    GetList(page?: number, pageSize?: number): Promise<packagesAttributes[]>;
    getCompanyListOfCity(cityId: number): Promise<branchesAttributes[]>;
    MyInfo(): Promise<appAttributes>;
    getTenantBranches(): Promise<branchesAttributes[]>;
    GetPackageDetails(id: string): Promise<packagesAttributes>;
    CheckBlackList(query: CheckBlackListAttribute): Promise<CheckBlackListAttribute>;
    CancelOne(id: string): Promise<HttpSuccess>;
    ReportOne(id: string, body: any): Promise<HttpSuccess>;
    CreatePackage(payload: SdkPackagesCreationAttributes): Promise<packagesAttributes>;
    CalculateCost(params: CalculateCostAttributes): Promise<ShippingServiceData>;
    SendDataToCenter(id: string): Promise<HttpSuccess>;
}

export { QDSystem };
