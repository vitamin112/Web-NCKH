const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var searchBox = $(".search-box");
var menu = $("nav");
var showSearch = function () {
  searchBox.classList.toggle("active");
};
var showMenu = function () {
  menu.classList.toggle("active");
};

$(".showOn-search-btn").onclick = showSearch;
$(".showOn-menu-btn").onclick = showMenu;
var MenuItem = $$("nav li a");
MenuItem.forEach((item) => {
  item.addEventListener("click", function () {
    showMenu();
  });
});
