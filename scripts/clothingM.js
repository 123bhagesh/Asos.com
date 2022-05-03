import {categories_Navbar,categories_Navbar2} from "../components/categories.js";

// console.log(categories_Navbar,categories_Navbar2)
let viewAll =document.getElementById("clothNavbar")

viewAll.innerHTML=categories_Navbar()
console.log(viewAll)

// import {categories_Navbar2} from "../components/categories.js";

let viewAll2 =document.getElementById("clothNavbar2")

viewAll2.innerHTML=categories_Navbar2()
console.log(viewAll2)


///////////////////////////////



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
]


/////
var hairDiv = document.getElementById("container");

var cartArr = [];

function appendProduct(Mens_Clothing) {
  hairDiv.innerHTML = null;
  Mens_Clothing.forEach(function (elem) {

    let box = document.createElement("div");
    box.setAttribute("id","div1")

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
