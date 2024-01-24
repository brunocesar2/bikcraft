export default function initOutsideClick(element, callback) {
  const html = document.documentElement;
  const outside = "data-outside";
  if (element && !element.hasAttribute(outside)) {
    setTimeout(() => html.addEventListener("click", hideMenu));
    element.setAttribute(outside, "");
  }
  function hideMenu(event) {
    if (!element.contains(event.target)) {
      html.removeEventListener("click", hideMenu);
      element.removeAttribute(outside);
      callback();
    }
  }
}
