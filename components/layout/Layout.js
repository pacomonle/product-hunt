import React, { Fragment } from "react";
import Header from "../layout/Header";
// importar el head (metadatos) del html
import Head from "next/head";
// importar emotion para hacer CSS
import { Global, css } from "@emotion/core";

const Layout = (props) => {
  return (
    <Fragment>
      <Global
        styles={css`
          :root {
            --gris: #3d3d3d;
            --gris2: #6f6f6f;
            --gris3: #e1e1e1;
            --naranja: #da552f;
          }
          html {
            font-size: 62.5%;
            box-sizing: border-box;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          body {
            font-size: 1.6rem; /** 16px */
            line-height: 1.5;
          }
          h1,
          h2,
          h3 {
            margin: 0 0 2rem 0;
            line-height: 1.5;
          }
          h1,
          h2 {
           
            font-family: "Roboto Slab", serif;
            font-weight: 800;
          }
          h3{
            font-family: "PT Sans", sans-serif;
            font-weight: 700;
          }
          body{
            font-family: "PT Sans", sans-serif;
            font-weight: 700;
          }
          ul {
            list-style: none;
            margin: 0px;
            padding: 0px;
          }
          a {
            text-decoration: none;
          }
        `}
      ></Global>
      <Head>
        <html lang="es" />
        <title>Product Hunt Firebas y Next js</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU="
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto+Slab:wght@500;800&display=swap"
          rel="stylesheet"
        />

        <link rel="stylesheet" type="text/css" href="/static/css/app.css" />
      </Head>
      <Header></Header>

      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
