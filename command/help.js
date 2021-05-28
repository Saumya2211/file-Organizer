
function help(){
    console.log(`
    Below are the commands you can execute
        node main.js organize "directoryPath"    it will give you a folder containing file sorted according to their category
        node main.js tree "directoryPath"        it will indented tree like structured files
        node main.js help                        for any help needed
    `);
}

module.exports={
    helpKey:help
}