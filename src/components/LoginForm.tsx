import React, { ChangeEvent, useEffect, useState } from "react";
import { useFormik } from "formik";
import "./loginForm.scss";
import InputField from "./common/InputField";
import { InputFieldEnum } from "../utils/enums";
import RememberMeCheckbox from "./common/RememberMeCheckbox";
import ActionButton from "./common/ActionButton";
import LoginFormInitialData from "./loginFormInitialData";
import loginValidationSchema from "./loginValidationSchema";
import axios, { AxiosError } from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ILoginButton {
  onLogin?: (userEmail: string, password: string) => void;
}

const LoginForm = ({ onLogin }: ILoginButton) => {
  const [rememberMe, setRememberMe] = useState(false);
  const [rememberedEmail, setRememberedEmail] = useState(
    localStorage.getItem("rememberedUsername") || ""
  );
  const [password, setPassword] = useState("");

  useEffect(() => {
    const savedUsername = localStorage.getItem("rememberedUsername");
    if (savedUsername) {
      formik.setFieldValue("username", savedUsername);
      setRememberMe(true);
    }
  }, []);

  const formik = useFormik({
    initialValues: LoginFormInitialData,
    validationSchema: loginValidationSchema,
    onSubmit: () => {
      const userEmail = formik.values.username;
      const passwordValue = formik.values.password;
      onLogin && onLogin(userEmail, passwordValue);
    },
  });

  const handleLoginRequest = async (userEmail: string, password: string) => {
    try {
      const response = await axios.post("/login", {
        username: userEmail,
        password: password,
      });

      const data = response.data;

      onLogin && onLogin(userEmail, data.access);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage = (error as AxiosError).response?.statusText;
        toast.error(errorMessage || "An error occurred during login");
      } else {
        toast.error("An error occurred during login");
      }
    }
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
    localStorage.setItem("rememberMe", !rememberMe ? "true" : "false");

    if (!rememberMe && formik.values.username) {
      localStorage.setItem("rememberedUsername", formik.values.username);
    } else {
      localStorage.removeItem("rememberedUsername");
    }
  };

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRememberedEmail(e.target.value);
    formik.handleChange(e);
    if (rememberMe && e.target.value) {
      localStorage.setItem("rememberedUsername", e.target.value);
    }
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    formik.setFieldValue("password", newPassword);
  };

  return (
    <div className="outer-gradient-container">
      <div className="login-form-container">
        <form
          className="login-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleLoginRequest(rememberedEmail, password);
          }}
        >
          <h1>SIGN IN TO YOUR ACCOUNT</h1>
          <div className="login-form-content">
            <InputField
              name={InputFieldEnum.USERNAME}
              value={formik.values.username}
              onChange={handleUsernameChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.username && formik.errors.username
                  ? formik.errors.username
                  : undefined
              }
              type={InputFieldEnum.USERNAME}
            />
            <InputField
              name={InputFieldEnum.PASSWORD}
              value={formik.values.password}
              onChange={handlePasswordChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.password && formik.errors.password
                  ? formik.errors.password
                  : undefined
              }
              type={InputFieldEnum.PASSWORD}
            />
            <RememberMeCheckbox
              checked={rememberMe}
              onChange={handleRememberMeChange}
            />
            <ActionButton label="Login now" type="submit" />
            <ToastContainer
              position="top-center"
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
