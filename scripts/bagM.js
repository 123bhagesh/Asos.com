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


// let mens_Bag

let Mens_Clothing =


[{"name":"Bag red","price":"18","color":"Purple","image":"https://images.asos-media.com/products/nike-running-slim-waistpack-in-purple/201363798-1-purple?$n_480w$&wid=476&fit=constrain"},{"name":"Nike Heritage waistpack in green","price":"18","color":"Green","image":"https://images.asos-media.com/products/nike-heritage-waistpack-in-green/201432226-1-green?$n_480w$&wid=476&fit=constrain"},{"name":"Timberland Logo bum bag in black","price":"30","color":"Black","image":"https://images.asos-media.com/products/timberland-logo-bum-bag-in-black/201705753-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"Dickies Blanchard bumbag in lilac","price":"25","color":"LILAC","image":"https://images.asos-media.com/products/dickies-blanchard-bumbag-in-lilac/202776122-1-lilac?$n_480w$&wid=476&fit=constrain"},
{"name":"River Island weave wallet in black","price":"19","color":"BLACK","image":"https://images.asos-media.com/products/river-island-weave-wallet-in-black/202999009-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"River Island monogram wallet in black","price":"19","color":"BLACK","image":"https://images.asos-media.com/products/river-island-monogram-wallet-in-black/202999013-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"The North Face Bozer III cross body bag in black","price":"32","color":"Black","image":"https://images.asos-media.com/products/the-north-face-bozer-iii-cross-body-bag-in-black/23429687-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"The North Face Jester crossbody bag in black","price":"30","color":"Black","image":"https://images.asos-media.com/products/the-north-face-jester-crossbody-bag-in-black/201761032-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"Fred Perry pique textured billfold wallet in black","price":"50","color":"BLACK","image":"https://images.asos-media.com/products/fred-perry-pique-textured-billfold-wallet-in-black/202060362-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"adidas Training 3 Stripe backpack in grey","price":"30","color":"GREY","image":"https://images.asos-media.com/products/adidas-training-3-stripe-backpack-in-grey/201323629-1-grey?$n_480w$&wid=476&fit=constrain"},{"name":"adidas Originals adicolor Trefoil backpack in black","price":"23","color":"Black","image":"https://images.asos-media.com/products/adidas-originals-adicolor-trefoil-backpack-in-black/24312425-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"The North Face Rodey backpack in black","price":"63","color":" Tnf black","image":"https://images.asos-media.com/products/the-north-face-rodey-backpack-in-black/14927859-1-tnfblack?$n_480w$&wid=476&fit=constrain"},
{"name":"Rains 1382 box bag micro in blue river","price":"59","color":"River","image":"https://images.asos-media.com/products/rains-1382-box-bag-micro-in-blue-river/201576921-1-river?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN faux leather weave wallet in bright green","price":"13","color":"MID GREEN","image":"https://images.asos-media.com/products/asos-design-faux-leather-weave-wallet-in-bright-green/201606852-1-midgreen?$n_480w$&wid=476&fit=constrain"}]
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







