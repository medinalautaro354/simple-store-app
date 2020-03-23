import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Products from "./Products/Products";
import AboutUs from "./AboutUs/AboutUs";
import Error from "./Error/Error";
import products from "../data/data.json";
import Header from "./Header/Header";
import ProductDetail from "./ProductDetail/ProductDetail";
import NavigationBar from "./NavigationBar/NavigationBar";
import Contact from "./Contact/Contact";

class Router extends Component {
  state = {
    products: [],
    searchTerm: ""
  };

  componentWillMount() {
    this.setState({
      products
    });
  }

  searchProduct = term => {
    if (term.length > 3) {
      this.setState({
        searchTerm: term
      });
    } else {
      this.setState({
        searchTerm: ""
      });
    }

    console.log("Hola test");
  };

  render() {
    let products = [...this.state.products];
    let search = this.state.searchTerm;
    let result;

    if (search !== "") {
      result = products.filter(
        f => f.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
      );
    } else {
      result = products;
    }

    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <NavigationBar />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Products
                  products={result}
                  searchProduct={this.searchProduct}
                />
              )}
            />
            <Route exact path="/nosotros" component={AboutUs} />
            <Route
              exact
              path="/productos"
              render={() => (
                <Products
                  products={result}
                  searchProduct={this.searchProduct}
                />
              )}
            />
            <Route
              exact
              path="/producto/:id"
              render={props => {
                let id = props.location.pathname.replace("/producto/", "");
                return <ProductDetail product={this.state.products[id]} />;
              }}
            />
            <Route exact path="/contacto" component={Contact} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
