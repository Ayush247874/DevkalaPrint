import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const reasons = [
  {
    icon: "⚡",
    title: "Fast Processing",
    desc: "We ensure quick printing & delivery of your ID cards and documents.",
  },
  {
    icon: "🎨",
    title: "High-Quality Prints",
    desc: "Premium printing quality with durable material and vibrant colors.",
  },
  {
    icon: "💰",
    title: "Affordable Pricing",
    desc: "Best rates in the market with top-notch printing services.",
  },
  {
    icon: "🛡️",
    title: "Secure & Reliable",
    desc: "Your data is safe and secured with encrypted processing.",
  },
  {
    icon: "📦",
    title: "Doorstep Delivery",
    desc: "Convenient doorstep delivery of printed documents anywhere.",
  },
];

function WhyCard({ item, index }) {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-50px",
  });

  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#1a1a1a",
        border: `1px solid ${
          hovered
            ? "rgba(212,0,0,0.3)"
            : "#2a2a2a"
        }`,
        borderRadius: "14px",
        padding: "32px 24px",
        textAlign: "center",
        transition: "all 0.3s",
        transform: hovered
          ? "translateY(-4px)"
          : "translateY(0)",
      }}
    >
      <div
        style={{
          fontSize: "2.4rem",
          marginBottom: "16px",
        }}
      >
        {item.icon}
      </div>

      <h3
        style={{
          fontSize: "0.98rem",
          fontWeight: 600,
          color: "#fff",
          marginBottom: "10px",
        }}
      >
        {item.title}
      </h3>

      <p
        style={{
          fontSize: "0.83rem",
          color: "#aaa",
          lineHeight: 1.65,
        }}
      >
        {item.desc}
      </p>
    </motion.div>
  );
}

export default function WhyUs() {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
  });

  return (
    <section
      id="why"
      style={{
        padding: "90px 15%",
        background: "#111111",
      }}
    >
      <motion.div
        ref={ref}
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.6,
        }}
        style={{
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        <h2
          style={{
            fontFamily: "'Rajdhani', sans-serif",
            fontSize:
              "clamp(1.8rem, 3.5vw, 2.6rem)",
            fontWeight: 700,
            color: "#fff",
            marginBottom: "12px",
          }}
        >
          Why Choose Us?
        </h2>

        <div
          style={{
            width: "50px",
            height: "3px",
            background: "#D40000",
            margin: "14px auto 0",
            borderRadius: "2px",
          }}
        />
      </motion.div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(220px, 1fr))",
           justifyContent:"center",  
          gap: "22px",
        }}
      >
        {reasons.map((r, i) => (
          <WhyCard
            key={r.title}
            item={r}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}