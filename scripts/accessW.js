import {topSearch} from "../components/topnavbar.js";

// console.log(categories_Navbar,categories_Navbar2)
let viewAll =document.getElementById("clothTopNavbar")

viewAll.innerHTML=topSearch()
console.log(viewAll)


import {women_Mega_navbar} from "../components/womeMegannavbar.js";

let viewAll2 =document.getElementById("clothMegaNavbar2")

viewAll2.innerHTML=women_Mega_navbar()
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



 let women_Access =


   
[{"name":"Elemis Pro-Collagen Summer Bloom Cleansing Balm 100g","price":"47","color":"No Colour","image":"https://images.asos-media.com/products/elemis-pro-collagen-summer-bloom-cleansing-balm-100g/202606767-1-nocolour?$n_480w$&wid=476&fit=constrain"},
{"name":"Mane 'n Tail Herbal Gro Leave-In Creme","price":"10","color":"No colour","image":"https://images.asos-media.com/products/mane-n-tail-herbal-gro-leave-in-creme/23137549-1-nocolour?$n_480w$&wid=476&fit=constrain"},
{"name":"391 e.l.f. Flawless Satin Foundation","price":"10","color":"No Colour","image":"https://images.asos-media.com/products/elf-flawless-satin-foundation/202524037-1-natural?$n_480w$&wid=476&fit=constrain"},
{"name":"& Other Stories hand cream in neon rush","price":"5","color":"Neon rush","image":"https://images.asos-media.com/products/other-stories-hand-cream-in-neon-rush/202658838-1-neonrush?$n_480w$&wid=476&fit=constrain"},
{"name":"Missguided Babe Power Eau De Parfum 10ml","price":"11","color":"No Colour","image":"https://images.asos-media.com/products/missguided-babe-power-eau-de-parfum-10ml/202780294-1-nocolour?$n_480w$&wid=476&fit=constrain"},
{"name":"This Works Sleep Spa Set","price":"21","color":"No Colour","image":"https://images.asos-media.com/products/this-works-sleep-spa-set/202780151-1-nocolour?$n_480w$&wid=476&fit=constrain"},
{"name":"100 The Ritual of Jing Conditioner 250ml","price":"14","color":"No Colour","image":"https://images.asos-media.com/products/the-ritual-of-jing-conditioner-250ml/202885245-1-nocolour?$n_480w$&wid=476&fit=constrain"},
{"name":"NEOM Sleep Heroes Set","price":"42","color":"No Colour","image":"https://images.asos-media.com/products/neom-sleep-heroes-set/202780331-1-nocolour?$n_480w$&wid=476&fit=constrain"},
{"name":"144 Elie Saab Girl of Now Lovely Eau De Parfum 50ml","price":"68","color":"No Colour","image":"https://images.asos-media.com/products/elie-saab-girl-of-now-lovely-eau-de-parfum-50ml/202536703-1-nocolour?$n_480w$&wid=476&fit=constrain"},
{"name":"Issey Miyake Nectar D'Issey Eau de Parfum 30ml","price":"47","color":"No Colour","image":"https://images.asos-media.com/products/issey-miyake-nectar-dissey-eau-de-parfum-30ml/202440979-1-nocolour?$n_480w$&wid=476&fit=constrain"},
{"name":"59 Issey Miyake L'Eau Majeure D'Issey Eau de Toilette 50m","price":"51","color":"No Colour","image":"https://images.asos-media.com/products/issey-miyake-leau-majeure-dissey-eau-de-toilette-50ml/202440866-1-nocolour?$n_480w$&wid=476&fit=constrain"},
{"name":"Eylure Lashes Luxe Velvet Noir - Midnight","price":"10","color":"Midnight","image":"https://images.asos-media.com/products/eylure-lashes-luxe-velvet-noir-midnight/201514941-1-midnight?$n_480w$&wid=476&fit=constrain"},
{"name":"Eylure Lashes Luxe Velvet Noir - Eclipse","price":"10","color":"Eclipse","image":"https://images.asos-media.com/products/eylure-lashes-luxe-velvet-noir-eclipse/201514934-1-eclipse?$n_480w$&wid=476&fit=constrain"},
{"name":" Thumbnail 1 of 4 Thumbnail 2 of 4 Thumbnail 3 of 4 Thumbnail 4 of 4  475 Eylure 3/4 Length Accent Lashes - No. 013","price":"6","color":"No. 013","image":"https://images.asos-media.com/products/eylure-3-4-length-accent-lashes-no-013/201514930-1-no013?$n_480w$&wid=476&fit=constrain"},
{"name":"I Heart Revolution x Disney Fairytale Eyeshadow Palette - Tangled","price":"16","color":"Tangled","image":"https://images.asos-media.com/products/i-heart-revolution-x-disney-fairytale-eyeshadow-palette-tangled/202781525-1-tangled?$n_480w$&wid=476&fit=constrain"},
{"name":"235 I Heart Revolution x Disney Fairytale Blusher - Moana","price":"9","color":"Moana","image":"https://images.asos-media.com/products/i-heart-revolution-x-disney-fairytale-blusher-moana/202781503-1-moana?$n_480w$&wid=476&fit=constrain"},
{"name":"174 I Heart Revolution x Disney Fairytale Eyeshadow Palette - Moana","price":"16","color":" Moana","image":"https://images.asos-media.com/products/i-heart-revolution-x-disney-fairytale-eyeshadow-palette-moana/202781500-1-moana?$n_480w$&wid=476&fit=constrain"},
{"name":"161 I Heart Revolution x Disney Fairytale Jelly Eye Shimmer - Pua","price":"7","color":"Pua","image":"https://images.asos-media.com/products/i-heart-revolution-x-disney-fairytale-jelly-eye-shimmer-pua/202781494-1-pua?$n_480w$&wid=476&fit=constrain"},
{"name":"153 I Heart Revolution x Disney Fairytale Highlighter - Tangled","price":"9","color":"Tangled","image":"https://images.asos-media.com/products/i-heart-revolution-x-disney-fairytale-highlighter-tangled/202781493-1-tangled?$n_480w$&wid=476&fit=constrain"},
{"name":"364 I Heart Revolution x Disney Fairytale Lip Topper - Tangled","price":"6","color":" Tangled","image":"https://images.asos-media.com/products/i-heart-revolution-x-disney-fairytale-lip-topper-tangled/202781482-1-tangled?$n_480w$&wid=476&fit=constrain"},
{"name":"130 I Heart Revolution x Disney Fairytale Jelly Eye Shimmer - Heihei","price":"7","color":"Heihei","image":"https://images.asos-media.com/products/i-heart-revolution-x-disney-fairytale-jelly-eye-shimmer-heihei/202781479-1-heihei?$n_480w$&wid=476&fit=constrain"},
{"name":"Revolution Hot Shot Kombucha Kiss Primer","price":"9","color":"No Colour","image":"https://images.asos-media.com/products/revolution-hot-shot-kombucha-kiss-primer/202718457-1-nocolour?$n_480w$&wid=476&fit=constrain"},
{"name":"Thumbnail 1 of 4 Thumbnail 2 of 4 Thumbnail 3 of 4 Thumbnail 4 of 4  Revolution Hot Shot Kombucha Glow Highlighter Palette","price":"9","color":" Multi","image":"https://images.asos-media.com/products/revolution-hot-shot-kombucha-glow-highlighter-palette/202718423-1-multi?$n_480w$&wid=476&fit=constrain"},
{"name":"66 Revolution Hot Shot Cheek Tint - Red","price":"7","color":"Red","image":"https://images.asos-media.com/products/revolution-hot-shot-cheek-tint-red/202718408-1-red?$n_480w$&wid=476&fit=constrain"},
{"name":"Revolution Skincare SPF50 Daily Defender Lightweight Moisturiser","price":"16","color":"No Colour","image":"https://images.asos-media.com/products/revolution-skincare-spf50-daily-defender-lightweight-moisturiser/202923893-1-nocolour?$n_480w$&wid=476&fit=constrain"},
{"name":" Thumbnail 1 of 4 Thumbnail 2 of 4 Thumbnail 3 of 4 Thumbnail 4 of 4  99 Caudalie Vinotherapist Hand & Nail Cream 75ml","price":"12","color":"No Colour","image":"https://images.asos-media.com/products/caudalie-vinotherapist-hand-nail-cream-75ml/202779636-1-nocolour?$n_480w$&wid=476&fit=constrain"},
{"name":"ils - Sunset Strip Thumbnail 1 of 4 Thumbnail 2 of 4 Thumbnail 3 of 4 Thumbnail 4 of 4  150 Lottie London X Chaun Legend Stay Press'd False Nails - Sunset Strip","price":"9","color":"Sunset Strip","image":"https://images.asos-media.com/products/lottie-london-x-chaun-legend-stay-pressd-false-nails-sunset-strip/202429913-1-sunsetstrip?$n_480w$&wid=476&fit=constrain"},
{"name":"I Heart Revolution Tasty Coconut Conditioning Mascara","price":"6","color":"Black","image":"https://images.asos-media.com/products/i-heart-revolution-tasty-coconut-conditioning-mascara/202781512-1-black?$n_480w$&wid=476&fit=constrain"},
]
    


