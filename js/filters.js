// ===========================================================================
// Поиск в фильтре
// ===========================================================================

const inputSearch = document.querySelector("#search");

inputSearch.addEventListener("input", _.debounce(searchChangeHandler, 1500));

function searchChangeHandler(event) {
  const searchItem = event.target.value.toLowerCase();
  console.log(searchItem);
}

// ===========================================================================
// Продукти харчування
// ===========================================================================
const filterMenuFood = document.querySelector(".js-filter__menu-food");
const filterSecondaryMenuFood = document.querySelector(
  ".js-filter__secondary-menu-food"
);

const filterFoodList = document.querySelector(".js-filter__food-list");
const filterFoodSecondaryList = document.querySelector(
  ".js-filter__food-secondary-list"
);

const filterIconFoodClose = document.querySelector(
  ".js-filter__icon-food-close"
);
const filterIconFoodOpen = document.querySelector(".js-filter__icon-food-open");

const filterSecondaryIconFoodOpen = document.querySelector(
  ".js-filter__secondary-icon-food-open"
);
const filterSecondaryIconFoodClose = document.querySelector(
  ".js-filter__secondary-icon-food-close"
);

const filterIconFoodHandler = () => {
  filterIconFoodClose.classList.toggle("js-icon-close");
  filterIconFoodOpen.classList.toggle("js-icon-open");
  filterFoodList.classList.toggle("js-filter-list-open");
};

const filterSecondaryIconFoodHandler = () => {
  filterSecondaryIconFoodClose.classList.toggle("js-icon-close");
  filterSecondaryIconFoodOpen.classList.toggle("js-icon-open");
  filterFoodSecondaryList.classList.toggle("js-filter-list-open");
};

filterMenuFood.addEventListener("click", filterIconFoodHandler);
filterSecondaryMenuFood.addEventListener(
  "click",
  filterSecondaryIconFoodHandler
);

// ===========================================================================
// Побутова хімія
// ===========================================================================
const filterMenuChemical = document.querySelector(".js-filter__menu-chemical");
const filterSecondaryMenuChemical = document.querySelector(
  ".js-filter__secondary-menu-chemical"
);

const filterChemicalList = document.querySelector(".js-filter__chemical-list");
const filterChemicalSecondaryList = document.querySelector(
  ".js-filter__chemical-secondary-list"
);

const filterIconChemicalClose = document.querySelector(
  ".js-filter__icon-chemical-close"
);
const filterIconChemicalOpen = document.querySelector(
  ".js-filter__icon-chemical-open"
);

const filterSecondaryIconChemicalOpen = document.querySelector(
  ".js-filter__secondary-icon-chemical-open"
);
const filterSecondaryIconChemicalClose = document.querySelector(
  ".js-filter__secondary-icon-chemical-close"
);

const filterIconChemicalHandler = () => {
  filterIconChemicalClose.classList.toggle("js-icon-close");
  filterIconChemicalOpen.classList.toggle("js-icon-open");
  filterChemicalList.classList.toggle("js-filter-list-open");
};

const filterSecondaryIconChemicalHandler = () => {
  filterSecondaryIconChemicalClose.classList.toggle("js-icon-close");
  filterSecondaryIconChemicalOpen.classList.toggle("js-icon-open");
  filterChemicalSecondaryList.classList.toggle("js-filter-list-open");
};

filterMenuChemical.addEventListener("click", filterIconChemicalHandler);
filterSecondaryMenuChemical.addEventListener(
  "click",
  filterSecondaryIconChemicalHandler
);

// ===========================================================================
// Засоби гігієни
// ===========================================================================
const filterMenuGigiena = document.querySelector(".js-filter__menu-gigiena");
const filterGigienaList = document.querySelector(".js-filter__gigiena-list");

const filterIconGigienaClose = document.querySelector(
  ".js-filter__icon-gigiena-close"
);

const filterIconGigienaOpen = document.querySelector(
  ".js-filter__icon-gigiena-open"
);

const filterIconGigienaHandler = () => {
  filterIconGigienaClose.classList.toggle("js-icon-close");
  filterIconGigienaOpen.classList.toggle("js-icon-open");
  filterGigienaList.classList.toggle("js-filter-list-open");
};

filterMenuGigiena.addEventListener("click", filterIconGigienaHandler);

// ===========================================================================
// Медицина
// ===========================================================================
const filterMenuMedicine = document.querySelector(".js-filter__menu-medicine");
const filterMedicineList = document.querySelector(".js-filter__medicine-list");

const filterIconMedicineClose = document.querySelector(
  ".js-filter__icon-medicine-close"
);

const filterIconMedicineOpen = document.querySelector(
  ".js-filter__icon-medicine-open"
);

const filterIconMedicineHandler = () => {
  filterIconMedicineClose.classList.toggle("js-icon-close");
  filterIconMedicineOpen.classList.toggle("js-icon-open");
  filterMedicineList.classList.toggle("js-filter-list-open");
};

filterMenuMedicine.addEventListener("click", filterIconMedicineHandler);
