import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import facebookIcon from "../assets/icons/facebook.png";
import instagramIcon from "../assets/icons/instagram.png";
import youtubeIcon from "../assets/icons/youtube.png";

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "FAQs", href: "#faqs" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  { label: "DL Card Printing", href: "#services" },
  { label: "RC Card Printing", href: "#services" },
  { label: "PAN Card Printing", href: "#services" },
  { label: "Voter ID Printing", href: "#services" },
  { label: "Passport Size Photos", href: "#services" },
  { label: "Aadhar Card Printing", href: "#services" },
  { label: "Ration Card Printing", href: "#services" },
  { label: "Ayushman Card", href: "#services" },
  { label: "E-Shram Card", href: "#services" },
  { label: "ABC Card", href: "#services" },
  { label: "UAN Card", href: "#services" },
];

const legalLinks = [
  { label: "Terms & Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Refund & Return Policy", href: "#" },
  { label: "Shipping Policy", href: "#" },
];

function FooterLink({ href, children }) {
  return (
    <a
      href={href}
      style={{
        color: "#aaa",
        fontSize: "0.83rem",
        transition: "color 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "#D40000";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "#aaa";
      }}
    >
      {children}
    </a>
  );
}

function SocialBtn({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        width: "36px",
        height: "36px",
        background: "#1a1a1a",
        border: "1px solid #2a2a2a",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        transition: "all 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "#D40000";
        e.currentTarget.style.background = "rgba(212,0,0,0.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "#2a2a2a";
        e.currentTarget.style.background = "#1a1a1a";
      }}
    >
      {children}
    </a>
  );
}

export default function Footer() {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
  });

  return (
    <footer
      style={{
        background: "#111111",
        borderTop: "1px solid #2a2a2a",
        padding: "60px 5% 28px",
      }}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{
          display: "grid",
          gridTemplateColumns: "1.6fr 1fr 1fr 1fr",
          gap: "40px",
          marginBottom: "48px",
        }}
        className="footer-grid"
      >
        <div>
          <div
            style={{
              fontFamily:"cursive",
              fontSize: "1.4rem",
              fontWeight: 700,
              color: "#fff",
            }}
          >
            DevKala<span style={{ color: "#D40000" }}>Print</span>
          </div>

          <p
            style={{
              fontSize: "0.85rem",
              color: "#aaaaaa",
              lineHeight: 1.7,
              marginTop: "14px",
              maxWidth: "280px",
            }}
          >
            By Mr Prem Kumar   <br/> 
            By Mr Niraj Kumar
            <br />
            Providing high-quality ID card printing, passport photos, and
            document printing services with fast delivery.
          </p>

          <div
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "16px",
            }}
          >
            <SocialBtn href="https://www.facebook.com/share/1M7EygssZS/">
              <img
                src={facebookIcon}
                alt="Facebook"
                style={{ width: "24px", height: "24px" }}
              />
            </SocialBtn>

            <SocialBtn href="https://www.instagram.com/hellopremok?igsh=dXFveXFoN2VmeWVp">
              <img
                src={instagramIcon}
                alt="Instagram"
                style={{ width: "24px", height: "24px" }}
              />
            </SocialBtn>

            <SocialBtn href="#">
              <img
                src={youtubeIcon}
                alt="YouTube"
                style={{ width: "24px", height: "24px" }}
              />
            </SocialBtn>
          </div>
        </div>

        <div>
          <h5
            style={{
              fontSize: "0.88rem",
              fontWeight: 600,
              color: "#fff",
              marginBottom: "16px",
              letterSpacing: "0.5px",
            }}
          >
            Quick Links
          </h5>

          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {quickLinks.map((link) => (
              <li key={link.label}>
                <FooterLink href={link.href}>
                  {link.label}
                </FooterLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5
            style={{
              fontSize: "0.88rem",
              fontWeight: 600,
              color: "#fff",
              marginBottom: "16px",
              letterSpacing: "0.5px",
            }}
          >
            Our Services
          </h5>

          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {serviceLinks.map((link) => (
              <li key={link.label}>
                <FooterLink href={link.href}>
                  {link.label}
                </FooterLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5
            style={{
              fontSize: "0.88rem",
              fontWeight: 600,
              color: "#fff",
              marginBottom: "16px",
              letterSpacing: "0.5px",
            }}
          >
            Contact Information
          </h5>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <a
              href="tel:+917368873919 "
              style={{
                color: "#aaa",
                fontSize: "0.83rem",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#aaa";
              }}
            >
              +91 7368873919 
              
            </a> 
             <a
              href="tel:+918404970136"
              style={{
                color: "#aaa",
                fontSize: "0.83rem",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#aaa";
              }}
            >
              +91 8404970136
              
            </a> 
             

            <a
              href="mailto:devkalacommunication@gmail.com"
              style={{
                color: "#aaa",
                fontSize: "0.83rem",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#aaa";
              }}
            >
              devkalacommunication@gmail.com
            </a>

            <span
              style={{
                color: "#aaa",
                fontSize: "0.83rem",
              }}
            >
              Dhanchhar,Near Kashi Baba Temple(Fango Halt), Khagaria, Bihar - 851214
            </span>
          </div>
        </div>
      </motion.div>

      <div
        style={{
          borderTop: "1px solid #2a2a2a",
          paddingTop: "24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <p
          style={{
            color: "#aaa",
            fontSize: "0.8rem",
          }}
        >
          © 2026 DevkalaPrint. All Rights Reserved.
        </p>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          {legalLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                color: "#aaa",
                fontSize: "0.8rem",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#D40000";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#aaa";
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }

        @media (max-width: 700px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </footer>
  );
}