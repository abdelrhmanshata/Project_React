import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const ProductsList = React.lazy(() => import("../pages/ProductsList"));
const SearchProducts = React.lazy(() => import("../pages/SearchProducts"));
const NotFound = React.lazy(() => import("../pages/NotFound"));

export default function Router() {
  return (
    <Suspense fallback={<h5>Loading ...</h5>}>
      <Routes>
        <Route path="" element={<ProductsList />} />
        <Route path="/search-products/:name" element={<SearchProducts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
