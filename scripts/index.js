
import {men_Mega_navbar} from"../components/mens_mega_navbar.js"

let m= document.getElementById("men-mega-navbar");
m.innerHTML= men_Mega_navbar()
console.log(m)

import {topSearch} from "../components/topnavbar.js"

let t= document.getElementById("top-search");
t.innerHTML=topSearch()
console.log(t)

import {footerBottom} from "../components/footer.js"

let fot= document.getElementById("footerDiv124");
fot.innerHTML=footerBottom()
console.log(fot)


document.getElementById("womensButton").addEventListener("click",goWomensPage)

function goWomensPage(){

    window.location.href="womens.html"
}

document.getElementById("mensButton").addEventListener("click",gomensPage)

function gomensPage(){

    window.location.href="index.html"
}


// document.getElementById("shopNOW3").addEventListener("click",goWomensPa)

// function goWomensPa(){

//     window.location.href="shirtM.html"
// }

// search function

let  asosSearchArr=[]
  let searchAsosProd = document.getElementById("searchTextData").addEventListener("keyup",searchAsos);
  function searchAsos(e){
    if(e.key==="Enter"){
     var searchText=document.getElementById("searchTextData").value;

     asosSearchArr.push(searchText)
     localStorage.setItem("inpData",JSON.stringify(asosSearchArr))

     console.log(searchText);

    //  window.Location.href="search.html"
     window.location.href="search.html"

    }

  }