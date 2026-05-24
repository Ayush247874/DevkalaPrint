import { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
} from "framer-motion";

import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "👨 Who is founder of DevkalaPrint.in?",
    a: "Mr. Prem Kumar and Mr. Niraj Kumar, Who is a young entrepreneur.",
  },
  {
    q: "📌 How do I place an order?",
    a: "You can place an order by selecting the service, uploading the required documents, and making the payment.",
  },
  {
    q: "📂 What type of documents can I upload?",
    a: "You can upload JPGs, and PNGs for printing. Make sure the quality is high for the best results.",
  },
  {
    q: "💳 What payment methods do you accept?",
    a: "We accept payments through UPI, credit/debit cards, net banking, and digital wallets.",
  },
  {
    q: "🚚 How long does delivery take?",
    a: "Standard delivery takes 3-5 working days. Express delivery options are also available.",
  },
];

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(false);

  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-30px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.4,
        delay: index * 0.08,
      }}
      style={{
        background: "#1a1a1a",
        border: "1px solid #2a2a2a",
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 24px",
          color: open ? "#D40000" : "#fff",
          fontSize: "0.92rem",
          fontWeight: 500,
          fontFamily: "'Poppins', sans-serif",
          textAlign: "left",
          transition: "color 0.2s",
        }}
      >
        {item.q}

        <span
          style={{
            color: "#D40000",
            flexShrink: 0,
            marginLeft: "12px",
          }}
        >
          {open ? (
            <Minus size={18} />
          ) : (
            <Plus size={18} />
          )}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            style={{
              overflow: "hidden",
            }}
          >
            <p
              style={{
                padding: "0 24px 20px",
                color: "#aaa",
                fontSize: "0.87rem",
                lineHeight: 1.7,
              }}
            >
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
  });

  return (
    <section
      id="faqs"
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
          Frequently Asked Questions
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
          maxWidth: "760px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
        }}
      >
        {faqs.map((f, i) => (
          <FAQItem
            key={i}
            item={f}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}