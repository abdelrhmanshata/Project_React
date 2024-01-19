import { useContext, useEffect, useState } from "react";
import Product from "./Product";
import { axiosInstance } from "../api/config";
import ProductsContext from "../context/products";
export default function Products() {
  const [products, setProducts] = useState([]);
  const { productsDetails } = useContext(ProductsContext);
  useEffect(() => {
    productsDetails.category === "all"
      ? axiosInstance
          .get(`?limit=12&skip=${(productsDetails.page - 1) * 12}`)
          .then((res) => {
            setProducts(res.data.products);
          })
          .catch((err) => console.log(err))
      : axiosInstance
          .get(`category/${productsDetails.category}`)
          .then((res) => {
            setProducts(res.data.products);
          })
          .catch((err) => console.log(err));
  }, [productsDetails]);

  return (
    <>
      <div className="row d-flex justify-content-evenly align-items-center flex-wrap">
        {products.map((product, index) => (
          <Product key={index} data={product} />
        ))}
      </div>
    </>
  );
}
