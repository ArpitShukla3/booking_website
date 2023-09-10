const login=document.getElementById("signup");
login.addEventListener("click",async()=>{
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const mobile=document.getElementById("mobile").value;
    const confirmPassword=document.getElementById("confirmPassword").value;
    const password=document.getElementById("password").value;
    const options={
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name:name,
                mobile:password,
                email:email,
                password:password,
                confirmPassword:confirmPassword
            })
    }
    try {
        console.log(email+" "+password);
        const data=await fetch("http://localhost:4501/signin",options);
        console.log("succes"+data);
    } catch (error) {
        console.log("error due to : "+error);
    }
})