import * as Yup from "yup";

const loginValidationSchema = Yup.object().shape({
  username: Yup.string()
    .email("Invalid email address")
    .required("Username is required"),
  password: Yup.string()
    .required("Password is required")
    .test("password-check", "Invalid password format", function (value) {
      if (!value) {
        return new Yup.ValidationError(
          "Password is required",
          null,
          "password"
        );
      }
      if (value.length < 6) {
        return new Yup.ValidationError(
          "Password must be at least 6 characters",
          null,
          "password"
        );
      }
      if (!/\d/.test(value)) {
        return new Yup.ValidationError(
          "Password must include at least one digit",
          null,
          "password"
        );
      }
      return true;
    }),
});

export default loginValidationSchema;
