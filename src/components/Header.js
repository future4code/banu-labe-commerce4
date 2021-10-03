import React from "react";
import styled from "styled-components";

const ContainerHeader = styled.div`
  display: flex;
  background: orange;
  align-items: center;
  justify-content: space-between;
`;

const ContainerInterno = styled.div`
  display: flex;
`;

const ImagemLogo = styled.img`
  width: 50px;
  margin: 10px;
`;

const Descricao = styled.h2`
  display: flex;
  align-items: center;
`;

const InputComentario = styled.input`
  width: 50%;
  height: 30px;
  margin: 30px;
  display: flex;
  align-items: center;
`;


function Header(props) {
  return (
    <ContainerHeader>
      <ContainerInterno>
        <ImagemLogo src={props.imagem} />
        <Descricao>{props.nome}</Descricao>
      </ContainerInterno>
    </ContainerHeader>
  );
}

export default Header;