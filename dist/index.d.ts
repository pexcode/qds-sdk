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
declare class QDSystem {
    key: string;
    constructor(tokenKey: string);
    GetList(query: {
        id?: string;
        uid?: string;
        page?: number;
    }): Promise<any>;
    CompnayList(id_city: number): Promise<any>;
    Me(): Promise<any>;
    GetOne(query: {
        id?: string;
        uid?: string;
    }): Promise<any>;
    CheckBlackList(query: {
        full_name?: string;
        number?: string;
        email?: string;
    }): Promise<any>;
    Cancel_One(query: {
        id: string;
        uid: string;
    }): Promise<any>;
    ReportOne(query: any): Promise<any>;
    CreateOne(params: Package): Promise<any>;
    UpdateOne(params: UpdatePackage): Promise<any>;
    CalculateCost(params: CalculateCost): Promise<any>;
    SendDataToCenter(query: {
        id: string;
        uid: string;
    }): Promise<any>;
}
export default QDSystem;
