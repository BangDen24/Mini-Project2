import { Link, useNavigate, useLocation } from "react-router-dom";
import "./styles/Navbar.scss";

const Navbar = () => {
  const isLoggedin = localStorage.getItem("access_token")!==null;
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="navbar">
      <Link to="/">
        <p>Home</p>
      </Link>
      {isLoggedin && location.pathname !== "/listuser" && (<Link to={"/listuser"}>
        <p>List User</p>
        </Link>)}
      {!isLoggedin && location.pathname !== "/login" && (
        <Link to="/login">
        <p>Login</p>
      </Link>
    )}   
    {isLoggedin && <button onClick={handleLogout}>Logout</button>}
    </div>
  );
};

export default Navbar;
