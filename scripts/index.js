// import {navbarSearch} from "../components/top_search_navbar.js";

// let m= document.getElementById("navbarSearch1")

// m.innerHTML= navbarSearch()
// console.log(mega)

// import {navbar} from "../components/topnavbar.js"

// let n= document.getElementById("navbar");
// n.innerHTML=navbar();
// console.log(n)



import {men_navbar} from "../components/mensnavbar.js"

let m= document.getElementById("men-mega-navbar");
m.innerHTML=men_navbar()
console.log(m)

import {topSearch} from "../components/topnavbar.js"

let t= document.getElementById("top-search");
t.innerHTML=topSearch()
console.log(t)


document.getElementById("womensButton").addEventListener("click",goWomensPage)

function goWomensPage(){

    window.location.href="womens.html"
}

document.getElementById("mensButton").addEventListener("click",gomensPage)

function gomensPage(){

    window.location.href="index.html"
}