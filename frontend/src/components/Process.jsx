import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  { icon: "https://img.icons8.com/ios-filled/50/ffffff/online-store.png", label: "Select Service", red: true },
  { icon: "https://img.icons8.com/ios-filled/50/d32f2f/upload.png", label: "Upload Documents", red: false },
  { icon: "https://img.icons8.com/ios-filled/50/ffffff/money.png", label: "Make Payment", red: true },
  { icon: "https://img.icons8.com/ios-filled/50/d32f2f/checked.png", label: "Team Checks Your Documents", red: false },
  { icon: "https://img.icons8.com/ios-filled/50/ffffff/print.png", label: "High-Quality Print", red: true },
  { icon: "https://img.icons8.com/ios-filled/50/d32f2f/box.png", label: "Secure Packaging", red: false },
  { icon: "https://img.icons8.com/ios-filled/50/ffffff/delivery.png", label: "Doorstep Delivery", red: true },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="process" style={{ padding: "90px 5%", background: "#0a0a0a" }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ textAlign: "center", marginBottom: "50px" }}
      >
        <h2 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#fff", marginBottom: "12px" }}>
          Our Streamlined Service Process
        </h2>
        <p style={{ color: "#aaa", fontSize: "0.95rem", maxWidth: "500px", margin: "0 auto 14px" }}>
          We ensure a smooth, hassle-free service experience from order to delivery.
        </p>
        <div style={{ width: "50px", height: "3px", background: "#D40000", margin: "0 auto", borderRadius: "2px" }} />
      </motion.div>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0", alignItems: "flex-start" }}>
        {steps.map((step, i) => (
          <React.Fragment key={step.label}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", width: "120px" }}
            >
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "14px",
                  background: step.red ? "#D40000" : "#1a1a1a",
                  border: step.red ? "none" : "2px solid #2a2a2a",
                }}
              >
                <img src={step.icon} alt={step.label} style={{ width: "30px", height: "30px" }} />
              </div>
              <h4 style={{ fontSize: "0.78rem", fontWeight: 600, color: "#f0f0f0", lineHeight: 1.3 }}>{step.label}</h4>
            </motion.div>
            {i < steps.length - 1 && (
              <motion.div
                key={`arrow-${i}`}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: i * 0.1 + 0.05 }}
                style={{ display: "flex", alignItems: "flex-start", paddingTop: "22px", color: "#D40000", fontSize: "1.4rem", fontWeight: 700, margin: "0 2px" }}
              >
                ➔
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>

      <style>{`
        @media (max-width: 700px) {
          #process > div:last-child { gap: 10px; }
        }
      `}</style>
    </section>
  );
}
