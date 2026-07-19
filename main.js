// Mobile menu toggle
(function () {
  var btn = document.getElementById('menuBtn');
  var menu = document.getElementById('menu');
  if (!btn || !menu) return;
  btn.addEventListener('click', function () { menu.classList.toggle('open'); });
  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { menu.classList.remove('open'); });
  });
})();
