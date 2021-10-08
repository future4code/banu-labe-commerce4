import React from "react";
import styled from "styled-components";

const ContainerFooter = styled.div`
  display: flex;
  background: orange;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
`;

const ContainerInterno = styled.div`
  display: flex;
  background: orange;
  align-items: center;
  justify-content: space-between;
`;

const ImagemFace = styled.img`
  width: 30px;
`;
const ImagemInsta = styled.img`
  width: 30px;
`;

const ImagemTwitter = styled.img`
  width: 30px;
`;
const Mensagem = styled.h2``;

function Footer(props) {
  return (
    <ContainerFooter>
      <ContainerInterno>
        <Mensagem>{props.mensagem}</Mensagem>
      </ContainerInterno>
      <ImagemFace src={props.imagemFace} />
      <ImagemInsta src={props.imagemInsta} />
      <ImagemTwitter src={props.imagemTwitter} />
    </ContainerFooter>
  );
}

export default Footer;