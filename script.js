const output = document.getElementById('output');
const buttons = document.querySelectorAll('.btn');
const clickSound = document.getElementById('clickSound');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const key = btn.dataset.key;
    output.textContent = `Tombol ditekan: ${key}`;
    btn.classList.add('pressed');
    clickSound.currentTime = 0; // rewind sound
    clickSound.play();
    setTimeout(() => btn.classList.remove('pressed'), 150);
  });
});

// Keyboard support
document.addEventListener('keydown', (e) => { /*keydown: Saat tombol mulai ditekan ke bawah, keyup:Saat tombol dilepas (angkat jari) maka perintah akan dijalankan*/
  let key = '';
  switch(e.key) {
    case 'ArrowUp': key = 'Atas'; break;
    case 'ArrowDown': key = 'Bawah'; break;
    case 'ArrowLeft': key = 'Kiri'; break;
    case 'ArrowRight': key = 'Kanan'; break;
    case 'a': key = 'A'; break;
    case 'b': key = 'B'; break;
  }
  if(key) {
    output.textContent = `Tombol ditekan: ${key}`;
    clickSound.currentTime = 0;
    clickSound.play();
    buttons.forEach(btn => {
      if (btn.dataset.key === key) {
        btn.classList.add('pressed');
        setTimeout(() => btn.classList.remove('pressed'), 150);
      }
    });
  }
});

