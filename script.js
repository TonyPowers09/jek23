const title = document.getElementById('title');
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let currentIndex = 0;

function changeColor() {
  title.style.color = colors[currentIndex];
  currentIndex = (currentIndex + 1) % colors.length;
}

setInterval(changeColor, 1000);
setInterval(changeColor, 17000);

