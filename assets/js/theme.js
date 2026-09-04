// theme.js — shared Day/Night toggle (v2). Boot snippet in <head> sets
// data-theme (default Day); this file labels the button with the TARGET
// mode and persists the choice. Zero dependencies, file:// safe.
(function () {
  function cur() { return document.documentElement.dataset.theme || "light"; }
  function paint() {
    var b = document.getElementById("themeBtn");
    if (b) b.textContent = cur() === "dark" ? "Day" : "Night";
  }
  paint();
  var b = document.getElementById("themeBtn");
  if (b) b.addEventListener("click", function () {
    var n = cur() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = n;
    try { localStorage.setItem("fm-v2-theme", n); } catch (e) {}
    paint();
  });
})();
