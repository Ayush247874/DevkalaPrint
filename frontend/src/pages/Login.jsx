import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Login() { 

  const API_URL = import.meta.env.VITE_API_URL;

  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

const handleLogin = async () => {

  try {

    const response = await fetch(
      `${API_URL}/api/login`,
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    const data =
      await response.json();

    console.log(data);

if (data.success) {

  localStorage.setItem(
    "isUserLogin",
    "true"
  );

  localStorage.setItem(
    "userEmail",
    data.user.email
  );

  localStorage.setItem(
    "user",
    JSON.stringify(data.user)
  );

  // ADMIN CHECK
  if (data.user.isAdmin) {

    localStorage.setItem(
      "isAdmin",
      "true"
    );

    navigate("/admin");

  } else {

    navigate("/");

  }

} else {

      alert(data.message);

    }

  } catch (error) {

    console.log(error);

    alert("Server Error");

  }

};

// localStorage.setItem(
//   "user",
//   JSON.stringify(response.data.user)
// );

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
          background: "#fff",
          padding: "30px",
          borderRadius: "10px",
          width: "350px",
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
          Admin Login
        </h2>

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
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          style={inputStyle}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "12px",
            background: "red",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Login
        </button>

        <p
        style={{
            marginTop: "15px",
            textAlign: "center",
        }}
        >
        Don't have account?
        {" "}
        <Link to="/signup">
            Signup
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