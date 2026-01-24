import { appAttributes } from "./api/models/appAttributes";
import { branchesAttributes } from "./api/models/branchesAttributes";
import { CalculateCostAttributes } from "./api/models/CalculateCostAttributes";
import { CheckBlackListAttribute } from "./api/models/CheckBlackListAttribute";
import { HttpSuccess } from "./api/models/HttpSuccess";
import { packagesAttributes } from "./api/models/packagesAttributes";
import { SdkPackagesCreationAttributes } from "./api/models/SdkPackagesCreationAttributes";
import { ShippingServiceData } from "./api/models/ShippingServiceData";
export declare class QDSystem {
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
