import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../store/slices/cart";
import Rating from "./Rating";

export default function Product({ data }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function addProduct(item) {
    const product = {
      id: item.id,
      image: item.thumbnail,
      title: item.title,
      brand: item.brand,
      price: item.price,
      quantity: 1,
    };
    dispatch(addCart(product));
  }
  return (
    <div className="p-3 col-lg-3 col-sm-6">
      <div className="d-flex position-relative ">
        <div className="d-flex" style={{ width: "250px", height: "250px" }}>
          <img
            className="rounded"
            src={data.thumbnail}
            alt="ProductImg Not Found"
            style={{ width: "100%", height: "100%" }}
            onClick={() => {
              navigate(`/show-products/${data.id}`);
            }}
          />
        </div>
        {/* Stock */}
        <div
          className="position-absolute rounded px-3"
          style={{
            color: "#fff",
            backgroundColor: data.stock > 40 ? "green" : "red",
            top: "0px",
            left: "0px",
          }}
        >
          {data.stock > 40 ? "In stock" : "Out of stock"}
        </div>
      </div>

      <div className="row mt-3 overflow-hidden " style={{ height: "50px" }}>
        {/* Title */}
        <h4 className="col-9 overflow-hidden" style={{ whiteSpace: "nowrap" }}>
          {data.title}
        </h4>
        {/* Price */}
        <h5 className="col-3 text-end ">
          ${data.price}
          <sup>.00</sup>
        </h5>
      </div>
      {/* Description */}
      <div className="row overflow-hidden" style={{ height: "50px" }}>
        <p>{data.description}</p>
      </div>

      {/* Rating */}
      <Rating rating={data.rating} />

      {/* Add to Cart */}
      <div className="mt-2" style={{ height: "50px" }}>
        <button
          className="rounded-pill px-3"
          onClick={() => {
            addProduct(data);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
