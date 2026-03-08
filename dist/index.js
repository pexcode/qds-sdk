"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QDSystem = void 0;
const api_handler_1 = require("./api-handler");
const OpenAPI_1 = require("./api/core/OpenAPI");
const RegionsControllerService_1 = require("./api/services/RegionsControllerService");
const SdkControllerService_1 = require("./api/services/SdkControllerService");
const SdkPackagesControllerService_1 = require("./api/services/SdkPackagesControllerService");
const SDK_api_ver = "v3";
const baseUrl = "https://api.pexcode.com/qs";
class QDSystem {
    constructor(tokenKey) {
        OpenAPI_1.OpenAPI.TOKEN = tokenKey;
        OpenAPI_1.OpenAPI.BASE = baseUrl;
        OpenAPI_1.OpenAPI.HEADERS = { "x-version": SDK_api_ver };
    }
    async GetList(page = 1, pageSize = 10) {
        const { result, error } = await (0, api_handler_1.ApiCall)(() => SdkPackagesControllerService_1.SdkPackagesControllerService.getList(page, pageSize));
        if (result) {
            return result;
        }
        throw error;
    }
    async getCompanyListOfCity(cityId) {
        const { result, error } = await (0, api_handler_1.ApiCall)(() => SdkControllerService_1.SdkControllerService.getListOfCity(cityId));
        if (result) {
            return result;
        }
        throw error;
    }
    async MyInfo() {
        const { result, error } = await (0, api_handler_1.ApiCall)(() => SdkControllerService_1.SdkControllerService.getMyInfo());
        if (result) {
            return result;
        }
        throw error;
    }
    async getTenantBranches() {
        const { result, error } = await (0, api_handler_1.ApiCall)(() => SdkControllerService_1.SdkControllerService.getTenantBranches());
        if (result) {
            return result;
        }
        throw error;
    }
    async GetPackageDetails(id) {
        const { result, error } = await (0, api_handler_1.ApiCall)(() => SdkPackagesControllerService_1.SdkPackagesControllerService.getPackageDetails(id));
        if (result) {
            return result;
        }
        throw error;
    }
    async CheckBlackList(query) {
        const { result, error } = await (0, api_handler_1.ApiCall)(() => SdkPackagesControllerService_1.SdkPackagesControllerService.checkBlackList(query));
        if (result) {
            return result;
        }
        throw error;
    }
    async CancelOne(id) {
        const { result, error } = await (0, api_handler_1.ApiCall)(() => SdkPackagesControllerService_1.SdkPackagesControllerService.canceled(id));
        if (result) {
            return result;
        }
        throw error;
    }
    async ReportOne(id, body) {
        const { result, error } = await (0, api_handler_1.ApiCall)(() => SdkPackagesControllerService_1.SdkPackagesControllerService.reportPacket(id, body));
        if (result) {
            return result;
        }
        throw error;
    }
    async CreatePackage(payload) {
        const { result, error } = await (0, api_handler_1.ApiCall)(() => SdkPackagesControllerService_1.SdkPackagesControllerService.createNewPackage(payload));
        if (result) {
            return result;
        }
        throw error;
    }
    async CalculateCost(params) {
        const { result, error } = await (0, api_handler_1.ApiCall)(() => SdkControllerService_1.SdkControllerService.calculateCost(params));
        if (result) {
            return result;
        }
        throw error;
    }
    async SendDataToCenter(id) {
        const { result, error } = await (0, api_handler_1.ApiCall)(() => SdkPackagesControllerService_1.SdkPackagesControllerService.sendDataToCEnter(id));
        if (result) {
            return result;
        }
        throw error;
    }
    async GetRegionsList(countryId) {
        const { result, error } = await (0, api_handler_1.ApiCall)(() => RegionsControllerService_1.RegionsControllerService.getRegions(countryId));
        if (result) {
            return result;
        }
        throw error;
    }
    async GetCitiesListInByRegion(regionId) {
        const { result, error } = await (0, api_handler_1.ApiCall)(() => RegionsControllerService_1.RegionsControllerService.getCities(regionId));
        if (result) {
            return result;
        }
        throw error;
    }
    async GetMyLedger(year, month) {
        const { result, error } = await (0, api_handler_1.ApiCall)(() => SdkControllerService_1.SdkControllerService.getLedgerList(year, month));
        if (result) {
            return result;
        }
        throw error;
    }
    async GetMyLedgerOverview() {
        const { result, error } = await (0, api_handler_1.ApiCall)(() => SdkControllerService_1.SdkControllerService.getLedgerOverView());
        if (result) {
            return result;
        }
        throw error;
    }
    async SetWebhook(payload) {
        const { result, error } = await (0, api_handler_1.ApiCall)(() => SdkControllerService_1.SdkControllerService.setWebhook({
            host: payload.host,
            webhookToken: payload.webhookToken,
            path: payload.path,
        }));
        if (result) {
            return result;
        }
        throw error;
    }
}
exports.QDSystem = QDSystem;
