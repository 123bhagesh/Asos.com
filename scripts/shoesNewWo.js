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
{"name":"RAID Wide Fit Nidhi loafer with snaffle in beige","price":"17","color":"Beige pu","image":"https://images.asos-media.com/products/raid-wide-fit-nidhi-loafer-with-snaffle-in-beige/201431313-1-beigepu?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN Wide Fit Lively slingback ballet flats in natural raffia","price":"18","color":"NATURAL RAFFIA","image":"https://images.asos-media.com/products/asos-design-wide-fit-lively-slingback-ballet-flats-in-natural-raffia/201172947-1-naturalraffia?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN Wide Fit Motto chain flat mules in black","price":"18","color":"BLACK","image":"https://images.asos-media.com/products/asos-design-wide-fit-motto-chain-flat-mules-in-black/201062705-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN Wide Fit Lake bow pointed ballet flats in gold metallic","price":"18","color":"GOLD METALLIC","image":"https://images.asos-media.com/products/asos-design-wide-fit-lake-bow-pointed-ballet-flats-in-gold-metallic/200381750-1-goldmetallic?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN Wide Fit Harvey mid heeled mule sandals in white","price":"20","color":"WHITE","image":"https://images.asos-media.com/products/asos-design-wide-fit-harvey-mid-heeled-mule-sandals-in-white/201083999-1-white?$n_480w$&wid=476&fit=constrain"},{"name":"Be Mine Bridal Wide Fit Armela bow heel shoes in ivory satin","price":"40","color":"IVORY SATIN","image":"https://images.asos-media.com/products/be-mine-bridal-wide-fit-armela-bow-heel-shoes-in-ivory-satin/201377272-1-ivorysatin?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN Wide Fit Sail mesh heeled shoes in natural fabrication","price":"40","color":"NATURAL FABRICATION","image":"https://images.asos-media.com/products/asos-design-wide-fit-sail-mesh-heeled-shoes-in-natural-fabrication/201614167-1-naturalfabrication?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN Wide Fit Nasia heeled mules in clear","price":"15","color":"CLEAR/ BEIGE","image":"https://images.asos-media.com/products/asos-design-wide-fit-nasia-heeled-mules-in-clear/200437999-1-clearbeige?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN Wide Fit Hampton block mid heeled sandals in black","price":"25","color":"BLACK","image":"https://images.asos-media.com/products/asos-design-wide-fit-hampton-block-mid-heeled-sandals-in-black/201069249-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"River Island Wide Fit branded sling back espadrille in white","price":"37","color":"WHITE","image":"https://images.asos-media.com/products/river-island-wide-fit-branded-sling-back-espadrille-in-white/202694035-1-white?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN Wide Fit Neva barely there heeled sandals in black","price":"16","color":"BLACK","image":"https://images.asos-media.com/products/asos-design-wide-fit-neva-barely-there-heeled-sandals-in-black/201083137-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN Wide Fit Poster cut out high heeled court shoes in black","price":"40","color":"BLACK","image":"https://images.asos-media.com/products/asos-design-wide-fit-poster-cut-out-high-heeled-court-shoes-in-black/201095142-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN Wide Fit Prize tie leg high heeled shoes in beige","price":"23","color":"BEIGE","image":"https://images.asos-media.com/products/asos-design-wide-fit-prize-tie-leg-high-heeled-shoes-in-beige/201084394-1-beige?$n_480w$&wid=476&fit=constrain"},
{"name":"https://images.asos-media.com/products/asos-design-wide-fit-neva-barely-there-heeled-sandals-in-beige/201083208-1-beigepatent?$n_480w$&wid=476&fit=constrain","price":"20","color":" BEIGE PATENT","image":"https://images.asos-media.com/products/asos-design-wide-fit-neva-barely-there-heeled-sandals-in-beige/201083208-1-beigepatent?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN Wide Fit Soraya knotted slingback mid heeled shoes in natural fabrication","price":"40","color":"NATURAL FABRICATION","image":"https://images.asos-media.com/products/asos-design-wide-fit-soraya-knotted-slingback-mid-heeled-shoes-in-natural-fabrication/201568691-1-naturalfabrication?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN Wide Fit Joy toe-cap espadrilles in pink and rose gold","price":"14","color":"Pink and rose gold","image":"https://images.asos-media.com/products/asos-design-wide-fit-joy-toe-cap-espadrilles-in-pink-and-rose-gold/22213414-1-pinkandrosegold?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN Wide Fit Megan woven flat loafers in natural/tan","price":"18","color":"NATURAL","image":"https://images.asos-media.com/products/asos-design-wide-fit-megan-woven-flat-loafers-in-natural-tan/201063096-1-natural?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN Wide Fit Locus round ballet flats in black crinkle patent","price":"12","color":" BLACK CRINKLE PATENT","image":"https://images.asos-media.com/products/asos-design-wide-fit-locus-round-ballet-flats-in-black-crinkle-patent/201064155-1-blackcrinklepatent?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN Wide Fit Lido bow ballet flats in natural","price":"18","color":"NATURAL","image":"https://images.asos-media.com/products/asos-design-wide-fit-lido-bow-ballet-flats-in-natural/201158719-1-natural?$n_480w$&wid=476&fit=constrain"},
{"name":"RAID Wide Fit Nidhi loafer with snaffle in beige","price":"17","color":"Beige pu","image":"https://images.asos-media.com/products/raid-wide-fit-nidhi-loafer-with-snaffle-in-beige/201431313-1-beigepu?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN Wide Fit Lively slingback ballet flats in natural raffia","price":"18","color":"NATURAL RAFFIA","image":"https://images.asos-media.com/products/asos-design-wide-fit-lively-slingback-ballet-flats-in-natural-raffia/201172947-1-naturalraffia?$n_480w$&wid=476&fit=constrain"},
{"name":"669 Skechers Go Run chunky trainers with pink trim in white leather mix","price":"60","color":"White","image":"https://images.asos-media.com/products/skechers-go-run-chunky-trainers-with-pink-trim-in-white-leather-mix/201950173-1-white?$n_480w$&wid=476&fit=constrain"},
{"name":"213 New Look chunky rope detail sandals in black","price":"30","color":"Black","image":"https://images.asos-media.com/products/new-look-chunky-rope-detail-sandals-in-black/202922278-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"Karl Lagerfeld Kapri zebra flatform trainers in white leather","price":"170","color":"White","image":"https://images.asos-media.com/products/karl-lagerfeld-kapri-zebra-flatform-trainers-in-white-leather/201179853-1-white?$n_480w$&wid=476&fit=constrain"},
{"name":"Public Desire Chakra espadrille wedge heeled sandals in pink","price":"35","color":"Pink","image":"https://images.asos-media.com/products/public-desire-chakra-espadrille-wedge-heeled-sandals-in-pink/201611016-1-pink?$n_480w$&wid=476&fit=constrain"},
{"name":"Ego Waverly block heel twist sandals in white","price":"24","color":"White","image":"https://images.asos-media.com/products/ego-waverly-block-heel-twist-sandals-in-white/201447215-1-white?$n_480w$&wid=476&fit=constrain"},
{"name":"777 adidas Originals Forum triple platform trainers in black with silver details","price":"110","color":"Black","image":"https://images.asos-media.com/products/adidas-originals-forum-triple-platform-trainers-in-black-with-silver-details/200732826-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN Johanesburg premium leather espadrille mules in black","price":"36","color":"BLACK LEATHER","image":"https://images.asos-media.com/products/asos-design-johanesburg-premium-leather-espadrille-mules-in-black/201729639-1-blackleather?$n_480w$&wid=476&fit=constrain"},
{"name":"537 South Beach Ibiza espadrille shoes in beige","price":"22","color":"Natural","image":"https://images.asos-media.com/products/south-beach-ibiza-espadrille-shoes-in-beige/201583412-1-natural?$n_480w$&wid=476&fit=constrain"},
{"name":"537 South Beach Ibiza espadrille shoes in beige","price":"22","color":"Natural","image":"https://images.asos-media.com/products/south-beach-ibiza-espadrille-shoes-in-beige/201583412-1-natural?$n_480w$&wid=476&fit=constrain"},
{"name":"990 Public Desire Wide Fit Howdy western boots in green mix","price":"45","color":"GREEN MIX","image":"https://images.asos-media.com/products/public-desire-wide-fit-howdy-western-boots-in-green-mix/201622463-1-greenmix?$n_480w$&wid=476&fit=constrain"},
{"name":"103 Freedom Moses scented EVA sandals in white","price":"35","color":"White","image":"https://images.asos-media.com/products/freedom-moses-scented-eva-sandals-in-white/201780193-1-white?$n_480w$&wid=476&fit=constrain"}]



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







