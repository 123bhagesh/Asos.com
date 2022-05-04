import {women_navbar2} from "../components/womennavbar.js"
console.log(women_navbar2)
let n= document.getElementById("mega-navbar");
n.innerHTML=women_navbar2()
console.log(n)


import {topSearch} from "../components/topnavbar.js"
console.log(topSearch)
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