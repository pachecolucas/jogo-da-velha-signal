"use client";

import { signal } from "@preact/signals-react";

export default function Home() {
  const player = signal("X");
  const tabela = signal(["", "", "", "", "", "", "", "", ""]);

  function marcar(indice: number) {
    tabela.value[indice] = player.value;
    player.value = player.value === "X" ? "O" : "X";
    console.log(player, tabela);
  }

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td onClick={() => marcar(0)}>{tabela.value[0]}</td>
            <td onClick={() => marcar(1)}>{tabela.value[1]}</td>
            <td onClick={() => marcar(2)}>{tabela.value[2]}</td>
          </tr>
          <tr>
            <td onClick={() => marcar(3)}>{tabela.value[3]}</td>
            <td onClick={() => marcar(4)}>{tabela.value[4]}</td>
            <td onClick={() => marcar(5)}>{tabela.value[5]}</td>
          </tr>
          <tr>
            <td onClick={() => marcar(6)}>{tabela.value[6]}</td>
            <td onClick={() => marcar(7)}>{tabela.value[7]}</td>
            <td onClick={() => marcar(8)}>{tabela.value[8]}</td>
          </tr>
        </tbody>
      </table>
      <p>Jogador da vez {player.value}</p>
    </div>
  );
}
