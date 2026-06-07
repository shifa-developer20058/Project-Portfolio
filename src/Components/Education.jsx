export default function Education() {
  return (
    <section id="education" className="education-section">

      <h2 className="section-title">Education</h2>

      <div className="education-card glass-card">

        {/* DEGREE BOX */}
        <div className="degree-box">
          Bachelor of Computer Applications
        </div>

        {/* COLLEGE NAME */}
        <h3 className="college-name">
          ~ Jamal Mohamed College
        </h3>

        {/* LOCATION + YEAR */}
        <p className="edu-meta"style={{textAllign:'center'}}>
          • Trichy • 2025 – Present
        </p>

        {/* DESCRIPTION */}
        <p className="edu-desc">
          A curriculum built on both theory and application covering computation and modern programming paradigms.
          Designed to bridge foundational computer science with real-world development, the program emphasizes
          software architecture, data-driven systems, web technologies, and algorithmic thinking.
        </p>

    
        {/* CORE FOCUS */}
        <div className="core-focus">

          <h4 className="core-title">Core focus:</h4>

          <ul>
            <li>Programming</li>
            <li>Web Technologies</li>
            <li>Software Engineering Principles</li>
            <li>Networks</li>
          </ul>

        </div>

      </div>

    </section>
  );
}