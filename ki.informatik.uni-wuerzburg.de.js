Array.prototype.slice.call(document.querySelectorAll('tr td:nth-child(2)')).forEach(function (item) {
  if (item.textContent.trim().toLowerCase() != 'new') item.parentElement.style.display = 'none';
})
