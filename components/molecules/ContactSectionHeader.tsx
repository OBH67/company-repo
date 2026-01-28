export default function ContactSectionHeader() {
  return (
    <div className="text-center mb-8 sm:mb-12 md:mb-16">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 drop-shadow-[0_0_15px_rgba(16,185,129,0.8)]">
          Contáctanos
        </span>
      </h2>
      <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
        Estamos listos para llevar tu proyecto al siguiente nivel
      </p>
      <div className="mt-6 w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full shadow-[0_0_20px_rgba(16,185,129,0.8)]"></div>
    </div>
  );
}
