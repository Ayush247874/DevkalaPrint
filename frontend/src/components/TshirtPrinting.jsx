import { useEffect, useState } from "react";

/* LOCAL IMAGES */

import tshirt1 from "../assets/tshirts/T-shirt.jpeg";
import tshirt2 from "../assets/tshirts/T-shirt_2.jpeg";
import tshirt3 from "../assets/tshirts/T-shirt_3.jpeg";
import tshirt4 from "../assets/tshirts/T-shirt_4.jpeg";

import printer1 from "../assets/tshirts/T-shirt_5.jpeg";
import printer2 from "../assets/tshirts/T-shirt_6.jpeg";

export default function TshirtPrinting() {

  const sliderImages = [

    tshirt1,
    tshirt2,
    tshirt3,
    tshirt4,
    printer1,
    printer2,

  ];

  const [current,
    setCurrent] = useState(0);

  /* AUTO SLIDER */

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrent((prev) =>

        prev ===
        sliderImages.length - 1
          ? 0
          : prev + 1

      );

    }, 3000);

    return () =>
      clearInterval(interval);

  }, []);

  return (

    <section style={mainSection}>

      {/* LEFT CONTENT */}

      <div style={leftSection}>

        <span style={tagStyle}>
          Premium T-Shirt Printing
        </span>

        <h1 style={titleStyle}>
          Custom
          <span
            style={{
              color: "#D40000",
            }}
          >
            {" "}T-Shirt
          </span>
          {" "}Printing
        </h1>

        <p style={descStyle}>

          We provide premium quality
          custom T-shirt printing service
          across India with HD print,
          durable fabric and modern
          printing machines.

        </p>

        {/* FEATURES */}

        <div style={featureGrid}>

          <div style={featureCard}>
            HD Print Quality
          </div>

          <div style={featureCard}>
            Fast Delivery
          </div>

          <div style={featureCard}>
            Custom Logo Design
          </div>

          <div style={featureCard}>
            Modern Printing Machine
          </div>

        </div>

        <button style={btnStyle}>
          Order Now
        </button>

      </div>

      {/* RIGHT SLIDER */}

      <div style={rightSection}>

        <div style={sliderBox}>

          <img
            src={sliderImages[current]}
            alt="Printing"
            style={sliderImage}
          />

        </div>

        {/* DOTS */}

        <div style={dotsContainer}>

          {
            sliderImages.map(
              (_, index) => (

                <div
                  key={index}
                  style={{
                    ...dotStyle,

                    background:
                      current === index
                        ? "#D40000"
                        : "#555",
                  }}
                />

              ))
          }

        </div>

      </div>

    </section>

  );

}

/* MAIN */

const mainSection = {

  minHeight: "100vh",

  background:
    "linear-gradient(180deg,#050505,#111827)",

  padding: "100px 5%",

  display: "flex",

  justifyContent: "space-between",

  alignItems: "center",

  gap: "70px",

  flexWrap: "wrap",

};

/* LEFT */

const leftSection = {

  flex: "1",

  minWidth: "320px",

};

const tagStyle = {

  background:
    "rgba(212,0,0,0.15)",

  color: "#ff4d4d",

  padding: "10px 18px",

  borderRadius: "30px",

  display: "inline-block",

  fontWeight: "bold",

  marginBottom: "25px",

};

const titleStyle = {

  fontSize: "65px",

  lineHeight: "80px",

  color: "#fff",

  marginBottom: "25px",

  fontWeight: "bold",

};

const descStyle = {

  color: "#cbd5e1",

  lineHeight: "35px",

  fontSize: "18px",

  marginBottom: "35px",

};

/* FEATURES */

const featureGrid = {

  display: "grid",

  gridTemplateColumns:
    "repeat(auto-fit,minmax(220px,1fr))",

  gap: "18px",

  marginBottom: "35px",

};

const featureCard = {

  background:
    "rgba(255,255,255,0.05)",

  padding: "18px",

  borderRadius: "16px",

  color: "#fff",

  border:
    "1px solid rgba(255,255,255,0.08)",

  fontWeight: "500",

};

/* BUTTON */

const btnStyle = {

  background:
    "linear-gradient(135deg,#D40000,#ff3c3c)",

  color: "#fff",

  border: "none",

  padding: "16px 35px",

  borderRadius: "12px",

  fontWeight: "bold",

  cursor: "pointer",

  fontSize: "17px",

  boxShadow:
    "0 10px 30px rgba(212,0,0,0.35)",

};

/* RIGHT */

const rightSection = {

  flex: "1",

  minWidth: "320px",

  display: "flex",

  flexDirection: "column",

  alignItems: "center",

};

const sliderBox = {

  width: "100%",

  maxWidth: "550px",

  height: "650px",

  borderRadius: "30px",

  overflow: "hidden",

  boxShadow:
    "0 15px 45px rgba(0,0,0,0.5)",

  border:
    "1px solid rgba(255,255,255,0.08)",

};

const sliderImage = {

  width: "100%",

  height: "100%",

  objectFit: "cover",

  transition: "0.6s",

};

/* DOTS */

const dotsContainer = {

  display: "flex",

  gap: "10px",

  marginTop: "25px",

};

const dotStyle = {

  width: "12px",

  height: "12px",

  borderRadius: "50%",

  transition: "0.3s",

};