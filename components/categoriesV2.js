const categories_Navbar_Discount=()=>{

    return `
    
    <div id="freeWorldWideDelivery">
    <div><p style="color: black;">UP TO 30% OFF SUN-READY STUFF</p></div>
    <div><p style="color: white;">FREE WORLDWIDE DELIVERY</p></div>
    </div>
`


}


const categories_Sorting=()=>{
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
        <select id="filter">
        <option value= >Filter By Price</option>
        <option value="10">Price > £10</option>
        <option value="20">Price > £20</option>
      </select>
    </div>
        `
}

export {categories_Navbar_Discount,categories_Sorting}