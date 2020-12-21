const fullScreenBtn = document.querySelectorAll('.full-screen-btn');
const modalWindow = document.querySelector('.modal-window');
const container = document.querySelectorAll('.container');

for (let i = 0; i < fullScreenBtn.length; i += 1) {
  let isModalActive = false;

  fullScreenBtn[i].addEventListener('click', () => {
    if (modalWindow) {
      modalWindow.classList.toggle('active');
      fullScreenBtn[i].innerHTML = '<img src="screen.svg">';
      isModalActive = !isModalActive;
      if (isModalActive) {
        container[i].classList.add('full');
        modalWindow.appendChild(container[i]);
      } else {
        fullScreenBtn[i].innerHTML = '<img src="fullscreen.svg">';
        container[i].classList.remove('full');
        modalWindow.removeChild(container[i]);
        document.body.appendChild(container[i]);
      }
    }
  });
}
