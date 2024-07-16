import Input from "./input";

function Register() {
  return (
    <form className="form">
      <h1 className="heading">Hello User</h1>
      <Input type="text" placeholder="Username"></Input>
      <br />
      <Input type="password" placeholder="Password"></Input>
      <br />
      <Input type="password" placeholder="Confirm password"></Input>
      <br />
      <button className="button" type="submit">
        Register
      </button>
    </form>
  );
}

export default Register;
