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


//  Men-Shirt

let Mens_Clothing =
[{"name":"ASOS DESIGN 90s oversized cord shirt in rust - ORANGE","price":"22","color":"RUST","image":"https://images.asos-media.com/products/asos-design-90s-oversized-cord-shirt-in-rust-orange/200914961-1-rust?$n_480w$&wid=476&fit=constrain"},{"name":"The North Face Collage t-shirt in cream Exclusive at ASOS","price":"27","color":"Cream","image":"https://images.asos-media.com/products/the-north-face-collage-t-shirt-in-cream-exclusive-at-asos/201677619-1-cream?$n_480w$&wid=476&fit=constrain"},{"name":"Nike Club t-shirt in light orewood brown","price":"18","color":"Stone","image":"https://images.asos-media.com/products/nike-club-t-shirt-in-light-orewood-brown/201512219-1-stone?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN 90s oversized cord shirt in rust - ORANGE","price":"22","color":"RUST","image":"https://images.asos-media.com/products/asos-design-90s-oversized-cord-shirt-in-rust-orange/200914961-1-rust?$n_480w$&wid=476&fit=constrain"},{"name":"Topman revere seersucker shirt in check","price":"37","color":"CHECK","image":"https://images.asos-media.com/products/topman-revere-seersucker-shirt-in-check/201508727-1-check?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN co-ord boxy oversized shirt in heavy cotton twill","price":"30","color":" LIGHT BLUE","image":"https://images.asos-media.com/products/asos-design-co-ord-boxy-oversized-shirt-in-heavy-cotton-twill/201779954-1-lightblue?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN 90s oversized cord shirt in pink","price":"27","color":"Pink","image":"https://images.asos-media.com/products/asos-design-90s-oversized-cord-shirt-in-pink/20774925-1-pink?$n_480w$&wid=476&fit=constrain"},{"name":"New Look long sleeve oxford shirt in khaki","price":"18","color":"Khaki","image":"https://images.asos-media.com/products/new-look-long-sleeve-oxford-shirt-in-khaki/200757244-1-khaki?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN relaxed revere shirt in light base floral","price":"22","color":"WHITE","image":"https://images.asos-media.com/products/asos-design-relaxed-revere-shirt-in-light-base-floral/202579432-1-white?$n_480w$&wid=476&fit=constrain"},{"name":"Topman knitted splice zip polo in blue","price":"30","color":"Blue","image":"https://images.asos-media.com/products/topman-knitted-splice-zip-polo-in-blue/201805761-1-blue?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN regular sheer shirt with ruffle front detail in lilac","price":"30","color":"LILAC","image":"https://images.asos-media.com/products/asos-design-regular-sheer-shirt-with-ruffle-front-detail-in-lilac/201921650-1-lilac?$n_480w$&wid=476&fit=constrain"},
{"name":"Barbour Harris tartan shirt in light blue","price":"70","color":"Blue","image":"https://images.asos-media.com/products/barbour-harris-tartan-shirt-in-light-blue/202252444-1-blue?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN relaxed revere shirt in orange summer stripe","price":"20","color":"ORANGE","image":"https://images.asos-media.com/products/asos-design-relaxed-revere-shirt-in-orange-summer-stripe/202374990-1-orange?$n_480w$&wid=476&fit=constrain"},{"name":"Topman 2 pack formal shirt in black / white","price":"37","color":"BLACK AND WHITE","image":"https://images.asos-media.com/products/topman-2-pack-formal-shirt-in-black-white/202445548-1-blackandwhite?$n_480w$&wid=476&fit=constrain"},{"name":"Bershka grandad shirt with long sleeves in white","price":"25","color":"White","image":"https://images.asos-media.com/products/bershka-grandad-shirt-with-long-sleeves-in-white/202465635-1-white?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN relaxed shirt in recycled blend crinkle lightweight fabric in brown","price":"20","color":"BROWN","image":"https://images.asos-media.com/products/asos-design-relaxed-shirt-in-recycled-blend-crinkle-lightweight-fabric-in-brown/201842101-1-brown?$n_480w$&wid=476&fit=constrain"},
{"name":"Jack & Jones Originals oversized revere shirt in white","price":"19","color":"WHITE","image":"https://images.asos-media.com/products/jack-jones-originals-oversized-revere-shirt-in-white/201860630-1-white?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN relaxed shirt in linen mix symbol print","price":"28","color":"MULTI","image":"https://images.asos-media.com/products/asos-design-relaxed-shirt-in-linen-mix-symbol-print/201866549-1-multi?$n_480w$&wid=476&fit=constrain"},{"name":"New Look oversized short sleeve satin shirt in off white","price":"23","color":" Off White","image":"https://images.asos-media.com/products/new-look-oversized-short-sleeve-satin-shirt-in-off-white/202933664-1-offwhite?$n_480w$&wid=476&fit=constrain"},
{"name":"Topman cord western jacket in black washed print","price":"60","color":"black wash","image":"https://images.asos-media.com/products/topman-cord-western-jacket-in-black-washed-print/201270566-1-blackwash?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN oversized checked shacket with contrast collar in stone","price":"58","color":"STONE","image":"https://images.asos-media.com/products/asos-design-oversized-checked-shacket-with-contrast-collar-in-stone/201840794-1-stone?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN regular satin shirt with 70s ruffle front in blue","price":"34","color":"LIGHT BLUE","image":"https://images.asos-media.com/products/asos-design-regular-satin-shirt-with-70s-ruffle-front-in-blue/201921670-1-lightblue?$n_480w$&wid=476&fit=constrain"},
{"name":"Tommy Hilfiger icon logo bold stripe shirt in navy","price":"90","color":"navy","image":"https://images.asos-media.com/products/tommy-hilfiger-icon-logo-bold-stripe-shirt-in-navy/202423285-1-navy?$n_480w$&wid=476&fit=constrain"},{"name":"Polo Ralph Lauren icon logo short sleeve seersucker shirt custom regular fit in indigo blue","price":"79","color":"indigo blue","image":"https://images.asos-media.com/products/polo-ralph-lauren-icon-logo-short-sleeve-seersucker-shirt-custom-regular-fit-in-indigo-blue/202061272-1-indigoblue?$n_480w$&wid=476&fit=constrain"}]


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


