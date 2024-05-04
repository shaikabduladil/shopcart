import { Power, Moon, SunMoon } from "lucide-react";
import React, { useContext } from "react";
import "./navbar.css";
import logo from "../../assets/images/i-con.png";
import { AppContext } from "../../Context";

const Navbar = (props) => {
  const { darkMode, setDarkMode, toggleTheme,products,setProducts } = useContext(AppContext);
  const handleLogout = () => {
    localStorage.removeItem("tokenDetails");
    props.setShowHome(false);
  };
  const backupProducts = JSON.parse(localStorage.getItem('products'));
  const handleProductSearch=(e)=>{
    const searchingItem = e.target.value.toLowerCase();
    const filteredProducts = backupProducts?.filter((item)=>{
      return (item.title).toLowerCase().indexOf(searchingItem)>-1;
    })
    setProducts(filteredProducts)
  }
  return (
    <>
      <div id="navbar">
        <nav className="navbar navbar-expand-lg navbar-light position-relative">
          <div className="container-fluid">
            <div className="logo-container">
              <a className="navbar-brand" href="#">
                <img src={logo} />
              </a>
            </div>
            <form className=" mobile-view-search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e)=>handleProductSearch(e)}
              />
            </form>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Cart
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Pricing
                  </a>
                </li>
                <li
                  className="nav-item mobile-view-logout"
                  onClick={handleLogout}
                >
                  <a className="nav-link">Logout</a>
                </li>
                <form className="desktop-search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={(e)=>handleProductSearch(e)}
                  />
                </form>
                {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown link
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> */}
                <div className="nav-btns-container">
                  <li className="switch-mode" onClick={toggleTheme}>
                    {darkMode ? (
                      <SunMoon className="theme-icon" />
                    ) : (
                      <Moon className="theme-icon" />
                    )}
                  </li>
                  <li className="log-out-btn" onClick={handleLogout}>
                    <Power />
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
