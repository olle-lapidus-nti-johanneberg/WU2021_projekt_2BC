
const hamburger = document.getElementById("hamburger-icon");
const navbar = document.getElementById("navbar");
var navbarShown = false;

function updateNavbar()
{
    if (navbarShown)
    {
        navbar.style.display = "none";
    }
    else
    {
        navbar.style.display = "block";
    }
    navbarShown = !navbarShown;
}

function animateBurger()
{
    var midBar = document.getElementById("bar2");
    var rotation = 0;
    
    function rotate()
    {
        rotation+=4;
        midBar.style = "transform: rotate(" + rotation + "deg);";
        if (rotation == 180) return;
        setTimeout(rotate, 1);
    }
    rotate();

}

function toIndex()
{
    window.location.href = "index.html";
}

var nav_logo = document.getElementById("header-logo");
var nav_header = document.getElementById("navbar-header");

nav_logo.addEventListener("click", function() {
    console.log("hej");
    toIndex();
});
nav_header.addEventListener("click", function() {
    toIndex();
});

hamburger.addEventListener("click", function() {
    updateNavbar();
    animateBurger();
})


document.getScroll = function() {
    if (window.pageYOffset != undefined) {
        return [pageXOffset, pageYOffset];
    } else {
        var sx, sy, d = document,
            r = d.documentElement,
            b = d.body;
        sx = r.scrollLeft || b.scrollLeft || 0;
        sy = r.scrollTop || b.scrollTop || 0;
        return [sx, sy];
    }
}

updLogoSize = function() {
    let img = document.getElementById("header-logo");
    let body = document.body,
    html = document.documentElement;

    let height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
    if (window.innerWidth >= 800) 
    {
        img.style = "max-height: 90%; width: auto;";
        return;
    }
    
    let y = document.getScroll()[1];
    let imgSize = Math.max(10, ((200 - y)/200) * 30);
    if (height + imgSize - 100 < html.clientHeight) imgSize = 10;
    
    img.style = "width:" + imgSize + "vw";
}

updLogoSize();
addEventListener("scroll", updLogoSize);

