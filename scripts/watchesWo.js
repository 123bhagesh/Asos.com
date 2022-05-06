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
[{"name":"Casio mini digital watch in silver tone LA670WEA-7EF","price":"32","color":"Silver tone","image":"https://images.asos-media.com/products/casio-mini-digital-watch-in-silver-tone-la670wea-7ef/2394649-1-silvertone?$n_480w$&wid=476&fit=constrain"},{"name":"Casio F-91WS-2EF digital watch in blue","price":"32","color":"Blue","image":"https://images.asos-media.com/products/casio-f-91ws-2ef-digital-watch-in-blue/21901557-1-blue?$n_480w$&wid=476&fit=constrain"},{"name":"Casio F-91WS-7EF digital watch in clear","price":"32","color":"Clear","image":"https://images.asos-media.com/products/casio-f-91ws-7ef-digital-watch-in-clear/21108821-1-clear?$n_480w$&wid=476&fit=constrain"},
{"name":"Limit Octagonal expanding bracelet watch in gold","price":"27","color":"Gold","image":"https://images.asos-media.com/products/limit-octagonal-expanding-bracelet-watch-in-gold/14821387-1-gold?$n_480w$&wid=476&fit=constrain"},{"name":"Sekonda bracelet watch with black face in gold","price":"45","color":"GOLD","image":"https://images.asos-media.com/products/sekonda-bracelet-watch-with-black-face-in-gold/201247881-1-gold?$n_480w$&wid=476&fit=constrain"},{"name":"Limit Watch In Tan Exclusive To ASOS","price":"16","color":"Tan","image":"https://images.asos-media.com/products/limit-watch-in-tan-exclusive-to-asos/6678816-1-tan?$n_480w$&wid=476&fit=constrain"},
{"name":"Sekonda bracelet watch with pale tan dial in silver","price":"42","color":"SILVER","image":"https://images.asos-media.com/products/sekonda-bracelet-watch-with-pale-tan-dial-in-silver/202250194-1-silver?$n_480w$&wid=476&fit=constrain"},{"name":"Boss mixed metal watch in gold 1502618","price":"314","color":"GOLD","image":"https://images.asos-media.com/products/boss-mixed-metal-watch-in-gold-1502618/202106293-1-gold?$n_480w$&wid=476&fit=constrain"},{"name":"Casio F-91WS-4EF digital watch in pink","price":"32","color":"Pink","image":"https://images.asos-media.com/products/casio-f-91ws-4ef-digital-watch-in-pink/21108822-1-pink?$n_480w$&wid=476&fit=constrain"},
{"name":"Casio G Shock unisex silicone watch in white GA-2100","price":"84","color":"WHITE","image":"https://images.asos-media.com/products/casio-g-shock-unisex-silicone-watch-in-white-ga-2100/200407405-1-white?$n_480w$&wid=476&fit=constrain"},{"name":"Michael Kors MK5735 Lexington bracelet watch in mixed metal","price":"227","color":"Silver","image":"https://images.asos-media.com/products/michael-kors-mk5735-lexington-bracelet-watch-in-mixed-metal/8271015-1-silver?$n_480w$&wid=476&fit=constrain"},{"name":"Casio womens silicone watch in pink","price":"27","color":"PINK","image":"https://images.asos-media.com/products/casio-womens-silicone-watch-in-pink/202535186-1-pink?$n_480w$&wid=476&fit=constrain"}]

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







