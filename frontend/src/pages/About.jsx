import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios"; 
import { useState,useEffect } from "react";



export default function About() {

      const [totalUsers, setTotalUsers] =
    useState(0);

  useEffect(() => {

    axios
      .get(
        "http://localhost:5000/api/admin/total-users"
      )
      .then((res) => {

        setTotalUsers(
          res.data.totalUsers
        );

      })
      .catch((err) => {

        console.log(err);

      });

  }, []);

  return (
    <>
      <Navbar />

      <div style={mainContainer}>

        {/* HERO SECTION */}

        <motion.div
          initial={{
            opacity: 0,
            y: -50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          style={heroSection}
        >

          <div style={overlay}></div>

          <div style={heroContent}>

            <motion.h1
              initial={{
                scale: 0.8,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.7,
              }}
              style={heroTitle}
            >
              About DevkalaPrint
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.4,
                duration: 0.8,
              }}
              style={heroSubtitle}
            >
              We provide professional online document
              services with fast delivery, secure
              processing and premium customer support.
            </motion.p>

          </div>

        </motion.div>

        {/* ABOUT CONTENT */}

        <div style={contentWrapper}>

          <motion.div
            initial={{
              opacity: 0,
              x: -100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{
              once: true,
            }}
            style={leftSection}
          >

            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop"
              alt="about"
              style={aboutImage}
            />

          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{
              once: true,
            }}
            style={rightSection}
          >

            <h2 style={sectionTitle}>
              Who We Are
            </h2>

            <p style={description}>
              DevkalaPrint is a trusted digital service
              platform helping users with PAN Card,
              Aadhaar Services, Passport Photos,
              E-Shram Cards, and many more online
              solutions.
            </p>

            <p style={description}>
              Our mission is to simplify digital
              services with a secure, fast and
              user-friendly experience.
            </p>

            <div style={featureGrid}>

              <div style={featureCard}>
                ⚡ Fast Delivery
              </div>

              <div style={featureCard}>
                🔒 Secure System
              </div>

              <div style={featureCard}>
                💳 Online Payment
              </div>

              <div style={featureCard}>
                📄 GST Invoice
              </div>

            </div>

          </motion.div>

        </div>

        {/* STATS */}

        <div style={statsSection}>

          <motion.div
            whileHover={{
            scale: 1.05,
            }}
            style={statsCard} >

            <h1 style={statsNumber}>
            {totalUsers}+
            </h1>

            <p style={statsText}>
            Happy Customers
            </p>

        </motion.div>

          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            style={statsCard}
          >
            <h1 style={statsNumber}>
              50+
            </h1>

            <p style={statsText}>
              Online Services
            </p>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            style={statsCard}
          >
            <h1 style={statsNumber}>
              24/7
            </h1>

            <p style={statsText}>
              Customer Support
            </p>
          </motion.div>

        </div>

      </div>
    <Footer />
    </>
  );
}

/* MAIN */

const mainContainer = {

  background: "#020617",

  minHeight: "100vh",

  color: "#fff",

  overflow: "hidden",

  fontFamily: "Arial",

};

/* HERO */

const heroSection = {

  position: "relative",

  height: "70vh",

  backgroundImage:
    "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop')",

  backgroundSize: "cover",

  backgroundPosition: "center",

  display: "flex",

  alignItems: "center",

  justifyContent: "center",

};

const overlay = {

  position: "absolute",

  top: 0,

  left: 0,

  width: "100%",

  height: "100%",

  background:
    "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7))",

};

const heroContent = {

  position: "relative",

  zIndex: 2,

  textAlign: "center",

  maxWidth: "800px",

  padding: "20px",

};

const heroTitle = {

  fontSize: "70px",

  fontWeight: "bold",

  marginBottom: "20px",

  background:
    "linear-gradient(90deg,#ff0000,#ff4d4d)",

  WebkitBackgroundClip: "text",

  WebkitTextFillColor: "transparent",

};

const heroSubtitle = {

  fontSize: "20px",

  color: "#e2e8f0",

  lineHeight: "1.8",

};

/* CONTENT */

const contentWrapper = {

  display: "grid",

  gridTemplateColumns:
    "repeat(auto-fit,minmax(350px,1fr))",

  gap: "50px",

  padding: "100px 8%",

  alignItems: "center",

};

const leftSection = {};

const rightSection = {};

const aboutImage = {

  width: "100%",

  borderRadius: "25px",

  boxShadow:
    "0 20px 60px rgba(255,0,0,0.25)",

};

const sectionTitle = {

  fontSize: "45px",

  marginBottom: "25px",

  color: "#fff",

};

const description = {

  color: "#cbd5e1",

  fontSize: "18px",

  lineHeight: "1.9",

  marginBottom: "20px",

};

const featureGrid = {

  display: "grid",

  gridTemplateColumns:
    "repeat(auto-fit,minmax(180px,1fr))",

  gap: "20px",

  marginTop: "35px",

};

const featureCard = {

  background:
    "linear-gradient(135deg,#111827,#1e293b)",

  padding: "22px",

  borderRadius: "18px",

  textAlign: "center",

  fontWeight: "bold",

  fontSize: "17px",

  border:
    "1px solid rgba(255,255,255,0.1)",

  boxShadow:
    "0 10px 30px rgba(0,0,0,0.4)",

  transition: "0.3s",

  cursor: "pointer",

};

/* STATS */

const statsSection = {

  display: "grid",

  gridTemplateColumns:
    "repeat(auto-fit,minmax(250px,1fr))",

  gap: "30px",

  padding: "50px 8% 100px",

};

const statsCard = {

  background:
    "linear-gradient(135deg,#dc2626,#ef4444)",

  padding: "45px 30px",

  borderRadius: "25px",

  textAlign: "center",

  boxShadow:
    "0 15px 50px rgba(255,0,0,0.35)",

  cursor: "pointer",

};

const statsNumber = {

  fontSize: "55px",

  marginBottom: "12px",

};

const statsText = {

  fontSize: "20px",

  fontWeight: "bold",

};