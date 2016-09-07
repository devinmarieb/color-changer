function resetToWhite() {
  document.body.style.backgroundColor = "#FFFFFF";
};

function getRandomColor() {
  var generateColor = '#'+Math.floor(Math.random()*16777215).toString(16);
  console.log(generateColor);
  document.body.style.backgroundColor = generateColor;
};
//http://www.paulirish.com/2009/random-hex-color-code-snippets/

$('#reset').on('click', function() {
  resetToWhite();
});

$('#random').on('click', function() {
  getRandomColor();
});
