import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


import { useState } from "react";
import "./SignInUp.css";

const SignUp = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [name,setname]=useState("");
  const navigate = useNavigate();

  const showToastMessage = () => {
    toast.success("Account is Created !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: add logic to submit the form
    e.preventDefault();
    sessionStorage.setItem("id", id);
    sessionStorage.setItem("password", password);
    sessionStorage.setItem("name",name);
    console.log("account created successfully");
    showToastMessage();
    setId("");
    setPassword("");
    navigate("/signin");
  };




  return (
    <div className="app-container" >
    <div className="form-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
      <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setname(e.target.value)}
          className="input-field"
          required={true}
        />
        <label>Email:</label>
        <input
          type="email"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="input-field"
          required={true}
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
          required={true}
        />
        <button type="submit" className="submit-button">
          Sign Up
        </button>
      </form>
    </div>
    </div>
  );
};

export default SignUp;
