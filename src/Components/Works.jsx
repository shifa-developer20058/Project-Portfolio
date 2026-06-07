import React, { useEffect } from "react";

export default function Works() {
  useEffect(() => {
    const cards = document.querySelectorAll(".works-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );
    cards.forEach((card) => observer.observe(card));
  }, []);

  return (
    <section id="works" className="works-section">
      <h2>Works</h2>
      <div className="works-grid">
        <div className="works-card">
          <h3 className="project-title">Readoraire Room</h3>
          <p className="project-sub">✦ AI-powered digital library platform</p>
          <p>An intelligent web application designed for book lovers, offering a peaceful, distraction-free digital reading space.</p>
        </div>

        <div className="works-card">
          <h3 className="project-title">Startup Mentore</h3>
          <p className="project-sub">✦ Idea-to-startup mentorship platform</p>
          <p>A platform that transforms raw student ideas into structured startup blueprints.</p>
        </div>

        <div className="works-card">
          <h3 className="project-title">Personal Portfolio</h3>
          <p className="project-sub">✦ Digital identity & project showcase</p>
          <p>A clean, fully responsive personal portfolio website showcasing skills, projects, and growth journey.</p>
        </div>
      </div>
    </section>
  );
}