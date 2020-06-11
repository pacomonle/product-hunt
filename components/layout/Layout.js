import React, { Fragment } from "react";
import Header from "../layout/Header";
// importar emotion para hacer CSS
import { Global, css } from "@emotion/core";


const Layout = (props) => {
  return (
    <Fragment>
      <Global
      styles={css`
           :root{
              --gris: #3d3d3d;
              --gris2: #6F6F6F;
              --naranja: #DA552F;
           }
           html{
               font-size: 62.5%;
               box-sizing: border-box;
           }
           *, *:before, *:after{
            box-sizing: inherit;
           }
           body{
               font-size: 1.6rem; /** 16px */
               line-height: 1.5;
           }
           h1, h2, h3 {
               margin: 0 0 2rem 0;
               line-height: 1.5;
           }
           ul{
               list-style: none;
               margin: 0px;
               padding: 0px;
           }
           a{
               text-decoration: none;
           }
      `}
      
      ></Global>
      <Header></Header>
     

      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
