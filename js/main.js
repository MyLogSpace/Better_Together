// FAQ 아코디언
document.querySelectorAll('.faq-item').forEach(function (item) {
  var btn = item.querySelector('.faq-q');
  var panel = item.querySelector('.faq-a');

  btn.addEventListener('click', function () {
    var isOpen = item.getAttribute('data-open') === 'true';

    document.querySelectorAll('.faq-item[data-open="true"]').forEach(function (openItem) {
      if (openItem !== item) {
        openItem.setAttribute('data-open', 'false');
        openItem.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
        openItem.querySelector('.faq-a').style.maxHeight = null;
      }
    });

    if (isOpen) {
      item.setAttribute('data-open', 'false');
      btn.setAttribute('aria-expanded', 'false');
      panel.style.maxHeight = null;
    } else {
      item.setAttribute('data-open', 'true');
      btn.setAttribute('aria-expanded', 'true');
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
});
