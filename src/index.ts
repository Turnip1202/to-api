import {getSendPrepareData, newconfigInfo, toAPI} from "./app/ToAPI";

const sendInfo = getSendPrepareData(newconfigInfo)


export  const eachAPI = ()=>{
    sendInfo.forEach(toAPI)
}
