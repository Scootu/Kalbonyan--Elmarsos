import React, { useState } from "react";

export const ProductContext = React.createContext({
  products: [],
  toggleFav: (id) => {},
});

export const ProductProvider = (props) => {
  const [productsList, setProductsList] = useState([
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
  ]);
  const toggleFavorites = (id) => {
    setProductsList((currentProducts) => {
      const prodIndex = currentProducts.findIndex((p) => p.id === id);

      const newFavStatus = !currentProducts[prodIndex].isFavorite;
      let updateProducts = [...currentProducts];
      updateProducts[prodIndex] = {
        ...updateProducts[prodIndex],
        isFavorite: newFavStatus,
      };
      return updateProducts;
    });
  };
  return (
    <ProductContext.Provider
      value={{ products: productsList, toggleFav: toggleFavorites }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
