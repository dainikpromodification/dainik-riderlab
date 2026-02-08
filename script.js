 function searchParts() {
  const input = document.getElementById('partSearch').value.toLowerCase();
  const list = document.getElementById('partsList').getElementsByTagName('li');

  for (let i = 0; i < list.length; i++) {
    let text = list[i].textContent || list[i].innerText;
    if (text.toLowerCase().indexOf(input) > -1) {
      list[i].classList.remove('hidden');
    } else {
      list[i].classList.add('hidden');
    }
  }
}
function searchParts() {
  const input = document.getElementById('partSearch').value.toLowerCase();
  const list = document.getElementById('partsList').getElementsByTagName('li');

  for (let i = 0; i < list.length; i++) {
    let text = list[i].textContent || list[i].innerText;
    if (text.toLowerCase().indexOf(input) > -1) {
      list[i].classList.remove('hidden');
    } else {
      list[i].classList.add('hidden');
    }
  }
}
