import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  async function submit(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/auth/login", {
        username: username,
        password: password,
      });
      alert("Login Successfully");
      setUsername("");
      setPassword("");
    } catch (err) {
      alert("Login Failed");
    }
  }

  return (
    <section>
      <div className="container mt-4">
        <form>
          <div class="form-group">
            <label>Username</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter Username"
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label>Password</label>
            <input
              type="password"
              class="form-control"
              placeholder="Enter Password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
          <button class="btn btn-primary mt-4" onClick={submit}>
            Login
          </button>
        </form>
        <p>
          Need an Account?
          <span className="line">
            <Link to={"/register"}>Register</Link>
          </span>
        </p>
      </div>
    </section>
  );
}

export default Login;
