let signupName=document.getElementById("signup-username");
let signupEmail=document.getElementById("signup-email");
let signupPassword=document.getElementById("signup-password");

async function signupInfo(){
    let username=signupName.value;
    let email=signupEmail.value;
    let password=signupPassword.value;
    try {
        const response=await axios.post("http://localhost:3000/user/signup",{
        username,
        email,
        password
    })
    if(response.status===200){
        signupName.value="";
        signupEmail.value="";
        signupPassword.value=""
        alert("User signed up successfully");
        window.location.href = "http://localhost:53123/login";
    }
    } catch (error) {
        console.log(error);
    }
    
}

async function loginInfo(){
    let email=signupEmail.value;
    let password=signupPassword.value;
    try {
        const response=await axios.post("http://localhost:3000/user/login",{
        email,
        password
    })
    console.log(response);
    if(response.status===200){
        signupEmail.value="";
        signupPassword.value=""
        alert("User login successfully");
    }
    } catch (error) {
        console.log(error);
    }
    
    
}