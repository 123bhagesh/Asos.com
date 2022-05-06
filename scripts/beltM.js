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


// let mens_Bag

let Mens_Clothing =
[{"name":"Calvin Klein Jeans monogram hardware 35mm reversible belt in brown/black","price":"58","color":"BLACK","image":"https://images.asos-media.com/products/calvin-klein-jeans-monogram-hardware-35mm-reversible-belt-in-brown-black/202404291-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN slim leather belt with burnished edge in brown","price":"13","color":"BROWN","image":"https://images.asos-media.com/products/asos-design-slim-leather-belt-with-burnished-edge-in-brown/202079038-1-brown?$n_480w$&wid=476&fit=constrain"},{"name":"River Island casual leather belt in brown","price":"19","color":"BROWN - DARK","image":"https://images.asos-media.com/products/river-island-casual-leather-belt-in-brown/202673820-1-browndark?$n_480w$&wid=476&fit=constrain"},
{"name":"River Island weave reversible belt in black","price":"19","color":"BLACK","image":"https://images.asos-media.com/products/river-island-weave-reversible-belt-in-black/202999012-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN textured belt in cow print","price":"15","color":"MULTI","image":"https://images.asos-media.com/products/asos-design-textured-belt-in-cow-print/201361702-1-multi?$n_480w$&wid=476&fit=constrain"},
{"name":"BOSS Rudy leather belt in black","price":"73","color":"Black","image":"https://images.asos-media.com/products/boss-rudy-leather-belt-in-black/201881027-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"adidas Golf reversible web belt in black and grey","price":"15","color":"MULTI","image":"https://images.asos-media.com/products/adidas-golf-reversible-web-belt-in-black-and-grey/201280579-1-multi?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN slim webbing belt with plate buckle detail","price":"7","color":"Black","image":"https://images.asos-media.com/products/asos-design-slim-webbing-belt-with-plate-buckle-detail/21799891-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"Calvin Klein new monogram belt in black","price":"55","color":"Black","image":"https://images.asos-media.com/products/calvin-klein-new-monogram-belt-in-black/201590739-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN leather wide belt in black with matte black buckle","price":"17","color":"Black","image":"https://images.asos-media.com/products/asos-design-leather-wide-belt-in-black-with-matte-black-buckle/24148581-1-black?$n_480w$&wid=476&fit=constrain"}]



/////
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







