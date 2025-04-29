import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-black to-gray-900 px-4">
      {/* Optional profile image — drop it in /public and rename below */}
      {/* <img 
        src="/profile.jpg" 
        alt="Nathan Bakare" 
        className="rounded-full w-32 h-32 mb-4 border-4 border-gray-600"
      /> */}

      <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
        Hi, I'm Nathan Bakare
      </h1>

      <TypeAnimation
        sequence={[
          'Aspiring Software Engineer', 2000,
          'Computer Engineering Student', 2000,
          'Tech Enthusiast', 2000,
        ]}
        wrapper="span"
        speed={50}
        className="text-xl text-gray-400 mb-6"
        repeat={Infinity}
      />

      <a href="#projects">
        <button className="mt-4 px-6 py-2 bg-white text-black font-semibold rounded hover:bg-gray-300 transition">
          View My Work ↓
        </button>
      </a>
    </section>
  );
}
