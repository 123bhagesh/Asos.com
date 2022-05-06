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
[{"name":"Y.A.S Bridal satin blazer and trouser co-ord in white","price":"74","color":"STAR WHITE","image":"https://images.asos-media.com/products/yas-bridal-satin-blazer-co-ord-in-white/202086210-1-starwhite?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN cropped suit in washed lime","price":"36","color":"washed lime","image":"https://images.asos-media.com/products/asos-design-cropped-suit-jacket-in-washed-lime/200503106-1-washedlime?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN mix & match slim boy suit in blush","price":"35","color":"Blush","image":"https://images.asos-media.com/products/asos-design-mix-match-slim-boy-blazer-in-blush/201304974-1-blush?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN Petite mix & match suit in blush","price":"35","color":"Blush","image":"https://images.asos-media.com/products/asos-design-petite-mix-match-suit-blazer-in-blush/201305031-1-blush?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN relaxed dad suit in natural texture","price":"40","color":"Natural","image":"https://images.asos-media.com/products/asos-design-relaxed-dad-suit-blazer-in-natural-texture/200503160-1-natural?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN Tall linen slim straight suit blazer in golden palm","price":"48","color":"GOLDEN PALM","image":"https://images.asos-media.com/products/asos-design-tall-linen-slim-straight-suit-blazer-in-golden-palm/201100326-1-goldenpalm?$n_480w$&wid=476&fit=constrain"},
{"name":"Topshop suit co-ord in turquoise","price":"65","color":"turquoise","image":"https://images.asos-media.com/products/topshop-oversized-single-breasted-blazer-in-turquoise/201341923-1-turquoise?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN oversized grandad blazer in pink swirl print","price":"68","color":"pink","image":"https://images.asos-media.com/products/asos-design-oversized-grandad-blazer-in-pink-swirl-print/202254473-1-pink?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN Petite linen slim straight suit in yellow","price":"24","color":"YELLOW","image":"https://images.asos-media.com/products/asos-design-petite-linen-slim-straight-suit-blazer-in-yellow/201100382-1-yellow?$n_480w$&wid=476&fit=constrain"},{"name":"Topshop smart jersey blazer in camel","price":"48","color":"CAMEL","image":"https://images.asos-media.com/products/topshop-smart-jersey-blazer-in-camel/201452796-1-camel?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN linen slim straight suit in golden palm","price":"48","color":"GOLDEN PALM","image":"https://images.asos-media.com/products/asos-design-linen-slim-straight-suit-blazer-in-golden-palm/201100337-1-goldenpalm?$n_480w$&wid=476&fit=constrain"},
{"name":"Little Mistress Bridal tailored suit blazer and trouser co-ord in ivory","price":"70","color":"Ivory","image":"https://images.asos-media.com/products/little-mistress-bridal-tailored-suit-blazer-co-ord-in-ivory/201763484-1-ivory?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN dad blazer in lilac","price":"60","color":"Lilac","image":"https://images.asos-media.com/products/asos-design-dad-blazer-in-lilac/201527499-1-lilac?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN linen slim straight suit in golden palm","price":"48","color":"GOLDEN PALM","image":"https://images.asos-media.com/products/asos-design-linen-slim-straight-suit-blazer-in-golden-palm/201100337-1-goldenpalm?$n_480w$&wid=476&fit=constrain"},{"name":"Noisy May exclusive co-ord in pastel check - MULTI","price":"38","color":"Pastel check","image":"https://images.asos-media.com/products/noisy-may-exclusive-cropped-blazer-co-ord-in-pastel-check/200483558-1-pastelcheck?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN jersey supersized boyfriend suit blazer in sage","price":"32","color":"Sage","image":"https://images.asos-media.com/products/asos-design-jersey-supersized-boyfriend-suit-blazer-in-sage/201082167-1-sage?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN perfect blazer in camel","price":"40","color":"Camel","image":"https://images.asos-media.com/products/asos-design-perfect-blazer-in-camel/21582952-1-camel?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN linen grid check suit blazer in cream","price":"50","color":"CREAM","image":"https://images.asos-media.com/products/asos-design-linen-grid-check-suit-blazer-in-cream/201065443-1-cream?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN linen slim straight blazer in pink","price":"45","color":"PINK","image":"https://images.asos-media.com/products/asos-design-linen-slim-straight-suit-blazer-in-pink/201081066-1-pink?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN Petite jersey suit blazer with obi tie waist in black","price":"23","color":"Black","image":"https://images.asos-media.com/products/asos-design-petite-jersey-suit-blazer-with-obi-tie-waist-in-black/200477800-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"SELLING FAST ASOS DESIGN mix & match slim boy suit in lilac","price":"36","color":"Lilac","image":"https://images.asos-media.com/products/asos-design-mix-match-slim-boy-suit-blazer-in-lilac/201419237-1-lilac?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN linen cropped suit blazer in flame","price":"36","color":"FLAME","image":"https://images.asos-media.com/products/asos-design-linen-cropped-suit-blazer-in-flame/201188109-1-flame?$n_480w$&wid=476&fit=constrain"},
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







