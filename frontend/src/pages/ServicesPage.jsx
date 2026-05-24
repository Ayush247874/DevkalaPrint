import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TshirtPrinting from "../components/TshirtPrinting";
import MobileCoverPrinting from "../components/MobileCoverPrinting";
import GigtPrinting from "../components/GiftPrinting";
const services = [

  {
    title: "Passport Size Photo",
    desc: "Professional HD passport size photos with instant printing.",
    icon: "📸",
  },

  {
    title: "Aadhaar Card Print",
    desc: "High quality Aadhaar card color print and lamination service.",
    icon: "🪪",
  },

  {
    title: "PAN Card Print",
    desc: "Premium PAN card print with waterproof quality.",
    icon: "💳",
  },

  {
    title: "Color Xerox",
    desc: "Fast and affordable color xerox printing service.",
    icon: "🖨️",
  },

  {
    title: "Lamination",
    desc: "Protect your important documents with premium lamination.",
    icon: "📄",
  },

  {
    title: "Income Certificate",
    desc: "Online income certificate apply and print service.",
    icon: "📑",
  },

  {
    title: "Caste Certificate",
    desc: "Fast caste certificate online service and document support.",
    icon: "📜",
  },

  {
    title: "Nivas Certificate",
    desc: "Residence/Nivas certificate form filling and print.",
    icon: "🏠",
  },

  {
    title: "Online Form Fillup",
    desc: "Government & private online form filling service.",
    icon: "📝",
  },

  {
    title: "Photo Editing",
    desc: "Background remove and professional photo editing.",
    icon: "🎨",
  },

  {
    title: "Document Scan",
    desc: "HD document scanning and PDF creation service.",
    icon: "📠",
  },

  {
    title: "Online Payment Service",
    desc: "Electricity bill, recharge, and payment services.",
    icon: "💰",
  },

];

export default function Services() {

  return (

    <>
      <Navbar />

      <section style={mainSection}>

        {/* TOP */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          style={{
            textAlign: "center",
            marginBottom: "70px",
          }}
        >

          <h1 style={mainTitle}>
            Our Services
          </h1>

          <p style={subTitle}>
            Professional Printing &
            Online Services
          </p>

        </motion.div>

        {/* SERVICES GRID */}

        <div style={gridStyle}>

          {services.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                y: -10,
              }}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              viewport={{
                once: true,
              }}
              style={cardStyle}
            >

              <div style={iconStyle}>
                {item.icon}
              </div>

              <h2 style={cardTitle}>
                {item.title}
              </h2>

              <p style={cardDesc}>
                {item.desc}
              </p>

              <button style={btnStyle}>
                Learn More
              </button>

            </motion.div>

          ))}

        </div>

        {/* CONTACT SECTION */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
          style={contactBox}
        >

          <h1 style={contactTitle}>
            Need Any Service?
          </h1>

          <p style={contactText}>
            Contact us for Aadhaar Card,
            PAN Card, Income Certificate,
            Caste Certificate, Nivas
            Certificate, Printing and
            Online Services.
          </p>

          <a
            href="tel:+919876543210"
            style={{
              textDecoration: "none",
            }}
          >
            <button style={contactBtn}>
              Contact Now
            </button>
          </a>

        </motion.div>

      </section>
       
       <TshirtPrinting />

       <MobileCoverPrinting />   
       <GigtPrinting/>
      <Footer />
    </>
  );

}

/* MAIN */

const mainSection = {

  minHeight: "100vh",

  background:
    "linear-gradient(180deg,#050505,#0f172a)",

  padding: "120px 5% 80px",

  color: "#fff",

};

/* TITLE */

const mainTitle = {

  fontSize: "55px",

  fontWeight: "bold",

  color: "#fff",

  marginBottom: "15px",

};

const subTitle = {

  fontSize: "20px",

  color: "#94a3b8",

};

/* GRID */

const gridStyle = {

  display: "grid",

  gridTemplateColumns:
    "repeat(auto-fit,minmax(280px,1fr))",

  gap: "30px",

};

/* CARD */

const cardStyle = {

  background:
    "linear-gradient(135deg,#111827,#1e293b)",

  padding: "35px",

  borderRadius: "22px",

  border:
    "1px solid rgba(255,255,255,0.08)",

  boxShadow:
    "0 10px 40px rgba(0,0,0,0.4)",

  transition: "0.4s",

  cursor: "pointer",

};

const iconStyle = {

  fontSize: "55px",

  marginBottom: "20px",

};

const cardTitle = {

  fontSize: "24px",

  marginBottom: "15px",

  color: "#fff",

};

const cardDesc = {

  color: "#cbd5e1",

  lineHeight: "28px",

  marginBottom: "25px",

  fontSize: "15px",

};

const btnStyle = {

  background:
    "linear-gradient(135deg,#D40000,#ff3c3c)",

  color: "#fff",

  border: "none",

  padding: "12px 22px",

  borderRadius: "10px",

  cursor: "pointer",

  fontWeight: "bold",

  fontSize: "15px",

};

/* CONTACT */

const contactBox = {

  marginTop: "90px",

  background:
    "linear-gradient(135deg,#D40000,#7f1d1d)",

  padding: "60px 30px",

  borderRadius: "25px",

  textAlign: "center",

  boxShadow:
    "0 10px 40px rgba(212,0,0,0.4)",

};

const contactTitle = {

  fontSize: "42px",

  marginBottom: "15px",

};

const contactText = {

  fontSize: "18px",

  maxWidth: "800px",

  margin: "0 auto",

  lineHeight: "32px",

  marginBottom: "30px",

};

const contactBtn = {

  background: "#fff",

  color: "#D40000",

  border: "none",

  padding: "15px 35px",

  borderRadius: "12px",

  fontSize: "17px",

  fontWeight: "bold",

  cursor: "pointer",

};