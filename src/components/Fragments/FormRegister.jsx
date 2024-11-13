import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Fullname"
        type="text"
        placeholder="insert your name here"
        name="Fullname"
      />
      <InputForm
        label="Email"
        type="email"
        placeholder="username@gmail.com"
        name="email"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="*******"
        name="password"
      />
      <InputForm
        label="Confirm Password"
        type="password"
        placeholder="*******"
        name="confirmpassword"
      />
      <Button variant="bg-blue-600 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
