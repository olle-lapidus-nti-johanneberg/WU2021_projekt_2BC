var left = document.getElementById("upper-left");
var right = document.getElementById("lower-right");

console.log(left);

left.addEventListener("click", function() {
    window.location.href = "plans.html";
});

right.addEventListener("click", function() {
    window.location.href = "member.html";
});