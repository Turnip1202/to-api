import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

export const readDirAsHashNamedObjects = (pathName:string,dirName:string): Record<string, any>[] => {
    const configDir = path.join(pathName, dirName);
    const files = fs.readdirSync(configDir);
    const configArray: Record<string, any>[] = [];
    files.forEach((file) => {
        if (path.extname(file) === '.json') {
            const filePath = path.join(configDir, file);
            const data = fs.readFileSync(filePath, 'utf8');
            const jsonData = JSON.parse(data);
            configArray.push(jsonData);
        }
        if (path.extname(file) === '.js') {
            const filePath = path.join(configDir, file);
            const module = require(filePath);// 动态加载模块
            const {config} = module.default||module //拿到导出的config
            configArray.push(config);
        }
    });
    return configArray;
};


