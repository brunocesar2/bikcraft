export default function initChangeImage() {
  const galleryImages = document.querySelector("[data-gallery-images]");
  const images = document.querySelectorAll("[data-gallery-images] img");
  if (galleryImages && images.length) {
    images.forEach((image) => {
      image.addEventListener("click", changeImage);
    });
    function changeImage(event) {
      galleryImages.prepend(event.currentTarget);
    }
  }
}
