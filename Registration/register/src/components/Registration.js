import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Registration() {
  const [email, setEmail] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();

  async function submit(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/auth/register", {
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: password,
        username: username,
      });
      alert("Registration Successfully");
      setEmail("");
      setFirstName("");
      setLastName("");
      setPassword("");
      setUsername("");
    } catch (err) {
      alert("Registration Failed");
    }
  }

  return (
    <div className="container mt-4">
      <form>
        <div class="form-group">
          <label>Email address</label>
          <input
            type="email"
            class="form-control"
            placeholder="Enter Email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div class="form-group">
          <label>First Name</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter First Name"
            value={firstName}
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
          />
        </div>
        <div class="form-group">
          <label>Last Name</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Last Name"
            value={lastName}
            onChange={(event) => {
              setLastName(event.target.value);
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
        <button class="btn btn-primary mt-4" onClick={submit}>
          Register
        </button>
      </form>
      <p>
        Back to login
        <span className="line">
          <Link to={"/"}>Login</Link>
        </span>
      </p>
    </div>
  );
}

export default Registration;
