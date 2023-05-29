const title = document.getElementById('title');
const colors = ['#FF0000', '#FF4500', '#FFA500', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#8A2BE2', '#EE82EE'];
let currentIndex = 0;

const changeColor = () => {
  title.style.color = colors[currentIndex];
  currentIndex = (currentIndex + 1) % colors.length;
};

setInterval(changeColor, 1000);
