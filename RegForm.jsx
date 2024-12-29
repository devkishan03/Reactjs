import { useState } from "react";
import "./Reg.css";
import { use } from "react";
export const RegForm = () => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    pass: "",
  });

  const Handlesubmit = (event) => {
    event.preventDefault();

    console.log(user);
  };

  const HandleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <>
      <p style={{ textAlign: "center" }}>
        My Name is {user.fname} Phone is {user.phone}
      </p>
      <form onSubmit={Handlesubmit}>
        <div className="Container">
          <h1>SignUp</h1>
          <p>please fill up this form</p>
          <div className="Contents">
            <label>First Name</label>
            <input
              type="text"
              name="fname"
              value={user.fname}
              onChange={HandleInputChange}
              required
            ></input>
            <label>Last Name</label>
            <input
              type="text"
              name="lname"
              value={user.lname}
              onChange={HandleInputChange}
              required
            ></input>
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={user.email}
              onChange={HandleInputChange}
              required
            ></input>
            <label>Password</label>
            <input
              type="password"
              name="pass"
              value={user.pass}
              onChange={HandleInputChange}
              required
            ></input>
            <label>Phone Number</label>
            <input
              type="phone"
              maxLength={12}
              name="phone"
              value={user.phone}
              onChange={HandleInputChange}
              required
            ></input>
            <button className="sub-btn" type="submit">
              SignUp
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
