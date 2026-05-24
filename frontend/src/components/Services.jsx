import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    slug: "passport-photo",
    img: "https://codesparshofficial.github.io/Print420/img10.png",
    title: "Passport Size Photo",
    desc: "Upload Your one photo and get 42 passport size photo at your doorstep",
    price: "₹99",
  },
  {
    slug: "aadhar-card",
    img: "https://codesparshofficial.github.io/Print420/img9.png",
    title: "Aadhar Card",
    desc: "High-quality Aadhar card prints on PVC.",
    price: "₹99",
  },
  {
    slug: "dl-card",
    img: "https://codesparshofficial.github.io/Print420/img7.png",
    title: "DL Card",
    desc: "Get your driving license printed on premium PVC.",
    price: "₹99",
  },
  {
    slug: "rc-card",
    img: "https://codesparshofficial.github.io/Print420/img2.png",
    title: "RC Card",
    desc: "Vehicle registration card prints on PVC with high-quality finish.",
    price: "₹99",
  },
  {
    slug: "pan-card",
    img: "https://codesparshofficial.github.io/Print420/img11.png",
    title: "PAN Card",
    desc: "PAN Card reprints on durable material, PVC.",
    price: "₹99",
  },
  {
    slug: "voter-id",
    img: "https://codesparshofficial.github.io/Print420/img8.png",
    title: "Voter ID",
    desc: "Secure your voter ID prints in high quality at PVC card.",
    price: "₹99",
  },
  {
    slug: "ration-card",
    img: "https://codesparshofficial.github.io/Print420/img3.png",
    title: "Ration Card",
    desc: "Print your ration card on a durable PVC card.",
    price: "₹99",
  },
  {
    slug: "ayushman-card",
    img: "https://codesparshofficial.github.io/Print420/img4.png",
    title: "Ayushman Card",
    desc: "Get your Ayushman Bharat card printed on PVC.",
    price: "₹99",
  },
  {
    slug: "e-shram-card",
    img: "https://codesparshofficial.github.io/Print420/img5.png",
    title: "E-Shram Card",
    desc: "Durable PVC prints for your E-Shram card.",
    price: "₹99",
  },
  {
    slug: "abc-card",
    img: "https://codesparshofficial.github.io/Print420/img1.png",
    title: "ABC Card",
    desc: "Print your Academic Bank of Credits (ABC) card.",
    price: "₹99",
  },
  {
    slug: "uan-card",
    img: "https://codesparshofficial.github.io/Print420/img6.png",
    title: "UAN Card",
    desc: "Get your UAN card printed on a high-quality PVC.",
    price: "₹99",
  },
];

function OrderButton({ slug }) {
  const [h, setH] = useState(false);

  return (
    <Link
      to={`/service/${slug}`}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        display: "inline-block",
        background: h ? "#a30000" : "#D40000",
        color: "#fff",
        padding: "9px 22px",
        borderRadius: "7px",
        fontSize: "0.85rem",
        fontWeight: 600,
        transition: "all 0.2s",
        textDecoration: "none",
        boxShadow: h
          ? "0 6px 18px rgba(212,0,0,0.3)"
          : "none",
      }}
    >
      Order Now
    </Link>
  );
}

function ServiceCard({ service, index }) {
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
        delay: index * 0.05,
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
        padding: "28px 22px",
        textAlign: "center",
        transition:"all 0.45s ease",
        position: "relative",
        overflow: "hidden",
        transform: hovered
  ? "translateY(-8px) scale(1.02)"
  : "translateY(0) scale(1)",
        boxShadow: hovered
  ? "0 18px 45px rgba(212,0,0,0.18)"
  : "0 5px 15px rgba(0,0,0,0.15)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "#D40000",
          transform: hovered
            ? "scaleX(1)"
            : "scaleX(0)",
          transition: "transform 0.3s",
          transformOrigin: "left",
        }}
      />

      <div
  style={{
    width: "100%",
    height: "220px",
    overflow: "hidden",
    borderRadius: "12px",
    marginBottom: "18px",
    position: "relative",
  }}
>
  <img
  src={service.img}
  alt={service.title}
  style={{
    width: "180px",
    height: "180px",
    objectFit: "contain",
    borderRadius: "12px",
    marginBottom: "16px",

    /* IMAGE CENTER */
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",

    /* SMOOTH EFFECT */
    transition: "all 0.4s ease",

    /* ZOOM EFFECT */
    transform: hovered
      ? "scale(1.08)"
      : "scale(1)",

    /* GLOW EFFECT */
    background:
  hovered
    ? "rgba(35,35,35,0.9)"
    : "#1f1f1f",

    padding: "10px",
  //   boxShadow: hovered
  // ? "0 0 25px rgba(212,0,0,0.35)"
  // : "0 0 0 rgba(0,0,0,0)",
  }}
/>

  <div
     style={{
    position: "absolute",
    inset: 0,

    /* MODERN DARK OVERLAY */
    // background: hovered
    //   ? "linear-gradient(135deg, rgba(40,40,40,0.35), rgba(212,0,0,0.18))"
    //   : "transparent",

    backdropFilter: "none",

    opacity: hovered ? 1 : 0,

    transition: "all 0.4s ease",

    borderRadius: "12px",
  }}
  />
</div>

      <h3
        style={{
          fontSize: "1rem",
          fontWeight: 600,
          color: "#fff",
          marginBottom: "8px",
        }}
      >
        {service.title}
      </h3>

      <p
        style={{
          fontSize: "0.82rem",
          color: "#aaa",
          lineHeight: 1.6,
          marginBottom: "14px",
        }}
      >
        {service.desc}
      </p>

      <div
        style={{
          fontFamily: "'Rajdhani', sans-serif",
          fontSize: "1.4rem",
          fontWeight: 700,
          color: "#D40000",
          marginBottom: "16px",
        }}
      >
        {service.price}
      </div>

      <OrderButton slug={service.slug} />
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
  });

  return (
    <section
      id="services"
      style={{
        padding: "90px 5%",
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
          Our Services
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
            "repeat(auto-fill, minmax(240px, 1fr))",
          gap: "22px",
        }}
      >
        {services.map((s, i) => (
          <ServiceCard
            key={s.title}
            service={s}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}