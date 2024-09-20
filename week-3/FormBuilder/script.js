const field=document.getElementById("field")
const right=document.getElementById("right");
const select=document.getElementById("select")

const newDiv=document.createElement("div");
newDiv.classList.add("rightInnerDiv");


function submitForm(){
    if(select.value == 'input' ){
        const input=document.createElement("input");
        input.setAttribute("placeholder","Input Here");
        input.classList.add("rightinput")
        newDiv.appendChild(input)
        right.appendChild(newDiv);
    }
 else if(select.value == 'radio' ){
    const input=document.createElement("input");
    input.setAttribute("type","radio");
    input.classList.add("rightinput")
    newDiv.appendChild(input)
    right.appendChild(newDiv);
}
    else if(select.value == 'checkboxes' ){
        console.log(select.value);
        const input=document.createElement("input");
        input.setAttribute("type","checkbox");
        input.classList.add("rightinput")
        newDiv.appendChild(input)
        right.appendChild(newDiv);
    }
    else{
        console.log("submit");
    }
}