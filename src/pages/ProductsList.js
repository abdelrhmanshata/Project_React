import Categories from "../components/Categories";
import Search from "../components/Search";

export default function ProductsList() {
  return (
    <div className="container-fluid px-5 py-4">
      <Search />
      <Categories />
    </div>
  );
}
