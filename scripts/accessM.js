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



 let Mens_Clothing =

[
    {"name":"Levi's woodmark beanie with modern vintage logo in black","price":"30","color":"Black","image":"https://images.asos-media.com/products/levis-woodmark-beanie-with-modern-vintage-logo-in-black/200825068-1-black?$n_480w$&wid=476&fit=constrain"},
    {"name":"Calvin Klein large icon logo wallet in black","price":"69","color":"Black Mono","image":"https://images.asos-media.com/products/calvin-klein-large-icon-logo-wallet-in-black/202359274-1-blackmono?$n_480w$&wid=476&fit=constrain"},
    {"name":"Calvin Klein all over monogram crossbody in black","price":"63","color":" Black Uv Mono","image":"https://images.asos-media.com/products/calvin-klein-all-over-monogram-crossbody-in-black/202359289-1-blackuvmono?$n_480w$&wid=476&fit=constrain"},
    {"name":"ASOS DESIGN textured belt in cow print","price":"15","color":"Multi","image":"https://images.asos-media.com/products/asos-design-textured-belt-in-cow-print/201361702-1-multi?$n_480w$&wid=476&fit=constrain"},
    {"name":"Nike H86 Futura washed cotton cap in stone","price":"19","color":"Stone","image":"https://images.asos-media.com/products/nike-h86-futura-washed-cotton-cap-in-stone/200850212-1-stone?$n_480w$&wid=476&fit=constrain"},
    {"name":"Polo Ralph Lauren logo baseball cap in beige","price":"48","color":"Beige","image":"https://images.asos-media.com/products/polo-ralph-lauren-logo-baseball-cap-in-beige/202383029-1-beige?$n_480w$&wid=476&fit=constrain"},
    {"name":"Icon Brand stainless steel mariner figaro necklace in gold","price":"25","color":"Gold","image":"https://images.asos-media.com/products/icon-brand-stainless-steel-mariner-figaro-necklace-in-gold/201853466-1-gold?$n_480w$&wid=476&fit=constrain"},
    {"name":"51 Carhartt WIP harlem cord cap in green","price":"37","color":"Green","image":"https://images.asos-media.com/products/carhartt-wip-harlem-cord-cap-in-green/201995436-1-green?$n_480w$&wid=476&fit=constrain"},
    {"name":"ASOS DESIGN recycled frame square sunglasses in black with solid black lens","price":"9","color":"Black","image":"https://images.asos-media.com/products/asos-design-recycled-frame-square-sunglasses-in-black-with-solid-black-lens/23132982-1-black?$n_480w$&wid=476&fit=constrain"},
    {"name":"ASOS DESIGN leather slim belt in black with square silver buckle","price":"15","color":"Black","image":"https://images.asos-media.com/products/asos-design-leather-slim-belt-in-black-with-square-silver-buckle/200763015-1-black?$n_480w$&wid=476&fit=constrain"},
    {"name":"ASOS DESIGN recycled slim tie with ombre effect pocket square in stone","price":"12","color":"STONE","image":"https://images.asos-media.com/products/asos-design-recycled-slim-tie-with-ombre-effect-pocket-square-in-stone/201683071-1-stone?$n_480w$&wid=476&fit=constrain"},
    {"name":"South Beach Man cap with side logo in black","price":"11","color":"Black","image":"https://images.asos-media.com/products/south-beach-man-cap-with-side-logo-in-black/201827964-1-black?$n_480w$&wid=476&fit=constrain"},
    {"name":"ASOS DESIGN satin slim tie & pocket square in burgundy","price":"15","color":"Burgundy","image":"https://images.asos-media.com/products/asos-design-satin-slim-tie-pocket-square-in-burgundy/23379234-1-burgundy?$n_480w$&wid=476&fit=constrain"},
    {"name":"ASOS DESIGN slim figaro neckchain in silver tone","price":"7","color":"Silver","image":"https://images.asos-media.com/products/asos-design-slim-figaro-neckchain-in-silver-tone/14775305-1-silver?$n_480w$&wid=476&fit=constrain"},
    {"name":"ASOS DESIGN 4 pack leather and woven bracelet set in monochrome","price":"9","color":"Black","image":"https://images.asos-media.com/products/asos-design-4-pack-leather-and-woven-bracelet-set-in-monochrome/202185503-1-black?$n_480w$&wid=476&fit=constrain"},
    {"name":"SELLING FAST Casio mini digital watch in silver tone LA670WEA-7EF","price":"32","color":"Silver tone","image":"https://images.asos-media.com/products/casio-mini-digital-watch-in-silver-tone-la670wea-7ef/2394649-1-silvertone?$n_480w$&wid=476&fit=constrain"},
    {"name":"ASOS DESIGN 9mm hoop earrings in real silver plate","price":"9","color":"Silver","image":"https://images.asos-media.com/products/asos-design-9mm-hoop-earrings-in-real-silver-plate/22049434-1-silver?$n_480w$&wid=476&fit=constrain"},
    {"name":"86 New Look puff sleeve corset top in black","price":"19","color":"Black","image":"https://images.asos-media.com/products/new-look-puff-sleeve-corset-top-in-black/203057379-1-black?$n_480w$&wid=476&fit=constrain"},
    {"name":"New Look ditsy lace vest in white pattern","price":"10","color":"White","image":"https://images.asos-media.com/products/new-look-ditsy-lace-vest-in-white-pattern/203054103-1-white?$n_480w$&wid=476&fit=constrain"},
    {"name":"New Look tall floral split midi skirt in black","price":"22","color":"Black Floral","image":"https://images.asos-media.com/products/new-look-tall-floral-split-midi-skirt-in-black/203019735-1-blackfloral?$n_480w$&wid=476&fit=constrain"}]
    


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
      window.location.href="buyClothing.html"
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
