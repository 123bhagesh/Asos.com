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

//View All Data

let view_All =

[{"name":"Only & Sons knitted stripe t-shirt in navy and white","price":"26","color":"navy and white","image":"https://images.asos-media.com/products/only-sons-knitted-stripe-t-shirt-in-navy-and-white/202624710-1-darknavy?$n_480w$&wid=476&fit=constrain"},
{"name":"Carhartt WIP pocket t-shirt in white","price":"37","color":"white","image":"https://images.asos-media.com/products/carhartt-wip-pocket-t-shirt-in-white/202587946-1-white?$n_480w$&wid=476&fit=constrain"},
{"name":"251 ASOS DESIGN relaxed revere shirt in vintage inspired floral print","price":"27","color":"light blue","image":"https://images.asos-media.com/products/asos-design-skinny-denim-shirt-with-rips-in-light-blue/201607270-1-blue?$n_480w$&wid=476&fit=constrain"},
{"name":"New Era New York Yankees oversized t-shirt in lilac","price":"32","color":"lilac","image":"https://images.asos-media.com/products/new-era-new-york-yankees-oversized-t-shirt-in-lilac/202122253-1-purple?$n_480w$&wid=476&fit=constrain"},
{"name":"Hollister outdoors central & back logo print t-shirt in white","price":"19","color":"","image":"https://images.asos-media.com/products/hollister-outdoors-central-back-logo-print-t-shirt-in-white/202800428-1-white?$n_480w$&wid=476&fit=constrain"},
{"name":"The INKEY List Peptide Volumizing Hair Treatment 100ml","price":"14","color":" NO COLOUR","image":"https://images.asos-media.com/products/the-inkey-list-peptide-volumizing-hair-treatment-100ml/201137962-1-nocolour?$n_480w$&wid=476&fit=constrain"},{"name":"https://images.asos-media.com/products/olaplex-no-3-hair-perfector-jumbo-85oz-250ml/201220160-1-jumbono3?$n_480w$&wid=476&fit=constrain","price":"52","color":"Jumbo No.3","image":"https://images.asos-media.com/products/olaplex-no-3-hair-perfector-jumbo-85oz-250ml/201220160-1-jumbono3?$n_480w$&wid=476&fit=constrain"},
{"name":"LUSH Big Hugs Bath Bomb Duo Set","price":"12","color":" No Colour","image":"https://images.asos-media.com/products/lush-big-hugs-bath-bomb-duo-set/202812330-1-nocolour?$n_480w$&wid=476&fit=constrain"},{"name":"Garnier Summer Body Hydrating Gradual Tan Moisturiser Light 400ml","price":"8","color":"No colour","image":"https://images.asos-media.com/products/garnier-summer-body-hydrating-gradual-tan-moisturiser-light-400ml/20639673-1-nocolour?$n_480w$&wid=476&fit=constrain"},{"name":"Bondi Sands Summer Fruits Body Wash 500ml","price":"9","color":" NO COLOUR","image":"https://images.asos-media.com/products/bondi-sands-summer-fruits-body-wash-500ml/201873168-1-nocolour?$n_480w$&wid=476&fit=constrain"},{"name":"L'Oreal Men Expert Total Clean Shower Gel 300ml","price":"4","color":"Multi","image":"https://images.asos-media.com/products/loreal-men-expert-total-clean-shower-gel-300ml/8867569-1-multi?$n_480w$&wid=476&fit=constrain"},

{"name":"271 Walk London Benjamin snaffle sandals in black leather","price":"65","color":"Black","image":"https://images.asos-media.com/products/walk-london-benjamin-snaffle-sandals-in-black-leather/201504864-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"Nike Victori One sliders in wheat/brown","price":"27","color":"Brown","image":"https://images.asos-media.com/products/nike-victori-one-sliders-in-wheat-brown/201493267-1-brown?$n_480w$&wid=476&fit=constrain"},
{"name":"Nike Air Max Dawn trainers in white/malachite","price":"104","color":" White/Green","image":"https://images.asos-media.com/products/nike-air-max-dawn-trainers-in-white-malachite/201492129-1-whitegreen?$n_480w$&wid=476&fit=constrain"},
{"name":"Schuh reuben lace up shoes in brown leather","price":"49","color":"Brown","image":"https://images.asos-media.com/products/schuh-reuben-lace-up-shoes-in-brown-leather/202041819-1-brown?$n_480w$&wid=476&fit=constrain"},
{"name":"Havaianas Brasil logo flip flops in navy","price":"26","color":"NAVY","image":"https://images.asos-media.com/products/havaianas-brasil-logo-flip-flops-in-navy/201647277-1-navy?$n_480w$&wid=476&fit=constrain"},
{"name":"Walk London Riva snaffle loafers in beige suede","price":"75","color":"NEUTRAL","image":"https://images.asos-media.com/products/walk-london-riva-snaffle-loafers-in-beige-suede/201587799-1-neutral?$n_480w$&wid=476&fit=constrain"},
{"name":"Walk London Terry Snaffle loafers in pink suede","price":"65","color":"Pink","image":"https://images.asos-media.com/products/walk-london-terry-snaffle-loafers-in-pink-suede/201507718-1-pink?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN slim jean in black with elasticated hem","price":"34","color":"Washed black","image":"https://images.asos-media.com/products/asos-design-slim-jean-in-black-with-elasticated-hem/201984674-1-washedblack?$n_480w$&wid=476&fit=constrain"},
{"name":"Topman denim shorts dungaree in washed black","price":"45","color":"Washed Black","image":"https://images.asos-media.com/products/topman-denim-shorts-dungaree-in-washed-black/201705800-1-washedblack?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN skinny jeans in mid wash blue with heavy rips","price":"36","color":"Mid Wash Blue","image":"https://images.asos-media.com/products/asos-design-skinny-jeans-in-mid-wash-blue-with-heavy-rips/202010689-1-midwashblue?$n_480w$&wid=476&fit=constrain"},{"name":"New Look baggy 90s fit jeans in black","price":"25","color":"Black","image":"https://images.asos-media.com/products/new-look-baggy-90s-fit-jeans-in-black/202852332-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"Topman stretch taper jeans in black","price":"37","color":"Black","image":"https://images.asos-media.com/products/topman-stretch-taper-jeans-in-black/24536096-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"Topman organic cotton blend stretch skinny ripped jeans in black","price":"28","color":"Black","image":"https://images.asos-media.com/products/topman-organic-cotton-blend-stretch-skinny-ripped-jeans-in-black/24555100-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"New Look baggy 90s fit jeans in light blue wash","price":"25","color":"Blue","image":"https://images.asos-media.com/products/new-look-baggy-90s-fit-jeans-in-light-blue-wash/24321534-1-blue?$n_480w$&wid=476&fit=constrain"},{"name":"New Look slim rigid jeans in washed black","price":"20","color":"Black","image":"https://images.asos-media.com/products/new-look-slim-rigid-jeans-in-washed-black/23140766-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"Sixth June relaxed fit denim jeans in black with all over logo print","price":"69","color":"Black","image":"https://images.asos-media.com/products/sixth-june-relaxed-fit-denim-jeans-in-black-with-all-over-logo-print/201844384-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"COLLUSION Unisex 90s baggy jeans with embroidery in ecru","price":"33","color":"ECRU","image":"https://images.asos-media.com/products/collusion-unisex-90s-baggy-jeans-with-embroidery-in-ecru/201862034-1-ecru?$n_480w$&wid=476&fit=constrain"},
{"name":"Topman organic cotton blend spray on jeans in light wash","price":"32","color":"Blue","image":"https://images.asos-media.com/products/topman-organic-cotton-blend-spray-on-jeans-in-light-wash/24155116-1-blue?$n_480w$&wid=476&fit=constrain"},{"name":"Topman slim jeans in stay black","price":"35","color":"Black","image":"https://images.asos-media.com/products/topman-slim-jeans-in-stay-black/200915232-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"Jack & Jones Intelligence Liam skinny fit stretch jeans in blue black","price":"37","color":" Blue/Black denim","image":"https://images.asos-media.com/products/jack-jones-intelligence-liam-skinny-fit-stretch-jeans-in-blue-black/202084011-1-blueblackdenim?$n_480w$&wid=476&fit=constrain"},{"name":"Jack & Jones Intelligence Glenn slim tapered fit jeans in mid blue","price":"37","color":"Blue denim","image":"https://images.asos-media.com/products/jack-jones-intelligence-glenn-slim-tapered-fit-jeans-in-mid-blue/202077691-1-bluedenim?$n_480w$&wid=476&fit=constrain"},{"name":"Jack & Jones Intelligence Glenn slim tapered fit jeans in black","price":"37","color":"Black denim","image":"https://images.asos-media.com/products/jack-jones-intelligence-glenn-slim-tapered-fit-jeans-in-black/202077590-1-blackdenim?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN dad jeans in light wash blue with front seam detail","price":"36","color":"Blue","image":"https://images.asos-media.com/products/asos-design-dad-jeans-in-light-wash-blue-with-front-seam-detail/202010729-1-blue?$n_480w$&wid=476&fit=constrain"},{"name":"Dr Denim Rush tapered knee ripped jeans in mid wash","price":"58","color":"Blue","image":"https://images.asos-media.com/products/dr-denim-rush-tapered-knee-ripped-jeans-in-mid-wash/202452073-1-blue?$n_480w$&wid=476&fit=constrain"},{"name":"Only & Sons Weft regular fit jeans in black wash","price":"40","color":" Black Denim","image":"https://images.asos-media.com/products/only-sons-weft-regular-fit-jeans-in-black-wash/202513278-1-blackdenim?$n_480w$&wid=476&fit=constrain"},

{"name":"adidas Running Questar trainers in grey and blue","price":"74","color":"Grey","image":"https://images.asos-media.com/products/adidas-running-questar-trainers-in-grey-and-blue/202662296-1-grey?$n_480w$&wid=476&fit=constrain"},
{"name":"158 adidas Originals Geodiver Primeblue trainers in crystal white","price":"75","color":"White","image":"https://images.asos-media.com/products/adidas-originals-geodiver-primeblue-trainers-in-crystal-white/201270974-1-white?$n_480w$&wid=476&fit=constrain"},
{"name":"Buffalo cloud corin chain vegan trainers in black","price":"110","color":"Black","image":"https://images.asos-media.com/products/buffalo-cloud-corin-chain-vegan-trainers-in-black/201297176-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"Clarks Originals desert coal boots in green camo","price":"13","color":"","image":"https://images.asos-media.com/products/clarks-originals-desert-coal-boots-in-green-camo/201243339-1-green?$n_480w$&wid=476&fit=constrain"},
{"name":"Clarks Originals desert coal boots in green camo","price":"130","color":"Green","image":"https://images.asos-media.com/products/clarks-originals-desert-coal-boots-in-green-camo/201243339-1-green?$n_480w$&wid=476&fit=constrain"},
{"name":"237 ASOS DESIGN mule loafer in black faux leather with embossed detail","price":"40","color":"Black","image":"https://images.asos-media.com/products/asos-design-mule-loafer-in-black-faux-leather-with-embossed-detail/201129199-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"River Island weave wallet in black","price":"19","color":"BLACK","image":"https://images.asos-media.com/products/river-island-weave-wallet-in-black/202999009-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"Rains 1382 box bag micro in blue river","price":"59","color":"River","image":"https://images.asos-media.com/products/rains-1382-box-bag-micro-in-blue-river/201576921-1-river?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN faux leather weave wallet in bright green","price":"13","color":"MID GREEN","image":"https://images.asos-media.com/products/asos-design-faux-leather-weave-wallet-in-bright-green/201606852-1-midgreen?$n_480w$&wid=476&fit=constrain"},
{"name":"River Island weave reversible belt in black","price":"19","color":"BLACK","image":"https://images.asos-media.com/products/river-island-weave-reversible-belt-in-black/202999012-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN textured belt in cow print","price":"15","color":"MULTI","image":"https://images.asos-media.com/products/asos-design-textured-belt-in-cow-print/201361702-1-multi?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN leather wide belt in black with matte black buckle","price":"17","color":"Black","image":"https://images.asos-media.com/products/asos-design-leather-wide-belt-in-black-with-matte-black-buckle/24148581-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"Hollister outdoors central & back logo print t-shirt in white","price":"19","color":"","image":"https://images.asos-media.com/products/hollister-outdoors-central-back-logo-print-t-shirt-in-white/202800428-1-white?$n_480w$&wid=476&fit=constrain"},
{"name":"Only & Sons vest with Paradise back print in navy","price":"15","color":"navy","image":"https://images.asos-media.com/products/only-sons-vest-with-paradise-back-print-in-navy/202729846-1-darknavy?$n_480w$&wid=476&fit=constrain"},
{"name":"Only & Sons vest with mandala back print in white","price":"15","color":" white","image":"https://images.asos-media.com/products/only-sons-vest-with-mandala-back-print-in-white/202729794-1-white?$n_480w$&wid=476&fit=constrain"},
{"name":"Only & Sons vest with Seoul back print in black","price":"15","color":"black","image":"https://images.asos-media.com/products/only-sons-vest-with-seoul-back-print-in-black/202729310-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"Abercrombie & Fitch 3D icon logo slim fit pique polo in red","price":"35","color":"red","image":"https://images.asos-media.com/products/abercrombie-fitch-3d-icon-logo-slim-fit-pique-polo-in-red/202666080-1-red?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN recycled frame square sunglasses in black with solid black lens","price":"9","color":"Black","image":"https://images.asos-media.com/products/asos-design-recycled-frame-square-sunglasses-in-black-with-solid-black-lens/23132982-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN leather slim belt in black with square silver buckle","price":"15","color":"Black","image":"https://images.asos-media.com/products/asos-design-leather-slim-belt-in-black-with-square-silver-buckle/200763015-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN recycled slim tie with ombre effect pocket square in stone","price":"12","color":"STONE","image":"https://images.asos-media.com/products/asos-design-recycled-slim-tie-with-ombre-effect-pocket-square-in-stone/201683071-1-stone?$n_480w$&wid=476&fit=constrain"},
{"name":"South Beach Man cap with side logo in black","price":"11","color":"Black","image":"https://images.asos-media.com/products/south-beach-man-cap-with-side-logo-in-black/201827964-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"Rains 1382 box bag micro in blue river","price":"59","color":"River","image":"https://images.asos-media.com/products/rains-1382-box-bag-micro-in-blue-river/201576921-1-river?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN faux leather weave wallet in bright green","price":"13","color":"MID GREEN","image":"https://images.asos-media.com/products/asos-design-faux-leather-weave-wallet-in-bright-green/201606852-1-midgreen?$n_480w$&wid=476&fit=constrain"},
{"name":"River Island weave reversible belt in black","price":"19","color":"BLACK","image":"https://images.asos-media.com/products/river-island-weave-reversible-belt-in-black/202999012-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN textured belt in cow print","price":"15","color":"MULTI","image":"https://images.asos-media.com/products/asos-design-textured-belt-in-cow-print/201361702-1-multi?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN leather wide belt in black with matte black buckle","price":"17","color":"Black","image":"https://images.asos-media.com/products/asos-design-leather-wide-belt-in-black-with-matte-black-buckle/24148581-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"Bag red","price":"18","color":"Purple","image":"https://images.asos-media.com/products/nike-running-slim-waistpack-in-purple/201363798-1-purple?$n_480w$&wid=476&fit=constrain"},{"name":"Nike Heritage waistpack in green","price":"18","color":"Green","image":"https://images.asos-media.com/products/nike-heritage-waistpack-in-green/201432226-1-green?$n_480w$&wid=476&fit=constrain"},{"name":"Timberland Logo bum bag in black","price":"30","color":"Black","image":"https://images.asos-media.com/products/timberland-logo-bum-bag-in-black/201705753-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"Dickies Blanchard bumbag in lilac","price":"25","color":"LILAC","image":"https://images.asos-media.com/products/dickies-blanchard-bumbag-in-lilac/202776122-1-lilac?$n_480w$&wid=476&fit=constrain"},
{"name":"River Island weave wallet in black","price":"19","color":"BLACK","image":"https://images.asos-media.com/products/river-island-weave-wallet-in-black/202999009-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"River Island monogram wallet in black","price":"19","color":"BLACK","image":"https://images.asos-media.com/products/river-island-monogram-wallet-in-black/202999013-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"The North Face Bozer III cross body bag in black","price":"32","color":"Black","image":"https://images.asos-media.com/products/the-north-face-bozer-iii-cross-body-bag-in-black/23429687-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"The North Face Jester crossbody bag in black","price":"30","color":"Black","image":"https://images.asos-media.com/products/the-north-face-jester-crossbody-bag-in-black/201761032-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"Fred Perry pique textured billfold wallet in black","price":"50","color":"BLACK","image":"https://images.asos-media.com/products/fred-perry-pique-textured-billfold-wallet-in-black/202060362-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"adidas Training 3 Stripe backpack in grey","price":"30","color":"GREY","image":"https://images.asos-media.com/products/adidas-training-3-stripe-backpack-in-grey/201323629-1-grey?$n_480w$&wid=476&fit=constrain"},{"name":"adidas Originals adicolor Trefoil backpack in black","price":"23","color":"Black","image":"https://images.asos-media.com/products/adidas-originals-adicolor-trefoil-backpack-in-black/24312425-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"The North Face Rodey backpack in black","price":"63","color":" Tnf black","image":"https://images.asos-media.com/products/the-north-face-rodey-backpack-in-black/14927859-1-tnfblack?$n_480w$&wid=476&fit=constrain"},
{"name":"Rains 1382 box bag micro in blue river","price":"59","color":"River","image":"https://images.asos-media.com/products/rains-1382-box-bag-micro-in-blue-river/201576921-1-river?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN faux leather weave wallet in bright green","price":"13","color":"MID GREEN","image":"https://images.asos-media.com/products/asos-design-faux-leather-weave-wallet-in-bright-green/201606852-1-midgreen?$n_480w$&wid=476&fit=constrain"},
{"name":"Calvin Klein Jeans monogram hardware 35mm reversible belt in brown/black","price":"58","color":"BLACK","image":"https://images.asos-media.com/products/calvin-klein-jeans-monogram-hardware-35mm-reversible-belt-in-brown-black/202404291-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN slim leather belt with burnished edge in brown","price":"13","color":"BROWN","image":"https://images.asos-media.com/products/asos-design-slim-leather-belt-with-burnished-edge-in-brown/202079038-1-brown?$n_480w$&wid=476&fit=constrain"},{"name":"River Island casual leather belt in brown","price":"19","color":"BROWN - DARK","image":"https://images.asos-media.com/products/river-island-casual-leather-belt-in-brown/202673820-1-browndark?$n_480w$&wid=476&fit=constrain"},
{"name":"River Island weave reversible belt in black","price":"19","color":"BLACK","image":"https://images.asos-media.com/products/river-island-weave-reversible-belt-in-black/202999012-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN textured belt in cow print","price":"15","color":"MULTI","image":"https://images.asos-media.com/products/asos-design-textured-belt-in-cow-print/201361702-1-multi?$n_480w$&wid=476&fit=constrain"},
{"name":"BOSS Rudy leather belt in black","price":"73","color":"Black","image":"https://images.asos-media.com/products/boss-rudy-leather-belt-in-black/201881027-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"adidas Golf reversible web belt in black and grey","price":"15","color":"MULTI","image":"https://images.asos-media.com/products/adidas-golf-reversible-web-belt-in-black-and-grey/201280579-1-multi?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN slim webbing belt with plate buckle detail","price":"7","color":"Black","image":"https://images.asos-media.com/products/asos-design-slim-webbing-belt-with-plate-buckle-detail/21799891-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"Calvin Klein new monogram belt in black","price":"55","color":"Black","image":"https://images.asos-media.com/products/calvin-klein-new-monogram-belt-in-black/201590739-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN leather wide belt in black with matte black buckle","price":"17","color":"Black","image":"https://images.asos-media.com/products/asos-design-leather-wide-belt-in-black-with-matte-black-buckle/24148581-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"Sunday Rain Sleep Easy Body Scrub 265g","price":"7","color":"No Colour","image":"https://images.asos-media.com/products/sunday-rain-sleep-easy-body-scrub-265g/202314314-1-nocolour?$n_480w$&wid=476&fit=constrain"},{"name":"St. Tropez Self Tan 50ml Purity Water Mousse and Face Mist Mini Kit","price":"16","color":" No colour","image":"https://images.asos-media.com/products/st-tropez-self-tan-50ml-purity-water-mousse-and-face-mist-mini-kit/14558277-1-nocolour?$n_480w$&wid=476&fit=constrain"},{"name":"The Ordinary 4% Sulphate Cleanser for Body and Hair 240ml","price":"8","color":"NO COLOUR","image":"https://images.asos-media.com/products/the-ordinary-4-sulphate-cleanser-for-body-and-hair-240ml/202332500-1-nocolour?$n_480w$&wid=476&fit=constrain"},
{"name":"LUSH Big Hugs Bath Bomb Duo Set","price":"12","color":" No Colour","image":"https://images.asos-media.com/products/lush-big-hugs-bath-bomb-duo-set/202812330-1-nocolour?$n_480w$&wid=476&fit=constrain"},{"name":"Garnier Summer Body Hydrating Gradual Tan Moisturiser Light 400ml","price":"8","color":"No colour","image":"https://images.asos-media.com/products/garnier-summer-body-hydrating-gradual-tan-moisturiser-light-400ml/20639673-1-nocolour?$n_480w$&wid=476&fit=constrain"},
{"name":"Bag red","price":"18","color":"Purple","image":"https://images.asos-media.com/products/nike-running-slim-waistpack-in-purple/201363798-1-purple?$n_480w$&wid=476&fit=constrain"},{"name":"Nike Heritage waistpack in green","price":"18","color":"Green","image":"https://images.asos-media.com/products/nike-heritage-waistpack-in-green/201432226-1-green?$n_480w$&wid=476&fit=constrain"},{"name":"Timberland Logo bum bag in black","price":"30","color":"Black","image":"https://images.asos-media.com/products/timberland-logo-bum-bag-in-black/201705753-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"Dickies Blanchard bumbag in lilac","price":"25","color":"LILAC","image":"https://images.asos-media.com/products/dickies-blanchard-bumbag-in-lilac/202776122-1-lilac?$n_480w$&wid=476&fit=constrain"},
{"name":"River Island weave wallet in black","price":"19","color":"BLACK","image":"https://images.asos-media.com/products/river-island-weave-wallet-in-black/202999009-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"River Island monogram wallet in black","price":"19","color":"BLACK","image":"https://images.asos-media.com/products/river-island-monogram-wallet-in-black/202999013-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"The North Face Bozer III cross body bag in black","price":"32","color":"Black","image":"https://images.asos-media.com/products/the-north-face-bozer-iii-cross-body-bag-in-black/23429687-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"The North Face Jester crossbody bag in black","price":"30","color":"Black","image":"https://images.asos-media.com/products/the-north-face-jester-crossbody-bag-in-black/201761032-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"Fred Perry pique textured billfold wallet in black","price":"50","color":"BLACK","image":"https://images.asos-media.com/products/fred-perry-pique-textured-billfold-wallet-in-black/202060362-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"adidas Training 3 Stripe backpack in grey","price":"30","color":"GREY","image":"https://images.asos-media.com/products/adidas-training-3-stripe-backpack-in-grey/201323629-1-grey?$n_480w$&wid=476&fit=constrain"},{"name":"adidas Originals adicolor Trefoil backpack in black","price":"23","color":"Black","image":"https://images.asos-media.com/products/adidas-originals-adicolor-trefoil-backpack-in-black/24312425-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"The North Face Rodey backpack in black","price":"63","color":" Tnf black","image":"https://images.asos-media.com/products/the-north-face-rodey-backpack-in-black/14927859-1-tnfblack?$n_480w$&wid=476&fit=constrain"},
{"name":"Rains 1382 box bag micro in blue river","price":"59","color":"River","image":"https://images.asos-media.com/products/rains-1382-box-bag-micro-in-blue-river/201576921-1-river?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN faux leather weave wallet in bright green","price":"13","color":"MID GREEN","image":"https://images.asos-media.com/products/asos-design-faux-leather-weave-wallet-in-bright-green/201606852-1-midgreen?$n_480w$&wid=476&fit=constrain"},
{"name":"Calvin Klein Jeans monogram hardware 35mm reversible belt in brown/black","price":"58","color":"BLACK","image":"https://images.asos-media.com/products/calvin-klein-jeans-monogram-hardware-35mm-reversible-belt-in-brown-black/202404291-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN slim leather belt with burnished edge in brown","price":"13","color":"BROWN","image":"https://images.asos-media.com/products/asos-design-slim-leather-belt-with-burnished-edge-in-brown/202079038-1-brown?$n_480w$&wid=476&fit=constrain"},{"name":"River Island casual leather belt in brown","price":"19","color":"BROWN - DARK","image":"https://images.asos-media.com/products/river-island-casual-leather-belt-in-brown/202673820-1-browndark?$n_480w$&wid=476&fit=constrain"},
{"name":"River Island weave reversible belt in black","price":"19","color":"BLACK","image":"https://images.asos-media.com/products/river-island-weave-reversible-belt-in-black/202999012-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"ASOS DESIGN textured belt in cow print","price":"15","color":"MULTI","image":"https://images.asos-media.com/products/asos-design-textured-belt-in-cow-print/201361702-1-multi?$n_480w$&wid=476&fit=constrain"},
{"name":"BOSS Rudy leather belt in black","price":"73","color":"Black","image":"https://images.asos-media.com/products/boss-rudy-leather-belt-in-black/201881027-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"adidas Golf reversible web belt in black and grey","price":"15","color":"MULTI","image":"https://images.asos-media.com/products/adidas-golf-reversible-web-belt-in-black-and-grey/201280579-1-multi?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN slim webbing belt with plate buckle detail","price":"7","color":"Black","image":"https://images.asos-media.com/products/asos-design-slim-webbing-belt-with-plate-buckle-detail/21799891-1-black?$n_480w$&wid=476&fit=constrain"},{"name":"Calvin Klein new monogram belt in black","price":"55","color":"Black","image":"https://images.asos-media.com/products/calvin-klein-new-monogram-belt-in-black/201590739-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"ASOS DESIGN leather wide belt in black with matte black buckle","price":"17","color":"Black","image":"https://images.asos-media.com/products/asos-design-leather-wide-belt-in-black-with-matte-black-buckle/24148581-1-black?$n_480w$&wid=476&fit=constrain"},
{"name":"Sunday Rain Sleep Easy Body Scrub 265g","price":"7","color":"No Colour","image":"https://images.asos-media.com/products/sunday-rain-sleep-easy-body-scrub-265g/202314314-1-nocolour?$n_480w$&wid=476&fit=constrain"},{"name":"St. Tropez Self Tan 50ml Purity Water Mousse and Face Mist Mini Kit","price":"16","color":" No colour","image":"https://images.asos-media.com/products/st-tropez-self-tan-50ml-purity-water-mousse-and-face-mist-mini-kit/14558277-1-nocolour?$n_480w$&wid=476&fit=constrain"},{"name":"The Ordinary 4% Sulphate Cleanser for Body and Hair 240ml","price":"8","color":"NO COLOUR","image":"https://images.asos-media.com/products/the-ordinary-4-sulphate-cleanser-for-body-and-hair-240ml/202332500-1-nocolour?$n_480w$&wid=476&fit=constrain"},
{"name":"LUSH Big Hugs Bath Bomb Duo Set","price":"12","color":" No Colour","image":"https://images.asos-media.com/products/lush-big-hugs-bath-bomb-duo-set/202812330-1-nocolour?$n_480w$&wid=476&fit=constrain"},{"name":"Garnier Summer Body Hydrating Gradual Tan Moisturiser Light 400ml","price":"8","color":"No colour","image":"https://images.asos-media.com/products/garnier-summer-body-hydrating-gradual-tan-moisturiser-light-400ml/20639673-1-nocolour?$n_480w$&wid=476&fit=constrain"},
{"name":"Bondi Sands Summer Fruits Body Wash 500ml","price":"9","color":" NO COLOUR","image":"https://images.asos-media.com/products/bondi-sands-summer-fruits-body-wash-500ml/201873168-1-nocolour?$n_480w$&wid=476&fit=constrain"},{"name":"L'Oreal Men Expert Total Clean Shower Gel 300ml","price":"4","color":"Multi","image":"https://images.asos-media.com/products/loreal-men-expert-total-clean-shower-gel-300ml/8867569-1-multi?$n_480w$&wid=476&fit=constrain"},

    ]


/////
var hairDiv = document.getElementById("containerDiv");

var cartArr = [];

function appendProduct(view_All) {
    hairDiv.innerHTML = null;
    view_All.forEach(function (elem) {
  
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
  appendProduct(view_All);
  
  document.querySelector("#sorter").addEventListener("click", sortByPrice);
  function sortByPrice() {
      view_All.map(function (elem) {
          var sorting = document.querySelector("#sorter").value;
          console.log(sorting);
          if (sorting == "l2h") {
              view_All.sort(function (a, b) { return a.price - b.price })
              appendProduct(view_All)
          }
          else if (sorting == "h2l") {
              view_All.sort(function (a, b) { return b.price - a.price })
              appendProduct(view_All)
          }
  
          else if (sorting == "a2z") {
              function SortArray(x, y) {
                  if (x.name < y.name) { return -1; }
                  if (x.name > y.name) { return 1; }
                  return 0;
              }
              var s = view_All.sort(SortArray)
              appendProduct(s)
          }
          else if (sorting == "z2a") {
              function SortArray(x, y) {
                  if (x.name > y.name) { return -1; }
                  if (x.name < y.name) { return 1; }
                  return 0;
              }
              var sort = view_All.sort(SortArray)
              appendProduct(sort)
          }
      })
  }
  
  
  // filter_Function
  
  document.querySelector("#filter").addEventListener("click", filterItems);
  
  function filterItems(){
      var filter=document.getElementById("filter").value;
         var filterdata=view_All.filter(function(elem,index){
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
  