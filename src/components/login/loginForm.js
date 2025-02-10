import React from "react";
import { Row, Button, Form } from "react-bootstrap";
import { useTranslation } from "react-multi-lang";
function LoginForm() {
  const t = useTranslation();
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>{t("Login.email")}</Form.Label>
        <Form.Control
          type="email"
          placeholder={t("Login.email")}
          required
          name="email"
          //onChange={this.fillFormData}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>{t("Login.password")}</Form.Label>
        <Form.Control
          type="password"
          placeholder={t("Login.password")}
          required
          name="password"
          //onChange={handlePassChange}
        />
      </Form.Group>
      <Button
        type="submit"
        //disabled={this.state.progressVariant == "danger" || this.state.userErr}
        className="frmBtn purbleBtn FullWidthBtn"
      >
        {t("Login.signIn")}
      </Button>
    </Form>
  );
}

export default LoginForm;
