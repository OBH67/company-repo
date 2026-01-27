import ContactSectionHeader from './../molecules/ContactSectionHeader';
import LeftContactForm from './../molecules/LeftContactForm';
import RightContactInfo from './../molecules/RightContactInfo';
import MapPlaceholder from '../molecules/MapPlaceholder';

export default function Contact() {
  return (
    <section id="contacto" className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-40 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <ContactSectionHeader />
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          <LeftContactForm />
          <div className="space-y-8">
            <RightContactInfo />
            <MapPlaceholder />
          </div>
        </div>
      </div>
    </section>
  );
}