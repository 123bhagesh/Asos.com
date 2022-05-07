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

[{"name":"ASOS DESIGN scallop edge cut out back midi sundress in mixed paisley floral","price":"28","color":"PAISLEY FLORAL","image":"https://images.asos-media.com/products/asos-design-scallop-edge-cut-out-back-midi-sundress-in-mixed-paisley-floral/201530134-1-paisleyfloral?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN high neck shirred bodice pleated midi dress boho paisley","price":"52","color":"BOHO PAISLEY FLORAL","image":"https://images.asos-media.com/products/asos-design-high-neck-shirred-bodice-pleated-midi-dress-boho-paisley/201261014-1-bohopaisleyfloral?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN dobby button through long sleeve lace trim midi tea dress in deep rose","price":"50","color":"DEEP ROSE","image":"https://images.asos-media.com/products/asos-design-dobby-button-through-long-sleeve-lace-trim-midi-tea-dress-in-deep-rose/201082409-1-deeprose?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN button through tie back mini tea dress with angel sleeve in black","price":"24","color":"BLACK","image":"https://images.asos-media.com/products/asos-design-button-through-tie-back-mini-tea-dress-with-angel-sleeve-in-black/202342717-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN organic cotton mini shirt dress in white","price":"17","color":"White","image":"https://images.asos-media.com/products/asos-design-organic-cotton-mini-shirt-dress-in-white/22835117-1-white?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN 70s drape front wrap midi dress in black","price":"42","color":"BLACK","image":"https://images.asos-media.com/products/asos-design-70s-drape-front-wrap-midi-dress-in-black/200879591-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS EDITION sequin wave midi dress with feather hem in ice blue","price":"160","color":" Ice Blue","image":"https://images.asos-media.com/products/asos-edition-sequin-wave-midi-dress-with-feather-hem-in-ice-blue/201256859-1-iceblue?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN sleeveless cowl front pencil midi dress in pale khaki","price":"45","color":"KHAKI","image":"https://images.asos-media.com/products/asos-design-sleeveless-cowl-front-pencil-midi-dress-in-pale-khaki/201928190-1-khaki?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN satin button through midi tea dress with fluted sleeves in green floral print","price":"50","color":"GREEN BASE FLORAL","image":"https://images.asos-media.com/products/asos-design-satin-button-through-midi-tea-dress-with-fluted-sleeves-in-green-floral-print/201630113-1-greenbasefloral?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN strappy midi skater sundress in textured stripe black","price":"28","color":"BLACK","image":"https://images.asos-media.com/products/asos-design-strappy-midi-skater-sundress-in-textured-stripe-black/201674464-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"Yours tshirt dress with pockets in black","price":"29","color":"Black","image":"https://images.asos-media.com/products/yours-tshirt-dress-with-pockets-in-black/203028176-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN shirred bunny tie prom midi dress in cream","price":"50","color":"CREAM","image":"https://images.asos-media.com/products/asos-design-shirred-bunny-tie-prom-midi-dress-in-cream/201724522-1-cream?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN linen scoop neck maxi sundress with split in black","price":"30","color":"BLACK","image":"https://images.asos-media.com/products/asos-design-linen-scoop-neck-maxi-sundress-with-split-in-black/201841754-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN waisted mini tea dress with buttons in black","price":"26","color":"Black","image":"https://images.asos-media.com/products/asos-design-waisted-mini-tea-dress-with-buttons-in-black/201985030-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN neon oversized mini smock dress with gathered waist in orange","price":"36","color":"ORANGE","image":"https://images.asos-media.com/products/asos-design-neon-oversized-mini-smock-dress-with-gathered-waist-in-orange/201795316-1-orange?$n_480w$&wid=476&fit=constrain"},{"name":"River Island Maternity ribbed midi dress in light khaki","price":"24","color":"KHAKI - LIGHT","image":"https://images.asos-media.com/products/river-island-maternity-ribbed-midi-dress-in-light-khaki/202574351-1-khakilight?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN twist and drape front midi dress in khaki","price":"42","color":"KHAKI","image":"https://images.asos-media.com/products/asos-design-twist-and-drape-front-midi-dress-in-khaki/201449807-1-khaki?$n_480w$&wid=476&fit=constrain"},{"name":"Wednesday's Girl relaxed midi smock dress with peplum hem in spot print","price":"11","color":"Lilac white spot","image":"https://images.asos-media.com/products/wednesdays-girl-relaxed-midi-smock-dress-with-peplum-hem-in-spot-print/22925740-1-lilacwhitespot?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN cut work lace pinny midi dress","price":"100","color":"Sage","image":"https://images.asos-media.com/products/asos-design-cut-work-lace-pinny-midi-dress/14790175-1-sage?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN pleated cami midi dress with drawstring waist in navy","price":"32","color":"Navy","image":"https://images.asos-media.com/products/asos-design-pleated-cami-midi-dress-with-drawstring-waist-in-navy/14093431-1-navy?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN bare shoulder prom midi dress in forest green","price":"65","color":"Forest green","image":"https://images.asos-media.com/products/asos-design-bare-shoulder-prom-midi-dress-in-forest-green/23458757-1-forestgreen?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN lace insert pleated mini dress in ivory","price":"58","color":"IVORY","image":"https://images.asos-media.com/products/asos-design-lace-insert-pleated-mini-dress-in-ivory/201356824-1-ivory?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS EDITION v neck broderie midi dress with puff sleeve in black","price":"147","color":"Black","image":"https://images.asos-media.com/products/asos-edition-v-neck-broderie-midi-dress-with-puff-sleeve-in-black/201405351-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"Miss Selfridge velvet satin twist front midi dress in blush","price":"35","color":"Blush","image":"https://images.asos-media.com/products/miss-selfridge-velvet-satin-twist-front-midi-dress-in-blush/201476501-1-blush?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN pleated cami midi dress with drawstring waist in dark pink","price":"32","color":" Dark pink","image":"https://images.asos-media.com/products/asos-design-pleated-cami-midi-dress-with-drawstring-waist-in-dark-pink/14093359-1-darkpink?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN organic cotton mini shirt dress in black","price":"20","color":"BLACK","image":"https://images.asos-media.com/products/asos-design-organic-cotton-mini-shirt-dress-in-black/201496333-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"ASYOU puff sleeve sundress in black","price":"23","color":"Black","image":"https://images.asos-media.com/products/asyou-puff-sleeve-sundress-in-black/201464704-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"Missguided dobby mini dress with bow straps in white","price":"28","color":"WHITE","image":"https://images.asos-media.com/products/missguided-dobby-mini-dress-with-bow-straps-in-white/202193597-1-white?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN Tall plisse short sleeve channel waist detail midi dress in black and pink rose","price":"40","color":"Black and Pink Rose","image":"https://images.asos-media.com/products/asos-design-tall-plisse-short-sleeve-channel-waist-detail-midi-dress-in-black-and-pink-rose/202505204-1-blackandpinkrose?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN soft all over embroidered maxi dress in black","price":"58","color":"BLACK","image":"https://images.asos-media.com/products/asos-design-soft-all-over-embroidered-maxi-dress-in-black/200878907-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN organic cotton mini shirt dress in white","price":"17","color":"White","image":"https://images.asos-media.com/products/asos-design-organic-cotton-mini-shirt-dress-in-white/22835117-1-white?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS EDITION crystal floral embellished cami midi dress with feather hem in blush","price":"189","color":"Blush","image":"https://images.asos-media.com/products/asos-edition-crystal-floral-embellished-cami-midi-dress-with-feather-hem-in-blush/201646887-1-blush?$n_480w$&wid=476&fit=constrain"}]

/////
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







