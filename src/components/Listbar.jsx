import { Link, useNavigate, useLocation } from "react-router-dom";
import "./styles/Listbar.scss";

const Listbar = () => {
  const isLoggedin = localStorage.getItem("access_token") !== null;
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="listbar">
      <Link to="/">
        <svg
          width="30"
          height="30"
          viewBox="0 0 1079 1074"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="38.9999"
            y="37.0001"
            width="1000"
            height="1000"
            rx="45"
            stroke="currentColor"
            stroke-width="74"
            stroke-linejoin="round"
          />
          <rect
            x="39.1127"
            y="138"
            width="1252.65"
            height="56"
            transform="rotate(44.3021 39.1127 138)"
            fill="currentColor"
          />
          <rect
            x="181.838"
            y="21.7928"
            width="1252.44"
            height="56"
            rx="3"
            transform="rotate(44.3021 181.838 21.7928)"
            fill="currentColor"
          />
          <rect
            x="802"
            y="686"
            width="667"
            height="56"
            rx="3"
            transform="rotate(-90 802 686)"
            fill="currentColor"
          />
          <rect
            x="220"
            y="1038"
            width="652"
            height="56"
            rx="3"
            transform="rotate(-90 220 1038)"
            fill="currentColor"
          />
          <circle cx="154" cy="708" r="35" fill="currentColor" />
          <circle cx="924" cy="380" r="35" fill="currentColor" />
        </svg>
        <h3>NovaLabs.</h3>
      </Link>
      <div className="listbar-links">
        <Link to={"/"}>
          <div className="dashboard-link">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              focusable="false"
              aria-hidden="true"
            >
              <g>
                <path
                  fill="currentColor"
                  d="M11.494 4.951a.351.351 0 00-.486 0l-8.09 7.729a.352.352 0 00-.109.254v7.254a1.406 1.406 0 001.405 1.406h4.223a.703.703 0 00.704-.703v-5.976a.351.351 0 01.351-.352h3.516a.351.351 0 01.351.352v5.976a.703.703 0 00.704.703h4.22a1.407 1.407 0 001.407-1.406v-7.254a.35.35 0 00-.108-.254L11.494 4.95z"
                ></path>
                <path
                  fill="currentColor"
                  d="M21.574 11.23l-3.287-3.144V3.314a.703.703 0 00-.703-.703h-2.11a.703.703 0 00-.703.703V4.72l-2.545-2.434c-.239-.24-.593-.378-.976-.378-.38 0-.734.138-.972.379L.93 11.23a.717.717 0 00-.058.983.703.703 0 001.018.046l9.119-8.713a.352.352 0 01.486 0l9.12 8.713a.703.703 0 00.992-.019c.27-.28.248-.74-.033-1.01z"
                ></path>
              </g>
            </svg>
            <p>Dashboard</p>
          </div>
        </Link>
        {!isLoggedin && (
          <>
            <Link to="/register">
              <div className="register-link">
                <svg
                  viewBox="0 0 24 24"
                  focusable="false"
                  class="chakra-icon css-7ptry2"
                  aria-hidden="true"
                >
                  <g>
                    <path
                      fill="currentColor"
                      d="M20.99 2.182a.209.209 0 00-.156-.16c-2.574-.63-8.521 1.613-11.743 4.833a13.93 13.93 0 00-1.566 1.85c-.994-.087-1.987-.014-2.834.355-2.39 1.052-3.085 3.796-3.279 4.976a.424.424 0 00.464.492l3.837-.423c.002.29.02.578.052.866.02.2.108.386.25.527l1.486 1.482a.86.86 0 00.528.25c.286.033.573.05.86.053l-.42 3.832a.424.424 0 00.492.464c1.178-.19 3.927-.885 4.972-3.274.37-.847.445-1.836.36-2.824a13.96 13.96 0 001.855-1.567c3.232-3.216 5.462-9.03 4.842-11.732zm-8.067 7.896a2.11 2.11 0 112.983-2.984 2.11 2.11 0 01-2.983 2.984z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M7.4 18.054c-.24.241-.627.335-1.092.416-1.044.178-1.967-.725-1.779-1.78.072-.401.283-.962.415-1.094a.192.192 0 00-.16-.328 2.636 2.636 0 00-1.544.753c-1.033 1.034-1.13 4.87-1.13 4.87s3.838-.097 4.872-1.13c.417-.417.682-.961.752-1.546.017-.184-.207-.293-.334-.16z"
                    ></path>
                  </g>
                </svg>
                <p>Sign Up</p>
              </div>
            </Link>
            <Link to="/login">
              <div className="login-link">
                <svg
                  viewBox="0 0 24 24"
                  focusable="false"
                  class="chakra-icon css-7ptry2"
                  aria-hidden="true"
                >
                  <g>
                    <path
                      fill="currentColor"
                      d="M18.809 10.344h-6.153a2.11 2.11 0 01-2.11-2.11V2.083a.176.176 0 00-.175-.176H6.328A2.812 2.812 0 003.516 4.72v14.063a2.812 2.812 0 002.812 2.812h9.844a2.812 2.812 0 002.812-2.813V10.52a.176.176 0 00-.175-.176z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M18.423 8.789l-6.32-6.32a.088.088 0 00-.15.062v5.705a.703.703 0 00.703.703h5.705a.088.088 0 00.062-.15z"
                    ></path>
                  </g>
                </svg>
                <p>Sign In</p>
              </div>
            </Link>
          </>
        )}
        <Link to="/listuser">
          <div className="user-link">
            <svg
              viewBox="0 0 24 24"
              focusable="false"
              class="chakra-icon css-7ptry2"
              aria-hidden="true"
            >
              <g>
                <path
                  fill="currentColor"
                  d="M18.809 10.344h-6.153a2.11 2.11 0 01-2.11-2.11V2.083a.176.176 0 00-.175-.176H6.328A2.812 2.812 0 003.516 4.72v14.063a2.812 2.812 0 002.812 2.812h9.844a2.812 2.812 0 002.812-2.813V10.52a.176.176 0 00-.175-.176z"
                ></path>
                <path
                  fill="currentColor"
                  d="M18.423 8.789l-6.32-6.32a.088.088 0 00-.15.062v5.705a.703.703 0 00.703.703h5.705a.088.088 0 00.062-.15z"
                ></path>
              </g>
            </svg>
            <p>List Users</p>
          </div>
        </Link>
      </div>
      {isLoggedin && <button className="logout-btn" onClick={handleLogout}>Logout</button>}
    </div>
  );
};

export default Listbar;
