import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const Login = () => {

  const handleSubmit = (form) => {
    console.log(form.value);
  }
  
  return (
    <>
      <Meta title={"Giriş Yap"} />
      <BreadCrumb title="Login" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Giriş Yap</h3>
              <form onSubmit={(form) => handleSubmit(form)} className="d-flex flex-column gap-15">
                <CustomInput type="text" name="username" placeholder="Kullanıcı Adı" />
                <CustomInput type="password" name="password" placeholder="Şifre" />
                <div>
                  <Link to="/forgot-password">Parolanızı mı unuttunuz?</Link>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0" type="submit">
                      Giriş Yap
                    </button>
                    <Link to="/signup" className="button signup">
                      Üye Ol!
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
