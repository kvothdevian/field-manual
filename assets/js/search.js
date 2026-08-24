(function () {
  var box = document.querySelector(".search-box");
  if (!box) return;
  var input = box.querySelector("input");
  var panel = document.getElementById("search-results");

  function close() {
    panel.classList.remove("open");
    panel.innerHTML = "";
  }

  function snippet(text, q) {
    var i = text.toLowerCase().indexOf(q);
    if (i < 0) return text.slice(0, 90);
    var start = Math.max(0, i - 40);
    return (start > 0 ? "\u2026" : "") + text.slice(start, start + 95);
  }

  function run() {
    var q = input.value.trim().toLowerCase();
    if (q.length < 2) { close(); return; }
    var hits = [];
    for (var d of window.SEARCH_INDEX || []) {
      var hay = (d.title + " " + d.text).toLowerCase();
      if (hay.indexOf(q) > -1) {
        hits.push(d);
        if (hits.length >= 8) break;
      }
    }
    panel.innerHTML = "";
    if (!hits.length) {
      panel.innerHTML = '<div class="search-empty">nothing found for "' + q.replace(/</g, "&lt;") + '"</div>';
    } else {
      for (var h of hits) {
        var a = document.createElement("a");
        a.href = h.path;
        a.innerHTML =
          '<span class="r-title"></span><span class="r-snippet"></span>';
        a.querySelector(".r-title").textContent = h.title;
        a.querySelector(".r-snippet").textContent = snippet(h.text, q);
        panel.appendChild(a);
      }
    }
    panel.classList.add("open");
  }

  input.addEventListener("input", run);
  input.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { input.value = ""; close(); input.blur(); }
  });
  document.addEventListener("click", function (e) {
    if (!box.contains(e.target)) close();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "/" && document.activeElement !== input && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) {
      e.preventDefault();
      input.focus();
    }
  });
})();
