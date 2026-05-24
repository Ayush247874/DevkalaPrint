import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const contacts = [
  {
    icon: "💬",
    label: "WhatsApp",
    value: "+91 8404970136",
    href: "https://wa.me/918404970136?text=Hello,%20I%20am%20interested%20in%20your%20services",
    external: true,
  },
  {
    icon: "📞",
    label: "Phone",
    value: "+91  7368873919",
    href: "tel:+917368873919",
    external: false,
  },
  {
    icon: "✉️",
    label: "Email",
    value: "devkalacommunication@gmail.com",
    href: "mailto:devkalacommunication@gmail.com?subject=Inquiry",
    external: false,
  },
  {
    icon: "📍",
    label: "Address",
    value: "Dhanchhar,Near Kashi Baba Temple(Fango Halt), Khagaria, Bihar - 851214",
    href: "https://maps.app.goo.gl/ArNzGTrWzGwka9G56",
    external: true,
  },
];

function ContactCard({ item, index }) {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-50px",
  });

  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      ref={ref}
      href={item.href}
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#1a1a1a",
        border: `1px solid ${hovered ? "#D40000" : "#2a2a2a"}`,
        borderRadius: "14px",
        padding: "28px 22px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: "12px",
        textDecoration: "none",
        color: "#f0f0f0",
        transition: "all 0.3s",
        transform: hovered
          ? "translateY(-4px)"
          : "translateY(0)",
        boxShadow: hovered
          ? "0 12px 32px rgba(212,0,0,0.15)"
          : "none",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          width: "50px",
          height: "50px",
          background: "rgba(212,0,0,0.12)",
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.4rem",
        }}
      >
        {item.icon}
      </div>

      <h4
        style={{
          fontSize: "0.78rem",
          fontWeight: 600,
          letterSpacing: "1px",
          textTransform: "uppercase",
          color: "#D40000",
        }}
      >
        {item.label}
      </h4>

      <p
        style={{
          fontSize: "0.87rem",
          color: "#aaa",
          lineHeight: 1.5,
        }}
      >
        {item.value}
      </p>
    </motion.a>
  );
}

export default function Contact() {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
  });

  return (
    <section
      id="contact"
      style={{
        padding: "90px 5%",
        background: "#0a0a0a",
      }}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        <h2
          style={{
            fontFamily: "'Rajdhani', sans-serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
            fontWeight: 700,
            color: "#fff",
            marginBottom: "12px",
          }}
        >
          Get in Touch
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
            "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "20px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {contacts.map((c, i) => (
          <ContactCard
            key={c.label}
            item={c}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}