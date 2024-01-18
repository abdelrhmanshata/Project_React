import Search from "../components/Search";
import Categories from "../components/Categories";
import PaginationPage from "../components/PaginationPage";
import Products from "../components/Products";
export default function ProductsList() {
  return (
    <div className="container-fluid px-5 py-4">
      <Search />
      <Categories />
      <Products />
      <PaginationPage />
    </div>
  );
}
