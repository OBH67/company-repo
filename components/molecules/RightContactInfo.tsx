import ContactList from './ContactList';
import GradientPanel from './GradientPanel';
import SocialLinks from './SocialLinks';

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
