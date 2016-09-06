function resetToWhite() {
  document.body.style.backgroundColor = "#FFFFFF";
};

function getRandomColor() {
  var generateColor = '#'+Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = generateColor;
};

$('#reset').on('click', function() {
  resetToWhite();
});

$('#random').on('click', function() {
  getRandomColor();
});
