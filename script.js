const title = document.getElementById('title');
const colors = ['#FF0000', '#FF4500', '#FFA500', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#8A2BE2', '#EE82EE'];
let currentIndex = 0;

const changeColor = () => {
  title.style.color = colors[currentIndex];
  currentIndex = (currentIndex + 1) % colors.length;
};

const handleClick = (event) => {
  event.preventDefault();
  window.open('https://pdfz.s3.us-west-1.amazonaws.com/cat-hat.gif', '_blank');
};

title.addEventListener('click', handleClick);
setInterval(changeColor, 1000);

