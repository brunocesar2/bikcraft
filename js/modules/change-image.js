export default function initChangeImage() {
  const gallery = document.querySelector("[data-gallery]");
  const images = document.querySelectorAll("[data-gallery] img");
  if (gallery && images.length) {
    images.forEach((image) => {
      image.addEventListener("click", handleClick);
      function handleClick() {
        gallery.prepend(image);
      }
    });
  }
}
