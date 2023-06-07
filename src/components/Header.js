import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import user from "../images/user.svg";
import { validateToken } from "../services/AuthService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Search from "antd/es/input/Search";

const Header = () => {
  const [hasAuthorized, setHasAuthorized] = useState(false);

  function checkAuthorized() {
    let jwt = localStorage.getItem("Authorization");

    if (jwt) {
      validateToken(jwt, toast).then((data) => {
        setHasAuthorized(data.data);
      });
    } else {
      setHasAuthorized(false);
    }
  }

  useEffect(() => {
    checkAuthorized();
  }, [hasAuthorized]);

  return (
    <>
      <header className="header-upper py-3" style={{backgroundColor:"#ec9c46"}}>
        <div className="container-xxl">
          <div className="row align-items-center" >
            <div className="col-2">
              <h2>
                <Link to="/" className="text-white">
                  UygunAldım
                </Link>
              </h2>
            </div>
            <div className="col-5">
                <Search
                  type="text"
                  placeholder="Ürün Ara..."
                  size="large"
                  allowClear
                />
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex justify-content-end">
                {hasAuthorized ? (
                  <Link>
                    <div
                      className="d-flex align-items-center gap-10 text-white"
                      onClick={() => localStorage.removeItem("Authorization")}
                    >
                      <img src={user} alt="user" />
                      <p className="mb-0">Çıkış Yap</p>
                    </div>
                  </Link>
                ) : (
                  <div>
                    <Link
                      to="/login"
                      className="d-flex align-items-center gap-10 text-white"
                    >
                      <img src={user} alt="user" />
                      <p className="mb-0">Giriş Yap</p>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default Header;
