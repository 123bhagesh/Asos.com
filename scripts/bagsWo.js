import {women_Mega_navbar} from "../components/womeMegannavbar.js"

let n= document.getElementById("mega-navbar");
n.innerHTML=women_Mega_navbar()
console.log(n)


import {topSearch} from "../components/topnavbar.js"
console.log(topSearch)
let t= document.getElementById("top-search");
t.innerHTML=topSearch()
console.log(t)


// import {categories_Navbar2} from "../components/categories.js";


import{categories_Navbar_Discount,categories_Sorting}from "../components/categoriesV2.js";

console.log(categories_Navbar_Discount)
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

/////////////////////////////

let Women_Clothing=
[{"name":"Steve Madden Bcoal cross body with chain strap in white","price":"84","color":"White","image":"https://images.asos-media.com/products/steve-madden-bcoal-cross-body-with-chain-strap-in-white/201870826-1-white?$n_480w$&wid=476&fit=constrain"},{"name":"River Island pocket scoop pouchette cross body bag in white","price":"40","color":"WHITE","image":"https://images.asos-media.com/products/river-island-pocket-scoop-pouchette-cross-body-bag-in-white/202741155-1-white?$n_480w$&wid=476&fit=constrain"},
{"name":"River Island embossed tote crossbody in orange","price":"34","color":"ORANGE","image":"https://images.asos-media.com/products/river-island-embossed-tote-crossbody-in-orange/202741179-1-orange?$n_480w$&wid=476&fit=constrain"},
{"name":"River Island metal handle clutch in black","price":"26","color":"BLACK","image":"https://images.asos-media.com/products/river-island-metal-handle-clutch-in-black/202741199-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"River Island chain scoop shoulder bag in black","price":"28","color":"BLACK","image":"https://images.asos-media.com/products/river-island-chain-scoop-shoulder-bag-in-black/202741207-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"River Island quilted patent shoulder bag in lilac","price":"36","color":"PURPLE - LIGHT","image":"https://images.asos-media.com/products/river-island-quilted-patent-shoulder-bag-in-lilac/202741246-1-purplelight?$n_480w$&wid=476&fit=constrain"},{"name":"Valentino Bags Vesper canvas tote bag in white","price":"159","color":"WHITE","image":"https://images.asos-media.com/products/valentino-bags-vesper-canvas-tote-bag-in-white/201446869-1-white?$n_480w$&wid=476&fit=constrain"},
{"name":"Valentino Bags Ocarina cross body bag with chain strap in beige","price":"85","color":"BEIGE","image":"https://images.asos-media.com/products/valentino-bags-ocarina-cross-body-bag-with-chain-strap-in-beige/201446895-1-beige?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN organic cotton shopper in 'be kind' print","price":"6","color":"MULTI","image":"https://images.asos-media.com/products/asos-design-organic-cotton-shopper-in-be-kind-print/200863837-1-multi?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN soft backpack with zip detail in black","price":"24","color":"Black","image":"https://images.asos-media.com/products/asos-design-soft-backpack-with-zip-detail-in-black/10552760-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN string shopper bag in black","price":"9","color":"black","image":"https://images.asos-media.com/products/asos-design-string-shopper-bag-in-black/200540625-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN coin purse and cardholder in black croc","price":"9","color":"Black croc","image":"https://images.asos-media.com/products/asos-design-coin-purse-and-cardholder-in-black-croc/21693507-1-blackcroc?$n_480w$&wid=476&fit=constrain"}]


var hairDiv = document.getElementById("containerDiv");

var cartArr = [];

function appendProduct(Women_Clothing) {
  hairDiv.innerHTML = null;
  Women_Clothing.forEach(function (elem) {

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
appendProduct(Women_Clothing);

document.querySelector("#sorter").addEventListener("click", sortByPrice);
function sortByPrice() {
    Women_Clothing.map(function (elem) {
        var sorting = document.querySelector("#sorter").value;
        console.log(sorting);
        if (sorting == "l2h") {
            Women_Clothing.sort(function (a, b) { return a.price - b.price })
            appendProduct(Women_Clothing)
        }
        else if (sorting == "h2l") {
            Women_Clothing.sort(function (a, b) { return b.price - a.price })
            appendProduct(Women_Clothing)
        }

        else if (sorting == "a2z") {
            function SortArray(x, y) {
                if (x.name < y.name) { return -1; }
                if (x.name > y.name) { return 1; }
                return 0;
            }
            var s = Women_Clothing.sort(SortArray)
            appendProduct(s)
        }
        else if (sorting == "z2a") {
            function SortArray(x, y) {
                if (x.name > y.name) { return -1; }
                if (x.name < y.name) { return 1; }
                return 0;
            }
            var sort = Women_Clothing.sort(SortArray)
            appendProduct(sort)
        }
    })
}
document.querySelector("#filter").addEventListener("click", filterItems);


// filter_Function

function filterItems(){
    var filter=document.getElementById("filter").value;
       var filterdata=Women_Clothing.filter(function(elem,index){
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







