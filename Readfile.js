//Implementation of readFile
var fs=require("fs")
fs.readFile('file.txt',function(err,data){
    if(err){
        return console.log(err);
    }
    console.log(data.toString())
})
console.log("Before reading")


//Implementation of readFileSync
var fs=require("fs")
 var data=fs.readFileSync('file.txt');
console.log(data.toString())
console.log("Program Ended")