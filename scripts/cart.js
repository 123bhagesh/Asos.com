
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

let fot= document.getElementById("footerDiv124");
fot.innerHTML=footerBottom()
console.log(fot)










////////////


var cartData = document.getElementById("cartDataAppend");

// var cartArr = JSON.parse(localStorage.getItem('asosArr')) || [];

var asosCart = JSON.parse(localStorage.getItem('asosCartData')) || [];

console.log(asosCart)

var pri=0;
let totalPrice1=document.getElementById("subtotalP1")
let totalPrice2=document.getElementById("subtotalP2")

function appendProducts(asosCart ) {


    cartData.innerHTML = null;

    asosCart.map(function (elem,index) {

        
    pri=pri + (+elem.price);
    totalPrice1.innerText= "£"+pri+".00"

    totalPrice2.innerHTML= "£"+pri+".00"
    
    let box=document.createElement("div");
    box.setAttribute("id","boxDiv11");   

    let imgDiv=document.createElement("div");
    imgDiv.setAttribute("id","imageDiv11");

    let dataDiv=document.createElement("div");
    dataDiv.setAttribute("id","dataDiv22");

    let crossIconDiv=document.createElement("div");
    crossIconDiv.setAttribute("id","iconDiv33");
    
    let image = document.createElement("img");
    image.src = elem.image;
    image.setAttribute("id","elemImage11")

    // let imageVou = document.createElement("img");
    // imageVou.setAttribute("id","elemImaVou")
    // imageVou.src ="discount-voutcher.PNG"

    // let imageDeli = document.createElement("img");
    // imageDeli.setAttribute("id","elemDeli")
    // imageDeli.src ="diliver-truck-img.PNG"

    let name = document.createElement("p");
    name.innerText = elem.name;
    name.setAttribute("id","elemName22")

    let color = document.createElement("p");
    color.innerText = `${elem.color}`;
    color.setAttribute("id","elemColor33")

    let price = document.createElement("p");
    price.innerText = "£"+""+ elem.price+".00"
    price.setAttribute("id","elemPrice44")

    let imageRemove = document.createElement("img");
    imageRemove.src = "cart_Remove_sign-img.PNG"
    imageRemove.setAttribute("id","elemImageCross11")

    imageRemove.addEventListener("click",function(){

        
        // pri = pri-(+elem.price)
        // total.innerText=pri
    asosCart.splice(index,1);

    // pri=pri - (+elem.price);
    // totalPrice.innerText= "£"+pri+".00"

    localStorage.setItem("asosCartData", JSON.stringify(asosCart));
    document.querySelector("#cartDataAppend").innerHTML='';

    alert("Product removed from the cart");
    location.reload();
    appendProducts(asosCart);
    
    })

    // let r =document.createElement("img")
    
    // let cartbtn = document.createElement("button");
    // cartbtn.innerText = "ADD TO BAG";
    // cartbtn.setAttribute("id","addToCart")
    // cartbtn.setAttribute("id", "elemCartBtn");

    // cartbtn.addEventListener("click", function (event) {
    //   event.preventDefault();
    //   asosCart.push(elem);
    //   localStorage.setItem("asosCartData", JSON.stringify(asosCart));
    //   console.log("asosCart:",asosCart);
  
    //   alert("Product added to the cart!");
    // })

    imgDiv.append(image)

    dataDiv.append(price,name, color)

    crossIconDiv.append(imageRemove)
    
 
    // box.append();
    box.append(imgDiv,dataDiv,crossIconDiv);
    cartData.append(box);

  });
}
appendProducts(asosCart);


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
