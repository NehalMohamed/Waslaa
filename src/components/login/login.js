import React from "react";
import { Formik } from "formik";
import { Row, Col, Container, Button } from "react-bootstrap";
import { useTranslation } from "react-multi-lang";
import LoginForm from "./loginForm";
import LoginBg from "./loginBg";
import { Link } from "react-router-dom";
import "./login.scss";
function Login() {
  const t = useTranslation();
  return (
    <div className="loginSection">
      {/* <Container> */}
      <Row className="justify-content-md-center">
        <Col md={4} xs={6}>
          <div className="login_form">
            <h2> {t("Login.HeaderTitle")}</h2>
            <p>{t("Login.HeaderSubTitle")}</p>
            <Button
              // type="submit"
              //disabled={this.state.progressVariant == "danger" || this.state.userErr}
              className="frmBtn transBtn FullWidthBtn"
            >
              {t("Login.LoginWithGoogle")}
            </Button>
            <p className="or_line_tit">
              <span className="or_line"></span>
              <span>{t("Login.Or")}</span>
              <span className="or_line"></span>
            </p>
            <LoginForm />
            <p className="form_option">
              {t("Login.DontHaveAccount")}
              <Link to="/register">{t("Login.CreateAccount")}</Link>
            </p>
          </div>
        </Col>
        <Col md={8} xs={6}>
          <LoginBg />
        </Col>
      </Row>
      {/* </Container> */}
    </div>
  );
}

export default Login;
