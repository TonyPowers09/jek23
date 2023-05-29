const title = document.getElementById('title');
const colors = ['#FF0000', '#FF4500', '#FFA500', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#8A2BE2', '#EE82EE'];
let currentIndex = 0;

const handleClick = () => {
  window.location.href = 'https://pdfz.s3.us-west-1.amazonaws.com/giphy.gif';
};

title.addEventListener('click', handleClick);
setInterval(changeColor, 1000);

