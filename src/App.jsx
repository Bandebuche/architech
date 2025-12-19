import './App.css'

function App() {
  return (
    <div className="architecture-site">
      <nav className="nav">
        <div className="nav-content">
          <div className="logo">ARCHITEKTUR</div>
          <div className="nav-links">
            <a href="#projects">Projects</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-overlay">
          <h1 className="hero-title">Contemporary Architecture</h1>
          <p className="hero-subtitle">Designing spaces that inspire modern living</p>
          <button className="cta-button">Explore Projects</button>
        </div>
      </section>

      <section className="featured-projects" id="projects">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <p className="section-subtitle">Excellence in architectural design</p>
        </div>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image" style={{backgroundImage: 'url(https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800)'}}></div>
            <div className="project-info">
              <h3>Glass Residence</h3>
              <p>Minimalist luxury home with panoramic views</p>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image" style={{backgroundImage: 'url(https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800)'}}></div>
            <div className="project-info">
              <h3>Urban Sanctuary</h3>
              <p>Contemporary design meets natural elements</p>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image" style={{backgroundImage: 'url(https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800)'}}></div>
            <div className="project-info">
              <h3>Geometric Tower</h3>
              <p>Bold angles and sustainable materials</p>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image" style={{backgroundImage: 'url(https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=800)'}}></div>
            <div className="project-info">
              <h3>Modern Estate</h3>
              <p>Elegant simplicity in residential architecture</p>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image" style={{backgroundImage: 'url(https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800)'}}></div>
            <div className="project-info">
              <h3>Lakeside Villa</h3>
              <p>Seamless indoor-outdoor living spaces</p>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image" style={{backgroundImage: 'url(https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800)'}}></div>
            <div className="project-info">
              <h3>Sky Lounge</h3>
              <p>Contemporary interior with stunning vistas</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="services-content">
          <div className="services-text">
            <h2>Our Approach</h2>
            <p className="services-intro">We create architectural experiences that blend form, function, and innovation. Our design philosophy centers on clean lines, natural light, and sustainable materials.</p>
            <div className="services-list">
              <div className="service-item">
                <div className="service-icon">◻</div>
                <div>
                  <h3>Residential Design</h3>
                  <p>Custom homes that reflect your vision and lifestyle</p>
                </div>
              </div>
              <div className="service-item">
                <div className="service-icon">◻</div>
                <div>
                  <h3>Commercial Spaces</h3>
                  <p>Innovative solutions for modern workplaces</p>
                </div>
              </div>
              <div className="service-item">
                <div className="service-icon">◻</div>
                <div>
                  <h3>Interior Architecture</h3>
                  <p>Refined interiors with attention to detail</p>
                </div>
              </div>
            </div>
          </div>
          <div className="services-image" style={{backgroundImage: 'url(https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=800)'}}></div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-content">
          <div className="geometric-shape"></div>
          <div className="about-text">
            <h2>Award-Winning Design</h2>
            <p>With over two decades of experience, our studio has earned recognition for creating spaces that transcend expectations. We believe architecture should be timeless, functional, and beautiful.</p>
            <div className="stats">
              <div className="stat">
                <div className="stat-number">150+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat">
                <div className="stat-number">25+</div>
                <div className="stat-label">Design Awards</div>
              </div>
              <div className="stat">
                <div className="stat-number">12</div>
                <div className="stat-label">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer" id="contact">
        <div className="footer-content">
          <div className="footer-section">
            <h3>ARCHITEKTUR</h3>
            <p>Creating extraordinary spaces for modern living</p>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>studio@architektur.design</p>
            <p>+1 (555) 123-4567</p>
          </div>
          <div className="footer-section">
            <h4>Location</h4>
            <p>123 Design District</p>
            <p>New York, NY 10001</p>
          </div>
          <div className="footer-section">
            <h4>Follow</h4>
            <p>Instagram</p>
            <p>LinkedIn</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 sachin Studio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
