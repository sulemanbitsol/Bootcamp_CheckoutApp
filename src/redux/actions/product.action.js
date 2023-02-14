import { createAsyncThunk } from "@reduxjs/toolkit";
import { addProductURL, productListURL } from "../../apis/products.api";
import axios from "axios";

export const addProduct = createAsyncThunk("product/addProduct", async payload => {
  const res = await axios.post(addProductURL(), {...payload}, {headers: {Authorization: `Bearer ${localStorage.getItem("auth_token")}` }} )
  return res;
});

export const getProductList = createAsyncThunk("product/getProducts", async payload => {
  const res = await axios.get(productListURL(), {headers: {Authorization:  `Bearer ${localStorage.getItem("auth_token")}` }});
  return res.data.products;
});
