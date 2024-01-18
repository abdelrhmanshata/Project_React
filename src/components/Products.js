import { useEffect, useState } from "react";
import Product from "./Product";
import { axiosInstance } from "../api/config";
export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => console.log(err));
  }, []);

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
