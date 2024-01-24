import initNavDetail from "./modules/nav-detail.js";
import initAccordionNav from "./modules/accordion-nav.js";
import initChangeImage from "./modules/change-image.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initOutsideClick from "./modules/outside-click.js";
initNavDetail();
initAccordionNav();
initChangeImage();
initMenuMobile();
initOutsideClick();

if (SimpleAnime) {
  new SimpleAnime();
}
