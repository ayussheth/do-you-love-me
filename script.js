// Get references to the buttons
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

// Add event listener to the Yes button
yesButton.addEventListener("click", function() {
  alert("I love you too !!!");
});

// Add event listener to the No button
noButton.addEventListener("click", function() {
  // Randomly position the No button
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const maxX = screenWidth - noButton.offsetWidth;
  const maxY = screenHeight - noButton.offsetHeight;
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noButton.style.position = "absolute";
  noButton.style.left = randomX + "px";
  noButton.style.top = randomY + "px";

  // Prevent further clicks on the No button
});
