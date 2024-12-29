import { useState } from "react";
import "./Log.css";
export const LoginForm = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const HandleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };
  const Handlesubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <>
      <form onSubmit={Handlesubmit}>
        <div className="Container">
          <h1>Log In</h1>
          <p>Please Login to continue</p>
          <div className="Contents">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={HandleInputChange}
              required
            ></input>

            <label>Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={HandleInputChange}
              required
            ></input>

            <button className="sub-btn" type="submit">
              Login
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
