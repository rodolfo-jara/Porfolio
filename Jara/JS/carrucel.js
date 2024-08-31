document.addEventListener("DOMContentLoaded", function() {
    const sliderItems = document.querySelector('.slider-items');
    const images = document.querySelectorAll('.slider-items img');
    const totalWidth = Array.from(images).reduce((acc, img) => acc + img.clientWidth + 20, 0); // 20px es el margen entre imágenes
    sliderItems.style.width = `${totalWidth}px`;
});