var hairDiv = document.getElementById("containerDiv");

var cartArr = [];

function appendProduct(women_Access) {
  hairDiv.innerHTML = null;
  women_Access.forEach(function (elem) {

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
appendProduct(women_Access);

document.querySelector("#sorter").addEventListener("click", sortByPrice);
function sortByPrice() {
    women_Access.map(function (elem) {
        var sorting = document.querySelector("#sorter").value;
        console.log(sorting);
        if (sorting == "l2h") {
            women_Access.sort(function (a, b) { return a.price - b.price })
            appendProduct(women_Access)
        }
        else if (sorting == "h2l") {
            women_Access.sort(function (a, b) { return b.price - a.price })
            appendProduct(women_Access)
        }

        else if (sorting == "a2z") {
            function SortArray(x, y) {
                if (x.name < y.name) { return -1; }
                if (x.name > y.name) { return 1; }
                return 0;
            }
            var s = women_Access.sort(SortArray)
            appendProduct(s)
        }
        else if (sorting == "z2a") {
            function SortArray(x, y) {
                if (x.name > y.name) { return -1; }
                if (x.name < y.name) { return 1; }
                return 0;
            }
            var sort = women_Access.sort(SortArray)
            appendProduct(sort)
        }
    })
}


// filter_Function

document.querySelector("#filter").addEventListener("click", filterItems);

function filterItems(){
    var filter=document.getElementById("filter").value;
       var filterdata=women_Access.filter(function(elem,index){
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
