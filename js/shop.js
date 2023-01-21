// ===========================================================================
// Динамическая разметка
// ===========================================================================

import { shopLots } from "./test-array01.js";

const gallaryList = document.querySelector(".js-shop__list");

const shopList = shopLots.map(
  ({ url, alt, priceGRN, priceUSDT, nameUKR, nameEN }) => {
    const newEl = document.createElement("li");
    newEl.classList.add("shop-list__item");
    newEl.insertAdjacentHTML(
      "afterbegin",
      `<div class="shop-list__position">

        <a class="work-list-item__link" href="">

        <img class="work-list-item__img"

        src = "${url}" 

        alt = "${alt}"

        width="200" 

        height="256"

        loading="lazy"/>

        <h2 class="work-list-item__title">${priceGRN} ГРН – ${priceUSDT} USDT</h2>
        
        <p class="work-list-item__text">${nameUKR} &#171;${nameEN}&#187;</p>
        </a>
        
        <button class="reg-login__button work-list__button--position" type="submit">
        
        <span class="reg-login__button__text">У кошик</span>
        </button>
      </div>`
    );
    return newEl;
  }
);
gallaryList.append(...shopList);

// ===========================================================================
// Анимация Lazy-loading
// ===========================================================================

const lazyImages = document.querySelectorAll('img[loading="lazy"]');

lazyImages.forEach((image) => {
  image.addEventListener("load", onImageLoaded);
});

function onImageLoaded(event) {
  event.target.classList.add("appear");
}
