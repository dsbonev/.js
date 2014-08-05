Array.prototype.slice.call(document.querySelectorAll('tr td:nth-child(2)')).forEach(function (item) {
  if (item.textContent.trim().toLowerCase() != 'new') item.parentElement.style.display = 'none';
  else window.open("https://www.youtube.com/results?search_query=" + encodeURIComponent(item.parentElement.lastElementChild.textContent.trim() + ' ' + item.parentElement.lastElementChild.previousElementSibling.textContent.trim()), '_blank')
})
