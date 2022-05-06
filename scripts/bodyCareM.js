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

[{"name":"Sunday Rain Sleep Easy Body Scrub 265g","price":"7","color":"No Colour","image":"https://images.asos-media.com/products/sunday-rain-sleep-easy-body-scrub-265g/202314314-1-nocolour?$n_480w$&wid=476&fit=constrain"},{"name":"St. Tropez Self Tan 50ml Purity Water Mousse and Face Mist Mini Kit","price":"16","color":" No colour","image":"https://images.asos-media.com/products/st-tropez-self-tan-50ml-purity-water-mousse-and-face-mist-mini-kit/14558277-1-nocolour?$n_480w$&wid=476&fit=constrain"},{"name":"The Ordinary 4% Sulphate Cleanser for Body and Hair 240ml","price":"8","color":"NO COLOUR","image":"https://images.asos-media.com/products/the-ordinary-4-sulphate-cleanser-for-body-and-hair-240ml/202332500-1-nocolour?$n_480w$&wid=476&fit=constrain"},
{"name":"LUSH Big Hugs Bath Bomb Duo Set","price":"12","color":" No Colour","image":"https://images.asos-media.com/products/lush-big-hugs-bath-bomb-duo-set/202812330-1-nocolour?$n_480w$&wid=476&fit=constrain"},{"name":"Garnier Summer Body Hydrating Gradual Tan Moisturiser Light 400ml","price":"8","color":"No colour","image":"https://images.asos-media.com/products/garnier-summer-body-hydrating-gradual-tan-moisturiser-light-400ml/20639673-1-nocolour?$n_480w$&wid=476&fit=constrain"},{"name":"Bondi Sands Summer Fruits Body Wash 500ml","price":"9","color":" NO COLOUR","image":"https://images.asos-media.com/products/bondi-sands-summer-fruits-body-wash-500ml/201873168-1-nocolour?$n_480w$&wid=476&fit=constrain"},{"name":"L'Oreal Men Expert Total Clean Shower Gel 300ml","price":"4","color":"Multi","image":"https://images.asos-media.com/products/loreal-men-expert-total-clean-shower-gel-300ml/8867569-1-multi?$n_480w$&wid=476&fit=constrain"},
{"name":"Miss Patisserie Harmony Bath Ball with Amethyst Crystals","price":"5","color":"No colour","image":"https://images.asos-media.com/products/miss-patisserie-harmony-bath-ball-with-amethyst-crystals/21975832-1-nocolour?$n_480w$&wid=476&fit=constrain"},{"name":"St. Tropez Self Tan Purity Face Mist 80ml","price":"24","color":"Purity face mist","image":"https://images.asos-media.com/products/st-tropez-self-tan-purity-face-mist-80ml/9560010-1-purityfacemist?$n_480w$&wid=476&fit=constrain"},{"name":"Bondi Sands Summer Fruits Body Moisturiser 500ml","price":"11","color":" NO COLOUR","image":"https://images.asos-media.com/products/bondi-sands-summer-fruits-body-moisturiser-500ml/201873092-1-nocolour?$n_480w$&wid=476&fit=constrain"},{"name":"Miss Patisserie Vanilla Fig Bath Slab","price":"5","color":"No colour","image":"https://images.asos-media.com/products/miss-patisserie-vanilla-fig-bath-slab/21995847-1-nocolour?$n_480w$&wid=476&fit=constrain"},{"name":"Sunday Rain Body Butter Mango & Coconut","price":"9","color":"No colour","image":"https://images.asos-media.com/products/sunday-rain-body-butter-mango-coconut/20085352-1-nocolour?$n_480w$&wid=476&fit=constrain"}]

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







