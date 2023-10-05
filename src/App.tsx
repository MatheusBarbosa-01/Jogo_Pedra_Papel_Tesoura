import { useState, useEffect } from 'react';
import './App.css'

import x from "./images/x.png";

import tesoura from "./images/svg/tesoura.svg";
import pedra from "./images/svg/pedra.svg";
import papel from "./images/svg/papel.svg";
var num = 0;

function App() {
  const [player, setPlayer] = useState('');
  const [robot, setBot] = useState('');
  const [contador, contadorFun] = useState(0);
  const [mensageiro, mensagem] = useState('');
  const [vitorias, setVitorias] = useState(0);
  const [derrota, setDerrota] = useState(0);
  const [empate, setempate] = useState(0);

  function aspiron() {
    var grap = document.getElementById('valores');
    setPlayer(grap.value);
    contadorFun(num++)
  };

  useEffect(() => {
    var bot = Math.floor(Math.random() * 3);
    const array = [pedra, papel, tesoura];
    if (contador != 0) {
      const element = array[bot];
      setBot(element)
      console.log(bot, element);

      if (player == element) {
        mensagem('empate!');
        setempate(empate + 1);

      } else
        if (player == pedra && element == papel || player == papel &&
          element == tesoura || player == tesoura && element == pedra) {
          setDerrota(derrota + 1);
          mensagem('perdeu!');
        } else (mensagem('ganhou!'), setVitorias(vitorias + 1));
    }

  }, [contador])

  return (
    <div className="App">

      <img src={player} height="200" width="200"></img>
      <img src={x} height="200" width="200"></img>
      <img src={robot} height="200" width="200"></img>
      <br />

      <p id='ident'>Jogador</p>
      <p id='ident2'>Máquina</p>

      <select id="valores">
        <option value={pedra}>pedra</option>
        <option value={papel}>papel</option>
        <option value={tesoura}>tesoura</option>
      </select>

      <button onClick={() => { aspiron() }}>JOGAR</button>
      <br></br>

      <p id='result'>Resultado do jogo: {mensageiro}</p>
      <div id='contagens'>
        <p id='empate'>Empate: {empate}</p>
        <p id='vitorias'>Vitórias: {vitorias}</p>
        <p id='derrotas'>Derrotas: {derrota}</p>
      </div>
    </div>
  )
}

export default App