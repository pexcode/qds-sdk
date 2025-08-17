"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const SDK_api_ver = "v1";
const baseUrl = "https://api.pexcode.com/qs/";
axios_1.default.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";
axios_1.default.defaults.headers.post["Accept"] = "*/*";
axios_1.default.defaults.headers.post["Connection"] = "keep-alive";
axios_1.default.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
axios_1.default.defaults.baseURL = baseUrl;
const API_Me = `api/app/${SDK_api_ver}/me`;
const getOneApi = `api/app/${SDK_api_ver}/packages/tracking/`;
const addOneApi = `api/app/${SDK_api_ver}/packages`;
const getList = `api/app/${SDK_api_ver}/packages/`;
const companies = `api/app/${SDK_api_ver}/place/`;
const reportOne = `api/app/${SDK_api_ver}/packages/report`;
const costApi = `api/app/${SDK_api_ver}/shipping/cost`;
const SendDataToCenterAPI = `api/app/${SDK_api_ver}/packages`;
const blackListAPi = `api/app/${SDK_api_ver}/blacklist`;
function toQueryStrings(params) {
    return ("?" +
        Object.keys(params)
            .map((key) => `${key}=${params[key]}`)
            .join("&"));
}
class QDSystem {
    constructor(tokenKey) {
        this.key = tokenKey;
    }
    GetList(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const param = toQueryStrings(query);
            try {
                const res = yield axios_1.default.get(getList + `${param}&key=${this.key}`);
                return res.data;
            }
            catch (e) {
                console.log(e.message);
                if (e.response && e.response.data) {
                    console.log(e.response.data);
                }
                throw e;
            }
        });
    }
    CompnayList(id_city) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield axios_1.default.get(companies + id_city + `?key=${this.key}`);
                return res.data;
            }
            catch (e) {
                // Handle error
                console.log(e.message);
                if (e.response && e.response.data) {
                    console.log(e.response.data);
                }
                throw e;
            }
        });
    }
    Me() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield axios_1.default.get(API_Me + `?key=${this.key}`);
                return res.data;
            }
            catch (e) {
                // Handle error
                console.log(e.message);
                if (e.response && e.response.data) {
                    console.log(e.response.data);
                }
                throw e;
            }
        });
    }
    GetOne(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const param = toQueryStrings(query);
            try {
                const res = yield axios_1.default.get(getOneApi + `${param}&key=${this.key}`);
                return res.data;
            }
            catch (e) {
                // Handle error
                console.log(e.message);
                if (e.response && e.response.data) {
                    console.log(e.response.data);
                }
                throw e;
            }
        });
    }
    CheckBlackList(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const param = toQueryStrings(query);
            try {
                const res = yield axios_1.default.get(blackListAPi + `${param}&key=${this.key}`);
                return res.data;
            }
            catch (e) {
                // Handle error
                console.log(e.message);
                if (e.response && e.response.data) {
                    console.log(e.response.data);
                }
                throw e;
            }
        });
    }
    Cancel_One(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const param = toQueryStrings(query);
            try {
                const res = yield axios_1.default.delete(addOneApi + `${param}&key=${this.key}`);
                return res.data;
            }
            catch (e) {
                console.log(e.message);
                if (e.response && e.response.data) {
                    console.log(e.response.data);
                }
                throw e;
            }
        });
    }
    ReportOne(query) {
        return __awaiter(this, void 0, void 0, function* () {
            // let param =  toQueryStrings(query)
            const param = `?key=${this.key}`;
            try {
                const res = yield axios_1.default.post(reportOne + param, query);
                return res.data;
            }
            catch (e) {
                // Handle error
                console.log(e.message);
                if (e.response && e.response.data) {
                    console.log(e.response.data);
                }
                throw e;
            }
        });
    }
    CreateOne(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = {
                    cost_package: params.cost_package,
                    price_package: params.price_package,
                    dest_number: params.dest_number,
                    dest_city: params.dest_city,
                    id_cost: params.id_cost,
                    dest_address: params.dest_address,
                    sender_name: params.sender_name,
                    dest_lat: params.dest_lat,
                    dest_lng: params.dest_lng,
                    src_id: params.src_id,
                    uid: params.uid,
                    cost_box: params.cost_box,
                    sender_address: params.sender_address,
                    sender_email: params.sender_email || null,
                    dest_email: params.dest_email || null,
                    dest_name: params.dest_name,
                    verification: params.verification,
                    note: params.note,
                    isTesting: params.isTesting,
                };
                try {
                    const res = yield axios_1.default.post(addOneApi + `?key=${this.key}`, payload);
                    return res.data;
                }
                catch (e) {
                    console.log(e.message);
                    if (e.response && e.response.data) {
                        console.log(e.response.data);
                    }
                    throw e;
                }
            }
            catch (e) {
                console.log(e);
                throw e;
            }
        });
    }
    UpdateOne(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let payload = {
                    cost_package: params.cost_package,
                    price_package: params.price_package,
                    dest_number: params.dest_number,
                    dest_city: params.dest_city,
                    id_cost: params.id_cost,
                    id: params.id,
                    dest_address: params.dest_address,
                    sender_name: params.sender_name,
                    dest_lat: params.dest_lat,
                    dest_lng: params.dest_lng,
                    src_id: params.src_id,
                    uid: params.uid,
                    sender_address: params.sender_address,
                    sender_email: params.sender_email || null, //
                    dest_email: params.dest_email || null, //
                    dest_name: params.dest_name,
                    verification: params.verification,
                    note: params.note,
                    isTesting: params.isTesting,
                };
                try {
                    const res = yield axios_1.default.patch(addOneApi + `?key=${this.key}`, payload);
                    return res.data;
                }
                catch (e) {
                    // Handle error
                    console.log(e.message);
                    if (e.response && e.response.data) {
                        console.log(e.response.data);
                    }
                    throw e;
                }
            }
            catch (e) {
                console.log(e);
                throw e;
            }
        });
    }
    CalculateCost(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = {
                    dest_address: params.dest_address,
                    cityId: params.dest_city,
                    // dest_lat:  params.dest_lat,
                    // dest_lng:  params.dest_lng,
                    id_cost: params.id_cost,
                    src_id: params.src_id,
                };
                try {
                    const res = yield axios_1.default.post(costApi + `?key=${this.key}`, payload);
                    return res.data;
                }
                catch (e) {
                    // Handle error
                    console.log(e.message);
                    if (e.response && e.response.data) {
                        console.log(e.response.data);
                    }
                    throw e;
                }
            }
            catch (e) {
                console.log(e);
                throw e;
            }
        });
    }
    SendDataToCenter(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const param = toQueryStrings(query);
            try {
                const res = yield axios_1.default.get(SendDataToCenterAPI + `${param}&key=${this.key}`);
                return res.data;
            }
            catch (e) {
                // Handle error
                console.log(e.message);
                if (e.response && e.response.data) {
                    console.log(e.response.data);
                }
                throw e;
            }
        });
    }
}
exports.default = QDSystem;
