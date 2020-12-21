const dropdown = document.querySelectorAll('.select-wrapper');
const option = document.querySelectorAll('.option');
const select = document.querySelectorAll('.select');

for (let i = 0; i < dropdown.length; i += 1) {
  if (dropdown[i]) {
    dropdown[i].addEventListener('click', () => {
      const secDropdown = dropdown[i].querySelector('.select');
      if (secDropdown) {
        secDropdown.classList.toggle('open');
      }
    });
  }
}

for (let i = 0; i < option.length; i += 1) {
  option[i].addEventListener('click', () => {
    if (!option[i].classList.contains('selected') && option[i] !== null) {
      const secOption = option[i];
      if (secOption) {
        const { parentNode } = secOption;
        if (parentNode) {
          const optionSelected = parentNode.querySelector('.option.selected');

          if (optionSelected) {
            optionSelected.classList.remove('selected');
            optionSelected.classList.add('selected');

            const closest = optionSelected.closest('.select');

            if (closest) {
              const selectTrigger = closest.querySelector('.select__trigger span');

              if (selectTrigger) {
                selectTrigger.textContent = option[i].textContent;
              }
            }
          }
        }
      }
    }
  });
}
window.addEventListener('click', e => {
  for (let i = 0; i < select.length; i += 1) {
    const { target } = e;

    if (target !== null) {
      if (!select[i].contains(target as Node)) {
        select[i].classList.remove('open');
      }
    }
  }
});
