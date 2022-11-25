import { useDispatch, useSelector } from "react-redux";
import { ProductComponent } from "./ProductComponent";
import axios from "axios";
import { useEffect } from "react";
import { setProducts } from "../redux/actions/productActions";

export const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  //   'https://fakestoreapi.com/products'

  const allProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    allProducts();
  }, []);

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};
