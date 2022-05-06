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
[{"name":"Cetaphil Body Cream Tub Sensitive Skin 450g","price":"16","color":"No Colour","image":"https://images.asos-media.com/products/cetaphil-body-cream-tub-sensitive-skin-450g/21586205-1-nocolour?$n_480w$&wid=476&fit=constrain"},{"name":"Sunday Rain Sleep Easy Body Scrub 265g","price":"7","color":"No Colour","image":"https://images.asos-media.com/products/sunday-rain-sleep-easy-body-scrub-265g/202314314-1-nocolour?$n_480w$&wid=476&fit=constrain"},
{"name":"Minnie Mouse Bubble Bath","price":"4","color":"No Colour","image":"https://images.asos-media.com/products/minnie-mouse-bubble-bath/201258975-1-nocolour?$n_480w$&wid=476&fit=constrain"},{"name":"Garnier Intensive 7 Days Aloe Vera Probiotic Extract Body Lotion Normal Skin 400ml","price":"4","color":"No Colour","image":"https://images.asos-media.com/products/garnier-intensive-7-days-aloe-vera-probiotic-extract-body-lotion-normal-skin-400ml/20639789-1-nocolour?$n_480w$&wid=476&fit=constrain"},{"name":"Bondi Sands Self Tanning Foam One Hour Express 200ml","price":"16","color":"No Colour","image":"https://images.asos-media.com/products/bondi-sands-self-tanning-foam-one-hour-express-200ml/201873093-1-nocolour?$n_480w$&wid=476&fit=constrain"},
{"name":"SELLING FAST Frank Body A-Beauty Vitamin C Brightening Coffee Scrub 100g","price":"9","color":"No Colour","image":"https://images.asos-media.com/products/frank-body-a-beauty-vitamin-c-brightening-coffee-scrub-100g/20800371-1-nocolour?$n_480w$&wid=476&fit=constrain"},
{"name":"Garnier Summer Body Hydrating Gradual Tan Moisturiser Light 400ml","price":"8","color":"No Colour","image":"https://images.asos-media.com/products/garnier-summer-body-hydrating-gradual-tan-moisturiser-light-400ml/20639673-1-nocolour?$n_480w$&wid=476&fit=constrain"},
{"name":"TOTM Organic Cotton Super Flow Pads - 10 Pack","price":"4","color":"No Colour","image":"https://images.asos-media.com/products/totm-organic-cotton-super-flow-pads-10-pack/200874710-1-nocolour?$n_480w$&wid=476&fit=constrain"},{"name":"Sunday Rain Rose Bath Crystals 500g","price":"7","color":"No Colour","image":"https://images.asos-media.com/products/sunday-rain-rose-bath-crystals-500g/202314258-1-nocolour?$n_480w$&wid=476&fit=constrain"},
{"name":"Frank Body Clean Deodorant: Cucumber & Green Tea 75g","price":"11","color":"No Colour","image":"https://images.asos-media.com/products/frank-body-clean-deodorant-cucumber-green-tea-75g/202070280-1-nocolour?$n_480w$&wid=476&fit=constrain"},
{"name":"Miss Patisserie Rainbow River Bath Ball","price":"5","color":" River rainbow","image":"https://images.asos-media.com/products/miss-patisserie-rainbow-river-bath-ball/12099800-1-riverrainbow?$n_480w$&wid=476&fit=constrain"},{"name":"Miss Patisserie Night Geode Bath Ball","price":"5","color":"No Colour","image":"https://images.asos-media.com/products/miss-patisserie-night-geode-bath-ball/21975703-1-nocolour?$n_480w$&wid=476&fit=constrain"},
]



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







