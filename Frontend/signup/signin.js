const login=document.getElementById("login");
login.addEventListener("click",async()=>{
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const options={
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email:email,
                password:password
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