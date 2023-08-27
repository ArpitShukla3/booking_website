// import { log } from "console";

async function signup()
{
    const email=document.getElementById("email").value;
    const name=document.getElementById("name").value;
    const mobile=document.getElementById("phone").value;
    const password=document.getElementById("password").value;
    const confirmPassword=document.getElementById("confirmPassword").value;
    
    try{
        const url="http://localhost:8000/signup";
        const options={
            method:'POST',
            mode : "no-cors",
           
            headers:{
                'Content-Type': 'application/json',
              
            },
            body:{
                "name":name,
                "email":email,
                "password":password,
                "confirmPassword":confirmPassword,
                "mobile":mobile
            }
        }
         fetch(url,options)
         .then((res)=>res.json())
         .then((data)=> console.log(data))
         .catch((err)=>{console.log(err)})
        
    }
    catch(error)
    {
       console.log("i did my task of managing it :"+error.message);
    }
}

const btn=document.getElementById("Submit");
btn.addEventListener("click",signup)

