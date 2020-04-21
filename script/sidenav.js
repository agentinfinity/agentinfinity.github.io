let nav = document.getElementById("sidebar"); //
nav.style.width = "0px"; // ensures it's initially closed.

function openNav() {
  nav.style.width = "250px";
}

function closeNav() {
  nav.style.width = "0";
}


function isNavOpen() {
  return nav.style.width !== "0px";
}


function toggleNav() {
  let isOpen = isNavOpen();

  isOpen ? closeNav() : openNav();

}