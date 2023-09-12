export default function initChangeImage() {
  const galleryImages = document.querySelector("[data-gallery-images]");
  const images = document.querySelectorAll("[data-gallery-images] img");
  if (galleryImages && images.length) {
    images.forEach((image) => {
      ["touchstart", "click"].forEach((userEvent) => {
      image.addEventListener(userEvent, changeImage);
      })
    });
    function changeImage(event) {
      galleryImages.prepend(event.currentTarget);
    }
  }
}
