import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="footer h-60 w-screen bg-[#0f172a] text-white flex justify-center items-center ">
        <div className="footer-box h-45 w-screen bg-[#020617] flex gap-10 justify-evenly items-center">
          <div className="footer-container footer-name">
            <h2 className="text-2xl font-bold">
              Jayendra <span className="text-gradient-neon text-sm">.dev</span>
            </h2>
            <p className="mt-3 font-sans text-sm text-gray-400">
              Web Developer & Creative Coder crafting digital experiences with
              code and passion.
            </p>
          </div>
          <div className="footer-container footer-connect">
            <h2 className="text-2xl font-bold">Connect</h2>
            <div className="flex gap-6 mt-2 text-2xl">
              <a
                href="https://github.com/jayendra4pratap-collab/PortFolio"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#00d9FF] transition duration-300"
              >
                <FaGithub />
              </a>

              <a
                href=""
                target=""
                rel="noopener noreferrer"
                className="hover:text-[#00d9FF] transition duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.instagram.com/itss_jayendra/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#00d9FF] transition duration-300"
              >
                <FaInstagram />
              </a>
            </div>
            <p className="text-xs mt-10 text-gray-400">
              © 2026 Jayendra Pratap Singh. All rights reserved.
            </p>
          </div>
          <div className="footer-container footer-contact">
            <h2 className="text-2xl font-bold">Contact</h2>
            <div className="flex flex-col gap-2 mt-2">
              <a className="flex items-center gap-3 hover:text-[#00d9FF] transition">
                <FaEnvelope className="text-1xl" />
                <span>jayendra4pratap@gmail.com</span>
              </a>

              <a className="flex items-center gap-3 hover:text-[#00d9FF] transition">
                <FaPhone className="text-1xl" />
                <span>+91 8795XXXXXX</span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-row"></div>
      </div>
    </div>
  );
};

export default Footer;
