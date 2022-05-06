import {topSearch} from "../components/topnavbar.js";

// console.log(categories_Navbar,categories_Navbar2)
let viewAll =document.getElementById("clothTopNavbar")

viewAll.innerHTML=topSearch()
console.log(viewAll)


import {men_Mega_navbar} from "../components/mens_mega_navbar.js";

let viewAll2 =document.getElementById("clothMegaNavbar2")

viewAll2.innerHTML=men_Mega_navbar()
console.log(viewAll2)

import{categories_Navbar_Discount,categories_Sorting}from "../components/categoriesV2.js";

let viewAll3 =document.getElementById("categories_Discount_Img")

viewAll3.innerHTML=categories_Navbar_Discount()
console.log(viewAll3)


let viewAll4 =document.getElementById("sort_Append_Div")

viewAll4.innerHTML=categories_Sorting()
console.log(viewAll4)

import {footerBottom} from "../components/footer.js"

let fot= document.getElementById("footerDiv124");
fot.innerHTML=footerBottom()
console.log(fot)

///////////////////////////////


// let shoes New In

let Mens_Clothing =

[{"name":"Topman denim shorts dungaree in washed black","price":"45","color":"Washed Black","image":"https://images.asos-media.com/products/topman-denim-shorts-dungaree-in-washed-black/201705800-1-washedblack?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN skinny jeans in mid wash blue with heavy rips","price":"36","color":"Mid Wash Blue","image":"https://images.asos-media.com/products/asos-design-skinny-jeans-in-mid-wash-blue-with-heavy-rips/202010689-1-midwashblue?$n_480w$&wid=476&fit=constrain"},{"name":"New Look baggy 90s fit jeans in black","price":"25","color":"Black","image":"https://images.asos-media.com/products/new-look-baggy-90s-fit-jeans-in-black/202852332-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"Topman stretch taper jeans in black","price":"37","color":"Black","image":"https://images.asos-media.com/products/topman-stretch-taper-jeans-in-black/24536096-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"Topman organic cotton blend stretch skinny ripped jeans in black","price":"28","color":"Black","image":"https://images.asos-media.com/products/topman-organic-cotton-blend-stretch-skinny-ripped-jeans-in-black/24555100-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"New Look baggy 90s fit jeans in light blue wash","price":"25","color":"Blue","image":"https://images.asos-media.com/products/new-look-baggy-90s-fit-jeans-in-light-blue-wash/24321534-1-blue?$n_480w$&wid=476&fit=constrain"},{"name":"New Look slim rigid jeans in washed black","price":"20","color":"Black","image":"https://images.asos-media.com/products/new-look-slim-rigid-jeans-in-washed-black/23140766-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"Sixth June relaxed fit denim jeans in black with all over logo print","price":"69","color":"Black","image":"https://images.asos-media.com/products/sixth-june-relaxed-fit-denim-jeans-in-black-with-all-over-logo-print/201844384-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"COLLUSION Unisex 90s baggy jeans with embroidery in ecru","price":"33","color":"ECRU","image":"https://images.asos-media.com/products/collusion-unisex-90s-baggy-jeans-with-embroidery-in-ecru/201862034-1-ecru?$n_480w$&wid=476&fit=constrain"},
{"name":"Topman organic cotton blend spray on jeans in light wash","price":"32","color":"Blue","image":"https://images.asos-media.com/products/topman-organic-cotton-blend-spray-on-jeans-in-light-wash/24155116-1-blue?$n_480w$&wid=476&fit=constrain"},{"name":"Topman slim jeans in stay black","price":"35","color":"Black","image":"https://images.asos-media.com/products/topman-slim-jeans-in-stay-black/200915232-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"Jack & Jones Intelligence Liam skinny fit stretch jeans in blue black","price":"37","color":" Blue/Black denim","image":"https://images.asos-media.com/products/jack-jones-intelligence-liam-skinny-fit-stretch-jeans-in-blue-black/202084011-1-blueblackdenim?$n_480w$&wid=476&fit=constrain"},{"name":"Jack & Jones Intelligence Glenn slim tapered fit jeans in mid blue","price":"37","color":"Blue denim","image":"https://images.asos-media.com/products/jack-jones-intelligence-glenn-slim-tapered-fit-jeans-in-mid-blue/202077691-1-bluedenim?$n_480w$&wid=476&fit=constrain"},{"name":"Jack & Jones Intelligence Glenn slim tapered fit jeans in black","price":"37","color":"Black denim","image":"https://images.asos-media.com/products/jack-jones-intelligence-glenn-slim-tapered-fit-jeans-in-black/202077590-1-blackdenim?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN dad jeans in light wash blue with front seam detail","price":"36","color":"Blue","image":"https://images.asos-media.com/products/asos-design-dad-jeans-in-light-wash-blue-with-front-seam-detail/202010729-1-blue?$n_480w$&wid=476&fit=constrain"},{"name":"Dr Denim Rush tapered knee ripped jeans in mid wash","price":"58","color":"Blue","image":"https://images.asos-media.com/products/dr-denim-rush-tapered-knee-ripped-jeans-in-mid-wash/202452073-1-blue?$n_480w$&wid=476&fit=constrain"},{"name":"Only & Sons Weft regular fit jeans in black wash","price":"40","color":" Black Denim","image":"https://images.asos-media.com/products/only-sons-weft-regular-fit-jeans-in-black-wash/202513278-1-blackdenim?$n_480w$&wid=476&fit=constrain"},
{"name":"Bershka baggy jeans with rips in faded blue","price":"36","color":"Faded blue","image":"https://images.asos-media.com/products/bershka-baggy-jeans-with-rips-in-faded-blue/202914801-1-fadedblue?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN baggy jeans in white with heavy rips","price":"36","color":"White","image":"https://images.asos-media.com/products/asos-design-baggy-jeans-in-white-with-heavy-rips/201661710-1-white?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN slim jean in black with elasticated hem","price":"34","color":"Washed black","image":"https://images.asos-media.com/products/asos-design-slim-jean-in-black-with-elasticated-hem/201984674-1-washedblack?$n_480w$&wid=476&fit=constrain"}]


///////////////////
var hairDiv = document.getElementById("containerDiv");

var cartArr = [];

function appendProduct(Mens_Clothing) {
  hairDiv.innerHTML = null;
  Mens_Clothing.forEach(function (elem) {

    let box = document.createElement("div");
    box.setAttribute("id","div111")

    let image = document.createElement("img");
    image.src = elem.image;

    let name = document.createElement("p");
    name.innerText = elem.name;

    let price = document.createElement("p");
    price.innerText = "£"+""+ elem.price+".00"


    box.addEventListener("click", function () {
    //   event.preventDefault();
      cartArr.push(elem);
      localStorage.setItem("asosArr", JSON.stringify(cartArr));
      console.log(cartArr);
      window.location.href="buyProducts.html"
    //   alert("Product added to the cart!");
    })

 
    box.append(image, name, price);
    hairDiv.append(box);
  });
}
appendProduct(Mens_Clothing);

document.querySelector("#sorter").addEventListener("click", sortByPrice);
function sortByPrice() {
    Mens_Clothing.map(function (elem) {
        var sorting = document.querySelector("#sorter").value;
        console.log(sorting);
        if (sorting == "l2h") {
            Mens_Clothing.sort(function (a, b) { return a.price - b.price })
            appendProduct(Mens_Clothing)
        }
        else if (sorting == "h2l") {
            Mens_Clothing.sort(function (a, b) { return b.price - a.price })
            appendProduct(Mens_Clothing)
        }

        else if (sorting == "a2z") {
            function SortArray(x, y) {
                if (x.name < y.name) { return -1; }
                if (x.name > y.name) { return 1; }
                return 0;
            }
            var s = Mens_Clothing.sort(SortArray)
            appendProduct(s)
        }
        else if (sorting == "z2a") {
            function SortArray(x, y) {
                if (x.name > y.name) { return -1; }
                if (x.name < y.name) { return 1; }
                return 0;
            }
            var sort = Mens_Clothing.sort(SortArray)
            appendProduct(sort)
        }
    })
}
document.querySelector("#filter").addEventListener("click", filterItems);


// filter_Function

function filterItems(){
    var filter=document.getElementById("filter").value;
       var filterdata=Mens_Clothing.filter(function(elem,index){
                    return elem.price > Number(filter);
       })
       appendProduct(filterdata);
    //    document.getElementById("items").textContent = filterdata.length;
   }
  

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







