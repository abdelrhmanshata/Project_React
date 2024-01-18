import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { axiosInstance } from "../api/config";

export default function Categories() {
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

  return (
    <div>
      <h5>Categories</h5>

      <div className="d-flex align-items-center">
        <div className="text-center" style={{ width: "5%" }}>
          <FaChevronLeft
            className="fs-3 "
            style={{
              color: categoriesStart === 0 ? "#cccccc" : "#0d6efd",
            }}
            onClick={() => {
              if (categoriesStart !== 0) {
                setCategoriesStart(categoriesStart - 1);
                setCategoriesEnd(categoriesEnd - 1);
              }
            }}
          />
        </div>

        <div className="text-center overflow-hidden" style={{ width: "90%" }}>
          <div className="d-flex flex-row my-3 gap-3 align-items-center">
            {categoriesList.map((category, index) =>
              index >= categoriesStart && index < categoriesEnd ? (
                <button
                  class="btn rounded-5 px-5"
                  style={{
                    height: "50px",
                    whiteSpace: "nowrap",
                    backgroundColor:
                      index === categoriesSelected ? "#0d6efd" : "#cccccc",
                    color: index === categoriesSelected ? "#cccccc" : "#0d6efd",
                  }}
                  type="button"
                  onClick={() => setCategoriesSelected(index)}
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
                setCategoriesStart(categoriesStart + 1);
                setCategoriesEnd(categoriesEnd + 1);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}
