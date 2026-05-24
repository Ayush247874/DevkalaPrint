import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";


const links = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About Us", to: "/about" },
  { label: "Track Order", to: "/track-order" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] =
    useState(false);

  const [scrolled, setScrolled] =
    useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener(
      "scroll",
      onScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        onScroll
      );
    };
  }, []);

  const navStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1000,
    background: scrolled
      ? "rgba(10,10,10,0.98)"
      : "rgba(10,10,10,0.95)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid #2a2a2a",
    padding: "0 5%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "70px",
    transition: "background 0.3s",
  };

  return (
    <>
      <nav style={navStyle}>
        {/* LOGO */}
        <Link
          to="/"
          style={{
            textDecoration: "none",
          }}
        >
          <span
            style={{
              fontFamily: "cursive",
              fontSize: "35px",
              fontWeight: 700,
              color: "#fff",
              letterSpacing: "1px",
            }}
          >
            Devkala
            <span
              style={{
                color: "#D40000",
                fontSize: "40px",
              }}
            >
              Print
            </span>
          </span>
        </Link>

        {/* IMAGE LOGO */}
        {/*
        <Link
          to="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={logo}
            alt="devkalaPrint Logo"
            style={{
              width: "180px",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </Link>
        */}

        {/* DESKTOP MENU */}
        <ul
          className="desktop-nav"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "28px",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {links.map((l) => (
            <li key={l.label}>
              <Link
                to={l.to}
                style={{
                  color: "#aaa",
                  fontSize: "0.88rem",
                  fontWeight: 500,
                  letterSpacing: "0.5px",
                  transition: "color 0.2s",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color =
                    "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color =
                    "#aaa";
                }}
              >
                {l.label}
              </Link>
            </li>
          ))}

          {/* LOGIN */}
          <li>
            <Link
              to="/login"
              style={{
                color: "#fff",
                border: "1px solid #2a2a2a",
                padding: "7px 18px",
                borderRadius: "6px",
                fontSize: "0.88rem",
                fontWeight: 500,
                transition: "all 0.2s",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor =
                  "#D40000";

                e.currentTarget.style.color =
                  "#D40000";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor =
                  "#2a2a2a";

                e.currentTarget.style.color =
                  "#fff";
              }}
            >
              Login
            </Link>
          </li>

          {/* SIGNUP */}
          <li>
            <Link
              to="/signup"
              style={{
                background: "#D40000",
                color: "#fff",
                padding: "7px 18px",
                borderRadius: "6px",
                fontSize: "0.88rem",
                fontWeight: 500,
                transition: "background 0.2s",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "#a30000";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  "#D40000";
              }}
            >
              Signup
            </Link>
          </li>
        </ul>

        {/* MOBILE BUTTON */}
        <button
          className="hamburger-btn"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          aria-label="Toggle menu"
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#fff",
            padding: "4px",
          }}
        >
          {menuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            transition={{
              duration: 0.2,
            }}
            style={{
              position: "fixed",
              top: "70px",
              left: 0,
              right: 0,
              background:
                "rgba(10,10,10,0.98)",
              backdropFilter: "blur(10px)",
              borderBottom:
                "1px solid #2a2a2a",
              padding: "20px 5%",
              zIndex: 999,
              display: "flex",
              flexDirection: "column",
              gap: "0",
            }}
          >
            {[
              ...links,
              {
                label: "Login",
                to: "/login",
              },
              {
                label: "Signup",
                to: "/signup",
              },
            ].map((l, i) => (
              <Link
                key={i}
                to={l.to}
                onClick={() =>
                  setMenuOpen(false)
                }
                style={{
                  color: "#aaa",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  padding: "12px 0",
                  borderBottom:
                    "1px solid #2a2a2a",
                  display: "block",
                  transition: "color 0.2s",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color =
                    "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color =
                    "#aaa";
                }}
              >
                {l.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* RESPONSIVE */}
      <style>{`
        @media (max-width: 700px) {
          .desktop-nav {
            display: none !important;
          }

          .hamburger-btn {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
}