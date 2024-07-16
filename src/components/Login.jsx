import Input from "./input";

function Login() {
  return (
    <form className="form">
      <h1 className="heading">Hello User</h1>
      <Input type="text" placeholder="Username"></Input>
      <br />
      <Input type="password" placeholder="Password"></Input>
      <br />
      <button className="button" type="submit">
        Login
      </button>
    </form>
  );
}

export default Login;
