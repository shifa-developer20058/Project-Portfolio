export default function Hero() {

  const goToProfile = () => {
    document.getElementById("profile")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="home">

      {/* ================= HERO NAME ================= */}
      <h1 className="hero-name">
        SHIFA FATHIMA
      </h1>

      {/* ================= TAGLINE ================= */}
     <p className="hero-tagline">
      <span className="tag-sparkle">✦</span>
       {" "}
     Curious digital wanderer building my own path in development
       {" "}
      <span className="tag-sparkle">✦</span>
     </p>

      {/* ================= BUTTONS ================= */}
      <div className="hero-buttons">

        <button className="btn primary" onClick={goToProfile}>
          Explore Portfolio
        </button>

        <a
          className="btn outline"
          href="https://github.com/shifa-developer20058"
          target="_blank"
          rel="noreferrer"
        >
          Visit GitHub
        </a>

      </div>

    </section>
  );
}