import initOutsideClick from "./outside-click.js";

export default function initMenuMobile() {
  const button = document.querySelector("[data-menu-mobile-button]");
  const list = document.querySelector("[data-menu-mobile-list]");
  if (button && list) {
    button.addEventListener("click", handleClick);
    function handleClick() {
      button.classList.toggle("active");
      list.classList.toggle("active");
      initOutsideClick(list, () => {
        button.classList.remove("active");
        list.classList.remove("active");
      });
    }
  }
}
