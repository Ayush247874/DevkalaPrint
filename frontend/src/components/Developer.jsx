import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Code,
  Smartphone,
  Monitor,
} from "lucide-react";

/* IMPORT YOUR IMAGE */
import developerImg from "../assets/developer/developer.jpeg";

export default function DeveloperSection() {

  const services = [
    "Business Website",
    "Hotel Website",
    "Restaurant Website",
    "E-Commerce Website",
    "Portfolio Website",
    "School / College Website",
    "Custom Admin Panel",
    "Android App Development",
    "Printing Business Website",
    "Online Service Portal",
  ];

 const socialLinks = [
  {
    icon: "📸",
    link: "https://instagram.com/",
    color: "#E1306C",
    label: "Instagram",
  },

  {
    icon: "📘",
    link: "https://facebook.com/",
    color: "#1877F2",
    label: "Facebook",
  },

  {
    icon: "▶️",
    link: "https://youtube.com/",
    color: "#FF0000",
    label: "YouTube",
  },
];

  return (

    <section
      style={{
        width: "100%",
        minHeight: "100vh",

        background:
          "linear-gradient(135deg,#020617,#0f172a,#111827)",

        padding: "100px 5%",

        overflow: "hidden",

        color: "#fff",
      }}
    >

      <div
        style={{
          maxWidth: "1400px",
          margin: "auto",

          display: "grid",

          gridTemplateColumns:
            window.innerWidth < 950
              ? "1fr"
              : "1fr 1.1fr",

          gap: "70px",

          alignItems: "center",
        }}
      >

        {/* LEFT IMAGE */}

        <div
          style={{
            position: "relative",

            display: "flex",

            justifyContent: "center",
          }}
        >

          <div
            style={{
              position: "absolute",

              width: "350px",

              height: "350px",

              borderRadius: "50%",

              background:
                "rgba(239,68,68,0.18)",

              filter: "blur(70px)",
            }}
          />

          <img
            src={developerImg}

            alt="Ayush Kumar"

            style={{
              width:
                window.innerWidth < 768
                  ? "100%"
                  : "420px",

              height:
                window.innerWidth < 768
                  ? "500px"
                  : "620px",

              objectFit: "cover",

              borderRadius: "35px",

              border:
                "4px solid rgba(255,255,255,0.08)",

              boxShadow:
                "0 25px 60px rgba(0,0,0,0.55)",

              position: "relative",

              zIndex: 2,
            }}
          />

        </div>

        {/* RIGHT CONTENT */}

        <div>

          <div
            style={{
              display: "inline-block",

              padding: "10px 24px",

              borderRadius: "50px",

              background:
                "rgba(239,68,68,0.15)",

              color: "#ef4444",

              fontWeight: "600",

              marginBottom: "25px",

              letterSpacing: "1px",
            }}
          >
            WEBSITE DEVELOPER
          </div>

          <h1
            style={{
              fontSize:
                window.innerWidth < 768
                  ? "48px"
                  : "72px",

              lineHeight: "1.1",

              marginBottom: "20px",

              fontWeight: "bold",
            }}
          >
            Ayush
            <span
              style={{
                color: "#ef4444",
              }}
            >
              {" "}Kumar
            </span>
          </h1>

          <h3
            style={{
              color: "#cbd5e1",

              fontSize: "28px",

              marginBottom: "25px",

              fontWeight: "500",
            }}
          >
            B.Tech Computer Science Engineer
          </h3>

          <p
            style={{
              color: "#cbd5e1",

              fontSize: "18px",

              lineHeight: "1.9",

              marginBottom: "35px",
            }}
          >
            Professional Website & App Developer
            from Sanhauli, Khagaria Bihar.
            I build modern, responsive and
            high-performance websites for
            hotels, restaurants, e-commerce,
            portfolios, businesses and many
            more industries.
          </p>

          {/* INFO */}

          <div
            style={{
              display: "flex",

              flexDirection: "column",

              gap: "18px",

              marginBottom: "35px",
            }}
          >

            <div style={infoStyle}>
              <Phone size={20} color="#ef4444" />
              <span>+91 7543898254</span>
            </div>

            <div style={infoStyle}>
              <Mail size={20} color="#ef4444" />
              <span>ayush247874@gmail.com</span>
            </div>

            <div style={infoStyle}>
              <MapPin size={20} color="#ef4444" />
              <span>
                Sanhauli, Khagaria, Bihar
              </span>
            </div>

          </div>

          {/* SERVICES */}

          <div
            style={{
              marginBottom: "40px",
            }}
          >

            <h2
              style={{
                marginBottom: "20px",

                fontSize: "32px",
              }}
            >
              My Services
            </h2>

            <div
              style={{
                display: "grid",

                gridTemplateColumns:
                  "repeat(auto-fit,minmax(220px,1fr))",

                gap: "18px",
              }}
            >

              {services.map((item, index) => (

                <div
                  key={index}

                  style={{
                    background:
                      "rgba(255,255,255,0.05)",

                    border:
                      "1px solid rgba(255,255,255,0.08)",

                    padding: "18px",

                    borderRadius: "18px",

                    display: "flex",

                    alignItems: "center",

                    gap: "12px",

                    color: "#fff",

                    fontWeight: "600",
                  }}
                >

                  <Code
                    size={20}
                    color="#ef4444"
                  />

                  {item}

                </div>

              ))}

            </div>

          </div>

          {/* SOCIAL MEDIA */}

          <div
            style={{
              display: "flex",

              gap: "18px",

              marginBottom: "40px",
            }}
          >

            {socialLinks.map((item, index) => (

              <a
                key={index}

                href={item.link}

                target="_blank"

                rel="noreferrer"

                style={{
                  width: "60px",

                  height: "60px",

                  borderRadius: "18px",

                  background:
                    "rgba(255,255,255,0.06)",

                  display: "flex",

                  alignItems: "center",

                  justifyContent: "center",

                  color: item.color,

                  border:
                    "1px solid rgba(255,255,255,0.08)",

                  transition: "0.4s",

                  textDecoration: "none",
                }}
              >
                {item.icon}
              </a>

            ))}

          </div>

          {/* CONTACT BUTTONS */}

          <div
            style={{
              display: "flex",

              flexWrap: "wrap",

              gap: "20px",
            }}
          >

            <a
              href="tel:+917543898254"

              style={{
                textDecoration: "none",
              }}
            >

              <button
                style={{
                  background:
                    "linear-gradient(90deg,#ef4444,#dc2626)",

                  color: "#fff",

                  border: "none",

                  padding: "18px 35px",

                  borderRadius: "16px",

                  fontSize: "18px",

                  fontWeight: "bold",

                  cursor: "pointer",

                  display: "flex",

                  alignItems: "center",

                  gap: "10px",

                  boxShadow:
                    "0 15px 35px rgba(239,68,68,0.35)",
                }}
              >

                <Phone size={20} />

                Contact Me

              </button>

            </a>

            <a
              href="mailto:ayush247874@gmail.com"

              style={{
                textDecoration: "none",
              }}
            >

              <button
                style={{
                  background:
                    "rgba(255,255,255,0.08)",

                  color: "#fff",

                  border:
                    "1px solid rgba(255,255,255,0.08)",

                  padding: "18px 35px",

                  borderRadius: "16px",

                  fontSize: "18px",

                  fontWeight: "bold",

                  cursor: "pointer",

                  display: "flex",

                  alignItems: "center",

                  gap: "10px",
                }}
              >

                <Mail size={20} />

                Hire Me

              </button>

            </a>

          </div>

        </div>

      </div>

    </section>

  );

}

/* INFO STYLE */

const infoStyle = {

  display: "flex",

  alignItems: "center",

  gap: "14px",

  fontSize: "18px",

  color: "#e2e8f0",
};