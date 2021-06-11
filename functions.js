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

const caclWords = () => {
  const btn2 = document.getElementById('btn2');
    btn2.addEventListener('click', function(){
      const text = document.querySelector('.words')
      const txt = text.value;
      const count = txt.split(' ').length;
      document.getElementById('resultado2').innerHTML = `Você escreveu ${count} palavras`;
    })
}

const calcPlacar = () => {
  const btn3 = document.getElementById('btn3');
  btn3.addEventListener('click', function () {
    const vitorias = document.querySelector('.vitorias');
    const empate = document.querySelector('.empates');
    const vitoriasValue = vitorias.value;
    const empatesValue = empate.value;
    const somaVitoria = vitoriasValue * 3 + empatesValue * 1;
    document.getElementById('resultado3').innerHTML = `Seu time fez ${somaVitoria} pontos`
  })
 }
window.onload = function () {
  calcArea();
  caclWords();
  calcPlacar();
}
