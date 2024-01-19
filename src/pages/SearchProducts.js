import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../api/config";
import Product from "../components/Product";

export default function SearchProducts() {
  const params = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axiosInstance
      .get(`search?q=${params.name}`)
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err));
  }, [params]);

  return (
    <div className="container-fluid px-5 py-4">
      <div className="row d-flex justify-content-evenly align-items-center flex-wrap">
        {products.map((product, index) => (
          <Product key={index} data={product} />
        ))}
      </div>
    </div>
  );
}
