import React, { useState } from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { login } from "../services/AuthService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toastError, toastSuccess } from "../utils/Toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    if (username && password) {
      await login(
        {
          username: username,
          password: password,
        },
        toast
      ).then((e) => {
        localStorage.setItem("Authorization", e.data.accessToken);
        toastSuccess(e.data.message, toast);
        navigate("/");
      });
    } else {
      toastError("Formu doldurmadan ilerleyemezsiniz.", toast);
    }
  };

  return (
    <>
      <Meta title={"Giriş Yap"} />
      <BreadCrumb title="Giriş Yap" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Giriş Yap</h3>
              <div className="d-flex flex-column gap-15">
                <CustomInput
                  type="text"
                  name="username"
                  placeholder="Kullanıcı Adı"
                  onBlur={(e) => setUsername(e.target.value)}
                />
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Şifre"
                  onBlur={(e) => setPassword(e.target.value)}
                />
                <div>
                  <Link to="/forgot-password">Parolanızı mı unuttunuz?</Link>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button
                      className="button border-0"
                      onClick={() => handleSubmit()}
                    >
                      Giriş Yap
                    </button>
                    <Link to="/signup" className="button signup">
                      Üye Ol!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
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

export default Login;
