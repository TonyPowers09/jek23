// Function to change the title on mouseover
function changeTitle() {
  var title = document.getElementById("title");
  title.innerHTML = "Welcome to books4pheakdey!";
}

// Function to change the title back on mouseout
function resetTitle() {
  var title = document.getElementById("title");
  title.innerHTML = "Hello Pheakdey!";
}

// Add event listeners to the title element
var title = document.getElementById("title");
title.addEventListener("mouseover", changeTitle);
title.addEventListener("mouseout", resetTitle);

