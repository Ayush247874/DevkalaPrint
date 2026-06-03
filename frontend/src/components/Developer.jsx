import developerImg from "../assets/developer/developer.jpeg";
import facebookIcon from "../assets/icons/facebook.png";
import instagramIcon from "../assets/icons/instagram.png";
import youtubeIcon from "../assets/icons/youtube.png";

export default function DeveloperSection() {
  const services = [
    {
      title: "Business Website",
      desc: "Professional business websites",
      icon: "🌐",
    },
    {
      title: "Hotel Website",
      desc: "Modern hotel & resort websites",
      icon: "🏨",
    },
    {
      title: "Restaurant Website",
      desc: "Food & restaurant websites",
      icon: "🍴",
    },
    {
      title: "E-Commerce Website",
      desc: "Powerful e-commerce solutions",
      icon: "🛒",
    },
    {
      title: "Portfolio Website",
      desc: "Personal portfolio websites",
      icon: "👤",
    },
    {
      title: "School / College Website",
      desc: "Education & institution websites",
      icon: "🎓",
    },
    {
      title: "Custom Admin Panel",
      desc: "Custom admin dashboards",
      icon: "🛡️",
    },
    {
      title: "Android App Development",
      desc: "Android apps for business",
      icon: "📱",
    },
    {
      title: "Printing Business Website",
      desc: "Printing business websites",
      icon: "🖨️",
    },
    {
      title: "Online Service Portal",
      desc: "Booking & management portals",
      icon: "🖥️",
    },
  ];

  return (
    <>
      <style>{`
      
      *{
        margin:0;
        padding:0;
        box-sizing:border-box;
      }

      .developer-section{
        min-height:100vh;
        background:
        radial-gradient(circle at bottom,#ff2d5520,transparent 40%),
        linear-gradient(135deg,#020617,#071028,#020617);
        padding:80px 5%;
        color:#fff;
      }

      .developer-container{
        max-width:1400px;
        margin:auto;
        display:grid;
        grid-template-columns:380px 1fr;
        gap:60px;
      }

      /* LEFT CARD */

      .developer-card{
        background:rgba(255,255,255,.03);
        border:1px solid rgba(255,255,255,.08);
        border-radius:30px;
        padding:40px 30px;
        backdrop-filter:blur(20px);
      }

      .image-wrapper{
        display:flex;
        justify-content:center;
        margin-bottom:25px;
      }

      .developer-image{
        width:240px;
        height:240px;
        border-radius:50%;
        object-fit:cover;
        border:5px solid #ff4d4d;
        box-shadow:
        0 0 40px rgba(255,77,77,.5);
      }

      .developer-card h2{
        text-align:center;
        font-size:35px;
        font-weight:700;
      }

      .developer-card h2 span{
        color:#ff4d4d;
      }

      .role{
        display:block;
        width:max-content;
        margin:15px auto 30px;
        padding:10px 24px;
        background:#ff4d4d20;
        color:#ff4d4d;
        border-radius:30px;
        font-weight:600;
      }

      .about-card{
        text-align:center;
        color:#cbd5e1;
        line-height:1.8;
        margin-bottom:30px;
      }

      .personal-title{
        color:#ff4d4d;
        margin-bottom:20px;
        font-weight:700;
      }

      .contact-item{
        display:flex;
        gap:12px;
        margin-bottom:18px;
        color:#e2e8f0;
      }

      .social-icons{
        display:flex;
        justify-content:center;
        gap:18px;
        margin-top:30px;
      }

      .social-icons a{
        width:60px;
        height:60px;
        border-radius:50%;
        border:1px solid rgba(255,255,255,.15);
        display:flex;
        justify-content:center;
        align-items:center;
        transition:.3s;
      }

      .social-icons a:hover{
        transform:translateY(-5px);
        box-shadow:0 0 20px rgba(255,77,77,.4);
      }

      .social-icons img{
        width:28px;
        height:28px;
      }

      /* RIGHT */

      .badge{
        display:inline-block;
        padding:12px 24px;
        border-radius:40px;
        background:#ff4d4d20;
        color:#ff4d4d;
        font-weight:700;
        margin-bottom:25px;
      }

      .hero-title{
        font-size:72px;
        margin-bottom:15px;
      }

      .hero-title span{
        color:#ff4d4d;
      }

      .hero-sub{
        color:#cbd5e1;
        font-size:22px;
        margin-bottom:25px;
      }

      .hero-text{
        color:#cbd5e1;
        max-width:850px;
        line-height:1.9;
        margin-bottom:40px;
      }

      .stats{
        display:grid;
        grid-template-columns:repeat(3,1fr);
        gap:30px;
        margin-bottom:50px;
      }

      .stat{
        display:flex;
        align-items:center;
        gap:15px;
      }

      .stat-icon{
        width:65px;
        height:65px;
        border-radius:18px;
        background:rgba(255,255,255,.05);
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:30px;
      }

      .stat h3{
        color:#ff4d4d;
        font-size:40px;
      }

      .service-heading{
        font-size:34px;
        margin-bottom:25px;
      }

      .service-grid{
        display:grid;
        grid-template-columns:repeat(4,1fr);
        gap:20px;
      }

      .service-card{
        background:rgba(255,255,255,.04);
        border:1px solid rgba(255,255,255,.08);
        border-radius:20px;
        padding:25px;
        transition:.3s;
      }

      .service-card:hover{
        transform:translateY(-8px);
        border-color:#ff4d4d;
      }

      .service-icon{
        width:55px;
        height:55px;
        border-radius:50%;
        background:#ff4d4d20;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:24px;
        margin-bottom:15px;
      }

      .service-card h4{
        margin-bottom:10px;
      }

      .service-card p{
        color:#cbd5e1;
        line-height:1.6;
      }

      .buttons{
        display:flex;
        gap:20px;
        margin-top:40px;
      }

      .contact-btn,
      .hire-btn{
        padding:18px 40px;
        border-radius:16px;
        font-size:18px;
        cursor:pointer;
        font-weight:700;
      }

      .contact-btn{
        background:#ff4d4d;
        border:none;
        color:white;
      }

      .hire-btn{
        background:transparent;
        border:1px solid rgba(255,255,255,.2);
        color:white;
      }

      @media(max-width:1200px){
        .service-grid{
          grid-template-columns:repeat(2,1fr);
        }
      }

      @media(max-width:992px){
        .developer-container{
          grid-template-columns:1fr;
        }

        .hero-title{
          font-size:50px;
        }

        .stats{
          grid-template-columns:1fr;
        }
      }

      @media(max-width:600px){

        .hero-title{
          font-size:38px;
        }

        .service-grid{
          grid-template-columns:1fr;
        }

        .buttons{
          flex-direction:column;
        }

        .developer-card h2{
          font-size:38px;
        }

        .developer-image{
          width:180px;
          height:180px;
        }
      }

      `}</style>

      <section className="developer-section">
        <div className="developer-container">

          {/* LEFT CARD */}

          <div className="developer-card">

            <div className="image-wrapper">
              <img
                src={developerImg}
                alt="Ayush Kumar"
                className="developer-image"
              />
            </div>

            <h2>
              Ayush <span>Kumar</span>
            </h2>

            <span className="role">
              Website Developer
            </span>

            <p className="about-card">
              I build modern, responsive and high-performance
              websites & applications.
            </p>

            <div className="personal-title">
              Personal Details
            </div>

            <div className="contact-item">
              📞 +91 7543898254
            </div>

            <div className="contact-item">
              📧 ayush247874@gmail.com
            </div>

            <div className="contact-item">
              📍 Sanhauli, Khagaria, Bihar
            </div>

            <div className="social-icons">
              <a href="#">
                <img src={instagramIcon} alt="" />
              </a>

              <a href="#">
                <img src={facebookIcon} alt="" />
              </a>

              <a href="#">
                <img src={youtubeIcon} alt="" />
              </a>
            </div>

          </div>

          {/* RIGHT */}

          <div>

            <div className="badge">
              WEBSITE DEVELOPER
            </div>

            <h1 className="hero-title">
              Hi, I'm <span>Ayush Kumar</span>
            </h1>

            <h3 className="hero-sub">
              B.Tech Computer Science Engineer
            </h3>

            <p className="hero-text">
              Professional Website & App Developer from
              Sanhauli, Khagaria Bihar. I build modern,
              responsive and high-performance websites
              for hotels, restaurants, e-commerce,
              portfolios and businesses.
            </p>

            <div className="stats">

              <div className="stat">
                <div className="stat-icon">🚀</div>
                <div>
                  <h3>10+</h3>
                  <p>Projects</p>
                </div>
              </div>

              <div className="stat">
                <div className="stat-icon">💻</div>
                <div>
                  <h3>2+</h3>
                  <p>Years Experience</p>
                </div>
              </div>

              <div className="stat">
                <div className="stat-icon">👥</div>
                <div>
                  <h3>100%</h3>
                  <p>Client Satisfaction</p>
                </div>
              </div>

            </div>

            <h2 className="service-heading">
              My Services
            </h2>

            <div className="service-grid">
              {services.map((item, index) => (
                <div
                  key={index}
                  className="service-card"
                >
                  <div className="service-icon">
                    {item.icon}
                  </div>

                  <h4>{item.title}</h4>

                  <p>{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="buttons">

              <a href="tel:+917543898254">
                <button className="contact-btn">
                  Contact Me
                </button>
              </a>

              <a href="mailto:ayush247874@gmail.com">
                <button className="hire-btn">
                  Hire Me
                </button>
              </a>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}