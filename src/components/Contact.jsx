import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="p-8 bg-dark">
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>

      <div className="flex items-center space-x-6 text-2xl text-gray-400">
        {/* GitHub */}
        <a
          href="https://github.com/Thenathanb"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaGithub />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/nathan-bakare-b7b0b3326/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaLinkedin />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/nathanbakare?igsh=MTdkaWp1dGp1MHFzeg%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaInstagram />
        </a>
      </div>

      <p className="text-gray-500 mt-4">
        Email:{" "}
        <a
          href="mailto:nathanbakare1@gmail.com"
          className="underline hover:text-white"
        >
          nathanbakare1@gmail.com
        </a>
      </p>
    </section>
  );
}

