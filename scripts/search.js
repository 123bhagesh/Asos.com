// import {categories_Navbar,categories_Navbar2} from "../components/categories.js";

// // console.log(categories_Navbar,categories_Navbar2)
// let viewAll =document.getElementById("clothNavbar")

// viewAll.innerHTML=categories_Navbar()
// console.log(viewAll)

// // import {categories_Navbar2} from "../components/categories.js";

// let viewAll2 =document.getElementById("clothNavbar2")

// viewAll2.innerHTML=categories_Navbar2()
// console.log(viewAll2)


///////////////////////////////

import {men_Mega_navbar} from"../components/mens_mega_navbar.js"

let m= document.getElementById("men-mega-navbar");
m.innerHTML=men_Mega_navbar()
console.log(m)

import {topSearch} from "../components/topnavbar.js"

let t= document.getElementById("top-search");
t.innerHTML=topSearch()
console.log(t)

import {footerBottom} from "../components/footer.js"

let fot=document.getElementById("footerDiv123")
fot.innerHTML=footerBottom()

let Mens_Clothing =

[
{"name":"541 ASOS DESIGN lounge trousers in woven stripe","price":"15","color":"woven stripe","image":"https://images.asos-media.com/products/asos-design-lounge-trousers-in-woven-stripe/201179743-1-multi?$n_480w$&wid=476&fit=constrain"},
{"name":"Carhartt WIP vista tie dye socks in purple","price":"21","color":"purple","image":"https://images.asos-media.com/products/carhartt-wip-vista-tie-dye-socks-in-purple/201995418-1-purple?$n_480w$&wid=476&fit=constrain"},
{"name":"124 ASOS DESIGN regular revere viscose shirt in bright blue","color":" bright blue","price":"22","image":"https://images.asos-media.com/products/asos-design-regular-revere-viscose-shirt-in-bright-blue/202440625-1-cobaltblue?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN boxy oversized shirt in yellow and pink painted check","color":"yellow and pink","price":"26","image":"https://images.asos-media.com/products/asos-design-boxy-oversized-shirt-in-yellow-and-pink-painted-check/202579390-1-yellow?$n_480w$&wid=476&fit=constrain"},
{"name":"476 Abercrombie & Fitch back gel logo heavyweight oversized t-shirt in white","color":"white","price":"29","image":"https://images.asos-media.com/products/abercrombie-fitch-back-gel-logo-heavyweight-oversized-t-shirt-in-white/202851446-1-white?$n_480w$&wid=476&fit=constrain"},
{"name":"68 Hollister 5 pack central script logo stripe & plain t-shirt in multi","color":"multi","price":"65","image":"https://images.asos-media.com/products/hollister-5-pack-central-script-logo-stripe-plain-t-shirt-in-multi/202801389-1-multi?$n_480w$&wid=476&fit=constrain"},
{"name":"Hollister icon logo stripe & contrast collar polo in white","price":"25","color":"white","image":"https://images.asos-media.com/products/hollister-icon-logo-stripe-contrast-collar-polo-in-white/202801301-1-white?$n_480w$&wid=476&fit=constrain"},
{"name":"Hollister outdoors central logo print t-shirt in black","price":"19","color":"black","image":"https://images.asos-media.com/products/hollister-outdoors-central-logo-print-t-shirt-in-black/202800542-1-blackwred?$n_480w$&wid=476&fit=constrain"},
{"name":"Hollister outdoors central & back logo print t-shirt in white","price":"19","color":"","image":"https://images.asos-media.com/products/hollister-outdoors-central-back-logo-print-t-shirt-in-white/202800428-1-white?$n_480w$&wid=476&fit=constrain"},
{"name":"Only & Sons vest with Paradise back print in navy","price":"15","color":"navy","image":"https://images.asos-media.com/products/only-sons-vest-with-paradise-back-print-in-navy/202729846-1-darknavy?$n_480w$&wid=476&fit=constrain"},
{"name":"Only & Sons vest with mandala back print in white","price":"15","color":" white","image":"https://images.asos-media.com/products/only-sons-vest-with-mandala-back-print-in-white/202729794-1-white?$n_480w$&wid=476&fit=constrain"},
{"name":"Only & Sons vest with Seoul back print in black","price":"15","color":"black","image":"https://images.asos-media.com/products/only-sons-vest-with-seoul-back-print-in-black/202729310-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"Abercrombie & Fitch 3D icon logo slim fit pique polo in red","price":"35","color":"red","image":"https://images.asos-media.com/products/abercrombie-fitch-3d-icon-logo-slim-fit-pique-polo-in-red/202666080-1-red?$n_480w$&wid=476&fit=constrain"},
{"name":"Abercrombie & Fitch 3D icon logo slim fit pique polo in green","price":"35","color":"green","image":"https://images.asos-media.com/products/abercrombie-fitch-3d-icon-logo-slim-fit-pique-polo-in-green/202666051-1-green?$n_480w$&wid=476&fit=constrain"},
{"name":"Abercrombie & Fitch 3D icon logo slim fit pique polo shirt in light blue","price":"35","color":"light blue","image":"https://images.asos-media.com/products/asos-design-skinny-denim-shacket-in-light-wash/201370677-1-lightblue?$n_480w$&wid=476&fit=constrain"},
{"name":"Abercrombie & Fitch 3D icon logo slim fit pique polo shirt in light blue","price":"35","color":"light blue","image":"https://images.asos-media.com/products/abercrombie-fitch-3d-icon-logo-slim-fit-pique-polo-shirt-in-light-blue/202666035-1-lightblue?$n_480w$&wid=476&fit=constrain"},
{"name":"Only & Sons revere shirt in aztec print","price":"26","color":"aztec ","image":"https://images.asos-media.com/products/only-sons-revere-shirt-in-aztec-print/202626467-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"Only & Sons revere shirt in checkerboard print","price":"26","color":"aztec ","image":"https://images.asos-media.com/products/only-sons-revere-shirt-in-checkerboard-print/202626246-1-pomegranite?$n_480w$&wid=476&fit=constrain"},
{"name":"Only & Sons revere shirt with flower border print in navy","price":"26","color":"navy","image":"https://images.asos-media.com/products/only-sons-revere-shirt-with-flower-border-print-in-navy/202626238-1-darknavy?$n_480w$&wid=476&fit=constrain"},
{"name":"Only & Sons knitted stripe t-shirt in navy and white","price":"26","color":"navy and white","image":"https://images.asos-media.com/products/only-sons-knitted-stripe-t-shirt-in-navy-and-white/202624710-1-darknavy?$n_480w$&wid=476&fit=constrain"},
{"name":"Carhartt WIP pocket t-shirt in white","price":"37","color":"white","image":"https://images.asos-media.com/products/carhartt-wip-pocket-t-shirt-in-white/202587946-1-white?$n_480w$&wid=476&fit=constrain"},
{"name":"251 ASOS DESIGN relaxed revere shirt in vintage inspired floral print","price":"27","color":"light blue","image":"https://images.asos-media.com/products/asos-design-skinny-denim-shirt-with-rips-in-light-blue/201607270-1-blue?$n_480w$&wid=476&fit=constrain"},
{"name":"New Era New York Yankees oversized t-shirt in lilac","price":"32","color":"lilac","image":"https://images.asos-media.com/products/new-era-new-york-yankees-oversized-t-shirt-in-lilac/202122253-1-purple?$n_480w$&wid=476&fit=constrain"},
{"name":"Hollister outdoors central & back logo print t-shirt in white","price":"19","color":"","image":"https://images.asos-media.com/products/hollister-outdoors-central-back-logo-print-t-shirt-in-white/202800428-1-white?$n_480w$&wid=476&fit=constrain"},

//  Accessories
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
      window.location.href="buyClothing.html"
    //   alert("Product added to the cart!");
    })

    box.append(image, name, price);
    hairDiv.append(box);
  });
}

appendProduct(Mens_Clothing);

  
   //    Search Data Text Geeting

   let data = JSON.parse(localStorage.getItem("inpData"))
   console.log(data)

   var sname=document.getElementById("searchByName")
   sname.innerHTML=`Search Result: ${data}`

   //  console.log(searchText);
    var filterdata=Mens_Clothing.filter(function(elem,index){
                 return elem.name.includes(data);
    
    })


   appendProduct(filterdata);

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
   
   
 