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
[{"name":"ASOS DESIGN Wide Fit Neva barely there heeled sandals in ivory","price":"20","color":"IVORY SATIN","image":"https://images.asos-media.com/products/asos-design-wide-fit-neva-barely-there-heeled-sandals-in-ivory/201083262-1-ivorysatin?$n_480w$&wid=476&fit=constrain"},{"name":"Public Desire Wide Fit Aries mules with clear straps in beige","price":"30","color":"CLEAR","image":"https://images.asos-media.com/products/public-desire-wide-fit-aries-mules-with-clear-straps-in-beige/201548106-1-clear?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN Wide Fit Harvey mid heeled mule sandals in white","price":"20","color":"WHITE","image":"https://images.asos-media.com/products/asos-design-wide-fit-harvey-mid-heeled-mule-sandals-in-white/201083999-1-white?$n_480w$&wid=476&fit=constrain"},{"name":"Be Mine Bridal Wide Fit Armela bow heel shoes in ivory satin","price":"40","color":"IVORY SATIN","image":"https://images.asos-media.com/products/be-mine-bridal-wide-fit-armela-bow-heel-shoes-in-ivory-satin/201377272-1-ivorysatin?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN Wide Fit Sail mesh heeled shoes in natural fabrication","price":"40","color":"NATURAL FABRICATION","image":"https://images.asos-media.com/products/asos-design-wide-fit-sail-mesh-heeled-shoes-in-natural-fabrication/201614167-1-naturalfabrication?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN Wide Fit Nasia heeled mules in clear","price":"15","color":"CLEAR/ BEIGE","image":"https://images.asos-media.com/products/asos-design-wide-fit-nasia-heeled-mules-in-clear/200437999-1-clearbeige?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN Wide Fit Hampton block mid heeled sandals in black","price":"25","color":"BLACK","image":"https://images.asos-media.com/products/asos-design-wide-fit-hampton-block-mid-heeled-sandals-in-black/201069249-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN Wide Fit Neva barely there heeled sandals in black","price":"16","color":"BLACK","image":"https://images.asos-media.com/products/asos-design-wide-fit-neva-barely-there-heeled-sandals-in-black/201083137-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN Wide Fit Poster cut out high heeled court shoes in black","price":"40","color":"BLACK","image":"https://images.asos-media.com/products/asos-design-wide-fit-poster-cut-out-high-heeled-court-shoes-in-black/201095142-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN Wide Fit Prize tie leg high heeled shoes in beige","price":"23","color":"BEIGE","image":"https://images.asos-media.com/products/asos-design-wide-fit-prize-tie-leg-high-heeled-shoes-in-beige/201084394-1-beige?$n_480w$&wid=476&fit=constrain"},{"name":"https://images.asos-media.com/products/asos-design-wide-fit-neva-barely-there-heeled-sandals-in-beige/201083208-1-beigepatent?$n_480w$&wid=476&fit=constrain","price":"20","color":" BEIGE PATENT","image":"https://images.asos-media.com/products/asos-design-wide-fit-neva-barely-there-heeled-sandals-in-beige/201083208-1-beigepatent?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN Wide Fit Soraya knotted slingback mid heeled shoes in natural fabrication","price":"40","color":"NATURAL FABRICATION","image":"https://images.asos-media.com/products/asos-design-wide-fit-soraya-knotted-slingback-mid-heeled-shoes-in-natural-fabrication/201568691-1-naturalfabrication?$n_480w$&wid=476&fit=constrain"}]


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







