import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../store/slices/cart";

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
      <div className="position-relative">
        <div style={{ width: "250px", height: "250px" }}>
          <img
            className="rounded"
            src={data.thumbnail}
            alt="ProductImg Not Found"
            style={{ width: "100%", height: "100%" }}
            onClick={() => {
              navigate(`/details/${data.id}`);
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
      <div className="d-flex mt-3">
        {/* title */}
        <h3 className="flex-fill">{data.title}</h3>

        <h5 className="text-end ">
          ${/* price */}
          {data.price}
          <sup>.00</sup>
        </h5>
      </div>
      {/* Description */}
      <p>{data.description}</p>
      {/* Rating */}

      <button
        className="rounded-pill px-3"
        onClick={() => {
          addProduct(data);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
