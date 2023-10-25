var menuVisible = false;
const shade = document.getElementById("shade");
const menu = document.getElementById("menu");
function changeMenu() {
  if(menuVisible == false) {
    shade.style.display = "block";
    menu.style.display = "block";
  } else {
      shade.style.display = "none";
      menu.style.display = "none";
  }
  menuVisible = !menuVisible;
}