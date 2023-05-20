import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const SignUp = () => {

  const handleSubmit = (form) => {
    console.log(form);
  }

  const handleEmail = (email) => {
    console.log(email);
  }

  const handleUsername = (username) => {
    console.log(username);
  }

  return (
    <>
      <Meta title={"Sign Up"} />
      <BreadCrumb title="Sign Up" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Kayıt Ol</h3>
              <form onSubmit={(form) => handleSubmit(form.target)} className="d-flex flex-column gap-15">
                <CustomInput type="text" name="username" placeholder="Kullanıcı Adı" onChange={(e) => handleUsername(e.target.value)} />
                <CustomInput type="email" name="email" placeholder="E-posta"  onChange={(e) => handleEmail(e.target.value)} />
                <CustomInput type="password" name="password" placeholder="Şifre" />
                <CustomInput type="password" name="confirmPassword" placeholder="Şifreyi Onayla" />
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button type="submit" className="button border-0">Kayıt Ol!</button>
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

export default SignUp;
