
document.addEventListener("DOMContentLoaded", function () {
    let sidenav = document.querySelector(".side-navbar");

    function showNavbar() {
        sidenav.style.left = "0%";
    }

    function closeNavbar() {
        sidenav.style.left = "-50%";
    }

    document.querySelector(".navbar-menu-toggle").addEventListener("click", showNavbar);
    document.querySelector(".side-navbar p").addEventListener("click", closeNavbar);
});


var signupoff=document.querySelector(".signupoff")
var close=document.getElementById("offer-close")

close.addEventListener("click",function()
{
    signupoff.style.display="none"
});



var collectioncontainer=document.getElementById("collections")
var collectionlist=collectioncontainer.querySelectorAll("div")
var search=document.getElementById("search")

search.addEventListener("keyup",function(event)
{
    var enteredValue = event.target.value.toUpperCase();

    for(var count=0;count<collectionlist.length;count++)
    {
        var collectionname=collectionlist[count].querySelector("h2").textContent

        if(collectionname.toUpperCase().indexOf(enteredValue)<0)
        {
            collectionlist[count].style.display="none"
        }
        else
        {
            collectionlist[count].style.display="block"
        }
    }
});




document.addEventListener("DOMContentLoaded", function () {
    let checkboxes = document.querySelectorAll(".collection__container__left input[type='checkbox']");
    let products = document.querySelectorAll(".collection__container__right_item");

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", filterProducts);
    });

    function filterProducts() {
        let selectedFilters = [];

        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                selectedFilters.push(checkbox.nextSibling.textContent.trim().toLowerCase());
            }
        });

        products.forEach(product => {
            let productText = product.querySelector("h2").innerText.toLowerCase();
            let match = selectedFilters.length === 0 || selectedFilters.some(filter => productText.includes(filter));
            product.style.display = match ? "block" : "none";
        });
    }
});




// var sidenav = document.querySelector(".side-navbar")

// function showNavbar()
// {
//     sidenav.style.left="0%"

// }

// function closeNavbar()
// {
//     sidenav.style.left="-40%"
// }
