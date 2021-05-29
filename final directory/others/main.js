let path=require('path');
let fs=require('fs');

let helpObj=require('./command/help');
let treeObj=require('./command/tree');
let orgObj= require('./command/organize');
// let utility=require('./utility');
let inputA=process.argv.slice(2);

// console.log(inputA);

let command=inputA[0];

switch(command){
    case "help":
        helpObj.helpKey(inputA[1]);
        break;
    case "organize":
        orgObj.orgKey(inputA[1]);
        break;
    case "tree":
        treeObj.treekey();
        break;
    default:
        console.log('please enter valid command');
        break;
}