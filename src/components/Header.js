import { Link } from "react-router-dom";
import { navbarStyle, navbarLinkStyle } from "../styles/navbar";
import { BiSolidCartAlt } from "react-icons/bi";
export default function Header() {
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
        <BiSolidCartAlt style={{ fontSize: "30px" }} />
        <span class="badge badge-light bg-primary">4</span>
      </div>
    </nav>
  );
}
