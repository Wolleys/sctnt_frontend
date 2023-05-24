import { FC } from "react";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import TextField from "../../components/form/textField";
import SubmitBtn from "../../components/form/button/submitBtn";

const LoginForm: FC = () => {
  const navigate = useNavigate();

  const initialValues = { email: "", password: "" };

  const [formValues, { handleChange, handleSubmit }] = useForm(initialValues);

  const loginForm = async () => {
    try {
      if (!formValues.username || !formValues.password) return;
      navigate("/items");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section className="center">
      <h2>Login</h2>
      <form onSubmit={handleSubmit(loginForm)} autoComplete="off">
        <TextField
          type="email"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          value={formValues.username || ""}
        />
        <TextField
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={formValues.password}
        />
        <SubmitBtn>Submit</SubmitBtn>
      </form>
    </section>
  );
};

export default LoginForm;
