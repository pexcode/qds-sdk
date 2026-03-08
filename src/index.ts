import { ApiCall } from "./api-handler";
import { OpenAPI } from "./api/core/OpenAPI";
import { appAttributes } from "./api/models/appAttributes";
import { branchesAttributes } from "./api/models/branchesAttributes";
import { BranchLedgerAttributes } from "./api/models/BranchLedgerAttributes";
import { CalculateCostAttributes } from "./api/models/CalculateCostAttributes";
import { CheckBlackListAttribute } from "./api/models/CheckBlackListAttribute";
import { citiesAttributes } from "./api/models/citiesAttributes";
import { HttpSuccess } from "./api/models/HttpSuccess";
import { packagesAttributes } from "./api/models/packagesAttributes";
import { regionsAttributes } from "./api/models/regionsAttributes";
import { SdkLedgerOverview } from "./api/models/SdkLedgerOverview";
import { SdkPackagesCreationAttributes } from "./api/models/SdkPackagesCreationAttributes";
import { ShippingServiceData } from "./api/models/ShippingServiceData";
import { RegionsControllerService } from "./api/services/RegionsControllerService";
import { SdkControllerService } from "./api/services/SdkControllerService";
import { SdkPackagesControllerService } from "./api/services/SdkPackagesControllerService";
const SDK_api_ver = "v3";
const baseUrl = "https://api.pexcode.com/qs";

export class QDSystem {
  constructor(tokenKey: string) {
    OpenAPI.TOKEN = tokenKey;
    OpenAPI.BASE = baseUrl;
    OpenAPI.HEADERS = { "x-version": SDK_api_ver };
  }

  async GetList(
    page: number = 1,
    pageSize: number = 10,
  ): Promise<packagesAttributes[]> {
    const { result, error } = await ApiCall(() =>
      SdkPackagesControllerService.getList(page, pageSize),
    );
    if (result) {
      return result;
    }
    throw error;
  }

  async getCompanyListOfCity(cityId: number): Promise<branchesAttributes[]> {
    const { result, error } = await ApiCall(() =>
      SdkControllerService.getListOfCity(cityId),
    );
    if (result) {
      return result;
    }
    throw error;
  }

  async MyInfo(): Promise<appAttributes> {
    const { result, error } = await ApiCall<appAttributes>(() =>
      SdkControllerService.getMyInfo(),
    );
    if (result) {
      return result;
    }
    throw error;
  }

  async getTenantBranches(): Promise<branchesAttributes[]> {
    const { result, error } = await ApiCall<branchesAttributes[]>(() =>
      SdkControllerService.getTenantBranches(),
    );
    if (result) {
      return result;
    }
    throw error;
  }

  async GetPackageDetails(id: string): Promise<packagesAttributes> {
    const { result, error } = await ApiCall(() =>
      SdkPackagesControllerService.getPackageDetails(id),
    );
    if (result) {
      return result;
    }
    throw error;
  }

  async CheckBlackList(
    query: CheckBlackListAttribute,
  ): Promise<CheckBlackListAttribute> {
    const { result, error } = await ApiCall(() =>
      SdkPackagesControllerService.checkBlackList(query),
    );
    if (result) {
      return result;
    }
    throw error;
  }

  async CancelOne(id: string): Promise<HttpSuccess> {
    const { result, error } = await ApiCall(() =>
      SdkPackagesControllerService.canceled(id),
    );
    if (result) {
      return result;
    }
    throw error;
  }

  async ReportOne(id: string, body: any): Promise<HttpSuccess> {
    const { result, error } = await ApiCall(() =>
      SdkPackagesControllerService.reportPacket(id, body),
    );
    if (result) {
      return result;
    }
    throw error;
  }

  async CreatePackage(
    payload: SdkPackagesCreationAttributes,
  ): Promise<packagesAttributes> {
    const { result, error } = await ApiCall(() =>
      SdkPackagesControllerService.createNewPackage(payload),
    );
    if (result) {
      return result;
    }
    throw error;
  }

  async CalculateCost(
    params: CalculateCostAttributes,
  ): Promise<ShippingServiceData> {
    const { result, error } = await ApiCall(() =>
      SdkControllerService.calculateCost(params),
    );
    if (result) {
      return result;
    }
    throw error;
  }

  async SendDataToCenter(id: string): Promise<HttpSuccess> {
    const { result, error } = await ApiCall(() =>
      SdkPackagesControllerService.sendDataToCEnter(id),
    );
    if (result) {
      return result;
    }
    throw error;
  }

  async GetRegionsList(countryId: number): Promise<regionsAttributes[]> {
    const { result, error } = await ApiCall(() =>
      RegionsControllerService.getRegions(countryId),
    );
    if (result) {
      return result;
    }
    throw error;
  }

  async GetCitiesListInByRegion(regionId: number): Promise<citiesAttributes[]> {
    const { result, error } = await ApiCall(() =>
      RegionsControllerService.getCities(regionId),
    );
    if (result) {
      return result;
    }
    throw error;
  }

  async GetMyLedger(
    year?: number,
    month?: number,
  ): Promise<BranchLedgerAttributes[]> {
    const { result, error } = await ApiCall(() =>
      SdkControllerService.getLedgerList(year, month),
    );
    if (result) {
      return result;
    }
    throw error;
  }

  async GetMyLedgerOverview(): Promise<SdkLedgerOverview> {
    const { result, error } = await ApiCall(() =>
      SdkControllerService.getLedgerOverView(),
    );
    if (result) {
      return result;
    }
    throw error;
  }

  async SetWebhook(payload:{
    host: string,
    webhookToken: string,
    path: string,
  }): Promise<HttpSuccess> {
    const { result, error } = await ApiCall(() =>
      SdkControllerService.setWebhook({ host:payload.host, webhookToken:payload, path }),
    );
    if (result) {
      return result;
    }
    throw error;
  }
  
  async SetWebhook(payload: {
    host: string;
    webhookToken: string;
    path: string;
  }): Promise<HttpSuccess> {
    const { result, error } = await ApiCall(() =>
      SdkControllerService.setWebhook({
        host: payload.host,
        webhookToken: payload.webhookToken,
        path: payload.path,
      }),
    );
    if (result) {
      return result;
    }
    throw error;
  }
}