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
[{"name":"The INKEY List Niacinamide Serum 30ml","price":"9","color":"No Colour","image":"https://images.asos-media.com/products/the-inkey-list-niacinamide-serum-30ml/20303472-1-nocolour?$n_480w$&wid=476&fit=constrain"},{"name":"SELLING FAST Cetaphil Moisturising Lotion for Sensitive Skin 236ml","price":"10","color":"No Colour","image":"https://images.asos-media.com/products/cetaphil-moisturising-lotion-for-sensitive-skin-236ml/21586207-1-nocolour?$n_480w$&wid=476&fit=constrain"},
{"name":"Pixi Glow Tonic with 5% Glycolic Acid 250ml","price":"19","color":"Glow tonic","image":"https://images.asos-media.com/products/pixi-glow-tonic-with-5-glycolic-acid-250ml/4856599-1-glowtonic?$n_480w$&wid=476&fit=constrain"},{"name":"SELLING FAST Cetaphil Healthy Radiance Brightening Day Cream with SPF 15 and Niacinamide 50g","price":"20","color":"No Colour","image":"https://images.asos-media.com/products/cetaphil-healthy-radiance-brightening-day-cream-with-spf-15-and-niacinamide-50g/200887193-1-nocolour?$n_480w$&wid=476&fit=constrain"},
{"name":"Anatomicals Face Mask Pack - Brightening Toning and Calming x 3","price":"4","color":" Face mask","image":"https://images.asos-media.com/products/anatomicals-face-mask-pack-brightening-toning-and-calming-x-3/8476243-1-facemask?$n_480w$&wid=476&fit=constrain"},{"name":"SELLING FAST Revolution Skincare 1% Retinol Super Intense Serum","price":"11","color":"No Colour","image":"https://images.asos-media.com/products/revolution-skincare-1-retinol-super-intense-serum/200279518-1-nocolour?$n_480w$&wid=476&fit=constrain"},{"name":"Frank Body Original Face Scrub Pouch 35ml","price":"6","color":"No Colour","image":"https://images.asos-media.com/products/frank-body-original-face-scrub-pouch-35ml/14706978-1-nocolour?$n_480w$&wid=476&fit=constrain"},
{"name":"Revolution Skincare Charcoal Pure Gommage Peel","price":"5","color":"No Colour","image":"https://images.asos-media.com/products/revolution-skincare-charcoal-pure-gommage-peel/23435904-1-nocolour?$n_480w$&wid=476&fit=constrain"},{"name":"The INKEY List SPF 30 Mineral Sunscreen 50ml","price":"16","color":"No Colour","image":"https://images.asos-media.com/products/the-inkey-list-spf-30-mineral-sunscreen-50ml/21513303-1-nocolour?$n_320w$&wid=317&fit=constrain"},
{"name":"ASOS DESIGN bunny mask in white","price":"7","color":"White","image":"https://images.asos-media.com/products/asos-design-bunny-mask-in-white/200305247-1-white?$n_320w$&wid=317&fit=constrain"}
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







