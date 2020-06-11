import React from "react";
import Link from "next/link";
import Buscar from "../ui/Buscar";
import Navegacion from "../layout/Navegacion";

const Header = () => {
  return (
    <div>
      <div>
        <div>
          <p>P</p>
          {/**BUscador aqui */}
          <Buscar></Buscar>
          {/**Nav aqui aqui */}
          <Navegacion></Navegacion>
        </div>
        <div>
          {/**Administracion usuarios */}
          <p>Hola: Paco</p>
          <button type="button">Cerrar sesion</button>
          <Link href="/">Login</Link>
          <Link href="/">Crear cuenta</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
