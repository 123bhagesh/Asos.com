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


//  Men-Slipper

let Mens_Clothing =
[{"name":"Ugg tasman puft slippers in khaki","price":"90","color":"GREEN","image":"https://images.asos-media.com/products/ugg-tasman-puft-slippers-in-khaki/202093901-1-green?$n_480w$&wid=476&fit=constrain"},{"name":"Shaka schlaf padded slipper shoes in tan","price":"129","color":"Tan","image":"https://images.asos-media.com/products/shaka-schlaf-padded-slipper-shoes-in-tan/201387258-1-tan?$n_480w$&wid=476&fit=constrain"},{"name":"Shaka snug slipper shoes in black suede","price":"139","color":"Black","image":"https://images.asos-media.com/products/shaka-snug-slipper-shoes-in-black-suede/201387832-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"New Look suede mule slipper with faux fur in tan","price":"13","color":"Tan","image":"https://images.asos-media.com/products/new-look-suede-mule-slipper-with-faux-fur-in-tan/201368628-1-tan?$n_480w$&wid=476&fit=constrain"},{"name":"Hollister slipper in black with all over logo","price":"25","color":"Black","image":"https://images.asos-media.com/products/hollister-slipper-in-black-with-all-over-logo/201538307-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"Ugg scuff sheepskin slippers in black","price":"84","color":"Black","image":"https://images.asos-media.com/products/ugg-scuff-sheepskin-slippers-in-black/24308951-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"Shaka snug slipper shoes in tan suede","price":"139","color":"Tan","image":"https://images.asos-media.com/products/shaka-snug-slipper-shoes-in-tan-suede/201388858-1-tan?$n_480w$&wid=476&fit=constrain"},{"name":"Shaka schlaf padded slipper shoes in black","price":"129","color":"Black","image":"https://images.asos-media.com/products/shaka-schlaf-padded-slipper-shoes-in-black/201384325-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"Shaka schlaf padded slipper shoes in khaki","price":"129","color":"Khaki","image":"https://images.asos-media.com/products/shaka-schlaf-padded-slipper-shoes-in-khaki/201385280-1-khaki?$n_480w$&wid=476&fit=constrain"},{"name":"Shaka schlaf padded slipper boots in black","price":"149","color":"black","image":"https://images.asos-media.com/products/shaka-schlaf-padded-slipper-boots-in-black/201387508-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"Shaka schlaf padded slipper boots in khaki","price":"149","color":"khaki","image":"https://images.asos-media.com/products/shaka-schlaf-padded-slipper-boots-in-khaki/201387686-1-khaki?$n_480w$&wid=476&fit=constrain"},{"name":"The North Face Thermoball Traction printed slippers in red","price":"50","color":"Red","image":"https://images.asos-media.com/products/the-north-face-thermoball-traction-printed-slippers-in-red/24311858-1-red?$n_480w$&wid=476&fit=constrain"},
{"name":"Hugo slipper in black","price":"99","color":"Black","image":"https://images.asos-media.com/products/hugo-slipper-in-black/201531528-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN slippers in natural borg","price":"20","color":"CAMEL","image":"https://images.asos-media.com/products/asos-design-slippers-in-natural-borg/200912066-1-camel?$n_480w$&wid=476&fit=constrain"},{"name":"Ugg scuff sheepskin slippers in navy","price":"84","color":"Navy","image":"https://images.asos-media.com/products/ugg-scuff-sheepskin-slippers-in-navy/24308976-1-navy?$n_480w$&wid=476&fit=constrain"},
{"name":"Ugg tasman puft slippers in khaki","price":"90","color":"GREEN","image":"https://images.asos-media.com/products/ugg-tasman-puft-slippers-in-khaki/202093901-1-green?$n_480w$&wid=476&fit=constrain"}]


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


