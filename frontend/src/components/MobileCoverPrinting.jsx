import { useEffect, useState } from "react";

/* LOCAL IMAGES */

import cover1 from "../assets/mobilecoverImage/cover_1.jpeg";
import cover2 from "../assets/mobilecoverImage/cover_2.jpeg";
import cover3 from "../assets/mobilecoverImage/cover_3.jpeg";
import cover4 from "../assets/mobilecoverImage/cover_4.jpeg";

import printer1 from "../assets/mobilecoverImage/cover_5.jpeg";
import printer2 from "../assets/mobilecoverImage/cover_6.jpeg";

export default function MobileCoverPrinting() {

  const sliderImages = [
    cover1,
    cover2,
    cover3,
    cover4,
    printer1,
    printer2,
  ];

  const [current, setCurrent] =
    useState(0);

  /* AUTO SLIDER */

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrent((prev) =>
        prev === sliderImages.length - 1
          ? 0
          : prev + 1
      );

    }, 2500);

    return () =>
      clearInterval(interval);

  }, []);

  return (

    <section
      style={{
        width: "100%",
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#0f172a,#111827,#1e293b)",
        padding: "80px 5%",
        overflow: "hidden",
      }}
    >

      <div
        style={{
          maxWidth: "1400px",
          margin: "auto",

          display: "grid",

          gridTemplateColumns:
            window.innerWidth < 900
              ? "1fr"
              : "1fr 1fr",

          gap: "50px",
          alignItems: "center",
        }}
      >

        {/* LEFT CONTENT */}

        <div>

          <h4
            style={{
              color: "#ef4444",
              fontSize: "20px",
              marginBottom: "15px",
              letterSpacing: "2px",
            }}
          >
            MOBILE COVER PRINTING
          </h4>

          <h1
            style={{
              color: "#fff",

              fontSize:
                window.innerWidth < 768
                  ? "42px"
                  : "65px",

              lineHeight: "1.1",

              marginBottom: "25px",

              fontWeight: "bold",
            }}
          >
            Custom Mobile
            <br />
            Cover Printing
          </h1>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "18px",
              lineHeight: "1.8",
              marginBottom: "35px",
            }}
          >
            Print your favourite photos,
            anime designs, names,
            company logos, couple photos,
            gaming art and custom graphics
            on premium quality mobile covers.
          </p>

          {/* FEATURES */}

          <div
            style={{
              display: "grid",

              gridTemplateColumns:
                "repeat(auto-fit,minmax(220px,1fr))",

              gap: "20px",
            }}
          >

            {[
              "Premium Gloss Finish",
              "Hard Silicone Cover",
              "Fast Delivery",
              "Photo Quality Printing",
              "Custom Name Printing",
              "All Mobile Models",
            ].map((item, index) => (

              <div
                key={index}
                style={{
                  background:
                    "rgba(255,255,255,0.05)",

                  border:
                    "1px solid rgba(255,255,255,0.08)",

                  padding: "18px",

                  borderRadius: "15px",

                  color: "#fff",

                  fontWeight: "600",

                  backdropFilter: "blur(10px)",
                }}
              >
                ✅ {item}
              </div>

            ))}

          </div>

        </div>

        {/* RIGHT SLIDER */}

        {/* RIGHT SLIDER */}

<div
  style={{
    position: "relative",
    width: "100%",
    height:
      window.innerWidth < 768
        ? "420px"
        : "650px",

    overflow: "hidden",
    borderRadius: "35px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    background:
      "linear-gradient(145deg,#020617,#0f172a)",

    boxShadow:
      "0 20px 70px rgba(0,0,0,0.6)",
  }}
>
  {/* IMAGE SLIDER */}

  {sliderImages.map((image, index) => (
    <img
      key={index}
      src={image}
      alt="mobile-cover"
      style={{
        position: "absolute",

        width: "50%",
        height: "88%",

        objectFit: "cover",

        borderRadius: "35px",

        transition:
          "all 1s ease-in-out",

        opacity:
          current === index ? 1 : 0,

        transform:
          current === index
            ? "scale(1)"
            : "scale(1.1)",

        boxShadow:
          "0 10px 40px rgba(0,0,0,0.5)",
      }}
    />
  ))}

  {/* DOTS */}

  <div
    style={{
      position: "absolute",
      bottom: "25px",
      left: "50%",
      transform: "translateX(-50%)",

      display: "flex",
      gap: "10px",
      zIndex: 100,
    }}
  >
    {sliderImages.map((_, index) => (
      <div
        key={index}
        style={{
          width:
            current === index
              ? "30px"
              : "10px",

          height: "10px",

          borderRadius: "20px",

          background:
            current === index
              ? "#ef4444"
              : "#ffffff",

          transition: "0.4s",
        }}
      />
    ))}
  </div>
</div>

      </div>

    </section>

  );

}