import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-gray-600">
        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Your Name — B.Tech Student. Built with React & Tailwind.
          </p>
          <div className="flex items-center gap-4">
            <a href="#projects" className="hover:text-gray-900">Projects</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
