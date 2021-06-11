const calcArea = () => {
  let btn = document.getElementById('btn1');
  btn.addEventListener('click', function() {
  const base = document.querySelector("#base");
  const height = document.querySelector("#height");
  const valor = base.value;
  const altura = height.value;
  const resultado = (valor * altura) / 2
  const span = document.querySelector('.resultado');
  span.textContent = `A área do triangulo é ${resultado}`
  })
}

window.onload = function () {
  calcArea();
}