import SocialLinks from './../molecules/SocialLinks';
import ContactList from './../molecules/ContactList';
import GradientPanel from './../molecules/GradientPanel';

export default function RightContactInfo() {
  return (
    <div className="space-y-8">
      <ContactList />
      <GradientPanel>
      <SocialLinks />
      </GradientPanel>
    </div>
  );
}
