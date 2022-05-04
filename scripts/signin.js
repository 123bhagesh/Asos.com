var signinArr = JSON.parse(localStorage.getItem("signinData")) || []
console.log(signinArr)

document.querySelector("#form").addEventListener("submit", myForm )

function myForm(event){
    event.preventDefault();
   
    // var eEmail=form.email.value;
    // var pPass=form.pass.value;

    let eEmail = form.email.value

    let pPass = form.pass.value


    // console.log(uEmail, uPassword)

    var flag=false;
    for(var i=0; i<signinArr.length; i++)
    {
        if(signinArr[i].email==eEmail && signinArr[i].password==pPass)
        {
            flag=true
        }
        else
        {
            flag=false
        }
    }
    if(flag==true)
    {
        // console.log("login Sucess")
        document
        .querySelector("input[type='submit']")
        .addEventListener("click", function () {
          window.location.href = "index.html";
        });
       
    }
    else
    {
        // console.log("login failed")
        alert("invalid Credentials")
    }

}

