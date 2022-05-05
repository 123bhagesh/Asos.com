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

//   shoes Data

let Mens_Shoes =

[
    {"name":"Polo Ralph Lauren court trainer in white/green with pony logo","price":"90","color":"MULTI","image":"https://images.asos-media.com/products/polo-ralph-lauren-court-trainer-in-white-green-with-pony-logo/201879757-1-multi?$n_480w$&wid=476&fit=constrain"},
    {"name":"Levi's square high trainer with red tab in white","price":"70","color":"WHITE","image":"https://images.asos-media.com/products/levis-square-high-trainer-with-red-tab-in-white/202363011-1-white?$n_480w$&wid=476&fit=constrain"},
    {"name":"57 Polo Ralph Lauren trackster 200II sock trainer in cream/ grey with pony tongue logo","price":"137","color":"CREAM","image":"https://images.asos-media.com/products/polo-ralph-lauren-trackster-200ii-sock-trainer-in-cream-grey-with-pony-tongue-logo/201896631-1-cream?$n_480w$&wid=476&fit=constrain"},
    {"name":"Polo Ralph Lauren trackster leather trainer with pony logo in blue suede","price":"126","color":"BLUE","image":"https://images.asos-media.com/products/polo-ralph-lauren-trackster-leather-trainer-with-pony-logo-in-blue-suede/201896394-1-blue?$n_480w$&wid=476&fit=constrain"},
    {"name":"Polo Ralph Lauren court trainer in white/green with pony logo","price":"90","color":"MULTI","image":"https://images.asos-media.com/products/polo-ralph-lauren-court-trainer-in-white-green-with-pony-logo/201879757-1-multi?$n_480w$&wid=476&fit=constrain"},
    {"name":"Asra Foza chain loafers in brown suede","price":"65","color":" BROWN","image":"https://images.asos-media.com/products/asra-foza-chain-loafers-in-brown-suede/201916910-1-brown?$n_480w$&wid=476&fit=constrain"},
    {"name":"adidas Originals Court Rallye slip on trainers in black","price":"34","color":"Black","image":"https://images.asos-media.com/products/adidas-originals-court-rallye-slip-on-trainers-in-black/22978509-1-black?$n_480w$&wid=476&fit=constrain"},
    {"name":"271 Walk London Benjamin snaffle sandals in black leather","price":"65","color":"Black","image":"https://images.asos-media.com/products/walk-london-benjamin-snaffle-sandals-in-black-leather/201504864-1-black?$n_480w$&wid=476&fit=constrain"},
    {"name":"Vans Era Tie Dye trainers in orange","price":"38","color":"Bandana tie dyeorang","image":"https://images.asos-media.com/products/vans-era-tie-dye-trainers-in-orange/23440771-1-bandanatiedyeorang?$n_480w$&wid=476&fit=constrain"},
    {"name":"Topman grey piper emboss tassel loafers","price":"16","color":"Grey","image":"https://images.asos-media.com/products/topman-grey-piper-emboss-tassel-loafers/203080750-1-grey?$n_480w$&wid=476&fit=constrain"},
    {"name":"Nike Victori One sliders in wheat/brown","price":"27","color":"Brown","image":"https://images.asos-media.com/products/nike-victori-one-sliders-in-wheat-brown/201493267-1-brown?$n_480w$&wid=476&fit=constrain"},
    {"name":"Nike Air Max Dawn trainers in white/malachite","price":"104","color":" White/Green","image":"https://images.asos-media.com/products/nike-air-max-dawn-trainers-in-white-malachite/201492129-1-whitegreen?$n_480w$&wid=476&fit=constrain"},
    {"name":"Schuh reuben lace up shoes in brown leather","price":"49","color":"Brown","image":"https://images.asos-media.com/products/schuh-reuben-lace-up-shoes-in-brown-leather/202041819-1-brown?$n_480w$&wid=476&fit=constrain"},
    {"name":"Havaianas Brasil logo flip flops in navy","price":"26","color":"NAVY","image":"https://images.asos-media.com/products/havaianas-brasil-logo-flip-flops-in-navy/201647277-1-navy?$n_480w$&wid=476&fit=constrain"},
    {"name":"Walk London Riva snaffle loafers in beige suede","price":"75","color":"NEUTRAL","image":"https://images.asos-media.com/products/walk-london-riva-snaffle-loafers-in-beige-suede/201587799-1-neutral?$n_480w$&wid=476&fit=constrain"},
    {"name":"Walk London Terry Snaffle loafers in pink suede","price":"65","color":"Pink","image":"https://images.asos-media.com/products/walk-london-terry-snaffle-loafers-in-pink-suede/201507718-1-pink?$n_480w$&wid=476&fit=constrain"},
    {"name":"adidas Running Questar trainers in grey and blue","price":"74","color":"Grey","image":"https://images.asos-media.com/products/adidas-running-questar-trainers-in-grey-and-blue/202662296-1-grey?$n_480w$&wid=476&fit=constrain"},
    {"name":"158 adidas Originals Geodiver Primeblue trainers in crystal white","price":"75","color":"White","image":"https://images.asos-media.com/products/adidas-originals-geodiver-primeblue-trainers-in-crystal-white/201270974-1-white?$n_480w$&wid=476&fit=constrain"},
    {"name":"Buffalo cloud corin chain vegan trainers in black","price":"110","color":"Black","image":"https://images.asos-media.com/products/buffalo-cloud-corin-chain-vegan-trainers-in-black/201297176-1-black?$n_480w$&wid=476&fit=constrain"},
    {"name":"Clarks Originals desert coal boots in green camo","price":"13","color":"","image":"https://images.asos-media.com/products/clarks-originals-desert-coal-boots-in-green-camo/201243339-1-green?$n_480w$&wid=476&fit=constrain"},
    {"name":"Clarks Originals desert coal boots in green camo","price":"130","color":"Green","image":"https://images.asos-media.com/products/clarks-originals-desert-coal-boots-in-green-camo/201243339-1-green?$n_480w$&wid=476&fit=constrain"},
    {"name":"237 ASOS DESIGN mule loafer in black faux leather with embossed detail","price":"40","color":"Black","image":"https://images.asos-media.com/products/asos-design-mule-loafer-in-black-faux-leather-with-embossed-detail/201129199-1-black?$n_480w$&wid=476&fit=constrain"}
    ]

