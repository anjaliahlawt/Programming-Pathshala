const circle = document.getElementById("circle");
const menuIcon = document.getElementById("menu-icon");

menuIcon.style.display = "none"; 

circle.addEventListener("click", function () {
    if (menuIcon.style.display === "flex") {
        menuIcon.style.display = "none";
    } else {
        menuIcon.style.display = "flex";
    }
});

document.addEventListener("click", function (e) {

    if (e.target !== circle && e.target !== menuIcon) {
        menuIcon.style.display = "none";
    }
});
