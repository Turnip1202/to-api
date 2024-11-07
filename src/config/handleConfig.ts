import fs from 'fs';
import path from 'path';

const currentDirectory = __dirname;

const getSubDirectories = (dir: string): string[] => {
    return fs.readdirSync(dir)
        .filter(item => fs.statSync(path.join(dir, item)).isDirectory())
        .map(item => item);
};

const folders = getSubDirectories(currentDirectory);

const loadedObjects: Record<string, any>[] = [];

folders.forEach((folder) => {
    const indexFilePath = path.join(currentDirectory, folder, 'index.ts');
    if (fs.existsSync(indexFilePath)) {
        const module = require(indexFilePath);// 动态加载模块
        loadedObjects.push(module.default||module);
    }
});



export default loadedObjects;
