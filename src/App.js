import React from "react";
import logo1 from "./img/logo1.png";
import facebook from "./img/facebook.png";
import instagram from "./img/instagram.png";
import twitter from "./img/twitter.png";
import camisa from "./img/camisa.png";
import camisa1 from "./img/camisa1.png";
import camisa2 from "./img/camisa2.png";
import { Filters } from "./components/Filtros/Filtros";
import { Products } from "./components/Camisas/Camisas";
import { ShoppingCart } from "./components/Cart/Cart";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 16px;
  gap: 8px;
`;

const products = [
  {
    id: 1,
    name: "Camisa Balões Feminina",
    price: 65,
    photo: camisa,
  },
  {
    id: 2,
    name: "Camisa Astronauta",
    price: 85,
    photo: camisa2,
  },
  {
    id: 3,
    name: "Camisa Espaço",
    price: 30,
    photo: camisa1,
  },
  {
    id: 4,
    name: "Camisa Balões Masculina",
    price: 120,
    photo: camisa,
  },
];

class App extends React.Component {
  state = {
    minFilter: 15,
    maxFilter: 200,
    nameFilter: "Camisa",
    productsInCart: [],
  };

  onChangeMinFilter = (event) => {
    this.setState({ minFilter: event.target.value });
  };

  onChangeMaxFilter = (event) => {
    this.setState({ maxFilter: event.target.value });
  };

  onChangeNameFilter = (event) => {
    this.setState({ nameFilter: event.target.value });
  };

  onAddProductToCart = (productId) => {
    const productInCart = this.state.productsInCart.find(
      (product) => productId === product.id
    );

    if (productInCart) {
      const newProductsInCart = this.state.productsInCart.map((product) => {
        if (productId === product.id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }

        return product;
      });

      this.setState({ productsInCart: newProductsInCart });
    } else {
      const productToAdd = products.find((product) => productId === product.id);

      const newProductsInCart = [
        ...this.state.productsInCart,
        { ...productToAdd, quantity: 1 },
      ];

      this.setState({ productsInCart: newProductsInCart });
    }
  };

  onRemoveProductFromCart = (productId) => {
    const newProductsInCart = this.state.productsInCart
      .map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        }
        return product;
      })
      .filter((product) => product.quantity > 0);

    this.setState({ productsInCart: newProductsInCart });
  };

  render() {
    return (
      <>
        <Header imagem={logo1} nome="Astroclothes" />
        <AppContainer>
          <Filters
            minFilter={this.state.minFilter}
            maxFilter={this.state.maxFilter}
            nameFilter={this.state.nameFilter}
            onChangeMinFilter={this.onChangeMinFilter}
            onChangeMaxFilter={this.onChangeMaxFilter}
            onChangeNameFilter={this.onChangeNameFilter}
          />
          <Products
            products={products}
            minFilter={this.state.minFilter}
            maxFilter={this.state.maxFilter}
            nameFilter={this.state.nameFilter}
            onAddProductToCart={this.onAddProductToCart}
          />
          <ShoppingCart
            productsInCart={this.state.productsInCart}
            onRemoveProductFromCart={this.onRemoveProductFromCart}
          />
        </AppContainer>
        <Footer
          mensagem="Nos acompanhe nas redes sociais!"
          imagemFace={facebook}
          imagemInsta={instagram}
          imagemTwitter={twitter}
        />
      </>
    );
  }
}

export default App;
