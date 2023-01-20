const lazyImages = document.querySelectorAll('img[loading="lazy"]');

lazyImages.forEach((image) => {
  image.addEventListener("load", onImageLoaded);
});

function onImageLoaded(event) {
  event.target.classList.add("appear");
}
