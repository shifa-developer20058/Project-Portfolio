import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="navbar">

        {/* BRAND NAME */}
        <div className="logo">
          Shifa Fathima
        </div>

        {/* DESKTOP NAV LINKS - FIXED IDs */}
        <div className="nav-links">
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#profile" onClick={closeMenu}>Profile</a>
          <a href="#education" onClick={closeMenu}>Education</a>
          <a href="#certifications" onClick={closeMenu}>Certifications</a>
          <a href="#expertise" onClick={closeMenu}>Expertise</a>
          <a href="#works" onClick={closeMenu}>Works</a>
          <a href="#connect" onClick={closeMenu}>Connect</a>
        </div>

        {/* MOBILE HAMBURGER (modern 3-line) */}
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

      </nav>

      {/* ================= MOBILE OVERLAY MENU - FIXED IDs ================= */}
      {open && (
        <div className="overlay" onClick={closeMenu}>

          <div className="menu glass-strong" onClick={(e) => e.stopPropagation()}>

            {/* CLOSE BUTTON */}
            <div className="close" onClick={closeMenu}>✕</div>

            <a href="#home" onClick={closeMenu}>HOME</a>
            <a href="#profile" onClick={closeMenu}>PROFILE</a>
            <a href="#education" onClick={closeMenu}>EDUCATION</a>
            <a href="#certifications" onClick={closeMenu}>CERTIFICATIONS</a>
            <a href="#expertise" onClick={closeMenu}>EXPERTISE</a>
            <a href="#works" onClick={closeMenu}>WORKS</a>
            <a href="#connect" onClick={closeMenu}>CONNECT</a>

          </div>

        </div>
      )}
    </>
  );
}