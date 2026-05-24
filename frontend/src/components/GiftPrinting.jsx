import { useEffect, useState } from "react";

/* GIFT IMAGES */

import gift1 from "../assets/gifts/gift_1.png";
import gift2 from "../assets/gifts/gift_2.jpg";
import gift3 from "../assets/gifts/gift_3.jpg";
import gift4 from "../assets/gifts/gift_4.jpg";
import gift5 from "../assets/gifts/gift_5.jpg";
import gift6 from "../assets/gifts/gift_6.jpeg";
import gift7 from "../assets/gifts/gift_7.jpeg";

export default function GiftPrinting() {

  const sliderImages = [
    gift1,
    gift2,
    gift3,
    gift4,
    gift5,
    gift6,
    gift7,
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
          "linear-gradient(135deg,#020617,#0f172a,#111827)",

        padding: "90px 5%",
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

          gap: "60px",

          alignItems: "center",
        }}
      >

        {/* LEFT CONTENT */}

        <div>

          <div
            style={{
              display: "inline-block",

              background:
                "rgba(239,68,68,0.15)",

              color: "#ef4444",

              padding: "10px 22px",

              borderRadius: "50px",

              fontWeight: "600",

              marginBottom: "25px",

              fontSize: "15px",
            }}
          >
            Premium Gift Printing
          </div>

          <h1
            style={{
              color: "#fff",

              fontSize:
                window.innerWidth < 768
                  ? "48px"
                  : "70px",

              lineHeight: "1.1",

              marginBottom: "25px",

              fontWeight: "bold",
            }}
          >
            Custom
            <span
              style={{
                color: "#ef4444",
              }}
            >
              {" "}Gift{" "}
            </span>
            Printing
          </h1>

          <p
            style={{
              color: "#cbd5e1",

              fontSize: "18px",

              lineHeight: "1.9",

              marginBottom: "40px",
            }}
          >
            We provide premium quality
            custom gift printing services
            including cups, mouse pads,
            bangles, bags, LED lamps,
            photo gifts and more with
            modern HD printing technology.
          </p>

          {/* FEATURES */}

          <div
            style={{
              display: "grid",

              gridTemplateColumns:
                "repeat(auto-fit,minmax(240px,1fr))",

              gap: "18px",
            }}
          >

            {[
              "Custom Mug Printing",
              "Mouse Pad Printing",
              "Photo LED Lamps",
              "Custom Gift Bags",
              "Photo Bangles",
              "Fast Delivery",
            ].map((item, index) => (

              <div
                key={index}
                style={{
                  background:
                    "rgba(255,255,255,0.05)",

                  border:
                    "1px solid rgba(255,255,255,0.08)",

                  padding: "18px 22px",

                  borderRadius: "16px",

                  color: "#fff",

                  fontWeight: "600",

                  backdropFilter: "blur(10px)",

                  transition: "0.4s",
                }}
              >
                🎁 {item}
              </div>

            ))}

          </div>

          {/* BUTTON */}

          <button
            style={{
              marginTop: "40px",

              background:
                "linear-gradient(90deg,#ef4444,#dc2626)",

              color: "#fff",

              border: "none",

              padding: "16px 38px",

              borderRadius: "14px",

              fontSize: "18px",

              fontWeight: "bold",

              cursor: "pointer",

              boxShadow:
                "0 10px 35px rgba(239,68,68,0.4)",

              transition: "0.4s",
            }}
          >
            Order Gift Now
          </button>

        </div>

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

          {/* IMAGES */}

          {sliderImages.map(
            (image, index) => (

              <img
                key={index}

                src={image}

                alt="gift-printing"

                style={{
                  position: "absolute",

                  width: "80%",

                  height: "88%",

                  objectFit: "cover",

                  borderRadius: "35px",

                  transition:
                    "all 1s ease-in-out",

                  opacity:
                    current === index
                      ? 1
                      : 0,

                  transform:
                    current === index
                      ? "scale(1)"
                      : "scale(1.08)",

                  boxShadow:
                    "0 10px 40px rgba(0,0,0,0.5)",
                }}
              />

            )
          )}

          {/* DOTS */}

          <div
            style={{
              position: "absolute",

              bottom: "25px",

              left: "50%",

              transform:
                "translateX(-50%)",

              display: "flex",

              gap: "10px",

              zIndex: 100,
            }}
          >

            {sliderImages.map(
              (_, index) => (

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

              )
            )}

          </div>

        </div>

      </div>

    </section>

  );

}