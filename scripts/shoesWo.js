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
[{"name":"ASOS DESIGN Wide Fit Joy toe-cap espadrilles in pink and rose gold","price":"14","color":"Pink and rose gold","image":"https://images.asos-media.com/products/asos-design-wide-fit-joy-toe-cap-espadrilles-in-pink-and-rose-gold/22213414-1-pinkandrosegold?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN Wide Fit Megan woven flat loafers in natural/tan","price":"18","color":"NATURAL","image":"https://images.asos-media.com/products/asos-design-wide-fit-megan-woven-flat-loafers-in-natural-tan/201063096-1-natural?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN Wide Fit Locus round ballet flats in black crinkle patent","price":"12","color":" BLACK CRINKLE PATENT","image":"https://images.asos-media.com/products/asos-design-wide-fit-locus-round-ballet-flats-in-black-crinkle-patent/201064155-1-blackcrinklepatent?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN Wide Fit Lido bow ballet flats in natural","price":"18","color":"NATURAL","image":"https://images.asos-media.com/products/asos-design-wide-fit-lido-bow-ballet-flats-in-natural/201158719-1-natural?$n_480w$&wid=476&fit=constrain"},
{"name":"RAID Wide Fit Nidhi loafer with snaffle in beige","price":"17","color":"Beige pu","image":"https://images.asos-media.com/products/raid-wide-fit-nidhi-loafer-with-snaffle-in-beige/201431313-1-beigepu?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN Wide Fit Lively slingback ballet flats in natural raffia","price":"18","color":"NATURAL RAFFIA","image":"https://images.asos-media.com/products/asos-design-wide-fit-lively-slingback-ballet-flats-in-natural-raffia/201172947-1-naturalraffia?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN Wide Fit Motto chain flat mules in black","price":"18","color":"BLACK","image":"https://images.asos-media.com/products/asos-design-wide-fit-motto-chain-flat-mules-in-black/201062705-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN Wide Fit Lake bow pointed ballet flats in gold metallic","price":"18","color":"GOLD METALLIC","image":"https://images.asos-media.com/products/asos-design-wide-fit-lake-bow-pointed-ballet-flats-in-gold-metallic/200381750-1-goldmetallic?$n_480w$&wid=476&fit=constrain"},
{"name":"River Island Wide Fit branded sling back espadrille in white","price":"37","color":"WHITE","image":"https://images.asos-media.com/products/river-island-wide-fit-branded-sling-back-espadrille-in-white/202694035-1-white?$n_480w$&wid=476&fit=constrain"},
{"name":"RAID Wide Fit Kinjal slingback flat shoes in camel","price":"30","color":"camel pu","image":"https://images.asos-media.com/products/raid-wide-fit-kinjal-slingback-flat-shoes-in-camel/201402002-1-camelpu?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN Wide Fit Verity loafer flat shoes with trim in blush","price":"19","color":"Blush","image":"https://images.asos-media.com/products/asos-design-wide-fit-verity-loafer-flat-shoes-with-trim-in-blush/23619942-1-blush?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN Wide Fit Virtue d'orsay pointed ballet flats in beige patent","price":"1","color":"Beige patent","image":"https://images.asos-media.com/products/asos-design-wide-fit-virtue-dorsay-pointed-ballet-flats-in-beige-patent/22912602-1-beigepatent?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN Wide Fit Virtue d'orsay pointed ballet flats in beige patent","price":"13","color":" Beige patent","image":"https://images.asos-media.com/products/asos-design-wide-fit-virtue-dorsay-pointed-ballet-flats-in-beige-patent/22912602-1-beigepatent?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN Wide Fit More flat lace up shoes in black","price":"27","color":"Black","image":"https://images.asos-media.com/products/asos-design-wide-fit-more-flat-lace-up-shoes-in-black/22727097-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"RAID Wide Fit Nidhi loafer with snaffle in beige","price":"17","color":"Beige pu","image":"https://images.asos-media.com/products/raid-wide-fit-nidhi-loafer-with-snaffle-in-beige/201431313-1-beigepu?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN Wide Fit Lively slingback ballet flats in natural raffia","price":"18","color":"NATURAL RAFFIA","image":"https://images.asos-media.com/products/asos-design-wide-fit-lively-slingback-ballet-flats-in-natural-raffia/201172947-1-naturalraffia?$n_480w$&wid=476&fit=constrain"}
]



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







