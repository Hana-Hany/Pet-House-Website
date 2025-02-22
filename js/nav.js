const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="navbar"> 
    <div class="logo"><a href="index.html"><img src="./images/logo1-removebg-preview.png" alt="" width="250px"></a></div>
    <ul class="links">
        <li><a href="index.html">Home</a></li>
        <li><a href="products.html">New arrivals</a></li>
        <li><a href="#">Dogs</a></li>
        <li><a href="#">Cats</a></li>
        <li><a href="#">Food</a></li>
        <li><a href="#">Offers</a></li>
        
    </ul>
    <a href="" class="action_btn">Sign Up</a>
    <div class="toggle_btn">
        <i class="fa-solid fa-bars"></i>

    </div>

</div>
<div class="dropdown_menu ">
    <li><a href="index.html">Home</a></li>
    <li><a href="#">New arrivals</a></li>
        <li><a href="#">Dogs</a></li>
        <li><a href="#">Cats</a></li>
        <li><a href="#">Food</a></li>
        <li><a href="#">Offers</a></li>
        <li><a href="" class="action_btn">Sign Up</a></li>

</div>
    `;
}

createNav();