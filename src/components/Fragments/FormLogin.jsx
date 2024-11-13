import { login } from "../../services/auth.services";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";
import { useEffect, useRef, useState } from "react";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    // localStorage.setItem("email", event.target.email.value);
    // localStorage.setItem("password", event.target.password.value);
    // window.location.href = "/products";
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };
  const userNameRef = useRef(null);

  useEffect(() => {
    userNameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Username"
        type="text"
        placeholder="jhon doe"
        name="username"
        ref={userNameRef}
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="*******"
        name="password"
      />
      <Button variant="bg-blue-700 w-full" type="submit">
        Login
      </Button>
      {loginFailed && (
        <p className="text-red-500 text-center mt-5">{loginFailed}</p>
      )}
    </form>
  );
};

export default FormLogin;
