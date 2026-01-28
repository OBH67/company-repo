import React from 'react';
import { contactInfo } from '../data/contactData';
import ContactItemCard from './ContactItemCard';

export default function ContactList() {
  return (
    <div className="space-y-3 sm:space-y-4 md:space-y-6">
      {contactInfo.map((info, index) => (
        <ContactItemCard
          key={index}
          href={info.link}
          icon={info.icon}
          title={info.title}
          value={info.value}
        />
      ))}
    </div>
  );
}
