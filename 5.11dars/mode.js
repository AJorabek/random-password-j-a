let modeBtn = document.getElementById("mode");
modeBtn.addEventListener("click", () => {
  toggleMode();
});
function toggleMode() {
  const body = document.body;
  body.classList.toggle("light-mode");
  body.classList.toggle("dark-mode");
}
