import React, { useEffect } from "react";
import "./App.css";
import background from './public/bg.jpg';
import MainComponent from "./components/MainComponent";
import Contact from "./components/Contact";
import ContentComponent from "./components/ContentComponent";

function App() {
  useEffect(() => {
    // Navbar scroll effect
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Scroll reveal effect
    const faders = document.querySelectorAll(".fade-in");
    const options = { threshold: 0.3, rootMargin: "0px 0px -100px 0px" };
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, options);

    faders.forEach(fader => observer.observe(fader));

    // Cleanup listeners on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header data-bs-theme="dark">
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Portfolio
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    About me
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact me
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true">
                    Vinko Brkić
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main>
      <div
  className="hero-section position-relative overflow-hidden p-3 p-md-5 text-start bg-body-tertiary"
  style={{
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center', 
    backgroundRepeat: 'no-repeat',
    height: '80vh',
    width: '100%',
  }}
>
  <div className="hero-content col-md-6 p-lg-5 my-5 fade-in">
    <h1 className="display-3 fw-bold text-white">Hi, I'm Vinko Brkić!</h1>
    <h3 className="fw-normal mb-3 text-white">
      I'm a hardworking student and skilled software engineer with experience in TypeScript, JavaScript, C++, C, C#, Unity,
       Java, and Python. Currently, I am doing my Master's degree in Software Engineering and Information Systems.
    </h3>
    <div className="d-flex gap-3 lead fw-normal">
      <a className="btn btn-outline-success" href="#content">
        About me
      </a>
      <a className="btn btn-outline-success" href="#contact">
        Contact me
      </a>
    </div>
  </div>
</div>


        <div className="marketing fade-in main">
          {/* Content sections with fade-in effect */}
          <MainComponent />
        </div>

        <div id="content" className="container marketing fade-in content">
          {/* Content sections with fade-in effect */}
          <ContentComponent />
        </div>

        <div id="contact">
          <Contact />
        </div>

        <footer className="container fade-in">
          <p className="float-end">
            <a href="#">Back to top</a>
          </p>
          <p>
            Vinko Brkić 
          </p>
        </footer>
      </main>
    </>
  );
}

export default App;
