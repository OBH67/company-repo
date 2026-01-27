'use client';

import { useState } from 'react';
import FormInput from '../atoms/FormInput';
import FormSelect from '../atoms/FormSelect';
import FormTextarea from '../atoms/FormTextarea';
import PrimaryButton from '../atoms/PrimaryButton';
import FormStatus from './FormStatus';
import FormCard from './FormCard';

export default function LeftContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [statusError, setStatusError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);
    setStatusError(null);

    if (!formData.name || !formData.email || !formData.message) {
      setStatusError('Por favor completa nombre, email y mensaje.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: `Subject: ${formData.subject || 'General'}\nPhone: ${formData.phone || '-'}\n\n${formData.message}`,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setStatusError(data?.error || 'Error al enviar el mensaje.');
      } else {
        setStatusMessage('Mensaje enviado correctamente. Gracias por contactarnos.');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      }
    } catch (err: any) {
      setStatusError(err?.message || 'Error de red');
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormCard>
      <form onSubmit={submitForm} className="space-y-6">
        <FormInput
          id="name"
          name="name"
          label="Nombre Completo"
          value={formData.name}
          onChange={handleChange}
          onFocus={() => setFocusedField('name')}
          onBlur={() => setFocusedField(null)}
          placeholder="Juan Pérez"
          required
          focused={focusedField === 'name'}
        />

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <FormInput
              id="email"
              name="email"
              label="Email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              placeholder="juan@ejemplo.com"
              required
              focused={focusedField === 'email'}
            />
          </div>

          <div>
            <FormInput
              id="phone"
              name="phone"
              label="Teléfono"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              onFocus={() => setFocusedField('phone')}
              onBlur={() => setFocusedField(null)}
              placeholder="+1 (555) 123-4567"
              focused={focusedField === 'phone'}
            />
          </div>
        </div>

        <FormSelect
          id="subject"
          name="subject"
          label="Asunto"
          value={formData.subject}
          onChange={(e) => handleChange(e as any)}
          onFocus={() => setFocusedField('subject')}
          onBlur={() => setFocusedField(null)}
          options={[
            { value: '', label: 'Selecciona un servicio' },
            { value: 'web', label: 'Desarrollo Web' },
            { value: 'mobile', label: 'App Móvil' },
            { value: 'design', label: 'Diseño UI/UX' },
            { value: 'ecommerce', label: 'E-commerce' },
            { value: 'seo', label: 'SEO & Marketing' },
            { value: 'other', label: 'Otro' },
          ]}
          required
          focused={focusedField === 'subject'}
        />

        <FormTextarea
          id="message"
          name="message"
          label="Mensaje"
          value={formData.message}
          onChange={(e) => handleChange(e as any)}
          onFocus={() => setFocusedField('message')}
          onBlur={() => setFocusedField(null)}
          rows={5}
          placeholder="Cuéntanos sobre tu proyecto..."
          required
          focused={focusedField === 'message'}
        />

        <PrimaryButton type="submit" disabled={loading} loading={loading}>
          Enviar Mensaje
        </PrimaryButton>
      </form>

      <FormStatus message={statusMessage} error={statusError} />
    </FormCard>
  );
}
