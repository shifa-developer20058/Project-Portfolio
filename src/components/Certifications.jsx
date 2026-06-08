import React, { useState, useEffect } from "react";

export default function Certifications() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="cert-section" id="certifications">
      <h2 className="section-title">Certifications & Internship</h2>

      <p className={`cert-intro ${showText ? "show" : ""}`}>
        A collection of certifications and professional learning experiences that have contributed to my growth across technology, design, communication, and development.
      </p>

      <div className="cert-block">
        <h3 className="cert-heading">Certifications</h3>
        
        <div className="cert-grid">
          <div className="cert-card glass">
            <h4>Prompt Engineering — Simplilearn</h4>
            <p>Training in prompt design, optimization, and effective interaction with AI systems.</p>
            <a href="https://www.simplilearn.com/" target="_blank" rel="noopener noreferrer" className="btn-cert purple">View Page</a>
          </div>

          <div className="cert-card glass">
            <h4>Artificial Intelligence Fundamentals — Simplilearn</h4>
            <p>Understanding AI concepts, applications, and emerging technologies.</p>
            <a href="https://www.simplilearn.com/" target="_blank" rel="noopener noreferrer" className="btn-cert turquoise">View Page</a>
          </div>

          <div className="cert-card glass">
            <h4>Communication Skills Guide — Udemy</h4>
            <p>Professional communication, presentation, and interpersonal skills.</p>
            <a href="https://www.udemy.com/" target="_blank" rel="noopener noreferrer" className="btn-cert purple">View Page</a>
          </div>

          <div className="cert-card glass">
            <h4>Graphic Designing — Cursa</h4>
            <p>Visual design principles, creative workflows, and digital design basics.</p>
            <a href="https://cursa.app/en" target="_blank" rel="noopener noreferrer" className="btn-cert turquoise">View Page</a>
          </div>

          <div className="cert-card glass">
            <h4>Web Development Basics — Great Learning</h4>
            <p>Core concepts of modern web development including structure and functionality.</p>
            <a href="https://www.mygreatlearning.com/" target="_blank" rel="noopener noreferrer" className="btn-cert purple">View Page</a>
          </div>
        </div>
      </div>

      <div className="internship-block">
        <h3 className="cert-heading">Internship Experience</h3>
        <div className="internship-card glass">
          <h4>Frontend React Development Intern — Qryptex</h4>
          <p>Contributed to frontend development using React, focusing on component-based architecture, responsive interfaces, and modern UI design. Gained real-world experience in collaborative development workflows and industry-level frontend practices.</p>
          <a href="https://qryptex.in/" target="_blank" rel="noopener noreferrer" className="btn-intern">View Page</a>
        </div>
      </div>
    </section>
  );
}