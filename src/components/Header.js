import { Link } from "react-router-dom";
import { navbarStyle, navbarLinkStyle } from "../styles/navbar";
import { BiSolidCartAlt } from "react-icons/bi";
import { useSelector } from "react-redux";
export default function Header() {
  const productsCart = useSelector((state) => state.cart.productsCart);
  return (
    <nav class="navbar navbar-expand-lg navbar-light" style={navbarStyle}>
      <Link
        className="navbar-brand nav-link px-4 text-primary"
        to="/"
        style={navbarLinkStyle}
      >
        Products App
      </Link>
      <div
        className="d-flex flex-row align-items-center justify-content-center"
        style={{ position: "absolute", right: "0", marginRight: "20px" }}
      >
        <BiSolidCartAlt style={{ fontSize: "45px" }} />
        <span
          class="badge badge-light bg-primary"
          style={{
            borderRadius: "50%",
            position: "absolute",
            top: "0",
            right: "0",
          }}
        >
          {productsCart.length}
        </span>
      </div>
    </nav>
  );
}
