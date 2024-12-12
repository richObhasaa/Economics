$(document).ready(function () {
  // Animasi background bintang
  const canvas = document.getElementById('starCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ['#ff4c4c', '#4cff4c', '#4c4cff', '#ffff4c', '#ff4cff'];
  const stars = [];
  for (let i = 0; i < 200; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2,
      colorIndex: Math.floor(Math.random() * colors.length),
      speed: Math.random() * 0.5 + 0.2,
    });
  }

  function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    stars.forEach((star) => {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = colors[star.colorIndex];
      ctx.shadowBlur = 10;
      ctx.shadowColor = colors[star.colorIndex];
      ctx.fill();

      star.y -= star.speed;
      if (star.y < 0) {
        star.y = canvas.height;
        star.x = Math.random() * canvas.width;
      }

      if (Math.random() < 0.01) {
        star.colorIndex = Math.floor(Math.random() * colors.length);
      }
    });

    requestAnimationFrame(drawStars);
  }

  drawStars();

  $(window).resize(function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

// Interaksi tombol
  $('#startButton').click(function () {
    alert('Welcome to Rz UP! Enjoy your journey.');
  });

  // Toggle forms
  $('#showRegister').click(function (e) {
    e.preventDefault();
    $('#loginForm').hide();
    $('#registerForm').fadeIn();
  });

  $('#showLogin').click(function (e) {
    e.preventDefault();
    $('#registerForm').hide();
    $('#loginForm').fadeIn();
  });
});

document.querySelector('#loginForm form').addEventListener('submit', function (e) {
  e.preventDefault(); // Mencegah pengiriman form default
  window.location.href = "halaman-utama.html"; // Ganti dengan URL halaman utama Anda
});

// Mengarahkan ke halaman utama setelah daftar
document.querySelector('#registerForm form').addEventListener('submit', function (e) {
  e.preventDefault(); // Mencegah pengiriman form default
  window.location.href = "halaman-utama.html"; // Ganti dengan URL halaman utama Anda
});
