import React from "react";
import Link from "next/link";
import Buscar from "../ui/Buscar";
import Navegacion from "../layout/Navegacion";
import Boton from "../ui/Boton";
// css de emotion/core
import { css } from "@emotion/core";
import styled from "@emotion/styled";

const ContenedorHeather = styled.div`
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;
const Logo = styled.p`
  color: var(--naranja);
  font-size: 4rem;
  line-height: 0;
  font-size: 700;
  font-family: "Roboto Slab", serif;
  margin-right: 2rem;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

const Header = () => {

const usuario = false


  return (
    <header
      css={css`
        border-bottom: 2px solid var(--gris3);
        padding: 1rem 0;
      `}
    >
      <ContenedorHeather>
        <div css={css`
        display:flex;
        align-items: center;
        `}>
          <Link href="/">
            <Logo>P</Logo>
          </Link>

          {/**BUscador aqui */}
          <Buscar></Buscar>
          {/**Nav aqui aqui */}
          <Navegacion></Navegacion>
        </div>
        <div
        css={css`
            display: flex;
            align-items: center;
        `}>
        { usuario ? (
          <>
              <p
                  css={css`
                      margin-right: 2rem;
                  `}
              >Hola: Paco</p>
              <Boton
                  bgColor="true"
                //  onClick={() => firebase.cerrarSesion() }
              >Cerrar Sesión</Boton>
          </>
      ) : (
          <>
              <Link href="/login">
                  <Boton bgColor="true">Login</Boton>
              </Link>
              <Link href="/crear-cuenta">
                  <Boton>Crear Cuenta</Boton>
              </Link>
          </>
      ) }
      </div>
      </ContenedorHeather>
    </header>
  );
};

export default Header;
