var paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/;
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


if(username===''||password===''||email==='')
{
 alert('Please fill all details');
}

else if(username.length<8)
{
 alert("enter a valid username");
}

else if(!password.match(paswd))
{
 alert("password must contain atleast one Capital letter,small letter,number ,special character and must be 8 character long");
}
else if(!email.match(mailformat)){
 alert("please enter a valid email");
}

else{


fetch("http://cvhunt.com/API/signupinfo",{method:'POST',

                  body:JSON.stringify({

                    username:username,email:email,password:password,usertype:usertype
                                      })
                                          
                                          } )
       .then(res=>res.json())
       .then(response=>{
         alert(response.message);
         
         
       })

       .catch(error=>console.log("error",error));





}