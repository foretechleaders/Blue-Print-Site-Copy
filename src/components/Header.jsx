import { FaYoutube } from "react-icons/fa";
import logo from "/Leadership Consulting LLC.png";

export default function Header() {
  return (
    <header className="bg-white shadow-sm text-[#1f3b73]">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Foreleads Leadership Consulting LLC"
            className="h-10 w-auto"
          />
          <h1 className="text-xl font-bold">
            Foreleads <br />
            Leadership Consulting LLC
          </h1>
        </div>
        <nav className="flex items-center space-x-6">
          <a href="/" className="hover:text-[#d4af37]">Home</a>
          <a href="/about" className="hover:text-[#d4af37]">About</a>
          <a href="/services" className="hover:text-[#d4af37]">Services</a>
          <a href="/programs" className="hover:text-[#d4af37]">Programs</a>
          <a href="/resources" className="hover:text-[#d4af37]">Resources</a>
          <a href="/contact" className="hover:text-[#d4af37]">Contact</a>
          <a
            href="https://www.youtube.com/@ForeleadsLeadershipConsulting"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1f3b73] hover:text-[#d4af37]"
          >
            <FaYoutube size={20} />
          </a>
        </nav>
      </div>
    </header>
  );
}
