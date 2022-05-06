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
[{"name":"COLLUSION Unisex logo t-shirt in tan","price":"11","color":"TAN","image":"https://images.asos-media.com/products/collusion-unisex-logo-t-shirt-in-tan/202006818-1-tan?$n_480w$&wid=476&fit=constrain"},{"name":"COLLUSION Unisex t-shirt with outer space print in black","price":"14","color":"BLACK","image":"https://images.asos-media.com/products/collusion-unisex-t-shirt-with-outer-space-print-in-black/201521995-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"COLLUSION Unisex oversized t-shirt with print in charcoal","price":"14","color":"CHARCOAL","image":"https://images.asos-media.com/products/collusion-unisex-oversized-t-shirt-with-print-in-charcoal/201212053-1-charcoal?$n_480w$&wid=476&fit=constrain"},
{"name":"COLLUSION Unisex natural dyed t-shirt with text print in lilac","price":"17","color":"LILAC","image":"https://images.asos-media.com/products/collusion-unisex-natural-dyed-t-shirt-with-text-print-in-lilac/202043382-1-lilac?$n_480w$&wid=476&fit=constrain"},
{"name":"Abercrombie & Fitch 2 pack short sleeve icon crew tee in black","price":"32","color":"Black","image":"https://images.asos-media.com/products/abercrombie-fitch-2-pack-short-sleeve-icon-crew-tee-in-black/22105993-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"Jordan essential tank top in white","price":"33","color":"WHITE","image":"https://images.asos-media.com/products/jordan-essential-tank-top-in-white/201469815-1-white?$n_480w$&wid=476&fit=constrain"},{"name":"COLLUSION Unisex t-shirt with print in white","price":"14","color":"WHITE","image":"https://images.asos-media.com/products/collusion-unisex-t-shirt-with-print-in-white/202613529-1-white?$n_480w$&wid=476&fit=constrain"},
{"name":"adidas Fi Bx t-shirt in pink","price":"13","color":"PINK","image":"https://images.asos-media.com/products/adidas-fi-bx-t-shirt-in-pink/202312206-1-pink?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN ultimate oversized t-shirt in white","price":"11","color":"White","image":"https://images.asos-media.com/products/asos-design-ultimate-oversized-t-shirt-in-white/24551059-1-white?$n_480w$&wid=476&fit=constrain"},{"name":"Nike unisex retro collegiate t-shirt in white and green","price":"38","color":"WHITE","image":"https://images.asos-media.com/products/nike-unisex-retro-collegiate-t-shirt-in-white-and-green/201540661-1-white?$n_480w$&wid=476&fit=constrain"},{"name":"Topshop ruffle linen blouse in black","price":"32","color":"BLACK","image":"https://images.asos-media.com/products/topshop-ruffle-linen-blouse-in-black/202235928-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"COLLUSION Unisex oversized t-shirt with high shine print in pique acid wash","price":"14","color":"BLACK","image":"https://images.asos-media.com/products/collusion-unisex-oversized-t-shirt-with-high-shine-print-in-pique-acid-wash/201211817-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"Abercrombie & Fitch 2 pack short sleeve icon crew tee in white","price":"18","color":"White","image":"https://images.asos-media.com/products/abercrombie-fitch-2-pack-short-sleeve-icon-crew-tee-in-white/22106000-1-white?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN ultimate organic cotton t-shirt with crew neck 2 pack SAVE in black & white","price":"12","color":"Black/white","image":"https://images.asos-media.com/products/asos-design-ultimate-organic-cotton-t-shirt-with-crew-neck-2-pack-save-in-black-white/20641904-1-blackwhite?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN natural crinkle top with side ties in oatmeal","price":"25","color":"OATMEAL","image":"https://images.asos-media.com/products/asos-design-natural-crinkle-top-with-side-ties-in-oatmeal/201508325-1-oatmeal?$n_480w$&wid=476&fit=constrain"},
{"name":"COLLUSION Unisex t-shirt with monster print in black","price":"14","color":"BLACK","image":"https://images.asos-media.com/products/collusion-unisex-t-shirt-with-monster-print-in-black/202067318-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"Abercrombie & Fitch 2 pack short sleeve tee in multi","price":"20","color":"Multi","image":"https://images.asos-media.com/products/abercrombie-fitch-2-pack-short-sleeve-tee-in-multi/22105995-1-multi?$n_480w$&wid=476&fit=constrain"},{"name":"New Look puff sleeve shirred top in yellow check","price":"20","color":"Yellow","image":"https://images.asos-media.com/products/new-look-puff-sleeve-shirred-top-in-yellow-check/202909423-1-yellow?$n_480w$&wid=476&fit=constrain"},{"name":"Topshop everyday t-shirt in grey marl","price":"6","color":"grey marl","image":"https://images.asos-media.com/products/topshop-everyday-t-shirt-in-grey-marl/201197660-1-greymarl?$n_480w$&wid=476&fit=constrain"},
{"name":"Topshop shirt twist front bodysuit in white","price":"38","color":"WHITE","image":"https://images.asos-media.com/products/topshop-shirt-twist-front-bodysuit-in-white/202039040-1-white?$n_480w$&wid=476&fit=constrain"}]


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







