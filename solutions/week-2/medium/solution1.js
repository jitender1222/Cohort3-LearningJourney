/*

Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was

hello     world    my    name   is       raman
After the program runs, the output should be

hello world my name is raman

*/

const fs= require("fs");

fs.readFile("file1.txt","utf-8",(err,data)=>{

    if(err){
        console.log(err);
        return;
    }

    const cleanedContent=data.replace(/\s+/g,' ').trim();
    fs.writeFile("file1.txt",cleanedContent,(err)=>{
        if(err){
        console.log(err);
        return
        }
        console.log("file cleaned successfully");
    })
});