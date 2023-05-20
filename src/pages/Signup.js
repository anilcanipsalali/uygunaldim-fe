import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import {
  validatePassword,
  validateEmail,
  validateUsername,
} from "../utils/Validation";
import { register } from "../services/AuthService";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toastError, toastSuccess } from "../utils/Toast";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    username: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const handleSubmit = async () => {
    if (validateAll(username, email, password, confirmPassword)) {
      await register(
        {
          email: email,
          username: username,
          password: password,
          role: {
            name: "USER",
          },
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

  const handleEmail = (email) => {
    setEmail(email);
    if (validateEmail(email)) {
      setErrors((errors) => ({
        ...errors,
        ...{ email: false },
      }));
    } else {
      setErrors((errors) => ({
        ...errors,
        ...{ email: true },
      }));
    }
  };

  const handleUsername = (username) => {
    if (validateUsername(username)) {
      setUsername(username);
      setErrors((errors) => ({
        ...errors,
        ...{ username: false },
      }));
    } else {
      setErrors((errors) => ({
        ...errors,
        ...{ username: true },
      }));
    }
  };

  const handlePassword = (password) => {
    setPassword(password);
    if (validatePassword(password)) {
      setErrors((errors) => ({
        ...errors,
        ...{ password: false },
      }));
    } else {
      setErrors((errors) => ({
        ...errors,
        ...{ password: true },
      }));
    }
  };

  const handleConfirmPassword = (confirmPassword) => {
    setConfirmPassword(confirmPassword);
    if (confirmPassword === password) {
      setErrors((errors) => ({
        ...errors,
        ...{ confirmPassword: false },
      }));
    } else {
      setErrors((errors) => ({
        ...errors,
        ...{ confirmPassword: true },
      }));
    }
  };

  const validateAll = (username, email, password, confirmPassword) => {
    return (
      validateEmail(email) &&
      validateUsername(username) &&
      validatePassword(password) &&
      confirmPassword === password
    );
  };

  return (
    <>
      <Meta title={"Üye Ol"} />
      <BreadCrumb title="Üye Ol" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Kayıt Ol</h3>
              <div className="d-flex flex-column gap-15">
                <CustomInput
                  type="text"
                  name="username"
                  placeholder="Kullanıcı Adı"
                  onBlur={(e) => handleUsername(e.target.value)}
                  className={`${errors.username ? "error" : null}`}
                />
                {errors.username ? (
                  <h1 className="error-explanation">
                    Kullanıcı adı 8-20 karakter uzunluğunda olmalı.
                  </h1>
                ) : null}
                <CustomInput
                  type="email"
                  name="email"
                  placeholder="E-posta"
                  onBlur={(e) => handleEmail(e.target.value)}
                  className={`${errors.email ? "error" : null}`}
                />
                {errors.email ? (
                  <h1 className="error-explanation">
                    E-Posta adresine uygun formatta olmalı Örn.: ornek@gmail.com
                  </h1>
                ) : null}
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Şifre"
                  onBlur={(e) => handlePassword(e.target.value)}
                  className={`${errors.password ? "error" : null}`}
                />
                {errors.password ? (
                  <h1 className="error-explanation">
                    Şifren 8-16 karakter, en az bir büyük ve küçük harf ve bir
                    rakam içermeli.
                  </h1>
                ) : null}
                <CustomInput
                  type="password"
                  name="confirmPassword"
                  placeholder="Şifreyi Onayla"
                  onBlur={(e) => handleConfirmPassword(e.target.value)}
                  className={`${errors.confirmPassword ? "error" : null}`}
                />
                {errors.confirmPassword ? (
                  <h1 className="error-explanation">
                    Doğrulama şifren ile şifren uyuşmuyor.
                  </h1>
                ) : null}
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button onClick={handleSubmit} className="button border-0">
                      Kayıt Ol!
                    </button>
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

export default SignUp;
