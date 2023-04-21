import { createSlice } from "@reduxjs/toolkit";

export type itemDetail = {
  item_name: string;
  item_id: string;
  item_image_url: string;
  item_price: number;
  item_type: "veg" | "non-veg";
  qty: number;
};

type order = {
  currentPage: string;
  placeOrder: itemDetail[];
  prevOrder: itemDetail[];
};

const initialState: order = {
  currentPage: "/home",
  placeOrder: [],
  prevOrder: [],
};

export const orderSlice = createSlice({
  name: "orderSlice",
  initialState,
  reducers: {
    reset: (state) => {
      state.currentPage = "";
      state.placeOrder = [];
    },
    manageItem: (state, action) => {
      let item: itemDetail = action.payload.item;
      let currentOrder = state.placeOrder;
      const type: "add" | "rem" = action.payload.type;

      const idx = currentOrder.findIndex((val) => val.item_id === item.item_id);

      if (type === "add") {
        if (idx === -1) {
          item.qty = 1;
          currentOrder.push(item);
          state.placeOrder = currentOrder;
        } else {
          currentOrder[idx].qty += 1;
          state.placeOrder = currentOrder;
        }
      } else {
        if (currentOrder[idx].qty > 1) {
          currentOrder[idx].qty -= 1;
          state.placeOrder = currentOrder;
        } else {
          const temp = currentOrder.filter(
            (val) => val.item_id !== item.item_id
          );
          console.log(temp);
          state.placeOrder = temp;
        }
      }
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    placeCurrentOrder: (state, action) => {
      state.prevOrder = action.payload;
      state.placeOrder = [];
      state.currentPage = "/home";
    },
  },
});

export const { reset, manageItem, setCurrentPage, placeCurrentOrder } =
  orderSlice.actions;
export default orderSlice.reducer;
