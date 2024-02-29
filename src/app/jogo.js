import { useState } from "react";
import Porta from "../../componentes/porta";
import { atualizarPortas, criarPortas } from "../../functions/porta";

export default function jogo() {
  const [portas, setPortas] = useState(criarPortas(3, 2));
  function renderizarPorta() {
    return portas.map((porta) => {
      return (
        <Porta key={porta.numero} value={porta}
          onChange={(novaPorta) => setPortas(atualizarPortas(portas, novaPorta))}/>
      )
    })
  }
  return <div style={{ display: "flex" }}>
    {renderizarPorta()}
    </div>;
}
