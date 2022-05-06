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
[
    {"name":"ASOS DESIGN soft backpack with zip detail in black","price":"24","color":"Black","image":"https://images.asos-media.com/products/asos-design-soft-backpack-with-zip-detail-in-black/10552760-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN string shopper bag in black","price":"9","color":"black","image":"https://images.asos-media.com/products/asos-design-string-shopper-bag-in-black/200540625-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN coin purse and cardholder in black croc","price":"9","color":"Black croc","image":"https://images.asos-media.com/products/asos-design-coin-purse-and-cardholder-in-black-croc/21693507-1-blackcroc?$n_480w$&wid=476&fit=constrain"},
{"name":"Casio mini digital watch in silver tone LA670WEA-7EF","price":"32","color":"Silver tone","image":"https://images.asos-media.com/products/casio-mini-digital-watch-in-silver-tone-la670wea-7ef/2394649-1-silvertone?$n_480w$&wid=476&fit=constrain"},{"name":"Casio F-91WS-2EF digital watch in blue","price":"32","color":"Blue","image":"https://images.asos-media.com/products/casio-f-91ws-2ef-digital-watch-in-blue/21901557-1-blue?$n_480w$&wid=476&fit=constrain"},{"name":"Casio F-91WS-7EF digital watch in clear","price":"32","color":"Clear","image":"https://images.asos-media.com/products/casio-f-91ws-7ef-digital-watch-in-clear/21108821-1-clear?$n_480w$&wid=476&fit=constrain"},
{"name":"River Island quilted patent shoulder bag in lilac","price":"36","color":"PURPLE - LIGHT","image":"https://images.asos-media.com/products/river-island-quilted-patent-shoulder-bag-in-lilac/202741246-1-purplelight?$n_480w$&wid=476&fit=constrain"},{"name":"Valentino Bags Vesper canvas tote bag in white","price":"159","color":"WHITE","image":"https://images.asos-media.com/products/valentino-bags-vesper-canvas-tote-bag-in-white/201446869-1-white?$n_480w$&wid=476&fit=constrain"},
{"name":"Valentino Bags Ocarina cross body bag with chain strap in beige","price":"85","color":"BEIGE","image":"https://images.asos-media.com/products/valentino-bags-ocarina-cross-body-bag-with-chain-strap-in-beige/201446895-1-beige?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN organic cotton shopper in 'be kind' print","price":"6","color":"MULTI","image":"https://images.asos-media.com/products/asos-design-organic-cotton-shopper-in-be-kind-print/200863837-1-multi?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN soft backpack with zip detail in black","price":"24","color":"Black","image":"https://images.asos-media.com/products/asos-design-soft-backpack-with-zip-detail-in-black/10552760-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN string shopper bag in black","price":"9","color":"black","image":"https://images.asos-media.com/products/asos-design-string-shopper-bag-in-black/200540625-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN coin purse and cardholder in black croc","price":"9","color":"Black croc","image":"https://images.asos-media.com/products/asos-design-coin-purse-and-cardholder-in-black-croc/21693507-1-blackcroc?$n_480w$&wid=476&fit=constrain"},
{"name":"River Island embossed tote crossbody in orange","price":"34","color":"ORANGE","image":"https://images.asos-media.com/products/river-island-embossed-tote-crossbody-in-orange/202741179-1-orange?$n_480w$&wid=476&fit=constrain"},
{"name":"River Island metal handle clutch in black","price":"26","color":"BLACK","image":"https://images.asos-media.com/products/river-island-metal-handle-clutch-in-black/202741199-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"River Island chain scoop shoulder bag in black","price":"28","color":"BLACK","image":"https://images.asos-media.com/products/river-island-chain-scoop-shoulder-bag-in-black/202741207-1-black?$n_480w$&wid=476&fit=constrain"},

{"name":"Frank Body Clean Deodorant: Cucumber & Green Tea 75g","price":"11","color":"No Colour","image":"https://images.asos-media.com/products/frank-body-clean-deodorant-cucumber-green-tea-75g/202070280-1-nocolour?$n_480w$&wid=476&fit=constrain"},
{"name":"Cetaphil Body Cream Tub Sensitive Skin 450g","price":"16","color":"No Colour","image":"https://images.asos-media.com/products/cetaphil-body-cream-tub-sensitive-skin-450g/21586205-1-nocolour?$n_480w$&wid=476&fit=constrain"},{"name":"Sunday Rain Sleep Easy Body Scrub 265g","price":"7","color":"No Colour","image":"https://images.asos-media.com/products/sunday-rain-sleep-easy-body-scrub-265g/202314314-1-nocolour?$n_480w$&wid=476&fit=constrain"},
{"name":"Garnier Summer Body Hydrating Gradual Tan Moisturiser Light 400ml","price":"8","color":"No Colour","image":"https://images.asos-media.com/products/garnier-summer-body-hydrating-gradual-tan-moisturiser-light-400ml/20639673-1-nocolour?$n_480w$&wid=476&fit=constrain"},
{"name":"Frank Body Clean Deodorant: Cucumber & Green Tea 75g","price":"11","color":"No Colour","image":"https://images.asos-media.com/products/frank-body-clean-deodorant-cucumber-green-tea-75g/202070280-1-nocolour?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN organic cotton mini shirt dress in white","price":"17","color":"White","image":"https://images.asos-media.com/products/asos-design-organic-cotton-mini-shirt-dress-in-white/22835117-1-white?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN 70s drape front wrap midi dress in black","price":"42","color":"BLACK","image":"https://images.asos-media.com/products/asos-design-70s-drape-front-wrap-midi-dress-in-black/200879591-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS EDITION sequin wave midi dress with feather hem in ice blue","price":"160","color":" Ice Blue","image":"https://images.asos-media.com/products/asos-edition-sequin-wave-midi-dress-with-feather-hem-in-ice-blue/201256859-1-iceblue?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN sleeveless cowl front pencil midi dress in pale khaki","price":"45","color":"KHAKI","image":"https://images.asos-media.com/products/asos-design-sleeveless-cowl-front-pencil-midi-dress-in-pale-khaki/201928190-1-khaki?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN scallop edge cut out back midi sundress in mixed paisley floral","price":"28","color":"PAISLEY FLORAL","image":"https://images.asos-media.com/products/asos-design-scallop-edge-cut-out-back-midi-sundress-in-mixed-paisley-floral/201530134-1-paisleyfloral?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN high neck shirred bodice pleated midi dress boho paisley","price":"52","color":"BOHO PAISLEY FLORAL","image":"https://images.asos-media.com/products/asos-design-high-neck-shirred-bodice-pleated-midi-dress-boho-paisley/201261014-1-bohopaisleyfloral?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN dobby button through long sleeve lace trim midi tea dress in deep rose","price":"50","color":"DEEP ROSE","image":"https://images.asos-media.com/products/asos-design-dobby-button-through-long-sleeve-lace-trim-midi-tea-dress-in-deep-rose/201082409-1-deeprose?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN button through tie back mini tea dress with angel sleeve in black","price":"24","color":"BLACK","image":"https://images.asos-media.com/products/asos-design-button-through-tie-back-mini-tea-dress-with-angel-sleeve-in-black/202342717-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"COLLUSION Unisex oversized t-shirt with high shine print in pique acid wash","price":"14","color":"BLACK","image":"https://images.asos-media.com/products/collusion-unisex-oversized-t-shirt-with-high-shine-print-in-pique-acid-wash/201211817-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"Abercrombie & Fitch 2 pack short sleeve icon crew tee in white","price":"18","color":"White","image":"https://images.asos-media.com/products/abercrombie-fitch-2-pack-short-sleeve-icon-crew-tee-in-white/22106000-1-white?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN ultimate organic cotton t-shirt with crew neck 2 pack SAVE in black & white","price":"12","color":"Black/white","image":"https://images.asos-media.com/products/asos-design-ultimate-organic-cotton-t-shirt-with-crew-neck-2-pack-save-in-black-white/20641904-1-blackwhite?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN natural crinkle top with side ties in oatmeal","price":"25","color":"OATMEAL","image":"https://images.asos-media.com/products/asos-design-natural-crinkle-top-with-side-ties-in-oatmeal/201508325-1-oatmeal?$n_480w$&wid=476&fit=constrain"},

{"name":"Limit Octagonal expanding bracelet watch in gold","price":"27","color":"Gold","image":"https://images.asos-media.com/products/limit-octagonal-expanding-bracelet-watch-in-gold/14821387-1-gold?$n_480w$&wid=476&fit=constrain"},{"name":"Sekonda bracelet watch with black face in gold","price":"45","color":"GOLD","image":"https://images.asos-media.com/products/sekonda-bracelet-watch-with-black-face-in-gold/201247881-1-gold?$n_480w$&wid=476&fit=constrain"},{"name":"Limit Watch In Tan Exclusive To ASOS","price":"16","color":"Tan","image":"https://images.asos-media.com/products/limit-watch-in-tan-exclusive-to-asos/6678816-1-tan?$n_480w$&wid=476&fit=constrain"},
{"name":"Valentino Bags Ocarina cross body bag with chain strap in beige","price":"85","color":"BEIGE","image":"https://images.asos-media.com/products/valentino-bags-ocarina-cross-body-bag-with-chain-strap-in-beige/201446895-1-beige?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN organic cotton shopper in 'be kind' print","price":"6","color":"MULTI","image":"https://images.asos-media.com/products/asos-design-organic-cotton-shopper-in-be-kind-print/200863837-1-multi?$n_480w$&wid=476&fit=constrain"},

{"name":"Sekonda bracelet watch with pale tan dial in silver","price":"42","color":"SILVER","image":"https://images.asos-media.com/products/sekonda-bracelet-watch-with-pale-tan-dial-in-silver/202250194-1-silver?$n_480w$&wid=476&fit=constrain"},{"name":"Boss mixed metal watch in gold 1502618","price":"314","color":"GOLD","image":"https://images.asos-media.com/products/boss-mixed-metal-watch-in-gold-1502618/202106293-1-gold?$n_480w$&wid=476&fit=constrain"},{"name":"Casio F-91WS-4EF digital watch in pink","price":"32","color":"Pink","image":"https://images.asos-media.com/products/casio-f-91ws-4ef-digital-watch-in-pink/21108822-1-pink?$n_480w$&wid=476&fit=constrain"},
{"name":"River Island embossed tote crossbody in orange","price":"34","color":"ORANGE","image":"https://images.asos-media.com/products/river-island-embossed-tote-crossbody-in-orange/202741179-1-orange?$n_480w$&wid=476&fit=constrain"},

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







