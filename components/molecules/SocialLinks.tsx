import { socialLinks } from '../data/contactData';

export default function SocialLinks() {
  return (
    <div>
      <h3 className="text-white text-xl font-bold mb-6">Síguenos en Redes</h3>
      <div className="flex gap-4">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.link}
            className="group/social w-12 h-12 bg-gray-800/50 border border-gray-700 hover:border-emerald-500/50 rounded-xl flex items-center justify-center text-gray-400 hover:text-emerald-400 transition-all duration-300 hover:transform hover:scale-110 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            aria-label={social.name}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
