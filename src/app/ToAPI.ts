import configInfo from "../config";
import {formatConfig} from "../utils/formatConfig";
import {IConfigInfo} from "../types"

export const newconfigInfo= formatConfig(configInfo)


/**
 * config和header都可能有多条，主要是基于拓展性的考虑。默认都使用第一条
 * @param newconfigInfo
 * @param configIndex 使用哪一条配置的索引
 * @param headerIndex   使用哪一条header的索引
 */
export const getSendPrepareData = (newconfigInfo: Record<string, any>[],configIndex:number=0,headerIndex:number=0):IConfigInfo[]=>{

    const data = newconfigInfo.map((item):IConfigInfo=>{

            return {
                reqConfig:item.config.at(configIndex),
                header:item.header.at(headerIndex)
            }
    }
    )
    // console.log(JSON.stringify(data,null,2));

    return data;



}
export const toAPI = (req:IConfigInfo)=>{
    if (!req.reqConfig.status) fetch(req.reqConfig.requestUrl, {
        method: req.reqConfig.method,
        headers: req.header,
        body: JSON.stringify(req.reqConfig.data)
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));

}


