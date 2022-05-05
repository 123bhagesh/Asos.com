const categories_Navbar =()=>{

    return`
    
    <div id="navebar_TopDiv_Mean_Womens">

        <div id="site_Name"> <h1><a href="/index.html">asos</a></h1></div>
        <div id="womensButton"><h4><a href="womens.html">WOMEN</a></h4></div>
        <div id="mensButton"><h4><a href="index.html">MEN</a></h4></div>

        <div><a href="cart.html"><img style="height: 55px;margin-top: 0px;" src="/acc_bag3 - Copy.png"></a></div>
    
    </div>
    
    <div>
        <img style="width: 1510px;height: 47px;" src="/navbar-bar-img.PNG" alt="">
    </div>
    `
}


const categories_Navbar2=()=>{
    return`
    <div id="topNewIn">
        <div><a href="">NEW IN: CLOTHING</a></div>
        <div><a href="">NEW IN: SHOES</a></div>
        <div><a href="">NEW IN: ACCESSORIES</a></div>
        <div><a href="">NEW IN: FACE + BODY</a></div>
    </div>

    <div id="sortDiv">
        <select id="sorter">
            <option value="">Sort</option>
            <option value="l2h">Price, Low To High</option>
            <option value="h2l">Price, High To Low</option>
            <option value="a2z">Alphabetically, A To Z</option>
            <option value="z2a">Alphabetically, Z To A</option>
        </select>
    </div>
        `
}

export {categories_Navbar,categories_Navbar2}
