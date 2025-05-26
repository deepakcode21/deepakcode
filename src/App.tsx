import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import CodePlayground from "./components/sections/CodePlayground";
import Testimonials from "./components/sections/Testimonials";
import Blog from "./components/sections/Blog";
import Pricing from "./components/sections/Pricing";
import Contact from "./components/sections/Contact";
import { useEffect } from "react";

function App() {
  // Update page title
  useEffect(() => {
    document.title = "Deepak Code";
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-dark-900 dark:text-gray-100 transition-colors duration-200">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <CodePlayground />
          <Testimonials />
          <Blog />
          <Pricing />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