/////
var hairDiv = document.getElementById("containerDiv");

var cartArr = [];

function appendProduct(Mens_Shoes) {
  hairDiv.innerHTML = null;
  Mens_Shoes.forEach(function (elem) {

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
appendProduct(Mens_Shoes);

document.querySelector("#sorter").addEventListener("click", sortByPrice);
function sortByPrice() {
    Mens_Shoes.map(function (elem) {
        var sorting = document.querySelector("#sorter").value;
        console.log(sorting);
        if (sorting == "l2h") {
            Mens_Shoes.sort(function (a, b) { return a.price - b.price })
            appendProduct(Mens_Shoes)
        }
        else if (sorting == "h2l") {
            Mens_Shoes.sort(function (a, b) { return b.price - a.price })
            appendProduct(Mens_Shoes)
        }

        else if (sorting == "a2z") {
            function SortArray(x, y) {
                if (x.name < y.name) { return -1; }
                if (x.name > y.name) { return 1; }
                return 0;
            }
            var s = Mens_Shoes.sort(SortArray)
            appendProduct(s)
        }
        else if (sorting == "z2a") {
            function SortArray(x, y) {
                if (x.name > y.name) { return -1; }
                if (x.name < y.name) { return 1; }
                return 0;
            }
            var sort = Mens_Shoes.sort(SortArray)
            appendProduct(sort)
        }
    })
}


// filter_Function

document.querySelector("#filter").addEventListener("click", filterItems);

function filterItems(){
    var filter=document.getElementById("filter").value;
       var filterdata=Mens_Shoes.filter(function(elem,index){
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
