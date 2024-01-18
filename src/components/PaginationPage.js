import React, { useContext, useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import { axiosInstance } from "../api/config";
import ProductsContext from "../context/products";

export default function PaginationPage() {
  const { productsDetails, setProductsDetails } = useContext(ProductsContext);

  const [totalProduct, setTotalProduct] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axiosInstance
      .get(productsDetails.category === "all" ? `` : `category/${productsDetails.category}`)
      .then((res) => {
        setTotalProduct(res.data.total);
      })
      .catch((err) => console.log(err));
  }, [productsDetails.category]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setProductsDetails({
      category: productsDetails.category,
      page: pageNumber,
    });
  };

  return (
    <div className="d-flex my-5 align-items-center justify-content-center ">
      <Pagination>
        {Array.from({ length: Math.ceil(totalProduct / 12) }).map(
          (_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          )
        )}
      </Pagination>
    </div>
  );
}
