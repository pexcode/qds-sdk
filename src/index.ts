import axios from "axios";
const SDK_api_ver = "v1";
const baseUrl = "https://api.pexcode.com/qs/";

axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";
axios.defaults.headers.post["Accept"] = "*/*";
axios.defaults.headers.post["Connection"] = "keep-alive";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
axios.defaults.baseURL = baseUrl;

const API_Me = `api/app/${SDK_api_ver}/me`;
const getOneApi = `api/app/${SDK_api_ver}/packages/tracking/`;
const addOneApi = `api/app/${SDK_api_ver}/packages`;
const getList = `api/app/${SDK_api_ver}/packages/`;
const companies = `api/app/${SDK_api_ver}/place/`;
const reportOne = `api/app/${SDK_api_ver}/packages/report`;
const costApi = `api/app/${SDK_api_ver}/shipping/cost`;
const SendDataToCenterAPI = `api/app/${SDK_api_ver}/packages`;
const blackListAPi = `api/app/${SDK_api_ver}/blacklist`;

export interface Package {
  cost_package: number;
  price_package: number;
  dest_number: string;
  dest_city: number;
  id_cost: string;
  dest_address: string;
  sender_name: string;
  dest_lat: string;
  dest_lng: string;
  src_id: string;
  uid: string;
  cost_box: boolean;
  sender_address: string;
  sender_email?: string;
  dest_email?: string;
  dest_name: string;
  verification: boolean;
  note: string;
  isTesting: boolean;
}

export interface UpdatePackage extends Package {
  id: string;
}

export interface CalculateCost {
  dest_address: string;
  dest_city: number;
  dest_lat?: string;
  dest_lng?: string;
  id_cost: string;
  src_id: string;
}

function toQueryStrings(params: { [x: string]: any }) {
  return (
    "?" +
    Object.keys(params)
      .map((key) => `${key}=${params[key]}`)
      .join("&")
  );
}

class QDSystem {
  key: string;
  constructor(tokenKey: string) {
    this.key = tokenKey;
  }

  async GET_List(query: { id?: string; uid?: string; page?: number }) {
    const param = toQueryStrings(query);
    try {
      const res = await axios.get(getList + `${param}&key=${this.key}`);
      return res.data;
    } catch (e: any) {
      console.log(e.message);
      if (e.response && e.response.data) {
        console.log(e.response.data);
      }
      throw e;
    }
  }

  async GET_companies(id_city: number) {
    try {
      const res = await axios.get(companies + id_city + `?key=${this.key}`);
      return res.data;
    } catch (e: any) {
      // Handle error
      console.log(e.message);
      if (e.response && e.response.data) {
        console.log(e.response.data);
      }
      throw e;
    }
  }

  async me() {
    try {
      const res = await axios.get(API_Me + `?key=${this.key}`);
      return res.data;
    } catch (e: any) {
      // Handle error
      console.log(e.message);
      if (e.response && e.response.data) {
        console.log(e.response.data);
      }
      throw e;
    }
  }

  async GET_One(query: { id?: string; uid?: string }) {
    const param = toQueryStrings(query);
    try {
      const res = await axios.get(getOneApi + `${param}&key=${this.key}`);
      return res.data;
    } catch (e: any) {
      // Handle error
      console.log(e.message);
      if (e.response && e.response.data) {
        console.log(e.response.data);
      }
      throw e;
    }
  }

  async CheckBlackList(query: {
    full_name?: string;
    number?: string;
    email?: string;
  }) {
    const param = toQueryStrings(query);
    try {
      const res = await axios.get(blackListAPi + `${param}&key=${this.key}`);
      return res.data;
    } catch (e: any) {
      // Handle error
      console.log(e.message);
      if (e.response && e.response.data) {
        console.log(e.response.data);
      }
      throw e;
    }
  }

  async Cancel_One(query: { id: string; uid: string }) {
    const param = toQueryStrings(query);
    try {
      const res = await axios.delete(addOneApi + `${param}&key=${this.key}`);
      return res.data;
    } catch (e: any) {
      console.log(e.message);
      if (e.response && e.response.data) {
        console.log(e.response.data);
      }
      throw e;
    }
  }

  async Report_One(query: any) {
    // let param =  toQueryStrings(query)
    const param = `?key=${this.key}`;

    try {
      const res = await axios.post(reportOne + param, query);
      return res.data;
    } catch (e: any) {
      // Handle error
      console.log(e.message);
      if (e.response && e.response.data) {
        console.log(e.response.data);
      }
      throw e;
    }
  }

  async POST_One(params: Package) {
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
        const res = await axios.post(addOneApi + `?key=${this.key}`, payload);
        return res.data;
      } catch (e: any) {
        console.log(e.message);
        if (e.response && e.response.data) {
          console.log(e.response.data);
        }
        throw e;
      }
    } catch (e: any) {
      console.log(e);
      throw e;
    }
  }

  async Update_One(params: UpdatePackage) {
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
        const res = await axios.patch(addOneApi + `?key=${this.key}`, payload);
        return res.data;
      } catch (e: any) {
        // Handle error
        console.log(e.message);
        if (e.response && e.response.data) {
          console.log(e.response.data);
        }
        throw e;
      }
    } catch (e: any) {
      console.log(e);
      throw e;
    }
  }

  async calculateCost(params: CalculateCost) {
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
        const res = await axios.post(costApi + `?key=${this.key}`, payload);
        return res.data;
      } catch (e: any) {
        // Handle error
        console.log(e.message);
        if (e.response && e.response.data) {
          console.log(e.response.data);
        }
        throw e;
      }
    } catch (e: any) {
      console.log(e);
      throw e;
    }
  }

  async SendDataToCenter(query: { id: string; uid: string }) {
    const param = toQueryStrings(query);
    try {
      const res = await axios.get(
        SendDataToCenterAPI + `${param}&key=${this.key}`
      );
      return res.data;
    } catch (e: any) {
      // Handle error
      console.log(e.message);
      if (e.response && e.response.data) {
        console.log(e.response.data);
      }
      throw e;
    }
  }
}

export default QDSystem;
