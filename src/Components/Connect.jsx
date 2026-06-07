import React from "react";

export default function Connect() {
  return (
    <section id="connect" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ position: 'relative', marginBottom: '30px' }}>
        <h2 style={{ 
          textAlign: 'center', 
          margin: '0',
          color: 'white',
          fontSize: '3rem',
          fontFamily: "'Share Tech Mono', monospace",
          paddingBottom: '15px'
        }}>
          CONNECT
        </h2>
        <div style={{
          position: 'absolute',
          bottom: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          height: '3px',
          background: '#B8804C',
          borderRadius: '3px',
          boxShadow: '0 0 8px rgba(184, 128, 76, 0.6)'
        }}></div>
      </div>

      <div style={{ maxWidth: '700px', margin: '0 auto 40px auto', textAlign: 'center' }}>
        <h3 style={{ color: 'white', fontSize: '1.8rem' }}>Beyond the Portfolio</h3>
        <p style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
          Open to impactful collaborations, exciting opportunities, and initiatives that
          inspire innovation, growth, and lasting impact.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
        <a href="mailto:shifafathima20058@gmail.com" className="glass" style={{ width: '260px', padding: '25px', textAlign: 'center', textDecoration: 'none', borderRadius: '24px' }}>
          <h4 style={{ color: '#8E5A7F', fontSize: '1.5rem' }}>Email</h4>
          <p style={{ color: 'white' }}>shifafathima20058@gmail.com</p>
        </a>

        <a href="https://github.com/shifa-developer20058" target="_blank" rel="noreferrer" className="glass" style={{ width: '260px', padding: '25px', textAlign: 'center', textDecoration: 'none', borderRadius: '24px' }}>
          <h4 style={{ color: '#B8804C', fontSize: '1.5rem' }}>GitHub</h4>
          <p style={{ color: 'white' }}>github.com/shifa-developer20058</p>
        </a>

        <div className="glass" style={{ width: '260px', padding: '25px', textAlign: 'center', borderRadius: '24px' }}>
          <h4 style={{ color: '#008B8B', fontSize: '1.5rem' }}>Location</h4>
          <p style={{ color: 'white' }}>Trichy, Tamil Nadu, India</p>
        </div>
      </div>
    </section>
  );
}