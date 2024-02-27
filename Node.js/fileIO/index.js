//  console.log(__dirname);
//  //_dirname is not defined in the es6 moduling.
//reading files inside node.js

import {readFile} from 'fs/promises';

console.log(import.meta.url); // current path 

const filePath = new URL('./index.html',import.meta.url);

const contents = await readFile(filePath,{encoding:'utf-8'});

console.log(contents);

//. -----> current folder
//.. -----> one folder back