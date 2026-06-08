export default function Profile() {
  return (
    <section id="profile" className="profile-section">

      <h2 className="section-title">Profile</h2>

      <div className="profile-container">

        {/* INTRO CARD */}
        <div className="glass-card">
          <h3>Intro</h3>
          <br></br>
          <p>
            I'm a Computer Applications student at Jamal Mohamed College,
            operating at the intersection of design and logic to build
            exceptional digital products. With a deep curiosity for how systems
            are built, structured, and optimized, I bridge the gap between
            thoughtful interface design and real-world problem solving.
          </p>
        </div>

        {/* SNAPSHOT CARD */}
        <div className="glass-card">
          <h3>Profile Snapshot</h3>
          <br></br>
          <ul>
            <li>BCA · Jamal Mohamed College</li>
            <li>UI/UX · Web Development</li>
            <li>Full-Stack Development</li>
            <li>AI & Security Enthusiast</li>
          </ul>
        </div>

      </div>

      {/* QUOTE SECTION */}
      <div className="quote-box">
        ✦ Coding is a skill. But building things worth using is a craft.{" "}
        <span className="cursor">|</span>
      </div>

    </section>
  );
}