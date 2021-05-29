// const { pathToFileURL } = require("node:url")

// const { pathToFileURL } = require("node:url")

let fs=require('fs');
let path=require('path');

function tree(dir){
    if(dir==undefined){
        treeHelper(process.cwd(),"");
        return;
    }else{
        let exist=fs.existsSync(dir);
        if(!exist){
            console.log('given directory path is invalid please enter valid path');
        }else{
            treeHelper(dir,"");
        }
    }
}
function treeHelper(dirPath,indent){
    let isFile=fs.lstatSync(dirPath).isFile();
    if(isFile){
        let fileName=path.basename(dirPath);
        console.log(indent+"├──"+fileName);
    }else{
        let folderName=path.basename(dirPath);
        console.log(indent+"└──"+folderName);
        let childs=fs.readdirSync(dirPath);
        for(let i=0;i<childs.length;i++){
            let childURL=path.join(dirPath,childs[i]);
            treeHelper(childURL,indent+"\t");
        }
    }
}

module.exports={
    treekey:tree
}