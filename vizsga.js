function leftAside() {
  if (document.getElementById("headerLeftAside").style.display !== "flex") {
    document.getElementById("headerLeftAside").style.display = "flex";
  }
  else {
    document.getElementById("headerLeftAside").style.display = "none";
  }
};

function rightAside() {
  if (document.getElementById("headerRightAside").style.display !== "flex") {
    document.getElementById("headerRightAside").style.display = "flex";
  }
  else {
    document.getElementById("headerRightAside").style.display = "none";
  }
};

function menudisplay() {
  if (document.getElementById("menulist").style.display !== "flex") {
    document.getElementById("menulist").style.display = "flex";
  }
  else {
    document.getElementById("menulist").style.display = "none";
  }
}

$('.scrollTop').click(function scrollTop() {
  window.scrollTo(0, 0);
});