import React from "react";

export default function Expertise() {
  return (
    <section className="expertise-section" id="expertise">
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{
          display: 'block',
          color: 'white',
          fontSize: '3rem',
          fontFamily: "'Share Tech Mono', monospace",
          margin: '0',
          padding: '0'
        }}>
          EXPERTISE
        </h2>
        <div style={{
          width: '200px',
          margin: '8px auto 0 auto',
          height: '3px',
          background: '#B8804C',
          borderRadius: '3px',
          boxShadow: '0 0 8px rgba(184, 128, 76, 0.6)'
        }}></div>
      </div>
      
      <div className="expertise-grid">
        {/* Design & Creativity */}
        <div className="expertise-card">
          <h3>Design & Creativity</h3>
          <ul>
            <li>UI Design</li>
            <li>Visual Design</li>
            <li>Graphic Design</li>
            <li>Prototyping</li>
          </ul>
        </div>

        {/* Development & Engineering */}
        <div className="expertise-card">
          <h3>Development & Engineering</h3>
          <ul>
            <li>Web Development</li>
            <li>Application Development</li>
            <li>Full-Stack Development</li>
            <li>Programming Concepts</li>
          </ul>
        </div>

        {/* Languages */}
        <div className="expertise-card">
          <h3>Languages</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Python</li>
            <li>Java</li>
            <li>C</li>
          </ul>
        </div>

        {/* Tools & Workflow */}
        <div className="expertise-card">
          <h3>Tools & Workflow</h3>
          <ul>
            <li>Git & GitHub</li>
            <li>VS Code</li>
            <li>Figma</li>
            <li>Adobe Suite</li>
          </ul>
        </div>

        {/* Strategy & Growth */}
        <div className="expertise-card">
          <h3>Strategy & Growth</h3>
          <ul>
            <li>Project Management</li>
            <li>Digital Marketing</li>
            <li>Problem Solving</li>
            <li>Content Strategy</li>
          </ul>
        </div>

        {/* Explore & Discovery */}
        <div className="expertise-card">
          <h3>Explore & Discovery</h3>
          <ul>
            <li>Research</li>
            <li>Innovation</li>
            <li>Learning Agility</li>
            <li>Adaptability</li>
          </ul>
        </div>
      </div>
    </section>
  );
}