let result = 0;

function calculateSquareArea(side) {
  result = side * side;
  console.log(result);
}

function calculateSquarePerimeter(side) {
  result = side * 4;
  console.log(result);
}

function calculateCircleArea(radius) {
  result = Math.PI * radius ** 2;
  console.log(result);
}

function calculateCircleCircumference(radius) {
  result = Math.PI * (2 * radius);
  console.log(result);
}

function calculateCubeArea(side) {
  result = 6 * side ** 2;
  console.log(result);
}

function calculateCubeVolume(side) {
  result = side ** 3;
  console.log(result);
}

function calculateTubeArea(radius, high) {
  result = 2 * Math.PI * radius * (radius + high);
  console.log(result);
}

function calculateTubeVolume(radius, high) {
  result = radius ** 2 * Math.PI * high;
  console.log(result);
}
