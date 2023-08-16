import initNavDetail from "./modules/nav-detail.js";
import initAccordionNav from "./modules/accordion-nav.js";
import initChangeImage from "./modules/change-image.js";
initNavDetail();
initAccordionNav();
initChangeImage();

if (window.SimpleAnime) {
  new SimpleAnime();
}
