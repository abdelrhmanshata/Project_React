import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Router from "./Router/Router";
import { useState } from "react";
import ProductsContext from "./context/products";

function App() {
  const [productsDetails, setProductsDetails] = useState({
    category: "all",
    page: 1,
  });
  return (
    <ProductsContext.Provider value={{ productsDetails, setProductsDetails }}>
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </ProductsContext.Provider>
  );
}

export default App;
