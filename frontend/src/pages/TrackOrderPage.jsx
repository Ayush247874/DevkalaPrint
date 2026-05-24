import { useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TrackOrderPage() {

  const [orderId, setOrderId] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [order, setOrder] =
    useState(null);

  const [error, setError] =
    useState("");

  const handleTrack = async () => {

    if (!orderId) return;

    try {

      setLoading(true);

      setError("");

      setOrder(null);

      const res = await axios.get(
        `http://localhost:5000/api/orders/track/${orderId}`
      );

      setOrder(res.data.order);
      // SHOW ORDER ID HERE
    alert(
  `Your Order ID is ${res.data.order.orderId}`
    );

    } catch (err) {

      setError("Order Not Found");

    } finally {

      setLoading(false);

    }

  };

  return (

    <>

      <Navbar />

      <section
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg,#020617,#0f172a,#111827)",
          padding: "140px 5%",
          color: "#fff",
        }}
      >

        <div
          style={{
            maxWidth: "700px",
            margin: "auto",
          }}
        >

          <h1
            style={{
              fontSize: "50px",
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            Track Order
          </h1>

          <div
            style={{
              display: "flex",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >

            <input
              type="text"
              placeholder="Enter Order ID"
              value={orderId}
              onChange={(e) =>
                setOrderId(e.target.value)
              }
              style={{
                flex: 1,
                padding: "18px",
                borderRadius: "14px",
                border: "none",
                outline: "none",
                fontSize: "16px",
              }}
            />

            <button
              onClick={handleTrack}
              style={{
                padding: "18px 30px",
                borderRadius: "14px",
                border: "none",
                background: "#ef4444",
                color: "#fff",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              {loading
                ? "Tracking..."
                : "Track"}
            </button>

          </div>

          {/* ERROR */}

          {error && (

            <div
              style={{
                marginTop: "30px",
                background: "#7f1d1d",
                padding: "20px",
                borderRadius: "14px",
              }}
            >
              {error}
            </div>

          )}

          {/* RESULT */}

          {order && (

            <div
              style={{
                marginTop: "40px",
                background:
                  "rgba(255,255,255,0.05)",
                padding: "35px",
                borderRadius: "24px",
                border:
                  "1px solid rgba(255,255,255,0.08)",
              }}
            >

              <h2
                style={{
                  marginBottom: "25px",
                }}
              >
                Order Details
              </h2>

              <p>
                <strong>Order ID:</strong>{" "}
                {order.orderId}
              </p>

              <p>
                <strong>Customer:</strong>{" "}
                {order.fullName}
              </p>

              <p>
                <strong>Service:</strong>{" "}
                {order.service}
              </p>

              <p>
                <strong>Status:</strong>{" "}
                <span
                  style={{
                    color: "#22c55e",
                    fontWeight: "bold",
                  }}
                >
                  {order.status}
                </span>
              </p>

            </div>

          )}

        </div>

      </section>

      <Footer />

    </>

  );

}