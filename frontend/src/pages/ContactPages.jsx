import { useState, useEffect } from "react";

import { Send } from "lucide-react";

/* IMPORT COMPONENTS */
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DeveloperSection from "../components/Developer";

export default function ContactPage() {

  /* RESPONSIVE */
  const [isMobile, setIsMobile] =
    useState(window.innerWidth < 768);

  useEffect(() => {

    const handleResize = () => {
      setIsMobile(
        window.innerWidth < 768
      );
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () =>
      window.removeEventListener(
        "resize",
        handleResize
      );

  }, []);

  const contacts = [
    {
      icon: "💬",
      label: "WhatsApp",
      value: "+91 8404970136",
      href:
        "https://wa.me/918404970136?text=Hello,%20I%20am%20interested%20in%20your%20services",
      external: true,
    },

    {
      icon: "📞",
      label: "Phone",
      value: "+91 7368873919",
      href: "tel:+917368873919",
      external: false,
    },

    {
      icon: "✉️",
      label: "Email",
      value:
        "devkalacommunication@gmail.com",

      href:
        "mailto:devkalacommunication@gmail.com?subject=Inquiry",

      external: false,
    },

    {
      icon: "📍",
      label: "Address",

      value:
        "Dhanchhar, Near Kashi Baba Temple (Fango Halt), Khagaria, Bihar - 851214",

      href:
        "https://maps.app.goo.gl/ArNzGTrWzGwka9G56",

      external: true,
    },
  ];

  return (

    <>

      {/* NAVBAR */}
      <Navbar />

      {/* BANNER */}

      <div
        style={{
          width: "100%",
          height:
            isMobile
              ? "320px"
              : "500px",

          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop')",

          backgroundSize: "cover",

          backgroundPosition: "center",

          display: "flex",

          alignItems: "center",

          justifyContent: "center",

          textAlign: "center",

          padding: "20px",

          marginTop: "70px",
        }}
      >

        <div>

          <h1
            style={{
              color: "#fff",

              fontSize:
                isMobile
                  ? "42px"
                  : "75px",

              fontWeight: "bold",

              marginBottom: "20px",

              lineHeight: "1.1",
            }}
          >
            Contact

            <span
              style={{
                color: "#ef4444",
              }}
            >
              {" "}Devkala
            </span>

          </h1>

          <p
            style={{
              color: "#e2e8f0",

              fontSize:
                isMobile
                  ? "16px"
                  : "22px",

              maxWidth: "800px",

              margin: "auto",

              lineHeight: "1.8",
            }}
          >
            Premium Printing Services,
            Photo Printing, Mobile
            Cover Printing, T-Shirt
            Printing, Gifts Printing
            and Online Services
            Available Here.
          </p>

          <button
            style={{
              marginTop: "30px",

              background:
                "linear-gradient(90deg,#ef4444,#dc2626)",

              border: "none",

              color: "#fff",

              padding: "16px 35px",

              borderRadius: "14px",

              fontSize: "18px",

              fontWeight: "bold",

              cursor: "pointer",

              boxShadow:
                "0 15px 35px rgba(239,68,68,0.35)",
            }}
          >
            Contact Now
          </button>

        </div>

      </div>

      {/* CONTACT SECTION */}

      <section
        style={{
          width: "100%",
          minHeight: "100vh",

          background:
            "linear-gradient(135deg,#020617,#0f172a,#111827)",

          padding:
            isMobile
              ? "70px 5%"
              : "120px 5%",

          color: "#fff",
        }}
      >

        <div
          style={{
            maxWidth: "1400px",
            margin: "auto",
          }}
        >

          {/* HEADING */}

          <div
            style={{
              textAlign: "center",
              marginBottom: "70px",
            }}
          >

            <h4
              style={{
                color: "#ef4444",
                letterSpacing: "3px",
                marginBottom: "15px",
                fontSize: "18px",
              }}
            >
              CONTACT US
            </h4>

            <h1
              style={{
                fontSize:
                  isMobile
                    ? "45px"
                    : "70px",

                fontWeight: "bold",

                marginBottom: "20px",
              }}
            >
              Get In Touch
            </h1>

            <p
              style={{
                color: "#cbd5e1",

                maxWidth: "750px",

                margin: "auto",

                lineHeight: "1.9",

                fontSize:
                  isMobile
                    ? "16px"
                    : "18px",
              }}
            >
              Contact DevkalaPrint
              Communication for
              T-Shirt Printing,
              Mobile Cover Printing,
              Gift Printing, Photo
              Printing and Online
              Services.
            </p>

          </div>

          {/* MAIN GRID */}

          <div
            style={{
              display: "grid",

              gridTemplateColumns:
                isMobile
                  ? "1fr"
                  : "1fr 1.1fr",

              gap:
                isMobile
                  ? "40px"
                  : "60px",

              alignItems: "start",
            }}
          >

            {/* CONTACT CARDS */}

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "22px",
              }}
            >

              {contacts.map((item, index) => (

                <a
                  key={index}

                  href={item.href}

                  target={
                    item.external
                      ? "_blank"
                      : "_self"
                  }

                  rel="noreferrer"

                  style={{
                    textDecoration: "none",
                  }}
                >

                  <div
                    style={{
                      background:
                        "rgba(255,255,255,0.05)",

                      border:
                        "1px solid rgba(255,255,255,0.08)",

                      borderRadius: "24px",

                      padding: "28px",

                      display: "flex",

                      flexDirection:
                        isMobile
                          ? "column"
                          : "row",

                      textAlign:
                        isMobile
                          ? "center"
                          : "left",

                      alignItems: "center",

                      gap: "20px",

                      backdropFilter:
                        "blur(12px)",

                      transition: "0.4s",

                      cursor: "pointer",
                    }}
                  >

                    {/* ICON */}

                    <div
                      style={{
                        minWidth: "70px",

                        height: "70px",

                        borderRadius: "20px",

                        background:
                          "linear-gradient(135deg,#ef4444,#dc2626)",

                        display: "flex",

                        alignItems: "center",

                        justifyContent:
                          "center",

                        fontSize: "30px",

                        color: "#fff",

                        boxShadow:
                          "0 10px 25px rgba(239,68,68,0.35)",
                      }}
                    >
                      {item.icon}
                    </div>

                    {/* CONTENT */}

                    <div>

                      <h3
                        style={{
                          color: "#fff",

                          fontSize: "24px",

                          marginBottom: "8px",
                        }}
                      >
                        {item.label}
                      </h3>

                      <p
                        style={{
                          color: "#cbd5e1",

                          lineHeight: "1.7",

                          fontSize: "16px",
                        }}
                      >
                        {item.value}
                      </p>

                    </div>

                  </div>

                </a>

              ))}

            </div>

            {/* CONTACT FORM */}

            <div
              style={{
                background:
                  "rgba(255,255,255,0.05)",

                border:
                  "1px solid rgba(255,255,255,0.08)",

                borderRadius: "30px",

                padding:
                  isMobile
                    ? "25px"
                    : "45px",

                backdropFilter:
                  "blur(12px)",

                boxShadow:
                  "0 20px 60px rgba(0,0,0,0.35)",
              }}
            >

              <h2
                style={{
                  fontSize:
                    isMobile
                      ? "32px"
                      : "42px",

                  marginBottom: "35px",

                  fontWeight: "bold",
                }}
              >
                Send Message
              </h2>

              <form
                style={{
                  display: "flex",

                  flexDirection: "column",

                  gap: "22px",
                }}
              >

                <input
                  type="text"
                  placeholder="Your Name"
                  style={inputStyle}
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  style={inputStyle}
                />

                <input
                  type="text"
                  placeholder="Subject"
                  style={inputStyle}
                />

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  style={{
                    ...inputStyle,
                    resize: "none",
                  }}
                />

                <button
                  type="submit"

                  style={{
                    background:
                      "linear-gradient(90deg,#ef4444,#dc2626)",

                    border: "none",

                    color: "#fff",

                    padding: "18px",

                    borderRadius: "16px",

                    fontSize: "18px",

                    fontWeight: "bold",

                    cursor: "pointer",

                    display: "flex",

                    alignItems: "center",

                    justifyContent:
                      "center",

                    gap: "10px",

                    boxShadow:
                      "0 15px 35px rgba(239,68,68,0.35)",
                  }}
                >

                  <Send size={20} />

                  Send Message

                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

      {/* MAP SECTION */}

      <div
        style={{
          width: "100%",
          padding:
            isMobile
              ? "60px 5%"
              : "80px 5%",

          background:
            "linear-gradient(135deg,#020617,#0f172a,#111827)",
        }}
      >

        <div
          style={{
            maxWidth: "1400px",
            margin: "auto",
          }}
        >

          <div
            style={{
              textAlign: "center",
              marginBottom: "50px",
            }}
          >

            <h4
              style={{
                color: "#ef4444",
                letterSpacing: "3px",
                marginBottom: "15px",
                fontSize: "18px",
              }}
            >
              OUR LOCATION
            </h4>

            <h1
              style={{
                color: "#fff",

                fontSize:
                  isMobile
                    ? "40px"
                    : "65px",

                fontWeight: "bold",

                marginBottom: "20px",
              }}
            >
              Visit

              <span
                style={{
                  color: "#ef4444",
                }}
              >
                {" "}DevkalaPrint
              </span>

            </h1>

            <p
              style={{
                color: "#cbd5e1",

                fontSize:
                  isMobile
                    ? "16px"
                    : "18px",

                maxWidth: "800px",

                margin: "auto",

                lineHeight: "1.8",
              }}
            >
              Dhanchhar, Near Kashi
              Baba Temple (Fango
              Halt), Khagaria,
              Bihar - 851214
            </p>

          </div>

          {/* MAP */}

          <div
            style={{
              borderRadius: "30px",

              overflow: "hidden",

              boxShadow:
                "0 20px 60px rgba(0,0,0,0.5)",

              border:
                "1px solid rgba(255,255,255,0.08)",
            }}
          >

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3597.6404404803393!2d86.6099884753956!3d25.616861577443135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDM3JzAwLjciTiA4NsKwMzYnNDUuMiJF!5e0!3m2!1sen!2sin!4v1779525898136!5m2!1sen!2sin"

              width="100%"

              height={
                isMobile
                  ? "350"
                  : "500"
              }

              style={{
                border: 0,
              }}

              allowFullScreen=""

              loading="lazy"

              referrerPolicy="no-referrer-when-downgrade"

              title="Devkala Location"
            />

          </div>

        </div>

      </div>

      {/* DEVELOPER SECTION */}

      <DeveloperSection />

      {/* FOOTER */}

      <Footer />

    </>

  );

}

/* INPUT STYLE */

const inputStyle = {

  width: "100%",

  padding: "18px 20px",

  borderRadius: "15px",

  border:
    "1px solid rgba(255,255,255,0.08)",

  background:
    "rgba(255,255,255,0.04)",

  color: "#fff",

  fontSize: "16px",

  outline: "none",

  boxSizing: "border-box",
};