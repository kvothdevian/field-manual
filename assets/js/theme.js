(function () {
  var btn = document.querySelector(".theme-btn");
  if (!btn) return;
  function label() {
    var dark = document.documentElement.dataset.theme === "dark";
    btn.textContent = dark ? "light" : "dark";
    btn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
    btn.setAttribute("title", "Toggle theme (currently " + (dark ? "dark" : "light") + ")");
  }
  btn.addEventListener("click", function () {
    var next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("fm-theme", next); } catch (e) {}
    label();
  });
  label();
})();
