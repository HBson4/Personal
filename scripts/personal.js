let slideIndex = 0;
let slideIndex1 = 0;
let slideIndex2 = 0;
showSlides();
showSlides1();
showSlides2();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}  
    
    slides[slideIndex - 1].style.display = "flex";
    setTimeout(showSlides, 4250); // Change image every 4.25 seconds
}

function showSlides1() {
    let x;
    let slides = document.getElementsByClassName("mySlides1");
    for (x = 0; x < slides.length; x++) {
        slides[x].style.display = "none";
    }
    slideIndex1++;
    if (slideIndex1 > slides.length) {slideIndex1 = 1}  
    
    slides[slideIndex1 - 1].style.display = "flex";
    setTimeout(showSlides1, 4250); // Change image every 4.25 seconds
}

function showSlides2() {
    let y;
    let slides = document.getElementsByClassName("mySlides2");
    for (y = 0; y < slides.length; y++) {
        slides[y].style.display = "none";
    }
    slideIndex2++;
    if (slideIndex2 > slides.length) {slideIndex2 = 1}  
    
    slides[slideIndex2 - 1].style.display = "flex";
    setTimeout(showSlides2, 4250); // Change image every 4.25 seconds
}

// var modal = document.getElementById('id01');
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }