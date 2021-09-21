const buttons = document.querySelectorAll('.btn'),
  message = document.querySelector('.message'),
  counter = document.querySelector('.counter'),
  maxNum = Math.pow(10, 1000);

let count = 0;

buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    if (e.target.classList.contains('btn-inc')) {
      if (count < maxNum) {
        count++;
        counter.textContent = count;
        counter.style.color = 'green';
      }
    } else if (e.target.classList.contains('btn-dec')) {
      if (count > 0) {
        count--;
        counter.textContent = count;
        counter.style.color = 'red';
      } else if (count === 0) {
        counter.style.color = '#222';
        message.textContent = 'Count cannot be less than 0';
        message.classList.add('error');
        setTimeout(() => message.remove(), 1500);
        setTimeout(() => refreshPage(), 1600);
      }
    } else {
      count = 0;
      counter.textContent = count;
      counter.style.color = '#222';
    }
  });
});

function refreshPage() {
  window.location.reload();
}
