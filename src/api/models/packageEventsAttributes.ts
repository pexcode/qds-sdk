/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AppId } from './AppId';
import type { BranchId } from './BranchId';
import type { PacketId } from './PacketId';
import type { UserId } from './UserId';
export type packageEventsAttributes = {
    id: string;
    appId?: AppId;
    packetId: PacketId;
    branchId: BranchId;
    userId?: UserId;
    cityId?: number;
    role: number;
    comment?: string | null;
    status: number;
    createdAt?: string;
    updatedAt?: string;
};

