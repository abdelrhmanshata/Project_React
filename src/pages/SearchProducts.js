import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../api/config";

export default function SearchProducts() {
  const params = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axiosInstance
      .get(`search?q=${params.name}`)
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container-fluid px-5 py-4">
      <h1>{products.length}</h1>
    </div>
  );
}
