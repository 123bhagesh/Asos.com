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
[{"name":"New Look strappy sandal with block heel in black","price":"24","color":"Black","image":"https://images.asos-media.com/products/new-look-strappy-sandal-with-block-heel-in-black/202882903-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"River Island Wide Fit toe thong low heel sandal in beige","price":"48","color":"BEIGE","image":"https://images.asos-media.com/products/river-island-wide-fit-toe-thong-low-heel-sandal-in-beige/202694648-1-beige?$n_480w$&wid=476&fit=constrain"},
{"name":"River Island bow front platform sandal in black & white","price":"53","color":"WHITE","image":"https://images.asos-media.com/products/river-island-bow-front-platform-sandal-in-black-white/202617141-1-white?$n_480w$&wid=476&fit=constrain"},
{"name":"River Island flatform sandal in white","price":"40","color":"White","image":"https://images.asos-media.com/products/river-island-flatform-sandal-in-white/202601892-1-white?$n_480w$&wid=476&fit=constrain"},
{"name":"172 River Island flatform sandal in white","price":"40","color":"WHITE","image":"https://images.asos-media.com/products/river-island-flatform-sandal-in-white/202601892-1-white?$n_480w$&wid=476&fit=constrain"},
{"name":"368 Ted Baker Heevia satin bow 90mm heeled sandal in dusty pink","price":"142","color":"Dusty Pink","image":"https://images.asos-media.com/products/ted-baker-heevia-satin-bow-90mm-heeled-sandal-in-dusty-pink/202359944-1-dustypink?$n_480w$&wid=476&fit=constrain"},
{"name":"RAID Aysha tie ankle mid heeled sandals in orange","price":"33","color":"Orange","image":"https://images.asos-media.com/products/raid-aysha-tie-ankle-mid-heeled-sandals-in-orange/201397505-1-orange?$n_480w$&wid=476&fit=constrain"},
{"name":"213 New Look chunky rope detail sandals in black","price":"30","color":"Black","image":"https://images.asos-media.com/products/new-look-chunky-rope-detail-sandals-in-black/202922278-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"Public Desire Chakra espadrille wedge heeled sandals in pink","price":"35","color":"Pink","image":"https://images.asos-media.com/products/public-desire-chakra-espadrille-wedge-heeled-sandals-in-pink/201611016-1-pink?$n_480w$&wid=476&fit=constrain"},
{"name":"Ego Waverly block heel twist sandals in white","price":"24","color":"White","image":"https://images.asos-media.com/products/ego-waverly-block-heel-twist-sandals-in-white/201447215-1-white?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN Johanesburg premium leather espadrille mules in black","price":"36","color":"BLACK LEATHER","image":"https://images.asos-media.com/products/asos-design-johanesburg-premium-leather-espadrille-mules-in-black/201729639-1-blackleather?$n_480w$&wid=476&fit=constrain"},
{"name":"103 Freedom Moses scented EVA sandals in white","price":"35","color":"White","image":"https://images.asos-media.com/products/freedom-moses-scented-eva-sandals-in-white/201780193-1-white?$n_480w$&wid=476&fit=constrain"}]



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







