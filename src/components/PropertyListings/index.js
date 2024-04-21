import React, { Component } from "react";

import PropertyCard from "/home/theia/totality-frontend/src/components/PropertyCard";

import Cookies from "js-cookie";

import "./index.css";

class PropertyListings extends Component {
  state = {
    properties: [],
    isLoading: false,
    error: null,
  };

  onClickLogout = () => {
    const { history } = this.props;
    Cookies.remove("jwt_token");
    history.replace("/login");
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    const url = "https://totalitycorpapi.onrender.com/properties";

    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong...");
        }
      })
      .then((data) => this.setState({ properties: data, isLoading: false }))
      .catch((error) => this.setState({ error, isLoading: false }));
  }

  render() {
    const { properties, isLoading, error } = this.state;

    if (isLoading) {
      return (
        <div className="container">
          <p className="load">Loading...Please wait</p>
        </div>
      );
    }
    if (error) {
      return <div>{error.message}</div>;
    }

    return (
      <div className="home">
        <div className="nav">
          <img
            className="web-img"
            src="https://img.freepik.com/premium-vector/home-rent-logo-design-icon_920832-47.jpg"
            alt="website logo"
          />
          <h1 className="heading">TORTALITY RENTAL</h1>
        </div>
        <button className="btn" onClick={this.onClickLogout}>
          Logout
        </button>
        <ul className="properties">
          {properties.map((item) => (
            <PropertyCard key={item.id} item={item} />
          ))}
        </ul>
      </div>
    );
  }
}

export default PropertyListings;
