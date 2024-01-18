import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Router from "./Router/Router";
import ProductsContext from "./context/products";
import { useState } from "react";

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
