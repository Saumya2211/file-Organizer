// const { dir } = require("node:console");
let fs=require('fs');
// const { type } = require('node:os');
let path=require('path');
let utility = require('../utility');


function organize(dirPath){
    if(dirPath==undefined){
        dirPath=process.cwd();
    }
    let dest;
    let exist=fs.existsSync(dirPath);
    if(!exist){
        console.log('please enter valid path');
        return;
    }else{
        dest=path.join(dirPath,'final directory');
        let existdest=fs.existsSync(dest);
        if(!existdest){
            fs.mkdirSync(dest);
        }
    }
    organizeHelp(dirPath,dest);
}

function organizeHelp(dirPath,dest){
    let child=fs.readdirSync(dirPath);
    for(let i=0;i<child.length;i++){
        // console.log(child[i]);
        let childURL=path.join(dirPath,child[i]);
        let isF=fs.lstatSync(childURL).isFile();
        if(isF){
            let category=getCat(childURL);
            sendFile(childURL,dest,category);
        }
    }
}

function sendFile(src,dest,category){
    let destURL=path.join(dest,category);
    if(!fs.existsSync(destURL)){
        fs.mkdirSync(destURL);
    }
    let fileName=path.basename(src);
    // console.log(fileName);
    let finalName=path.join(destURL,fileName);
    fs.copyFileSync(src,finalName);
    // fs.unlinkSync(src);
}

function getCat(file){
    let ext=path.extname(file).slice(1);
    for(let type in utility.types){
        let fileType=utility.types[type];
        for(let i=0;i<fileType.length;i++){
            if(fileType[i]==ext){
                return type;
            }
        }
    }
    return 'others';
}

module.exports ={
    orgKey: organize
}