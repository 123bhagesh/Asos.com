import {categories_Navbar,categories_Navbar2} from "../components/categories.js";

// console.log(categories_Navbar,categories_Navbar2)
let viewAll =document.getElementById("clothNavbar")

viewAll.innerHTML=categories_Navbar()
console.log(viewAll)

import {footer} from "../components/footer.js"

let fot= document.getElementById("footerDiv124");
fot.innerHTML=footer()
console.log(fot)

// import {categories_Navbar2} from "../components/categories.js";

let viewAll2 =document.getElementById("clothNavbar2")

viewAll2.innerHTML=categories_Navbar2()
console.log(viewAll2)


///////////////////////////////



let Mens_Clothing =

[{"name":"New Look strappy sandal with block heel in black","price":"24","color":"Black","image":"https://images.asos-media.com/products/new-look-strappy-sandal-with-block-heel-in-black/202882903-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"River Island Wide Fit toe thong low heel sandal in beige","price":"48","color":"BEIGE","image":"https://images.asos-media.com/products/river-island-wide-fit-toe-thong-low-heel-sandal-in-beige/202694648-1-beige?$n_480w$&wid=476&fit=constrain"},
{"name":"River Island bow front platform sandal in black & white","price":"53","color":"WHITE","image":"https://images.asos-media.com/products/river-island-bow-front-platform-sandal-in-black-white/202617141-1-white?$n_480w$&wid=476&fit=constrain"},
{"name":"River Island flatform sandal in white","price":"40","color":"White","image":"https://images.asos-media.com/products/river-island-flatform-sandal-in-white/202601892-1-white?$n_480w$&wid=476&fit=constrain"},
{"name":"172 River Island flatform sandal in white","price":"40","color":"WHITE","image":"https://images.asos-media.com/products/river-island-flatform-sandal-in-white/202601892-1-white?$n_480w$&wid=476&fit=constrain"},
{"name":"368 Ted Baker Heevia satin bow 90mm heeled sandal in dusty pink","price":"142","color":"Dusty Pink","image":"https://images.asos-media.com/products/ted-baker-heevia-satin-bow-90mm-heeled-sandal-in-dusty-pink/202359944-1-dustypink?$n_480w$&wid=476&fit=constrain"},
{"name":"Simmi Wide Fit platform patent mules in stone","price":"42","color":"Stone","image":"https://images.asos-media.com/products/simmi-wide-fit-platform-patent-mules-in-stone/202194350-1-stone?$n_480w$&wid=476&fit=constrain"},
{"name":"Simmi patent platform mules in stone","price":"42","color":"Stone","image":"https://images.asos-media.com/products/simmi-patent-platform-mules-in-stone/202193606-1-stone?$n_480w$&wid=476&fit=constrain"},
{"name":"RAID Aysha tie ankle mid heeled sandals in orange","price":"33","color":"Orange","image":"https://images.asos-media.com/products/raid-aysha-tie-ankle-mid-heeled-sandals-in-orange/201397505-1-orange?$n_480w$&wid=476&fit=constrain"},
{"name":"213 New Look chunky rope detail sandals in black","price":"30","color":"Black","image":"https://images.asos-media.com/products/new-look-chunky-rope-detail-sandals-in-black/202922278-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"669 Skechers Go Run chunky trainers with pink trim in white leather mix","price":"60","color":"White","image":"https://images.asos-media.com/products/skechers-go-run-chunky-trainers-with-pink-trim-in-white-leather-mix/201950173-1-white?$n_480w$&wid=476&fit=constrain"},
{"name":"Karl Lagerfeld Kapri zebra flatform trainers in white leather","price":"170","color":"White","image":"https://images.asos-media.com/products/karl-lagerfeld-kapri-zebra-flatform-trainers-in-white-leather/201179853-1-white?$n_480w$&wid=476&fit=constrain"},
{"name":"Public Desire Chakra espadrille wedge heeled sandals in pink","price":"35","color":"Pink","image":"https://images.asos-media.com/products/public-desire-chakra-espadrille-wedge-heeled-sandals-in-pink/201611016-1-pink?$n_480w$&wid=476&fit=constrain"},
{"name":"Ego Waverly block heel twist sandals in white","price":"24","color":"White","image":"https://images.asos-media.com/products/ego-waverly-block-heel-twist-sandals-in-white/201447215-1-white?$n_480w$&wid=476&fit=constrain"},
{"name":"777 adidas Originals Forum triple platform trainers in black with silver details","price":"110","color":"Black","image":"https://images.asos-media.com/products/adidas-originals-forum-triple-platform-trainers-in-black-with-silver-details/200732826-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN Johanesburg premium leather espadrille mules in black","price":"36","color":"BLACK LEATHER","image":"https://images.asos-media.com/products/asos-design-johanesburg-premium-leather-espadrille-mules-in-black/201729639-1-blackleather?$n_480w$&wid=476&fit=constrain"},
{"name":"537 South Beach Ibiza espadrille shoes in beige","price":"22","color":"Natural","image":"https://images.asos-media.com/products/south-beach-ibiza-espadrille-shoes-in-beige/201583412-1-natural?$n_480w$&wid=476&fit=constrain"},
{"name":"537 South Beach Ibiza espadrille shoes in beige","price":"22","color":"Natural","image":"https://images.asos-media.com/products/south-beach-ibiza-espadrille-shoes-in-beige/201583412-1-natural?$n_480w$&wid=476&fit=constrain"},
{"name":"990 Public Desire Wide Fit Howdy western boots in green mix","price":"45","color":"GREEN MIX","image":"https://images.asos-media.com/products/public-desire-wide-fit-howdy-western-boots-in-green-mix/201622463-1-greenmix?$n_480w$&wid=476&fit=constrain"},
{"name":"103 Freedom Moses scented EVA sandals in white","price":"35","color":"White","image":"https://images.asos-media.com/products/freedom-moses-scented-eva-sandals-in-white/201780193-1-white?$n_480w$&wid=476&fit=constrain"}]



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
