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



let  face_body_Men =
[{"name":"L'Oreal Paris Men Expert Barber's Essentials Beard Grooming Duo Set for him","price":"19","color":"No Colour","image":"https://images.asos-media.com/products/loreal-paris-men-expert-barbers-essentials-beard-grooming-duo-set-for-him/202859914-1-nocolour?$n_480w$&wid=476&fit=constrain"},{"name":"The INKEY List 15% Vitamin C and EGF Serum 30ml","price":"16","color":"No Colour","image":"https://images.asos-media.com/products/the-inkey-list-15-vitamin-c-and-egf-serum-30ml/202549675-1-nocolour?$n_480w$&wid=476&fit=constrain"},{"name":"Bondi Sands Summer Fruits Body Moisturiser 500ml","price":"10","color":"No Colour","image":"https://images.asos-media.com/products/bondi-sands-summer-fruits-body-moisturiser-500ml/201873092-1-nocolour?$n_480w$&wid=476&fit=constrain"},{"name":"Bondi Sands Summer Fruits Coconut & Sea Salt Body Scrub 250g","price":"14","color":"No Colour","image":"https://images.asos-media.com/products/bondi-sands-summer-fruits-coconut-sea-salt-body-scrub-250g/201873152-1-nocolour?$n_480w$&wid=476&fit=constrain"},{"name":"Bondi Sands Summer Fruits Body Wash 500ml","price":"9","color":"No Colour","image":"https://images.asos-media.com/products/bondi-sands-summer-fruits-body-wash-500ml/201873168-1-nocolour?$n_480w$&wid=476&fit=constrain"},{"name":"Elemis Pro-Collagen Night Cream 30ml","price":"67","color":"NO COLOUR","image":"https://images.asos-media.com/products/elemis-pro-collagen-night-cream-30ml/202730822-1-nocolour?$n_480w$&wid=476&fit=constrain"},{"name":"185 BaBylissMEN Powerblade Pro Hair Clipper","price":"32","color":" Powerblade pro","image":"https://images.asos-media.com/products/babylissmen-powerblade-pro-hair-clipper/21066017-1-powerbladepro?$n_480w$&wid=476&fit=constrain"},
{"name":"Gillette SkinGuard Sensitive Razor Blades - 4 Pack","price":"13","color":"No Colour","image":"https://images.asos-media.com/products/gillette-skinguard-sensitive-razor-blades-4-pack/13723012-1-nocolour?$n_480w$&wid=476&fit=constrain"},{"name":"185 Wahl Groomsman 8 in 1 Trimmer Kit","price":"20","color":"No Colour","image":"https://images.asos-media.com/products/wahl-groomsman-8-in-1-trimmer-kit/201714304-1-nocolour?$n_480w$&wid=476&fit=constrain"},{"name":"Issey Miyake L'Eau d'Issey pour Homme Eau de Toilette Igo Cap 20ml","price":"24","color":"No Colour","image":"https://images.asos-media.com/products/issey-miyake-leau-dissey-pour-homme-eau-de-toilette-igo-cap-20ml/202440922-1-nocolour?$n_480w$&wid=476&fit=constrain"},{"name":"Narciso Rodriguez Narciso Eau de Parfum Rouge 90ml","price":"92","color":"No Colour","image":"https://images.asos-media.com/products/narciso-rodriguez-narciso-eau-de-parfum-rouge-90ml/202440926-1-nocolour?$n_480w$&wid=476&fit=constrain"},
{"name":"Revolution Man Niacinamide Serum 30ml","price":"9","color":" No Colour","image":"https://images.asos-media.com/products/revolution-man-niacinamide-serum-30ml/202883572-1-nocolour?$n_480w$&wid=476&fit=constrain"},
{"name":"Revolution Man Niacinamide Serum 30ml","price":"9","color":" No Colour","image":"https://images.asos-media.com/products/revolution-man-niacinamide-serum-30ml/202883572-1-nocolour?$n_480w$&wid=476&fit=constrain"},{"name":"Revolution Man Energise Brightening Anti-Fatigue Serum 30ml","price":"11","color":" No Colour","image":"https://images.asos-media.com/products/revolution-man-energise-brightening-anti-fatigue-serum-30ml/202883570-1-nocolour?$n_480w$&wid=476&fit=constrain"},{"name":"Garnier Vitamin C Brightening Essentials Set (save 33%)","price":"13","color":" NO COLOUR","image":"https://images.asos-media.com/products/garnier-vitamin-c-brightening-essentials-set-save-33/202531106-1-nocolour?$n_480w$&wid=476&fit=constrain"},{"name":"The INKEY List 15% Vitamin C and EGF Serum 30ml","price":"16","color":" NO COLOUR","image":"https://images.asos-media.com/products/the-inkey-list-15-vitamin-c-and-egf-serum-30ml/202549675-1-nocolour?$n_480w$&wid=476&fit=constrain"},
{"name":"St.Tropez Gradual Tan Classic Light/Medium 200ml","price":"18","color":" NO COLOUR","image":"https://images.asos-media.com/products/sttropez-gradual-tan-classic-light-medium-200ml/201775188-1-nocolour?$n_480w$&wid=476&fit=constrain"},{"name":"Philip Kingsley Body & Volume Discovery Kit","price":"21","color":"No Colour","image":"https://images.asos-media.com/products/philip-kingsley-body-volume-discovery-kit/202523046-1-nocolour?$n_480w$&wid=476&fit=constrain"},{"name":"Philip Kingsley Flake Free Discovery Kit","price":"24","color":"No Colour","image":"https://images.asos-media.com/products/philip-kingsley-flake-free-discovery-kit/202523041-1-nocolour?$n_480w$&wid=476&fit=constrain"},
{"name":"Philip Kingsley Elasticizer 40ml","price":"13","color":"No Colour","image":"https://images.asos-media.com/products/philip-kingsley-elasticizer-40ml/202522929-1-nocolour?$n_480w$&wid=476&fit=constrain"},{"name":"NUXE Sun Refreshing After-Sun Milk 200ml","price":"20","color":"NO COLOUR","image":"https://images.asos-media.com/products/nuxe-sun-refreshing-after-sun-milk-200ml/202937472-1-nocolour?$n_480w$&wid=476&fit=constrain"},{"name":"L'Oreal Paris Men Expert 5-Min Mask Multi-Pack with Re-energising Taurine Set for him","price":"11","color":"No Colour","image":"https://images.asos-media.com/products/loreal-paris-men-expert-5-min-mask-multi-pack-with-re-energising-taurine-set-for-him/202859946-1-nocolour?$n_480w$&wid=476&fit=constrain"},{"name":"EcoStardust Biodegradable Glitter Set - Euphoria","price":"21","color":" Euphoria","image":"https://images.asos-media.com/products/ecostardust-biodegradable-glitter-set-euphoria/202642562-1-euphoria?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN leather wash bag with double compartment in black","price":"32","color":"BLACK","image":"https://images.asos-media.com/products/asos-design-leather-wash-bag-with-double-compartment-in-black/202084430-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN wash bag in khaki nylon","price":"10","color":"KHAKI","image":"https://images.asos-media.com/products/asos-design-wash-bag-in-khaki-nylon/201573037-1-khaki?$n_480w$&wid=476&fit=constrain"},{"name":"NUXE Sun Melting Cream for Face SPF50 50ml","price":"21","color":"NO COLOUR","image":"https://images.asos-media.com/products/nuxe-sun-melting-cream-for-face-spf50-50ml/202937457-1-nocolour?$n_480w$&wid=476&fit=constrain"},{"name":"LUSH Big Hugs Bath Bomb Duo Set","price":"12","color":"No Colour","image":"https://images.asos-media.com/products/lush-big-hugs-bath-bomb-duo-set/202812330-1-nocolour?$n_480w$&wid=476&fit=constrain"},{"name":"NEOM Time for Real Luxury Set","price":"48","color":"No Colour","image":"https://images.asos-media.com/products/neom-time-for-real-luxury-set/202780254-1-nocolour?$n_480w$&wid=476&fit=constrain"},{"name":"","price":"","color":"","image":""},
]





