import { AxiosResponse } from 'axios';
import { AddressObject } from 'mailparser';
import { GmailMessage, Participant } from 'src/workspace/messaging/types/gmailMessage';
import { MessageQuery } from 'src/workspace/messaging/types/messageOrThreadQuery';
import { GmailMessageParsedResponse } from 'src/workspace/messaging/types/gmailMessageParsedResponse';
export declare class FetchMessagesByBatchesService {
    private readonly httpService;
    constructor();
    fetchAllMessages(queries: MessageQuery[], accessToken: string): Promise<{
        messages: GmailMessage[];
        errors: any[];
    }>;
    fetchAllByBatches(queries: MessageQuery[], accessToken: string, boundary: string): Promise<AxiosResponse<any, any>[]>;
    fetchBatch(queries: MessageQuery[], accessToken: string, batchOffset: number, batchLimit: number, boundary: string): Promise<AxiosResponse<any, any>>;
    createBatchBody(queries: MessageQuery[], boundary: string): string;
    parseBatch(responseCollection: AxiosResponse<any, any>): GmailMessageParsedResponse[];
    getBatchSeparator(responseCollection: AxiosResponse<any, any>): string;
    formatBatchResponseAsGmailMessage(responseCollection: AxiosResponse<any, any>): Promise<{
        messages: GmailMessage[];
        errors: any[];
    }>;
    formatAddressObjectAsArray(addressObject: AddressObject | AddressObject[]): AddressObject[];
    formatAddressObjectAsParticipants(addressObject: AddressObject | AddressObject[] | undefined, role: 'from' | 'to' | 'cc' | 'bcc'): Participant[];
    formatBatchResponsesAsGmailMessages(batchResponses: AxiosResponse<any, any>[]): Promise<{
        messages: GmailMessage[];
        errors: any[];
    }>;
}
