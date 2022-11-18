import {women_Mega_navbar} from "../components/womeMegannavbar.js"

let n= document.getElementById("mega-navbar");
n.innerHTML=women_Mega_navbar()
console.log(n)


import {topSearch} from "../components/topnavbar.js"
console.log(topSearch)
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