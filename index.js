window.addEventListener('load', start);

function start() {
  document.getElementById('redRange').value = 0;
  document.getElementById('greenRange').value = 0;
  document.getElementById('blueRange').value = 0;
  updateValues(0, 0, 0);
  addOnChangeEvent();
}

function addOnChangeEvent() {
  var range = document.querySelectorAll('.range');
  for (let i = 0; i < range.length; i++) {
    range[i].addEventListener('change', (event) => {
      let red = document.getElementById('redRange').value;
      let green = document.getElementById('greenRange').value;
      let blue = document.getElementById('blueRange').value;
      updateValues(red, green, blue);
    });
  }
}

function updateValues(red, green, blue) {
  document.getElementById('redValue').value = red;
  document.getElementById('greenValue').value = green;
  document.getElementById('blueValue').value = blue;
  document.getElementById(
    'quadrado'
  ).style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}
