export default function initNavDetail() {
  const links = document.querySelectorAll("[data-nav-detail] a");
  if (links.length) {
    links.forEach((link) => {
      if (window.location.href === link.href) {
        link.classList.add("active");
      }
    });
  }
}
