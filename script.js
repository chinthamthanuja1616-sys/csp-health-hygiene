// Mobile menu
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
burger.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  menu.classList.remove('open');
  burger.setAttribute('aria-expanded', false);
}));

// Gallery filters
document.querySelectorAll('.filters button').forEach(btn => btn.addEventListener('click', () => {
  document.querySelectorAll('.filters button').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  const f = btn.dataset.f;
  document.querySelectorAll('.gallery figure').forEach(fig =>
    fig.classList.toggle('hide', f !== 'all' && fig.dataset.c !== f));
}));

// Lightbox
const lb = document.getElementById('lb');
if (lb) {
const lbImg = lb.querySelector('img');
const lbCap = lb.querySelector('p');
document.querySelectorAll('.gallery figure').forEach(fig => fig.addEventListener('click', () => {
  const img = fig.querySelector('img');
  lbImg.src = img.src; lbImg.alt = img.alt;
  lbCap.textContent = fig.querySelector('figcaption').textContent;
  lb.hidden = false;
}));
lb.addEventListener('click', () => { lb.hidden = true; });
document.addEventListener('keydown', e => { if (e.key === 'Escape') lb.hidden = true; });
}
