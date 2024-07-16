import Login from "./components/Login";
import Register from "./components/Register";

var userIsRegistered = true;

function App() {
  return <div>{userIsRegistered ? <Register /> : <Login />}</div>;
}

export default App;
