export default function MapPlaceholder() {
  return (
    <div className="relative group overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 blur opacity-20"></div>
      <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 bg-gray-900/90 backdrop-blur-sm border border-gray-800">
        <iframe
          title="Mapa de Querétaro"
          src="https://www.google.com/maps?q=Quer%C3%A9taro&z=13&output=embed"
          loading="lazy"
          className="absolute inset-0 w-full h-full border-0"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}