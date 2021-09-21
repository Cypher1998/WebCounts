const btnInc = document.querySelector('.btn-inc'),
  btnRes = document.querySelector('.btn-res'),
  btnDec = document.querySelector('.btn-dec'),
  maxNum = Math.pow(10, 1000),
  message = document.querySelector('.message'),
  counter = document.querySelector('.counter');

let count = 0;

btnInc.addEventListener('click', function () {
  if (count < maxNum) {
    count++;
    counter.textContent = count;
  }
  console.log(count);
});

btnDec.addEventListener('click', function () {
  if (count > 0) {
    count--;
    counter.textContent = count;
  } else {
    message.textContent = 'Count cannot be less than 0';
    message.classList.add('error');
    setTimeout(() => message.remove(), 2000);
    setTimeout(() => location.reload(), 2100);
  }
});

btnRes.addEventListener('click', function () {
  if (count > 0) {
    count = 0;
    counter.textContent = count;
  }
});
