//Implementation of WriteFile
var fs=require('fs')
fs.writeFile('file.txt','File content Has been modified',function(err,data){
  console.log("data saved")  
})
console.log('data is going to change')

//Implementation of WriteFileSync
var fs=require('fs')
fs.writeFileSync('file.txt','Data  is modified by FileSync')
console.log('data saved')
console.log('atlast data is saved')
