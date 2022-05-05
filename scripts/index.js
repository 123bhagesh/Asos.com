
import {men_navbar} from"../components/mensnavbar.js"

let m= document.getElementById("men-mega-navbar");
m.innerHTML=men_navbar()
console.log(m)

import {topSearch} from "../components/topnavbar.js"

let t= document.getElementById("top-search");
t.innerHTML=topSearch()
console.log(t)

import {footer} from "../components/footer.js"

let fot= document.getElementById("footerDiv123");
fot.innerHTML=footer()
console.log(fot)


document.getElementById("womensButton").addEventListener("click",goWomensPage)

function goWomensPage(){

    window.location.href="womens.html"
}

document.getElementById("mensButton").addEventListener("click",gomensPage)

function gomensPage(){

    window.location.href="index.html"
}