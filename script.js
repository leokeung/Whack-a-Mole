document.addEventListener("DOMContentLoaded", function () {
  main();
});

function main() {
  menu();
}

function menu() {
  const mainContainer = document.getElementById("mainContainer");
  mainContainer.style.backgroundImage = 'url("./background.png")';

  const btn = document.createElement("button");
  btn.id = "startbtn";
  btn.textContent = "START";
  mainContainer.appendChild(btn);
}
