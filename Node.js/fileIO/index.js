//  console.log(__dirname);
//  //_dirname is not defined in the es6 moduling.
//reading files inside node.js

import { write } from 'fs';
import {readFile,writeFile} from 'fs/promises';
import { url } from 'inspector';

console.log(import.meta.url); // current path 

const filePath = new URL('./index.html',import.meta.url);
// console.log(filePath);

let contents = await readFile(filePath,{encoding:'utf-8'});

const data = {
    name:'Sanketh singh',
    company:"Google",
    age:25,
}

for(const [key,value] of Object.entries(data)){
    contents = contents.replace(`{${key}}`,value);
}


//write file will modify the data in the path

// await writeFile(filePath,contents);

//creating new file and writing data into the file

await writeFile(new URL('./newindex.html',import.meta.url),contents);
// console.log(contents);

//. -----> current folder
//.. -----> one folder back