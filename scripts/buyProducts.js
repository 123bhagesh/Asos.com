
import {topSearch} from "../components/topnavbar.js";

// console.log(categories_Navbar,categories_Navbar2)
let viewAll =document.getElementById("clothTopNavbar")

viewAll.innerHTML=topSearch()
console.log(viewAll)


import {men_Mega_navbar} from "../components/mens_mega_navbar.js";

let viewAll2 =document.getElementById("clothMegaNavbar2")

viewAll2.innerHTML=men_Mega_navbar()
console.log(viewAll2)

import{categories_Navbar_Discount}from "../components/categoriesV2.js";

let viewAll3 =document.getElementById("categories_Discount_Img")

viewAll3.innerHTML=categories_Navbar_Discount()
console.log(viewAll3)


import {footerBottom} from "../components/footer.js"
// console.log(footerBottom)
let fot= document.getElementById("footerDiv125");
fot.innerHTML=footerBottom()
console.log(fot)





var container11 = document.getElementById("container1");

var cartArr = JSON.parse(localStorage.getItem('asosArr')) || [];

var asosCart = JSON.parse(localStorage.getItem('asosCartData')) || [];

console.log(cartArr)

function appendProducts(cartArr ) {

    container11.innerHTML = null;
    cartArr.forEach(function (elem) {

    let imgDiv=document.createElement("div");
    imgDiv.setAttribute("id","imgDiv1");

    let dataDiv=document.createElement("div");
    dataDiv.setAttribute("id","dataDiv2");
    
    let image = document.createElement("img");
    image.src = elem.image;
    image.setAttribute("id","elemImage")

    let imageVou = document.createElement("img");
    imageVou.setAttribute("id","elemImaVou")
    imageVou.src ="discount-voutcher.PNG"

    let imageDeli = document.createElement("img");
    imageDeli.setAttribute("id","elemDeli")
    imageDeli.src ="diliver-truck-img.PNG"

    let name = document.createElement("p");
    name.innerText = elem.name;
    name.setAttribute("id","elemName")

    let color = document.createElement("p");
    color.innerText = `colour: ${elem.color}`;
    color.setAttribute("id","elemColor")

    let price = document.createElement("p");
    price.innerText = "£"+""+ elem.price+".00"
    price.setAttribute("id","elemPrice")

    let cartbtn = document.createElement("button");
    cartbtn.innerText = "ADD TO BAG";
    cartbtn.setAttribute("id","addToCart")
    cartbtn.setAttribute("id", "elemCartBtn");

    cartbtn.addEventListener("click", function (event) {
      event.preventDefault();
      asosCart.push(elem);
      localStorage.setItem("asosCartData", JSON.stringify(asosCart));
      console.log("asosCart:",asosCart);
  
      alert("Product added to the cart!");
    })

    imgDiv.append(image)

    dataDiv.append(name, price,imageVou,color,cartbtn,imageDeli)
 
    // box.append();
    container11.append(imgDiv,dataDiv);
  });
}
appendProducts(cartArr );


     //    search_Function

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