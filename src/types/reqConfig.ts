export interface IReqConfig{
    requestUrl?:string;
    method?:string;
    data:any;
    status?:string;
}

export interface IConfigInfo{
    reqConfig:IReqConfig;
    header:any;
}
