    
document.querySelector("#signupForm").addEventListener("click", myForm )


var signinArr = JSON.parse(localStorage.getItem("signinData")) || []

function myForm(event){
    event.preventDefault();
   
   var signData={  
   email: document.querySelector("#emailAdd").value,
   firstname: document.querySelector("#firstName").value,
   lastname: document.querySelector("#lastName").value,
   password: document.querySelector("#password").value,
   
   }

    signinArr.push(signData)
    localStorage.setItem("signinData", JSON.stringify(signinArr))

    
    document.querySelector("input[type='submit']")
    .addEventListener("click", function(){
        window.location.href="signin.html";
    })

}

