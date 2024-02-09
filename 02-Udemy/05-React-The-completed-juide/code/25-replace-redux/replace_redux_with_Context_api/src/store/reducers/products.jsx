import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
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
  ],
};

export const productReducer = createSlice({
  name: "productReducer",
  initialState: initialState,
  reducers: {
    TOGGLE_FAV: (state, action) => {
      const prodIndex = state.products.findIndex(
        (p) => p.id === action.payload
      );
      if (prodIndex != -1) {
        const newFavStatus = !state.products[prodIndex].isFavorite;
        state.products[prodIndex] = {
          ...state.products[prodIndex],
          isFavorite: newFavStatus,
        };
      }
    },
  },
});

export const { TOGGLE_FAV } = productReducer.actions;
