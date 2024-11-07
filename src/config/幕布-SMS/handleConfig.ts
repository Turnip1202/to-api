import {readDirAsHashNamedObjects} from "../../utils/handleDir";
const config = readDirAsHashNamedObjects(__dirname,"_config");
const header = readDirAsHashNamedObjects(__dirname,"_headers");
import fs from 'fs';
import crypto from 'crypto';

const filePath = __filename; // 当前文件路径

const fileContent = fs.readFileSync(filePath);
const hash = crypto.createHash('sha256').update(fileContent).digest('hex');
console.log(JSON.stringify(config, null, 2));

/**
 * 这里使用当前文件的哈希值作为对象的键名，其实没有什么用，只是为了拓展性的考虑
 */
export default { [hash]:{
        config,header
    }
}
