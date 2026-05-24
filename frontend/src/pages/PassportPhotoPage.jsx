import { useState } from "react";

export default function PassportPhotoPage() {
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        padding: "40px 5%",
        fontFamily: "'Outfit', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          alignItems: "start",
        }}
      >
        {/* Left Product Image */}
        <div
          style={{
            background: "#fff",
            borderRadius: "18px",
            padding: "20px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          }}
        >
          <img
            src="https://i.imgur.com/XhJ4K8v.png"
            alt="Passport Photo"
            style={{
              width: "100%",
              borderRadius: "12px",
            }}
          />
        </div>

        {/* Right Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          {/* Product Details */}
          <div
            style={{
              background: "#fff",
              padding: "24px",
              borderRadius: "18px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            }}
          >
            <h1
              style={{
                fontSize: "2rem",
                marginBottom: "10px",
              }}
            >
              Passport Size Photo
            </h1>

            <p
              style={{
                color: "#666",
                lineHeight: 1.6,
              }}
            >
              Upload your photo and get high-quality
              passport size prints delivered quickly.
            </p>

            <div
              style={{
                marginTop: "18px",
                background: "#D40000",
                color: "#fff",
                display: "inline-block",
                padding: "8px 18px",
                borderRadius: "8px",
                fontWeight: 600,
              }}
            >
              ₹99 / 42 Photos
            </div>

            {/* Upload */}
            <div
              style={{
                marginTop: "24px",
              }}
            >
              <label
                style={{
                  display: "block",
                  marginBottom: "10px",
                  fontWeight: 600,
                }}
              >
                Upload Your Photo
              </label>

              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ddd",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>

          {/* Preview */}
          <div
            style={{
              background: "#fff",
              padding: "24px",
              borderRadius: "18px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            }}
          >
            <h2
              style={{
                marginBottom: "18px",
              }}
            >
              Preview
            </h2>

            <div
              style={{
                width: "100%",
                height: "300px",
                border: "2px dashed #ddd",
                borderRadius: "12px",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#fafafa",
              }}
            >
              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <span
                  style={{
                    color: "#999",
                  }}
                >
                  Image Preview
                </span>
              )}
            </div>
          </div>

          {/* Shipping Form */}
          <div
            style={{
              background: "#fff",
              padding: "24px",
              borderRadius: "18px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            }}
          >
            <h2
              style={{
                marginBottom: "20px",
              }}
            >
              Shipping Address
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "14px",
              }}
            >
              <input placeholder="Full Name" />
              <input placeholder="Address" />
              <input placeholder="City" />
              <input placeholder="State" />
              <input placeholder="Pincode" />
              <input placeholder="Mobile Number" />
            </div>

            <button
              style={{
                width: "100%",
                marginTop: "24px",
                background: "#D40000",
                color: "#fff",
                border: "none",
                padding: "14px",
                borderRadius: "12px",
                fontSize: "1rem",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>

      <style>{`
        input {
          width: 100%;
          padding: 12px;
          border-radius: 10px;
          border: 1px solid #ddd;
          outline: none;
          font-size: 0.95rem;
        }

        @media (max-width: 900px) {
          section div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}