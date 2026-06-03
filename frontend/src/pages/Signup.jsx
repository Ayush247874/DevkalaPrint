import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {

   const API_URL = import.meta.env.VITE_API_URL;

  const navigate = useNavigate();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [mobile, setMobile] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleSignup = async () => {

    try {

      const response =
        await axios.post(
          `${API_URL}/api/signup`,
          {
            name,
            email,
            mobile,
            password,
          }
        );

      alert(
        "Signup Successful"
      );

      console.log(response.data);

      navigate("/login");

    } catch (error) {

      console.log(error);

      alert(
        error.response.data.message
      );

    }

  };

  return (

    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f5f5",
      }}
    >

      <div
        style={{
          width: "350px",
          background: "#fff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow:
            "0 5px 20px rgba(0,0,0,0.1)",
        }}
      >

        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Signup
        </h2>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          style={inputStyle}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Mobile Number"
          value={mobile}
          onChange={(e) =>
            setMobile(e.target.value)
          }
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          style={inputStyle}
        />

        <button
          onClick={handleSignup}
          style={{
            width: "100%",
            padding: "12px",
            border: "none",
            background: "red",
            color: "#fff",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Signup
        </button>

        <p
          style={{
            marginTop: "15px",
            textAlign: "center",
          }}
        >
          Already have account?
          {" "}
          <Link to="/login">
            Login
          </Link>
        </p>

      </div>

    </div>

  );

}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  border: "1px solid #ccc",
  borderRadius: "6px",
  boxSizing: "border-box",
};