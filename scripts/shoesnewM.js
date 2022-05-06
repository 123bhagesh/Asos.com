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


// let shoes New In

let Mens_Clothing =

[{"name":"Polo Ralph Lauren trackster leather trainer with pony logo in blue suede","price":"126","color":"BLUE","image":"https://images.asos-media.com/products/polo-ralph-lauren-trackster-leather-trainer-with-pony-logo-in-blue-suede/201896394-1-blue?$n_480w$&wid=476&fit=constrain"},
{"name":"Polo Ralph Lauren court trainer in white/green with pony logo","price":"90","color":"MULTI","image":"https://images.asos-media.com/products/polo-ralph-lauren-court-trainer-in-white-green-with-pony-logo/201879757-1-multi?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN derby shoes in black suede with piped edging","price":"40","color":"BLACK","image":"https://images.asos-media.com/products/asos-design-derby-shoes-in-black-suede-with-piped-edging/200859618-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN tassel loafers in black faux suede","price":"30","color":"BLACK","image":"https://images.asos-media.com/products/asos-design-tassel-loafers-in-black-faux-suede/200604972-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"Asra Foza chain loafers in brown suede","price":"65","color":" BROWN","image":"https://images.asos-media.com/products/asra-foza-chain-loafers-in-brown-suede/201916910-1-brown?$n_480w$&wid=476&fit=constrain"},
{"name":"adidas Originals Court Rallye slip on trainers in black","price":"34","color":"Black","image":"https://images.asos-media.com/products/adidas-originals-court-rallye-slip-on-trainers-in-black/22978509-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"271 Walk London Benjamin snaffle sandals in black leather","price":"65","color":"Black","image":"https://images.asos-media.com/products/walk-london-benjamin-snaffle-sandals-in-black-leather/201504864-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"Topman black suede colburn loafers","price":"22","color":"BLACK","image":"https://images.asos-media.com/products/topman-black-suede-colburn-loafers/203080976-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN brogue shoes with chunky sole in brown leather","price":"50","color":"BROWN","image":"https://images.asos-media.com/products/asos-design-brogue-shoes-with-chunky-sole-in-brown-leather/200841453-1-brown?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN derby lace up shoe in grey suede on white wedge sole","price":"50","color":"GREY","image":"https://images.asos-media.com/products/asos-design-derby-lace-up-shoe-in-grey-suede-on-white-wedge-sole/201455239-1-grey?$n_480w$&wid=476&fit=constrain"},{"name":"Walk London Riva chain loafers in beige leather","price":"80","color":"NEUTRAL","image":"https://images.asos-media.com/products/walk-london-riva-chain-loafers-in-beige-leather/201587867-1-neutral?$n_480w$&wid=476&fit=constrain"},
{"name":"Walk London Arrow woven tassel loafers in brown leather","price":"65","color":"BROWN","image":"https://images.asos-media.com/products/walk-london-arrow-woven-tassel-loafers-in-brown-leather/201506442-1-brown?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN loafers in grey velvet floral design with snaffle","price":"34","color":"GREY","image":"https://images.asos-media.com/products/asos-design-loafers-in-grey-velvet-floral-design-with-snaffle/201423365-1-grey?$n_480w$&wid=476&fit=constrain"},{"name":"Noak made in Portugal derby shoes with toe cap in navy suede","price":"95","color":"NAVY","image":"https://images.asos-media.com/products/noak-made-in-portugal-derby-shoes-with-toe-cap-in-navy-suede/202226503-1-navy?$n_480w$&wid=476&fit=constrain"},
{"name":"Shaka snug slipper shoes in tan suede","price":"139","color":"Tan","image":"https://images.asos-media.com/products/shaka-snug-slipper-shoes-in-tan-suede/201388858-1-tan?$n_480w$&wid=476&fit=constrain"},{"name":"Shaka schlaf padded slipper shoes in black","price":"129","color":"Black","image":"https://images.asos-media.com/products/shaka-schlaf-padded-slipper-shoes-in-black/201384325-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"Schuh Remi lace up derby shoes in brown leather","price":"50","color":"BROWN","image":"https://images.asos-media.com/products/schuh-remi-lace-up-derby-shoes-in-brown-leather/201639493-1-brown?$n_480w$&wid=476&fit=constrain"},{"name":"Schuh Rowen brogues in tan leather","price":"50","color":"BROWN","image":"https://images.asos-media.com/products/schuh-rowen-brogues-in-tan-leather/201640121-1-brown?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN chunky loafer in black faux leather with snaffle detail","price":"45","color":"BLACK","image":"https://images.asos-media.com/products/asos-design-chunky-loafer-in-black-faux-leather-with-snaffle-detail/200899626-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN loafers in black faux suede with snaffle detail","price":"30","color":"Black","image":"https://images.asos-media.com/products/asos-design-loafers-in-black-faux-suede-with-snaffle-detail/201815002-1-black?$n_480w$&wid=476&fit=constrain"}]


/////
var hairDiv = document.getElementById("containerDiv");

var cartArr = [];

function appendProduct(Mens_Clothing) {
  hairDiv.innerHTML = null;
  Mens_Clothing.forEach(function (elem) {

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
appendProduct(Mens_Clothing);

document.querySelector("#sorter").addEventListener("click", sortByPrice);
function sortByPrice() {
    Mens_Clothing.map(function (elem) {
        var sorting = document.querySelector("#sorter").value;
        console.log(sorting);
        if (sorting == "l2h") {
            Mens_Clothing.sort(function (a, b) { return a.price - b.price })
            appendProduct(Mens_Clothing)
        }
        else if (sorting == "h2l") {
            Mens_Clothing.sort(function (a, b) { return b.price - a.price })
            appendProduct(Mens_Clothing)
        }

        else if (sorting == "a2z") {
            function SortArray(x, y) {
                if (x.name < y.name) { return -1; }
                if (x.name > y.name) { return 1; }
                return 0;
            }
            var s = Mens_Clothing.sort(SortArray)
            appendProduct(s)
        }
        else if (sorting == "z2a") {
            function SortArray(x, y) {
                if (x.name > y.name) { return -1; }
                if (x.name < y.name) { return 1; }
                return 0;
            }
            var sort = Mens_Clothing.sort(SortArray)
            appendProduct(sort)
        }
    })
}
document.querySelector("#filter").addEventListener("click", filterItems);


// filter_Function

function filterItems(){
    var filter=document.getElementById("filter").value;
       var filterdata=Mens_Clothing.filter(function(elem,index){
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







