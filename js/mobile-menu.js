
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

addEventListener("scroll", function() {
    let img = document.getElementById("header-logo");
    if (window.innerWidth >= 800) 
    {
        img.style = "max-height: 90%; width: auto;";
        return;
    }
    
    let y = document.getScroll()[1];
    let imgSize = Math.max(10, ((200 - y)/200) * 60);
    img.style = "width:" + imgSize + "vw";
})
