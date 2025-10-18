import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1f3b73] text-white py-8">
      <div className="container mx-auto text-center space-y-4">
        <div className="flex justify-center space-x-6">
          <a href="https://www.facebook.com/profile.php?id=61582426252186" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={20} className="hover:text-[#d4af37]" />
          </a>
          <a href="https://www.instagram.com/foreleads_leadership/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={20} className="hover:text-[#d4af37]" />
          </a>
          <a href="https://www.linkedin.com/company/109255618/admin/dashboard/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} className="hover:text-[#d4af37]" />
          </a>
          <a href="https://www.youtube.com/@ForeleadsLeadershipConsulting" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={20} className="hover:text-[#d4af37]" />
          </a>
          <a href="mailto:info@foreleadsleadership.com">
            <FaEnvelope size={20} className="hover:text-[#d4af37]" />
          </a>
        </div>
        <p className="text-sm">© Foreleads Leadership Consulting LLC</p>
        <p className="text-xs italic">Empowering Leadership. Enabling Growth.</p>
      </div>
    </footer>
  );
}
