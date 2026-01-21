import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="gradient-bg"></div>

      <main>
        {/* Hero Section */}
        <section className="section" style={{ paddingTop: '6rem' }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: 'var(--spacing-xl)',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <div className="animate-fade-in-up">
                <div style={{
                  width: '250px',
                  height: '250px',
                  margin: '0 auto var(--spacing-lg)',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '4px solid var(--accent-primary)',
                  boxShadow: '0 0 40px rgba(99, 102, 241, 0.3)',
                  position: 'relative'
                }}>
                  <Image
                    src="/profile.png"
                    alt="Marufa Sultana"
                    width={250}
                    height={250}
                    priority
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>

                <h1 style={{ marginBottom: 'var(--spacing-sm)' }}>
                  Marufa Sultana
                </h1>

                <h3 style={{
                  background: 'var(--accent-gradient)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: 'var(--spacing-md)',
                  fontWeight: 600
                }}>
                  Lecturer in Computer Science & Engineering
                </h3>

                <p style={{
                  maxWidth: '800px',
                  margin: '0 auto var(--spacing-lg)',
                  fontSize: '1.1rem',
                  lineHeight: '1.8'
                }}>
                  As a lecturer in the Computer Science and Engineering (CSE) department at University of Creative Technology Chittagong, I strive to create a learning experience that connects academic theory with practical, real-world applications. My goal is to equip students with the technical and analytical skills needed to tackle real-world challenges while fostering a deep understanding of core concepts that extend beyond the classroom.
                </p>

                <div style={{
                  display: 'flex',
                  gap: 'var(--spacing-md)',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  marginBottom: 'var(--spacing-xl)'
                }}>
                  <a href="#" className="btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    Download CV
                  </a>
                </div>

                {/* Contact Info */}
                <div className="glass-card" style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: 'var(--spacing-md)',
                  textAlign: 'left',
                  marginTop: 'var(--spacing-xl)'
                }}>
                  <div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--spacing-xs)',
                      marginBottom: 'var(--spacing-xs)',
                      color: 'var(--accent-primary)'
                    }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                      <strong>Email</strong>
                    </div>
                    <p style={{ marginLeft: '28px' }}>marufa@uctc.edu.bd</p>
                  </div>

                  <div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--spacing-xs)',
                      marginBottom: 'var(--spacing-xs)',
                      color: 'var(--accent-primary)'
                    }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      <strong>Phone</strong>
                    </div>
                    <p style={{ marginLeft: '28px' }}>01870285149</p>
                  </div>

                  <div style={{ gridColumn: '1 / -1' }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--spacing-xs)',
                      marginBottom: 'var(--spacing-xs)',
                      color: 'var(--accent-primary)'
                    }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <strong>Address</strong>
                    </div>
                    <p style={{ marginLeft: '28px' }}>
                      University of Creative Technology Chittagong, Chandgaon Police Station, 1084, Shah Amanat Bridge Connecting Road, Chittagong 4212
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Qualifications Section */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Qualifications</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--spacing-lg)'
            }}>
              <div className="glass-card">
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'var(--accent-gradient)',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--spacing-md)'
                }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                  </svg>
                </div>
                <h3 style={{ marginBottom: 'var(--spacing-sm)', fontSize: '1.3rem' }}>B.Sc in CSE</h3>
                <p>University of Chittagong (CU)</p>
              </div>

              <div className="glass-card">
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'var(--accent-gradient)',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--spacing-md)'
                }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                  </svg>
                </div>
                <h3 style={{ marginBottom: 'var(--spacing-sm)', fontSize: '1.3rem' }}>MS in CSE</h3>
                <p>University of Chittagong (CU) - Pursuing</p>
              </div>
            </div>
          </div>
        </section>

        {/* Teaching Expertise Section */}
        <section className="section" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container">
            <h2 className="section-title">Teaching Expertise</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'var(--spacing-md)'
            }}>
              {[
                'Computer Networks',
                'Information Security',
                'Software Engineering',
                'Cloud Computing',
                'Operating Systems',
                'Data Communication'
              ].map((subject, index) => (
                <div key={index} className="glass-card" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-md)'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: 'var(--accent-gradient)',
                    borderRadius: 'var(--radius-sm)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{subject}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Interests Section */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Research Interests</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: 'var(--spacing-lg)'
            }}>
              {[
                { title: 'Large Language Models (LLMs)', icon: '🤖' },
                { title: 'Social Network Analysis', icon: '🌐' },
                { title: 'Natural Language Processing', icon: '💬' },
                { title: 'Machine Learning', icon: '🧠' },
                { title: 'Deep Learning', icon: '⚡' }
              ].map((interest, index) => (
                <div key={index} className="glass-card" style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>
                    {interest.icon}
                  </div>
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                    {interest.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="section" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container">
            <h2 className="section-title">Skills</h2>
            <div style={{
              maxWidth: '800px',
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-lg)'
            }}>
              {[
                { name: 'Business Planning', level: 90 },
                { name: 'Business Law', level: 70 },
                { name: 'Lecture Skill', level: 100 }
              ].map((skill, index) => (
                <div key={index} className="glass-card">
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: 'var(--spacing-sm)'
                  }}>
                    <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                      {skill.name}
                    </span>
                    <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>
                      {skill.level}%
                    </span>
                  </div>
                  <div style={{
                    width: '100%',
                    height: '12px',
                    background: 'var(--bg-tertiary)',
                    borderRadius: '100px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      width: `${skill.level}%`,
                      height: '100%',
                      background: 'var(--accent-gradient)',
                      borderRadius: '100px',
                      transition: 'width 1s ease-out'
                    }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{
          padding: 'var(--spacing-xl) 0',
          textAlign: 'center',
          borderTop: '1px solid var(--border-color)'
        }}>
          <div className="container">
            <p style={{ color: 'var(--text-muted)' }}>
              © 2026 Marufa Sultana. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
