export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen p-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"
    >
      {/* Optional Background Blur or Shape */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-700 opacity-20 rounded-full blur-3xl animate-pulse z-0"></div>

      {/* Content Wrapper with Glass Effect */}
      <div className="relative z-10 bg-white/5 backdrop-blur-md rounded-xl p-10 shadow-xl max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I’m Nathan Bakare, a Computer Engineering student at the University of Houston, passionate about software development,
              cybersecurity, and tech equity. I have built projects in Rust, Java, and C, and I'm an active member of NSBE and Code Coogs.
            </p>

            <a
              href="/NathanBakare_Resume.pdf"
              download
              className="inline-block mt-4 px-6 py-2 bg-white text-black font-semibold rounded hover:bg-gray-300 transition"
            >
              Download Resume
            </a>
          </div>

          <div className="flex justify-center">
            <img
              src="/profile.jpg"
              alt="Nathan Bakare"
              className="rounded-xl shadow-lg w-64 border-4 border-white/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
