import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css/autoplay"; 

import "swiper/css";
import "swiper/css/effect-coverflow";

export default function Hero() {
  const sliderImages = [
    "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=1200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=1200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  ];

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "90px 5% 60px",
        position: "relative",
        overflow: "hidden",
        background: "#050505",
      }}
    >
      {/* Background Glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at top right, rgba(212,0,0,0.15), transparent 45%)",
          pointerEvents: "none",
        }}
      />

      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          flex: 1,
          maxWidth: "580px",
          zIndex: 2,
        }}
      >
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(212,0,0,0.12)",
            border: "1px solid rgba(212,0,0,0.3)",
            color: "#ff1a1a",
            fontSize: "0.78rem",
            fontWeight: 600,
            padding: "6px 14px",
            borderRadius: "20px",
            letterSpacing: "1px",
            textTransform: "uppercase",
            marginBottom: "24px",
          }}
        >
          ⚡ Fast Delivery Across India
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            fontFamily: "'Rajdhani', sans-serif",
            fontSize: "clamp(2.5rem, 5vw, 4.2rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            color: "#fff",
            marginBottom: "20px",
          }}
        >
          Premium PVC &
          <br />
          <span style={{ color: "#D40000" }}>
            Banner Printing
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            fontSize: "1rem",
            color: "#aaa",
            lineHeight: 1.7,
            marginBottom: "36px",
            maxWidth: "440px",
          }}
        >
          High-quality PVC cards, flex banners,
          posters, and document printing services
          with fast delivery and premium finishing.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{
            display: "flex",
            gap: "14px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#services"
            style={{
              background: "#D40000",
              color: "#fff",
              padding: "13px 28px",
              borderRadius: "10px",
              fontWeight: 600,
              fontSize: "0.92rem",
              textDecoration: "none",
              transition: "0.3s",
            }}
          >
            View Services
          </a>

          <a
            href="#contact"
            style={{
              background: "transparent",
              color: "#fff",
              padding: "13px 28px",
              borderRadius: "10px",
              fontWeight: 600,
              fontSize: "0.92rem",
              border: "1px solid #333",
              textDecoration: "none",
              transition: "0.3s",
            }}
          >
            Contact Us
          </a>
        </motion.div>
      </motion.div>

      {/* Right Slider */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          perspective: "1200px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "560px",
          }}
        >
           <Swiper
  modules={[Autoplay, EffectCoverflow]}
  effect="coverflow"
  centeredSlides={true}
  loop={true}
  slidesPerView={1}
  spaceBetween={20}
  speed={2500}
  autoplay={{
    delay: 0,
    disableOnInteraction: false,
    reverseDirection: false,
  }}
  coverflowEffect={{
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1.5,
    slideShadows: false,
  }}
  style={{
    width: "100%",
    maxWidth: "560px",
  }}
>
  {sliderImages.map((img, index) => (
    <SwiperSlide key={index}>
      <div
        style={{
          width: "100%",
          height: "420px",
          borderRadius: "24px",
          overflow: "hidden",
          background: "#111",
          boxShadow:
            "0 25px 60px rgba(212,0,0,0.25)",
          border:
            "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <img
          src={img}
          alt="Printing Service"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    </SwiperSlide>
  ))}
</Swiper>
        </div>
      </motion.div>

      {/* Responsive */}
      <style>{`
        .swiper-slide {
          transition: transform 0.3s ease;
        }

        @media (max-width: 900px) {
          section {
            flex-direction: column !important;
            text-align: center;
            padding-top: 110px !important;
            gap: 40px;
          }
        }
      `}</style>
    </section>
  );
}