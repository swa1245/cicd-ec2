import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 p-4">
      <div className="text-center space-y-6 bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-2xl">
        <h1 className="text-6xl font-bold text-white animate-bounce">
          🎉 Happy Birthday! 🎉
        </h1>
        <h2 className="text-4xl font-semibold text-white">
          Dwinnovation Pvt. Ltd.
        </h2>
        <p className="text-xl text-white/90">
          Celebrating another year of innovation, growth, and success!
        </p>
        <div className="space-y-2">
          <p className="text-lg text-white/80">
            May this year bring more achievements,
          </p>
          <p className="text-lg text-white/80">
            breakthroughs, and wonderful moments!
          </p>
        </div>
        <div className="pt-4">
          <span className="text-white/70">
            {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </main>
  );
}
