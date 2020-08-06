var num = document.getElementById("modal-content").getAttribute("num")

var text ="";
for(var i=1;i<=num;i++){
    text+="<div class=\"mySlides\">\r\n\t<img src=\""+i+".jpg\"\/>\r\n\t<di"+
    "v class=\"overlay\">\r\n\t\t<div class=\"nav left\" onclick=\"plusSlid"+
    "es(-1)\"><a class=\"prev\" >&#10094;<\/a><\/di"+
    "v>\r\n\t\t<div class=\"nav right\" onclick=\"plusSlides(1)\"><a clas"+
    "s=\"next\" >&#10095;<\/a><\/div>\r\n\t<\/div>\r\n<\/div>";
}
document.getElementById("modal-content").innerHTML = text;

function openModal() {
    document.getElementById("myModal").style.display = "block";
}
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}	
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

$('body').on('click', function(event) {
    closeModal();
});

$('div.wrapper, div.mySlides').on('click', function(event) {
    event.stopPropagation();
});

document.addEventListener('keydown', function(event) {
    const key = event.key; // Or const {key} = event; in ES6+
    if (key === "Escape") {
        closeModal();
    }
    if (key === "ArrowLeft") {
        plusSlides(-1);
    }
    if (key === "ArrowRight") {
        plusSlides(1);
    }
});
