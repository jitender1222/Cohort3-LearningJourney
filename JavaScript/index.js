// class Promise{
//     // code is written
// }

// setTimeout(main,3000);

// function main(){
//     console.log("hi");
// }

// function waitforSometime(arg){
//     console.log(main)
//     setTimeout(arg,3000);
// }

// function main(){
//     console.log("hi");
// }

// waitforSometime(main);

// promisefied version of setTimeOut

// function waitforSometime(resolve) {
//   setTimeout(resolve, 3000);
// }

// function setTimeoutPromisified() {
//   return new Promise(waitforSometime);
// }

// function main() {
//   console.log("hi");
// }

// setTimeoutPromisified().then(main); // promisefied version of setTimeout

// promise class takes a function in our case it is waitforSometime 
//and when it calls the first arg of this function and that arg call our main function

// .then is consuming or using the promise when promise gets their required result 
//  then it passes the signal 
//  to .then and .then calls the function which is put over their

const fs= require('fs')

function readFiles(resolve){

    fs.readFile("a.txt","utf-8",function(err,data){  // promisefied version of read file
        resolve(data);
    })
}

function promisefiedReadFile(){
    return new Promise(readFiles);   // we are defining the promise
}

function cb(con){
    console.log(con);
}

let p=promisefiedReadFile()
console.log(p); // wr are using the promise
p.then(cb)