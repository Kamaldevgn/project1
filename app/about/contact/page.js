import { useState } from 'react';
import Button from '@/components/Button';
import { validateEmail } from '@/utils/helpers';

export default function Contact() {
  const [email, setEmail] = useState('');

  const handleClick = () => {
    if (validateEmail(email)) {
      alert('Valid Email!');
    } else {
      alert('Invalid Email!');
    }
  };

  return (
    <section>
      <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
      <input
        type="text"
        placeholder="Enter your email"
        className="border p-2 rounded w-full mb-4"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button label="Submit" onClick={handleClick} />
    </section>
  );
}