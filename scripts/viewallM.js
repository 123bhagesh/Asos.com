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

//View All Data

let view_All =

[
    {"name":"Polo Ralph Lauren court trainer in white/green with pony logo","price":"90","color":"MULTI","image":"https://images.asos-media.com/products/polo-ralph-lauren-court-trainer-in-white-green-with-pony-logo/201879757-1-multi?$n_480w$&wid=476&fit=constrain"},
    {"name":"L'Oreal Men Expert Hypoallergenic Deodorant, Magnesium Defence Hypoallergenic 48 Hour Protection Mens Deodorant","price":"5","color":"No Colour","image":"https://images.asos-media.com/products/loreal-men-expert-hypoallergenic-deodorant-magnesium-defence-hypoallergenic-48-hour-protection-mens-deodorant/202533082-1-nocolour?$n_480w$&wid=476&fit=constrain"},
    {"name":"Topman grey piper emboss tassel loafers","price":"16","color":"Grey","image":"https://images.asos-media.com/products/topman-grey-piper-emboss-tassel-loafers/203080750-1-grey?$n_480w$&wid=476&fit=constrain"},

    {"name":"River Island Wide Fit toe thong low heel sandal in beige","price":"48","color":"BEIGE","image":"https://images.asos-media.com/products/river-island-wide-fit-toe-thong-low-heel-sandal-in-beige/202694648-1-beige?$n_480w$&wid=476&fit=constrain"},
    {"name":"NEOM Sleep Heroes Set","price":"42","color":"No Colour","image":"https://images.asos-media.com/products/neom-sleep-heroes-set/202780331-1-nocolour?$n_480w$&wid=476&fit=constrain"},

{"name":"Calvin Klein large icon logo wallet in black","price":"69","color":"Black Mono","image":"https://images.asos-media.com/products/calvin-klein-large-icon-logo-wallet-in-black/202359274-1-blackmono?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN recycled frame square sunglasses in black with solid black lens","price":"9","color":"Black","image":"https://images.asos-media.com/products/asos-design-recycled-frame-square-sunglasses-in-black-with-solid-black-lens/23132982-1-black?$n_480w$&wid=476&fit=constrain"},

{"name":"This Works Sleep Spa Set","price":"21","color":"No Colour","image":"https://images.asos-media.com/products/this-works-sleep-spa-set/202780151-1-nocolour?$n_480w$&wid=476&fit=constrain"},

{"name":"River Island bow front platform sandal in black & white","price":"53","color":"WHITE","image":"https://images.asos-media.com/products/river-island-bow-front-platform-sandal-in-black-white/202617141-1-white?$n_480w$&wid=476&fit=constrain"},

{"name":"RAID Aysha tie ankle mid heeled sandals in orange","price":"33","color":"Orange","image":"https://images.asos-media.com/products/raid-aysha-tie-ankle-mid-heeled-sandals-in-orange/201397505-1-orange?$n_480w$&wid=476&fit=constrain"},

{"name":"124 ASOS DESIGN regular revere viscose shirt in bright blue","color":" bright blue","price":"22","image":"https://images.asos-media.com/products/asos-design-regular-revere-viscose-shirt-in-bright-blue/202440625-1-cobaltblue?$n_480w$&wid=476&fit=constrain"},
{"name":"172 River Island flatform sandal in white","price":"40","color":"WHITE","image":"https://images.asos-media.com/products/river-island-flatform-sandal-in-white/202601892-1-white?$n_480w$&wid=476&fit=constrain"},
{"name":"Walk London Riva snaffle loafers in beige suede","price":"75","color":"NEUTRAL","image":"https://images.asos-media.com/products/walk-london-riva-snaffle-loafers-in-beige-suede/201587799-1-neutral?$n_480w$&wid=476&fit=constrain"},


{"name":"ASOS DESIGN leather slim belt in black with square silver buckle","price":"15","color":"Black","image":"https://images.asos-media.com/products/asos-design-leather-slim-belt-in-black-with-square-silver-buckle/200763015-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN 9mm hoop earrings in real silver plate","price":"9","color":"Silver","image":"https://images.asos-media.com/products/asos-design-9mm-hoop-earrings-in-real-silver-plate/22049434-1-silver?$n_480w$&wid=476&fit=constrain"},
{"name":" Thumbnail 1 of 4 Thumbnail 2 of 4 Thumbnail 3 of 4 Thumbnail 4 of 4  475 Eylure 3/4 Length Accent Lashes - No. 013","price":"6","color":"No. 013","image":"https://images.asos-media.com/products/eylure-3-4-length-accent-lashes-no-013/201514930-1-no013?$n_480w$&wid=476&fit=constrain"},

{"name":"174 I Heart Revolution x Disney Fairytale Eyeshadow Palette - Moana","price":"16","color":" Moana","image":"https://images.asos-media.com/products/i-heart-revolution-x-disney-fairytale-eyeshadow-palette-moana/202781500-1-moana?$n_480w$&wid=476&fit=constrain"},
{"name":"777 adidas Originals Forum triple platform trainers in black with silver details","price":"110","color":"Black","image":"https://images.asos-media.com/products/adidas-originals-forum-triple-platform-trainers-in-black-with-silver-details/200732826-1-black?$n_480w$&wid=476&fit=constrain"},

{"name":"ASOS DESIGN recycled frame square sunglasses in black with solid black lens","price":"9","color":"Black","image":"https://images.asos-media.com/products/asos-design-recycled-frame-square-sunglasses-in-black-with-solid-black-lens/23132982-1-black?$n_480w$&wid=476&fit=constrain"},

{"name":"68 Hollister 5 pack central script logo stripe & plain t-shirt in multi","color":"multi","price":"65","image":"https://images.asos-media.com/products/hollister-5-pack-central-script-logo-stripe-plain-t-shirt-in-multi/202801389-1-multi?$n_480w$&wid=476&fit=constrain"},
{"name":"Hollister icon logo stripe & contrast collar polo in white","price":"25","color":"white","image":"https://images.asos-media.com/products/hollister-icon-logo-stripe-contrast-collar-polo-in-white/202801301-1-white?$n_480w$&wid=476&fit=constrain"},
{"name":"364 I Heart Revolution x Disney Fairytale Lip Topper - Tangled","price":"6","color":" Tangled","image":"https://images.asos-media.com/products/i-heart-revolution-x-disney-fairytale-lip-topper-tangled/202781482-1-tangled?$n_480w$&wid=476&fit=constrain"},

{"name":"ASOS DESIGN 4 pack leather and woven bracelet set in monochrome","price":"9","color":"Black","image":"https://images.asos-media.com/products/asos-design-4-pack-leather-and-woven-bracelet-set-in-monochrome/202185503-1-black?$n_480w$&wid=476&fit=constrain"},

{"name":"Hollister outdoors central logo print t-shirt in black","price":"19","color":"black","image":"https://images.asos-media.com/products/hollister-outdoors-central-logo-print-t-shirt-in-black/202800542-1-blackwred?$n_480w$&wid=476&fit=constrain"},
{"name":"Hollister outdoors central & back logo print t-shirt in white","price":"19","color":"","image":"https://images.asos-media.com/products/hollister-outdoors-central-back-logo-print-t-shirt-in-white/202800428-1-white?$n_480w$&wid=476&fit=constrain"},
{"name":"66 Revolution Hot Shot Cheek Tint - Red","price":"7","color":"Red","image":"https://images.asos-media.com/products/revolution-hot-shot-cheek-tint-red/202718408-1-red?$n_480w$&wid=476&fit=constrain"},

{"name":"I Heart Revolution x Disney Fairytale Eyeshadow Palette - Tangled","price":"16","color":"Tangled","image":"https://images.asos-media.com/products/i-heart-revolution-x-disney-fairytale-eyeshadow-palette-tangled/202781525-1-tangled?$n_480w$&wid=476&fit=constrain"},
{"name":"Issey Miyake Nectar D'Issey Eau de Parfum 30ml","price":"47","color":"No Colour","image":"https://images.asos-media.com/products/issey-miyake-nectar-dissey-eau-de-parfum-30ml/202440979-1-nocolour?$n_480w$&wid=476&fit=constrain"},

{"name":"Only & Sons vest with Paradise back print in navy","price":"15","color":"navy","image":"https://images.asos-media.com/products/only-sons-vest-with-paradise-back-print-in-navy/202729846-1-darknavy?$n_480w$&wid=476&fit=constrain"},
{"name":"Only & Sons vest with mandala back print in white","price":"15","color":" white","image":"https://images.asos-media.com/products/only-sons-vest-with-mandala-back-print-in-white/202729794-1-white?$n_480w$&wid=476&fit=constrain"},
{"name":"Only & Sons vest with Seoul back print in black","price":"15","color":"black","image":"https://images.asos-media.com/products/only-sons-vest-with-seoul-back-print-in-black/202729310-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"Abercrombie & Fitch 3D icon logo slim fit pique polo in red","price":"35","color":"red","image":"https://images.asos-media.com/products/abercrombie-fitch-3d-icon-logo-slim-fit-pique-polo-in-red/202666080-1-red?$n_480w$&wid=476&fit=constrain"},

{"name":"Simmi patent platform mules in stone","price":"42","color":"Stone","image":"https://images.asos-media.com/products/simmi-patent-platform-mules-in-stone/202193606-1-stone?$n_480w$&wid=476&fit=constrain"},

{"name":"Abercrombie & Fitch 3D icon logo slim fit pique polo in green","price":"35","color":"green","image":"https://images.asos-media.com/products/abercrombie-fitch-3d-icon-logo-slim-fit-pique-polo-in-green/202666051-1-green?$n_480w$&wid=476&fit=constrain"},
{"name":"Abercrombie & Fitch 3D icon logo slim fit pique polo shirt in light blue","price":"35","color":"light blue","image":"https://images.asos-media.com/products/asos-design-skinny-denim-shacket-in-light-wash/201370677-1-lightblue?$n_480w$&wid=476&fit=constrain"},
{"name":"Simmi patent platform mules in stone","price":"42","color":"Stone","image":"https://images.asos-media.com/products/simmi-patent-platform-mules-in-stone/202193606-1-stone?$n_480w$&wid=476&fit=constrain"},


{"name":"Abercrombie & Fitch 3D icon logo slim fit pique polo shirt in light blue","price":"35","color":"light blue","image":"https://images.asos-media.com/products/abercrombie-fitch-3d-icon-logo-slim-fit-pique-polo-shirt-in-light-blue/202666035-1-lightblue?$n_480w$&wid=476&fit=constrain"},
{"name":"271 Walk London Benjamin snaffle sandals in black leather","price":"65","color":"Black","image":"https://images.asos-media.com/products/walk-london-benjamin-snaffle-sandals-in-black-leather/201504864-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"South Beach Man cap with side logo in black","price":"11","color":"Black","image":"https://images.asos-media.com/products/south-beach-man-cap-with-side-logo-in-black/201827964-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"271 Walk London Benjamin snaffle sandals in black leather","price":"65","color":"Black","image":"https://images.asos-media.com/products/walk-london-benjamin-snaffle-sandals-in-black-leather/201504864-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN Johanesburg premium leather espadrille mules in black","price":"36","color":"BLACK LEATHER","image":"https://images.asos-media.com/products/asos-design-johanesburg-premium-leather-espadrille-mules-in-black/201729639-1-blackleather?$n_480w$&wid=476&fit=constrain"},{"name":"537 South Beach Ibiza espadrille shoes in beige","price":"22","color":"Natural","image":"https://images.asos-media.com/products/south-beach-ibiza-espadrille-shoes-in-beige/201583412-1-natural?$n_480w$&wid=476&fit=constrain"},

{"name":"River Island Wide Fit toe thong low heel sandal in beige","price":"48","color":"BEIGE","image":"https://images.asos-media.com/products/river-island-wide-fit-toe-thong-low-heel-sandal-in-beige/202694648-1-beige?$n_480w$&wid=476&fit=constrain"},

{"name":"Only & Sons revere shirt in aztec print","price":"26","color":"aztec ","image":"https://images.asos-media.com/products/only-sons-revere-shirt-in-aztec-print/202626467-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"Only & Sons revere shirt in checkerboard print","price":"26","color":"aztec ","image":"https://images.asos-media.com/products/only-sons-revere-shirt-in-checkerboard-print/202626246-1-pomegranite?$n_480w$&wid=476&fit=constrain"},
{"name":"Only & Sons revere shirt with flower border print in navy","price":"26","color":"navy","image":"https://images.asos-media.com/products/only-sons-revere-shirt-with-flower-border-print-in-navy/202626238-1-darknavy?$n_480w$&wid=476&fit=constrain"},


{"name":"Only & Sons knitted stripe t-shirt in navy and white","price":"26","color":"navy and white","image":"https://images.asos-media.com/products/only-sons-knitted-stripe-t-shirt-in-navy-and-white/202624710-1-darknavy?$n_480w$&wid=476&fit=constrain"},
{"name":"Carhartt WIP pocket t-shirt in white","price":"37","color":"white","image":"https://images.asos-media.com/products/carhartt-wip-pocket-t-shirt-in-white/202587946-1-white?$n_480w$&wid=476&fit=constrain"},


{"name":"251 ASOS DESIGN relaxed revere shirt in vintage inspired floral print","price":"27","color":"light blue","image":"https://images.asos-media.com/products/asos-design-skinny-denim-shirt-with-rips-in-light-blue/201607270-1-blue?$n_480w$&wid=476&fit=constrain"},
{"name":"New Era New York Yankees oversized t-shirt in lilac","price":"32","color":"lilac","image":"https://images.asos-media.com/products/new-era-new-york-yankees-oversized-t-shirt-in-lilac/202122253-1-purple?$n_480w$&wid=476&fit=constrain"},
{"name":"Hollister outdoors central & back logo print t-shirt in white","price":"19","color":"","image":"https://images.asos-media.com/products/hollister-outdoors-central-back-logo-print-t-shirt-in-white/202800428-1-white?$n_480w$&wid=476&fit=constrain"},
]


/////
var hairDiv = document.getElementById("containerDiv");

var cartArr = [];

function appendProduct(view_All) {
    hairDiv.innerHTML = null;
    view_All.forEach(function (elem) {
  
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
  appendProduct(view_All);
  
  document.querySelector("#sorter").addEventListener("click", sortByPrice);
  function sortByPrice() {
      view_All.map(function (elem) {
          var sorting = document.querySelector("#sorter").value;
          console.log(sorting);
          if (sorting == "l2h") {
              view_All.sort(function (a, b) { return a.price - b.price })
              appendProduct(view_All)
          }
          else if (sorting == "h2l") {
              view_All.sort(function (a, b) { return b.price - a.price })
              appendProduct(view_All)
          }
  
          else if (sorting == "a2z") {
              function SortArray(x, y) {
                  if (x.name < y.name) { return -1; }
                  if (x.name > y.name) { return 1; }
                  return 0;
              }
              var s = view_All.sort(SortArray)
              appendProduct(s)
          }
          else if (sorting == "z2a") {
              function SortArray(x, y) {
                  if (x.name > y.name) { return -1; }
                  if (x.name < y.name) { return 1; }
                  return 0;
              }
              var sort = view_All.sort(SortArray)
              appendProduct(sort)
          }
      })
  }
  
  
  // filter_Function
  
  document.querySelector("#filter").addEventListener("click", filterItems);
  
  function filterItems(){
      var filter=document.getElementById("filter").value;
         var filterdata=view_All.filter(function(elem,index){
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
  