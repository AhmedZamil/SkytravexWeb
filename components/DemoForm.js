'use client';

import { useEffect, useState } from 'react';
import Icon from './Icons';
import { site, whatsappLink } from '@/lib/site';

const sizes = ['1 to 5 agents', '6 to 20 agents', '21 to 50 agents', 'More than 50 agents'];

const empty = { name: '', email: '', company: '', country: '', size: sizes[0], message: '' };

export default function DemoForm() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [mailto, setMailto] = useState('');

  // The pricing page passes the chosen scope in the address.
  useEffect(() => {
    const scope = new URLSearchParams(window.location.search).get('scope');
    if (scope) {
      setValues((current) => ({ ...current, message: `Scope we are interested in: ${scope}.` }));
    }
  }, []);

  const set = (field) => (event) => {
    setValues((current) => ({ ...current, [field]: event.target.value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!values.name.trim()) next.name = 'Enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) next.email = 'Enter an email address like name@agency.com.';
    if (!values.company.trim()) next.company = 'Enter your company name.';
    return next;
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) return;

    const body = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Company: ${values.company}`,
      `Country: ${values.country || 'Not given'}`,
      `Team size: ${values.size}`,
      '',
      values.message || 'No message.',
    ].join('\n');
    const link = `mailto:${site.email}?subject=${encodeURIComponent(`SkyTravex demo request from ${values.company}`)}&body=${encodeURIComponent(body)}`;
    setMailto(link);
    setSent(true);
    window.location.href = link;
  };

  const wa = whatsappLink(`Hello, I would like a SkyTravex demo for ${values.company || 'my agency'}.`);

  if (sent) {
    return (
      <div className="form-done" role="status">
        <span className="form-done-icon">
          <Icon name="mail" size={26} />
        </span>
        <h2>Your request is ready to send</h2>
        <p>
          Your email app should have opened with the request filled in. Press send there and we will
          reply to {values.email}.
        </p>
        <p>
          Nothing opened?{' '}
          <a href={mailto}>Open the email again</a> or write to <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
        <button type="button" className="btn" onClick={() => setSent(false)}>
          Edit the request
        </button>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="form-row">
        <label>
          <span>Your name</span>
          <input type="text" autoComplete="name" value={values.name} onChange={set('name')} aria-invalid={Boolean(errors.name)} />
          {errors.name ? <em>{errors.name}</em> : null}
        </label>
        <label>
          <span>Work email</span>
          <input type="email" autoComplete="email" value={values.email} onChange={set('email')} aria-invalid={Boolean(errors.email)} />
          {errors.email ? <em>{errors.email}</em> : null}
        </label>
      </div>
      <div className="form-row">
        <label>
          <span>Company</span>
          <input type="text" autoComplete="organization" value={values.company} onChange={set('company')} aria-invalid={Boolean(errors.company)} />
          {errors.company ? <em>{errors.company}</em> : null}
        </label>
        <label>
          <span>
            Country <small>optional</small>
          </span>
          <input type="text" autoComplete="country-name" value={values.country} onChange={set('country')} />
        </label>
      </div>
      <label>
        <span>Team size</span>
        <select value={values.size} onChange={set('size')}>
          {sizes.map((size) => (
            <option key={size}>{size}</option>
          ))}
        </select>
      </label>
      <label>
        <span>
          What would you like to see? <small>optional</small>
        </span>
        <textarea rows={4} value={values.message} onChange={set('message')} placeholder="Routes you sell, suppliers you use, how many agents you have" />
      </label>
      <div className="form-actions">
        <button type="submit" className="btn btn-primary chase">
          Prepare demo request
        </button>
        {wa ? (
          <a href={wa} className="btn" target="_blank" rel="noreferrer">
            Chat on WhatsApp
          </a>
        ) : null}
      </div>
      <p className="form-note">
        This opens your email app with the request addressed to {site.email}. Nothing is stored on
        this website.
      </p>
    </form>
  );
}
