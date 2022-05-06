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
    {"name":"Revolution Skincare Charcoal Pure Gommage Peel","price":"5","color":"No Colour","image":"https://images.asos-media.com/products/revolution-skincare-charcoal-pure-gommage-peel/23435904-1-nocolour?$n_480w$&wid=476&fit=constrain"},{"name":"The INKEY List SPF 30 Mineral Sunscreen 50ml","price":"16","color":"No Colour","image":"https://images.asos-media.com/products/the-inkey-list-spf-30-mineral-sunscreen-50ml/21513303-1-nocolour?$n_320w$&wid=317&fit=constrain"},
    {"name":"Cetaphil Body Cream Tub Sensitive Skin 450g","price":"16","color":"No Colour","image":"https://images.asos-media.com/products/cetaphil-body-cream-tub-sensitive-skin-450g/21586205-1-nocolour?$n_480w$&wid=476&fit=constrain"},{"name":"Sunday Rain Sleep Easy Body Scrub 265g","price":"7","color":"No Colour","image":"https://images.asos-media.com/products/sunday-rain-sleep-easy-body-scrub-265g/202314314-1-nocolour?$n_480w$&wid=476&fit=constrain"},
    {"name":"Minnie Mouse Bubble Bath","price":"4","color":"No Colour","image":"https://images.asos-media.com/products/minnie-mouse-bubble-bath/201258975-1-nocolour?$n_480w$&wid=476&fit=constrain"},{"name":"Garnier Intensive 7 Days Aloe Vera Probiotic Extract Body Lotion Normal Skin 400ml","price":"4","color":"No Colour","image":"https://images.asos-media.com/products/garnier-intensive-7-days-aloe-vera-probiotic-extract-body-lotion-normal-skin-400ml/20639789-1-nocolour?$n_480w$&wid=476&fit=constrain"},{"name":"Bondi Sands Self Tanning Foam One Hour Express 200ml","price":"16","color":"No Colour","image":"https://images.asos-media.com/products/bondi-sands-self-tanning-foam-one-hour-express-200ml/201873093-1-nocolour?$n_480w$&wid=476&fit=constrain"},
    {"name":"Garnier Summer Body Hydrating Gradual Tan Moisturiser Light 400ml","price":"8","color":"No Colour","image":"https://images.asos-media.com/products/garnier-summer-body-hydrating-gradual-tan-moisturiser-light-400ml/20639673-1-nocolour?$n_480w$&wid=476&fit=constrain"},
    {"name":"ASOS DESIGN dobby button through long sleeve lace trim midi tea dress in deep rose","price":"50","color":"DEEP ROSE","image":"https://images.asos-media.com/products/asos-design-dobby-button-through-long-sleeve-lace-trim-midi-tea-dress-in-deep-rose/201082409-1-deeprose?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN button through tie back mini tea dress with angel sleeve in black","price":"24","color":"BLACK","image":"https://images.asos-media.com/products/asos-design-button-through-tie-back-mini-tea-dress-with-angel-sleeve-in-black/202342717-1-black?$n_480w$&wid=476&fit=constrain"},
    {"name":"ASOS DESIGN organic cotton mini shirt dress in white","price":"17","color":"White","image":"https://images.asos-media.com/products/asos-design-organic-cotton-mini-shirt-dress-in-white/22835117-1-white?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN 70s drape front wrap midi dress in black","price":"42","color":"BLACK","image":"https://images.asos-media.com/products/asos-design-70s-drape-front-wrap-midi-dress-in-black/200879591-1-black?$n_480w$&wid=476&fit=constrain"},
    {"name":"River Island Wide Fit branded sling back espadrille in white","price":"37","color":"WHITE","image":"https://images.asos-media.com/products/river-island-wide-fit-branded-sling-back-espadrille-in-white/202694035-1-white?$n_480w$&wid=476&fit=constrain"},
    {"name":"ASOS DESIGN Wide Fit Neva barely there heeled sandals in black","price":"16","color":"BLACK","image":"https://images.asos-media.com/products/asos-design-wide-fit-neva-barely-there-heeled-sandals-in-black/201083137-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN Wide Fit Poster cut out high heeled court shoes in black","price":"40","color":"BLACK","image":"https://images.asos-media.com/products/asos-design-wide-fit-poster-cut-out-high-heeled-court-shoes-in-black/201095142-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN Wide Fit Prize tie leg high heeled shoes in beige","price":"23","color":"BEIGE","image":"https://images.asos-media.com/products/asos-design-wide-fit-prize-tie-leg-high-heeled-shoes-in-beige/201084394-1-beige?$n_480w$&wid=476&fit=constrain"},
     {"name":"https://images.asos-media.com/products/asos-design-wide-fit-neva-barely-there-heeled-sandals-in-beige/201083208-1-beigepatent?$n_480w$&wid=476&fit=constrain","price":"20","color":" BEIGE PATENT","image":"https://images.asos-media.com/products/asos-design-wide-fit-neva-barely-there-heeled-sandals-in-beige/201083208-1-beigepatent?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN Wide Fit Soraya knotted slingback mid heeled shoes in natural fabrication","price":"40","color":"NATURAL FABRICATION","image":"https://images.asos-media.com/products/asos-design-wide-fit-soraya-knotted-slingback-mid-heeled-shoes-in-natural-fabrication/201568691-1-naturalfabrication?$n_480w$&wid=476&fit=constrain"},

    {"name":"Frank Body Clean Deodorant: Cucumber & Green Tea 75g","price":"11","color":"No Colour","image":"https://images.asos-media.com/products/frank-body-clean-deodorant-cucumber-green-tea-75g/202070280-1-nocolour?$n_480w$&wid=476&fit=constrain"},
    {"name":"Cetaphil Body Cream Tub Sensitive Skin 450g","price":"16","color":"No Colour","image":"https://images.asos-media.com/products/cetaphil-body-cream-tub-sensitive-skin-450g/21586205-1-nocolour?$n_480w$&wid=476&fit=constrain"},{"name":"Sunday Rain Sleep Easy Body Scrub 265g","price":"7","color":"No Colour","image":"https://images.asos-media.com/products/sunday-rain-sleep-easy-body-scrub-265g/202314314-1-nocolour?$n_480w$&wid=476&fit=constrain"},
    {"name":"Garnier Summer Body Hydrating Gradual Tan Moisturiser Light 400ml","price":"8","color":"No Colour","image":"https://images.asos-media.com/products/garnier-summer-body-hydrating-gradual-tan-moisturiser-light-400ml/20639673-1-nocolour?$n_480w$&wid=476&fit=constrain"},
    {"name":"Frank Body Clean Deodorant: Cucumber & Green Tea 75g","price":"11","color":"No Colour","image":"https://images.asos-media.com/products/frank-body-clean-deodorant-cucumber-green-tea-75g/202070280-1-nocolour?$n_480w$&wid=476&fit=constrain"},
    {"name":"Yours tshirt dress with pockets in black","price":"29","color":"Black","image":"https://images.asos-media.com/products/yours-tshirt-dress-with-pockets-in-black/203028176-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN shirred bunny tie prom midi dress in cream","price":"50","color":"CREAM","image":"https://images.asos-media.com/products/asos-design-shirred-bunny-tie-prom-midi-dress-in-cream/201724522-1-cream?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN linen scoop neck maxi sundress with split in black","price":"30","color":"BLACK","image":"https://images.asos-media.com/products/asos-design-linen-scoop-neck-maxi-sundress-with-split-in-black/201841754-1-black?$n_480w$&wid=476&fit=constrain"},
    {"name":"ASOS DESIGN waisted mini tea dress with buttons in black","price":"26","color":"Black","image":"https://images.asos-media.com/products/asos-design-waisted-mini-tea-dress-with-buttons-in-black/201985030-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN neon oversized mini smock dress with gathered waist in orange","price":"36","color":"ORANGE","image":"https://images.asos-media.com/products/asos-design-neon-oversized-mini-smock-dress-with-gathered-waist-in-orange/201795316-1-orange?$n_480w$&wid=476&fit=constrain"},{"name":"River Island Maternity ribbed midi dress in light khaki","price":"24","color":"KHAKI - LIGHT","image":"https://images.asos-media.com/products/river-island-maternity-ribbed-midi-dress-in-light-khaki/202574351-1-khakilight?$n_480w$&wid=476&fit=constrain"},
    {"name":"ASOS DESIGN dobby button through long sleeve lace trim midi tea dress in deep rose","price":"50","color":"DEEP ROSE","image":"https://images.asos-media.com/products/asos-design-dobby-button-through-long-sleeve-lace-trim-midi-tea-dress-in-deep-rose/201082409-1-deeprose?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN button through tie back mini tea dress with angel sleeve in black","price":"24","color":"BLACK","image":"https://images.asos-media.com/products/asos-design-button-through-tie-back-mini-tea-dress-with-angel-sleeve-in-black/202342717-1-black?$n_480w$&wid=476&fit=constrain"},
    {"name":"ASOS DESIGN organic cotton mini shirt dress in white","price":"17","color":"White","image":"https://images.asos-media.com/products/asos-design-organic-cotton-mini-shirt-dress-in-white/22835117-1-white?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN 70s drape front wrap midi dress in black","price":"42","color":"BLACK","image":"https://images.asos-media.com/products/asos-design-70s-drape-front-wrap-midi-dress-in-black/200879591-1-black?$n_480w$&wid=476&fit=constrain"},
    {"name":"Ego Waverly block heel twist sandals in white","price":"24","color":"White","image":"https://images.asos-media.com/products/ego-waverly-block-heel-twist-sandals-in-white/201447215-1-white?$n_480w$&wid=476&fit=constrain"},
{"name":"777 adidas Originals Forum triple platform trainers in black with silver details","price":"110","color":"Black","image":"https://images.asos-media.com/products/adidas-originals-forum-triple-platform-trainers-in-black-with-silver-details/200732826-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN Johanesburg premium leather espadrille mules in black","price":"36","color":"BLACK LEATHER","image":"https://images.asos-media.com/products/asos-design-johanesburg-premium-leather-espadrille-mules-in-black/201729639-1-blackleather?$n_480w$&wid=476&fit=constrain"},
{"name":"537 South Beach Ibiza espadrille shoes in beige","price":"22","color":"Natural","image":"https://images.asos-media.com/products/south-beach-ibiza-espadrille-shoes-in-beige/201583412-1-natural?$n_480w$&wid=476&fit=constrain"},
{"name":"537 South Beach Ibiza espadrille shoes in beige","price":"22","color":"Natural","image":"https://images.asos-media.com/products/south-beach-ibiza-espadrille-shoes-in-beige/201583412-1-natural?$n_480w$&wid=476&fit=constrain"},
 
    {"name":"Pixi Glow Tonic with 5% Glycolic Acid 250ml","price":"19","color":"Glow tonic","image":"https://images.asos-media.com/products/pixi-glow-tonic-with-5-glycolic-acid-250ml/4856599-1-glowtonic?$n_480w$&wid=476&fit=constrain"},{"name":"SELLING FAST Cetaphil Healthy Radiance Brightening Day Cream with SPF 15 and Niacinamide 50g","price":"20","color":"No Colour","image":"https://images.asos-media.com/products/cetaphil-healthy-radiance-brightening-day-cream-with-spf-15-and-niacinamide-50g/200887193-1-nocolour?$n_480w$&wid=476&fit=constrain"},
    {"name":"Garnier Summer Body Hydrating Gradual Tan Moisturiser Light 400ml","price":"8","color":"No Colour","image":"https://images.asos-media.com/products/garnier-summer-body-hydrating-gradual-tan-moisturiser-light-400ml/20639673-1-nocolour?$n_480w$&wid=476&fit=constrain"},
    {"name":"Miss Patisserie Rainbow River Bath Ball","price":"5","color":" River rainbow","image":"https://images.asos-media.com/products/miss-patisserie-rainbow-river-bath-ball/12099800-1-riverrainbow?$n_480w$&wid=476&fit=constrain"},{"name":"Miss Patisserie Night Geode Bath Ball","price":"5","color":"No Colour","image":"https://images.asos-media.com/products/miss-patisserie-night-geode-bath-ball/21975703-1-nocolour?$n_480w$&wid=476&fit=constrain"},
    {"name":"ASOS DESIGN pleated cami midi dress with drawstring waist in dark pink","price":"32","color":" Dark pink","image":"https://images.asos-media.com/products/asos-design-pleated-cami-midi-dress-with-drawstring-waist-in-dark-pink/14093359-1-darkpink?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN organic cotton mini shirt dress in black","price":"20","color":"BLACK","image":"https://images.asos-media.com/products/asos-design-organic-cotton-mini-shirt-dress-in-black/201496333-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"ASYOU puff sleeve sundress in black","price":"23","color":"Black","image":"https://images.asos-media.com/products/asyou-puff-sleeve-sundress-in-black/201464704-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"Missguided dobby mini dress with bow straps in white","price":"28","color":"WHITE","image":"https://images.asos-media.com/products/missguided-dobby-mini-dress-with-bow-straps-in-white/202193597-1-white?$n_480w$&wid=476&fit=constrain"},
    {"name":"ASOS DESIGN Tall plisse short sleeve channel waist detail midi dress in black and pink rose","price":"40","color":"Black and Pink Rose","image":"https://images.asos-media.com/products/asos-design-tall-plisse-short-sleeve-channel-waist-detail-midi-dress-in-black-and-pink-rose/202505204-1-blackandpinkrose?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN soft all over embroidered maxi dress in black","price":"58","color":"BLACK","image":"https://images.asos-media.com/products/asos-design-soft-all-over-embroidered-maxi-dress-in-black/200878907-1-black?$n_480w$&wid=476&fit=constrain"},
    
]
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







