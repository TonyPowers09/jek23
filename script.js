const title = document.getElementById('title');

setInterval(() => {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  title.style.color = randomColor;
}, 1000);
