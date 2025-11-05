import { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const NavLink = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
  >
    {children}
  </a>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNav = () => setOpen((o) => !o);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-indigo-500 to-violet-500" />
            <span className="text-lg font-semibold tracking-tight">B.Tech Portfolio</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <div className="ml-2 flex items-center gap-3">
              <a
                aria-label="GitHub"
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                aria-label="LinkedIn"
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                aria-label="Email"
                href="#contact"
                className="rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </nav>

          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden"
            onClick={handleNav}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t bg-white md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-4">
            <div className="flex flex-col gap-4">
              <NavLink href="#projects" onClick={close}>Projects</NavLink>
              <NavLink href="#contact" onClick={close}>Contact</NavLink>
              <div className="flex items-center gap-3 pt-2">
                <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900">
                  <Github className="h-5 w-5" />
                </a>
                <a aria-label="LinkedIn" href="https://linkedin.com/" target="_blank" rel="noreferrer" className="rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a aria-label="Email" href="#contact" className="rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
