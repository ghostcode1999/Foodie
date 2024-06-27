"use strict";

/*-------------------------------------------
* Template Name: Foodie
* Updated: Jun 25 2024
* Author: Ghostcode
* PSD Designer: Codewithsadee
-------------------------------------------*/

import {
  select,
  addClass,
  on,
  onScroll,
  removeClass,
  toggleClass,
  onLoad,
} from "./utils/helpers.js";

(function () {
  /*
    #Toggle |is-scrolled| class on body element
------------------------------------------------*/
  let isBodyScrolled = false;

  const bodyScroll = () => {
    if (scrollY > 100) {
      if (!isBodyScrolled) {
        addClass(document.body, "is-scrolled");
        isBodyScrolled = true;
      }
    } else {
      if (isBodyScrolled) {
        removeClass(document.body, "is-scrolled");
        isBodyScrolled = false;
      }
    }
  };

  onScroll(window, bodyScroll);
  onLoad(bodyScroll);

  /*
    ##Navbar
    #Toggle |is-active| class on <.nav-toggler> button
-------------------------------------------------------*/
  on("click", "[data-nav-toggler]", function () {
    toggleClass(this, "is-active");
  });

  /*
    ##Search Modal
    #Toggle |is-active| class on <.nav-search-btn> button
-------------------------------------------------------*/
  on("click", "[data-search-btn]", function () {
    toggleClass(this, "is-active");
  });
  on("click", "[data-close-btn]", function () {
    removeClass(select("[data-search-btn]"), "is-active");
  });

  /*
    #Translate <[data-delivery-boy]> on scroll
-------------------------------------------------------*/
  const deliveryBoy = select("[data-delivery-boy]");

  let deliveryBoyMove = -60;
  let lastScrollPos = 0;

  onScroll(window, () => {
    let deliveryBoyPosTop = deliveryBoy.getBoundingClientRect().top;

    // If delivery boy is in the window view
    if (deliveryBoyPosTop < 500 && deliveryBoyPosTop > -250) {
      let activeScrollPos = scrollY;
      // If w're scrolling forward, boy will translate forward
      if (lastScrollPos < activeScrollPos) {
        deliveryBoyMove += 1;
      } else {
        // If w're scrolling backward, boy will translate backward
        deliveryBoyMove -= 1;
      }

      // Update lastScrollPos
      lastScrollPos = activeScrollPos;
      deliveryBoy.style.translate = `${deliveryBoyMove}px 0`;
    }
  });
})();
