//Using the fs library again, try to write to the contents of a file. 
//You can use the fs library to as a black box, the goal is to understand async tasks.

const fs=require("fs");
const content = 'updating the file-2 ';
fs.writeFile("hello.txt",content,function (err){
    if(err){
        console.log(err);
        return
    }
    console.log(content);
})
