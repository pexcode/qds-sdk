import { ApiCall } from "./api-handler";
import { OpenAPI } from "./api/core/OpenAPI";
import { CalculateCostAttributes } from "./api/models/CalculateCostAttributes";
import { CheckBlackListAttribute } from "./api/models/CheckBlackListAttribute";
import { citiesAttributes } from "./api/models/citiesAttributes";
import { HttpSuccess } from "./api/models/HttpSuccess";
import { packagesAttributes } from "./api/models/packagesAttributes";
import { SdkPackagesCreationAttributes } from "./api/models/SdkPackagesCreationAttributes";
import { ShippingServiceData } from "./api/models/ShippingServiceData";
import { ExternalSdkService } from "./api/services/ExternalSdkService";
const SDK_api_ver = "v1";
const baseUrl = "https://api.pexcode.com/qs/";

OpenAPI.BASE = baseUrl

export type BranchId = string;

export interface CalculateCost {
  dest_address: string;
  dest_city: number;
  dest_lat?: string;
  dest_lng?: string;
  costId: string;
  branchId: BranchId;
}

class QDSystem {
  key: string;
  constructor(tokenKey: string) {
    this.key = tokenKey;
    OpenAPI.HEADERS = { 'key': tokenKey }
    OpenAPI.HEADERS = { 'x-version': SDK_api_ver }
  }

  async GetList(page: number = 1, pageSize: number = 10,): Promise<packagesAttributes[] | unknown> {
    try {
      const res = await ApiCall(() => ExternalSdkService.getList(page, pageSize))
      return res;
    } catch (e: any) {
      throw e;
    }
  }

  async CompanyList(cityId: number): Promise<citiesAttributes[] | unknown> {
    try {
      const res = await ApiCall(() => ExternalSdkService.getCitiesCompanies(cityId))
      return res;
    } catch (e: any) {
      throw e;
    }
  }

  async Me(): Promise<citiesAttributes[] | unknown> {
    try {
      const res = await ApiCall(() => ExternalSdkService.getMe())
      return res;
    } catch (e: any) {
      throw e;
    }
  }

  async GetOne(id: string): Promise<packagesAttributes | unknown> {
    try {
      const res = await ApiCall(() => ExternalSdkService.getOne(id))
      return res;
    } catch (e: any) {
      throw e;
    }
  }

  async CheckBlackList(query: CheckBlackListAttribute): Promise<CheckBlackListAttribute | unknown> {
    try {
      const res = await ApiCall(() => ExternalSdkService.checkBlackList(query))
      return res;
    } catch (e: any) {
      throw e;
    }
  }

  async CancelOne(id: string): Promise<HttpSuccess | unknown> {
    try {
      const res = await ApiCall(() => ExternalSdkService.canceled(id))
      return res;
    } catch (e: any) {
      throw e;
    }
  }

  async ReportOne(id: string, body: any): Promise<HttpSuccess | unknown> {
    try {
      const res = await ApiCall(() => ExternalSdkService.reportPacket(id, body))
      return res;
    } catch (e: any) {
      throw e;
    }
  }

  async CreatePackage(payload: SdkPackagesCreationAttributes): Promise<packagesAttributes | unknown> {
    try {
      const res = await ApiCall(() => ExternalSdkService.createNewPackage(payload))
      return res;
    } catch (e: any) {
      throw e;
    }
  }

  async CalculateCost(params: CalculateCostAttributes): Promise<ShippingServiceData | unknown> {
    try {
      const res = await ApiCall(() => ExternalSdkService.calculateCost(params))
      return res;
    } catch (e: any) {
      console.log(e);
      throw e;
    }
  }

  async SendDataToCenter(id: string): Promise<ShippingServiceData | unknown> {
    try {
      const res = await ApiCall(() => ExternalSdkService.sendDataToCEnter(id))
      return res;
    } catch (e: any) {
      throw e;
    }
  }
}

export default QDSystem;