/////

var hairDiv = document.getElementById("containerDiv");

var cartArr = [];

function appendProduct(face_body_Men) {
  hairDiv.innerHTML = null;
  face_body_Men.forEach(function (elem) {

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
appendProduct(face_body_Men);

document.querySelector("#sorter").addEventListener("click", sortByPrice);
function sortByPrice() {
    face_body_Men.map(function (elem) {
        var sorting = document.querySelector("#sorter").value;
        console.log(sorting);
        if (sorting == "l2h") {
            face_body_Men.sort(function (a, b) { return a.price - b.price })
            appendProduct(face_body_Men)
        }
        else if (sorting == "h2l") {
            face_body_Men.sort(function (a, b) { return b.price - a.price })
            appendProduct(face_body_Men)
        }

        else if (sorting == "a2z") {
            function SortArray(x, y) {
                if (x.name < y.name) { return -1; }
                if (x.name > y.name) { return 1; }
                return 0;
            }
            var s = face_body_Men.sort(SortArray)
            appendProduct(s)
        }
        else if (sorting == "z2a") {
            function SortArray(x, y) {
                if (x.name > y.name) { return -1; }
                if (x.name < y.name) { return 1; }
                return 0;
            }
            var sort = face_body_Men.sort(SortArray)
            appendProduct(sort)
        }
    })
}


// filter_Function

document.querySelector("#filter").addEventListener("click", filterItems);

function filterItems(){
    var filter=document.getElementById("filter").value;
       var filterdata=face_body_Men.filter(function(elem,index){
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
