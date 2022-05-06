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

[{"name":"Uppercut Deluxe Sea Salt Spray","price":"15","color":"Sea salt spray","image":"https://images.asos-media.com/products/uppercut-deluxe-sea-salt-spray/20613715-1-seasaltspray?$n_480w$&wid=476&fit=constrain"},{"name":"Uppercut Deluxe Pomade","price":"18","color":"Multi","image":"https://images.asos-media.com/products/uppercut-deluxe-pomade/6402874-1-multi?$n_480w$&wid=476&fit=constrain"},{"name":"Uppercut Deluxe Monster Hold Wax","price":"18","color":"Multi","image":"https://images.asos-media.com/products/uppercut-deluxe-monster-hold-wax/6403897-1-multi?$n_480w$&wid=476&fit=constrain"},{"name":"The INKEY List Salicylic Acid Exfoliating Scalp Treatment 150ml","price":"16","color":"NO COLOUR","image":"https://images.asos-media.com/products/the-inkey-list-salicylic-acid-exfoliating-scalp-treatment-150ml/201137991-1-nocolour?$n_480w$&wid=476&fit=constrain"},{"name":"The INKEY List Caffeine Stimulating Scalp Treatment 150ml","price":"16","color":"NO COLOUR","image":"https://images.asos-media.com/products/the-inkey-list-caffeine-stimulating-scalp-treatment-150ml/201137955-1-nocolour?$n_480w$&wid=476&fit=constrain"},
{"name":"The INKEY List Peptide Volumizing Hair Treatment 100ml","price":"14","color":" NO COLOUR","image":"https://images.asos-media.com/products/the-inkey-list-peptide-volumizing-hair-treatment-100ml/201137962-1-nocolour?$n_480w$&wid=476&fit=constrain"},{"name":"https://images.asos-media.com/products/olaplex-no-3-hair-perfector-jumbo-85oz-250ml/201220160-1-jumbono3?$n_480w$&wid=476&fit=constrain","price":"52","color":"Jumbo No.3","image":"https://images.asos-media.com/products/olaplex-no-3-hair-perfector-jumbo-85oz-250ml/201220160-1-jumbono3?$n_480w$&wid=476&fit=constrain"},
{"name":"Olaplex No.4 Bond Maintenance Shampoo 8.5oz/250ml","price":"28","color":"No.4","image":"https://images.asos-media.com/products/olaplex-no4-bond-maintenance-shampoo-85oz-250ml/20626276-1-no4?$n_480w$&wid=476&fit=constrain"},{"name":"Olaplex No.5 Bond Maintenance Conditioner 8.5oz/250ml","price":"28","color":"No.5","image":"https://images.asos-media.com/products/olaplex-no5-bond-maintenance-conditioner-85oz-250ml/20626274-1-no5?$n_480w$&wid=476&fit=constrain"},{"name":"Hanz De Fuko Dry Shampoo","price":"26","color":"No colour","image":"https://images.asos-media.com/products/hanz-de-fuko-dry-shampoo/10001166-1-nocolour?$n_480w$&wid=476&fit=constrain"},{"name":"https://images.asos-media.com/products/we-are-paradoxx-volume-conditioner-250ml/200908211-1-nocolour?$n_480w$&wid=476&fit=constrain","price":"21","color":"NO COLOUR","image":"https://images.asos-media.com/products/we-are-paradoxx-volume-conditioner-250ml/200908211-1-nocolour?$n_480w$&wid=476&fit=constrain"},{"name":"We Are Paradoxx Moisture Mask 200ml","price":"32","color":"We Are Paradoxx Moisture Mask 200ml","image":"https://images.asos-media.com/products/we-are-paradoxx-moisture-mask-200ml/200908201-1-nocolour?$n_480w$&wid=476&fit=constrain"}]
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







