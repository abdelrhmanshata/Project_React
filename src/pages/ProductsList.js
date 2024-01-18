import { useState } from "react";
import Search from "../components/Search";
import Categories from "../components/Categories";
import PaginationPage from "../components/PaginationPage";
import Products from "../components/Products";
export default function ProductsList() {
  const [category, setCategory] = useState("all");
  return (
    <div className="container-fluid px-5 py-4">
      <Search />
      <Categories
        categorySelected={(categoryName) => setCategory(categoryName)}
      />
      <Products />
      <PaginationPage categorySelected={category} />
    </div>
  );
}
