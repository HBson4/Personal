let slideIndex = 0;
let slideIndex1 = 0;
showSlides();
showSlides1();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}  
    
    slides[slideIndex-1].style.display = "flex";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function showSlides1() {
    let x;
    let slides = document.getElementsByClassName("mySlides1");
    for (x = 0; x < slides.length; x++) {
        slides[x].style.display = "none";
    }
    slideIndex1++;
    if (slideIndex1 > slides.length) {slideIndex1 = 1}  
    
    slides[slideIndex1-1].style.display = "flex";
    setTimeout(showSlides1, 5000); // Change image every 5 seconds
}