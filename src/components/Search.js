import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const [productName, setProductName] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <h5>Welcome to our shopping website ,start browsing....</h5>
      <div className="d-flex flex-md-row flex-column my-3 gap-2">
        <input
          value={productName}
          type="text"
          className="form-control me-5 py-2"
          placeholder="Search and explore ..."
          onChange={(e) => setProductName(e.target.value)}
        />
        <button
          className="btn text-white bg-primary rounded-2 px-5 py-2 "
          type="button"
          onClick={() => navigate(`/search-products/${productName}`)}
        >
          Search
        </button>
      </div>
    </div>
  );
}
