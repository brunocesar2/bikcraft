import initOutsideClick from "./outside-click.js";

export default function initMenuMobile() {
  const button = document.querySelector("[data-menu-mobile-button]");
  const list = document.querySelector("[data-menu-mobile-list]");
  const container = document.querySelector("[data-menu-mobile-container]");
  if (button && list && container) {
    button.addEventListener("click", handleClick);
    function handleClick() {
      button.classList.toggle("active");
      list.classList.toggle("active");
      container.classList.toggle("active");
      initOutsideClick(list, () => {
        button.classList.remove("active");
        list.classList.remove("active");
        container.classList.remove("active");
      });
    }
  }
}
