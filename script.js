const title = document.getElementById('title');

setInterval(() => {
  const colors = ['#FF0000', '#FF4500', '#FFA500', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#8A2BE2', '#EE82EE'];
  let currentIndex = 0;

  const changeColor = () => {
    title.style.color = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
  };

  let intervalId = setInterval(changeColor, 1000);

  setTimeout(() => {
    clearInterval(intervalId);
    title.style.color = ''; // Reset to default color
  }, 17000);
}, 17000);
