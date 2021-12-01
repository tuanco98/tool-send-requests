import axios from "axios";
import { config_BUILD_URL } from "../../../config";
const { PerformanceObserver, performance } = require('perf_hooks');

type InputParam = {
    request_number: number;
    params: {
        ownerAddress: string;
        ownerName: string;
        signature: string;
        createdAt: number;
        structure: string;
        image: string;
        name: string;
        runeCount: number;
        template: boolean;
    };
};
type ApiRespose = {
	_id: string
    errorCode: String
	errorMessage: String
}
type InfoRequset = {
    time: number
    response: ApiRespose
}
type ResultType = {
    totalRequest: number;
    errorPercent: number;
    requestCountPerSec: number;
    milisecondPerRequest: number;
    code: number;
    infoRequests: InfoRequset[]
};

let countRequestSuccess = 0;
let totalTimerequest = 0;
let infoRequestsArr: InfoRequset[] = []

const request = async (params) => {
    try {
        const time_start = performance.now();
        const response = await axios.post(config_BUILD_URL, {
            query: `
                mutation pr_para_art_create(
                    $ownerAddress: String!
                    $ownerName: String
                    $signature: String!
                    $createdAt: Float!
                    $structure: String!
                    $image: String
                    $name: String
                    $runeCount: Int!
                    $template: Boolean!){
                    pr_para_art_create(
                        ownerAddress: $ownerAddress
                        ownerName: $ownerName
                        signature: $signature
                        createdAt: $createdAt
                        structure: $structure
                        image: $image
                        name: $name
                        runeCount: $runeCount
                        template: $template
                    ) {
                      errorCode
                      errorMessage
                      _id
                    }
                  }
                `,
            variables: params,
        })
        const time_end = performance.now()
        const time = time_end-time_start;
        totalTimerequest += time
        infoRequestsArr.push({
            time,
            response: response.data.data.pr_para_art_create
        })
        if (response.data.data.pr_para_art_create.errorMessage === "Success") {
            countRequestSuccess++;
        }
    } catch (err) {
        console.log(err);
        throw err;
    }
};

const multipleRequest = async (request_count, params) => {
    const promises = [];
    for (let i = 0; i < request_count; i++) {
        promises.push(request(params));
    }
    await Promise.all(promises);
};

export const multiple_request_pr_para_art_create = async (root: any, args: any) => {
    try {
        const { request_number, params } = args as InputParam;
        countRequestSuccess = 0;
        totalTimerequest=0
        infoRequestsArr=[]
        await multipleRequest(request_number, params);
        const result: ResultType = {
            totalRequest: request_number,
            errorPercent: (request_number-countRequestSuccess)/request_number * 100,
            requestCountPerSec: 1000 / (totalTimerequest/request_number),
            milisecondPerRequest: totalTimerequest/request_number,
            code: 200,
            infoRequests: infoRequestsArr
        }
        return result
    } catch (e) {
        throw e;
    }
};
