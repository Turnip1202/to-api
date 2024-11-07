import {phone} from "../../../global.config";

export  const  config = {
  "requestUrl": "https://api2.mubu.com/v3/api/user/sms_login_reg/captcha",
  "method": "POST",
  "data": {
    "phone": phone
  },
  "enable": 0
}
