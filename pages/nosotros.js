import React from "react";
import Layout from "../components/layout/Layout";
//importar emotion para styles components
import styled from "@emotion/styled";

const Heading = styled.h1`
  color: red;
`;

export default function Nosotros() {
  return (
    <div>
      <Layout>
        <Heading>Nosotros</Heading>
      </Layout>
    </div>
  );
}