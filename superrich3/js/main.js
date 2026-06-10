// ── HAMBURGER MENU ──
const hamburger = document.querySelector('.nav__hamburger');
const offscreen = document.querySelector('.nav__offscreen');

if (hamburger && offscreen) {
  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('actief');
    offscreen.classList.toggle('actief');
  });

  // sluit menu bij klik op een link
  offscreen.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      hamburger.classList.remove('actief');
      offscreen.classList.remove('actief');
    });
  });
}

// ── CATEGORIEFILTER ──
const filterKnoppen = document.querySelectorAll('.filter-knop');
const productKaarten = document.querySelectorAll('.product-kaart');

filterKnoppen.forEach(function (knop) {
  knop.addEventListener('click', function () {
    // actieve knop bijwerken
    filterKnoppen.forEach(function (k) { k.classList.remove('actief'); });
    knop.classList.add('actief');

    const gekozen = knop.dataset.filter;

    productKaarten.forEach(function (kaart) {
      if (gekozen === 'alles' || kaart.dataset.categorie === gekozen) {
        kaart.classList.remove('verborgen');
      } else {
        kaart.classList.add('verborgen');
      }
    });
  });
});
