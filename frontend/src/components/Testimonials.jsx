import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Testimonials() {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
  });

  return (
    <section
      id="testimonials"
      style={{
        padding: "90px 5%",
        background: "#0a0a0a",
        textAlign: "center",
      }}
    >
      <motion.div
        ref={ref}
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        animate={
          inView
            ? {
                opacity: 1,
                scale: 1,
              }
            : {}
        }
        transition={{
          duration: 0.6,
        }}
        style={{
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <img
          src="https://webwallah.in/wp-content/uploads/2024/04/smile.png"
          alt="Smiley"
          style={{
            width: "80px",
            filter:
              "drop-shadow(0 0 20px rgba(212,0,0,0.4))",
          }}
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />

        <h2
          style={{
            fontFamily: "'Rajdhani', sans-serif",
            fontSize:
              "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700,
            color: "#fff",
          }}
        >
          Your Exceptional
        </h2>

        <h2
          style={{
            fontFamily: "'Rajdhani', sans-serif",
            fontSize:
              "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700,
          }}
        >
          <span style={{ color: "#D40000" }}>
            Love & Support
          </span>
        </h2>

        <p
          style={{
            color: "#aaa",
            marginTop: "8px",
          }}
        >
          For our work
        </p>
      </motion.div>
    </section>
  );
}