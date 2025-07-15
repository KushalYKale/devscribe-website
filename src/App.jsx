import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles.css"; // import your CSS file here

const features = [
  { title: "🎨 Syntax Highlighting", description: "Supports Java, Python, and C with a smooth editor powered by RichTextFX." },
  { title: "🧠 Real Terminal Input", description: "Run code with interactive terminal input and output like real console apps." },
  { title: "📁 Project Explorer", description: "Easily open and manage project folders while maintaining layout consistency." },
  { title: "🚨 Error/Warning Highlighting", description: "Catch compilation issues with real-time error and warning highlights." },
  { title: "⚙️ Auto Python Dependency Installer", description: "Automatically installs missing Python packages using pip." },
  { title: "🌗 Light & Dark Themes", description: "Switch between visually pleasing light and dark modes effortlessly." }
];

export default function App() {
  const [img1Loaded, setImg1Loaded] = useState(false);
  const [img2Loaded, setImg2Loaded] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, [darkMode]);

  return (
    <>

      <div>
        <header>
          <div>
            <img src="/logo.ico" alt="DevScribe Logo" />
            <h1>DevScribe</h1>
          </div>

          <div>
            <a
              className="github-link"
              href="https://github.com/KushalYKale/DevScribe"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://github.com/KushalYKale/DevScribe/releases/download/v1.0.1/DevScribe-portable.zip"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="download-btn">Download</button>
            </a>

            {/* <button
              className="theme-toggle"
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle Light/Dark Mode"
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button> */}

          </div>
        </header>

        <main>
          <section className="hero">
            <h2>Your Lightweight Code Editor</h2>
            <p>
              DevScribe supports Java, Python and a built-in terminal for seamless coding.
            </p>
            <a
              href="https://github.com/KushalYKale/DevScribe/releases/download/v1.0.1/DevScribe-portable.zip"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Download Now</button>
            </a>
          </section>

          <section className="screenshots">
            <div>
              <img
                src="/launchscreenshot.png"
                alt="DevScribe Screenshot 1"
                onLoad={() => setImg1Loaded(true)}
                style={{
                  opacity: img1Loaded ? 1 : 0,
                  transform: img1Loaded ? "scale(1)" : "scale(0.98)"
                }}
              />
              <img
                src="/editorScreen.png"
                alt="DevScribe Screenshot 2"
                onLoad={() => setImg2Loaded(true)}
                style={{
                  opacity: img2Loaded ? 1 : 0,
                  transform: img2Loaded ? "scale(1)" : "scale(0.98)"
                }}
              />
            </div>
          </section>

          <section className="features">
            {features.map((feature, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className="feature-card"
              >
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </section>
        </main>

        <footer>
          <p>© 2025 | DevScribe. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
