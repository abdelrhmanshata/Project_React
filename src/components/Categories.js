import { useContext, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { axiosInstance } from "../api/config";
import ProductsContext from "../context/products";

export default function Categories() {
  // use Context to get Category Name & CurrentPage
  const { setProductsDetails } = useContext(ProductsContext);

  const [categoriesList, setCategoriesList] = useState([]);
  const [categoriesSelected, setCategoriesSelected] = useState(0);
  const [categoriesStart, setCategoriesStart] = useState(0);
  const [categoriesEnd, setCategoriesEnd] = useState(7);

  useEffect(() => {
    axiosInstance
      .get(`categories`)
      .then((res) => {
        setCategoriesList(["all", ...res.data]);
      })
      .catch((err) => console.log(err));
  }, []);

  const getCategorySelected = (index) => {
    setProductsDetails({
      category: categoriesList[index],
      page: 1,
    });
  };

  return (
    <div>
      <h5>Categories</h5>

      <div className="d-flex align-items-center justify-content-center">
        <div className="text-center" style={{ width: "5%" }}>
          <FaChevronLeft
            className="fs-3 "
            style={{
              color: categoriesStart === 0 ? "#cccccc" : "#0d6efd",
            }}
            onClick={() => {
              if (categoriesStart !== 0) {
                setCategoriesStart(categoriesStart - 3);
                setCategoriesEnd(categoriesEnd - 3);
              }
            }}
          />
        </div>

        <div className="text-center overflow-hidden" style={{ width: "90%" }}>
          <div className="d-flex flex-lg-row flex-column my-3 gap-3 align-items-center justify-content-center">
            {categoriesList.map((category, index) =>
              index >= categoriesStart && index < categoriesEnd ? (
                <button
                  key={index}
                  className="btn rounded-5 px-5"
                  style={{
                    height: "50px",
                    whiteSpace: "nowrap",
                    backgroundColor:
                      index === categoriesSelected ? "#0d6efd" : "#cccccc",
                    color: index === categoriesSelected ? "#cccccc" : "#0d6efd",
                  }}
                  type="button"
                  onClick={() => {
                    setCategoriesSelected(index);
                    getCategorySelected(index);
                  }}
                >
                  {category}
                </button>
              ) : null
            )}
          </div>
        </div>

        <div className="text-center" style={{ width: "5%" }}>
          <FaChevronRight
            className="fs-3"
            style={{
              color:
                categoriesEnd > categoriesList.length ? "#cccccc" : "#0d6efd",
            }}
            onClick={() => {
              if (categoriesEnd !== categoriesList.length + 1) {
                setCategoriesStart(categoriesStart + 3);
                setCategoriesEnd(categoriesEnd + 3);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}
