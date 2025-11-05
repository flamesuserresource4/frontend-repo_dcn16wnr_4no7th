import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // For now, just simulate a submission success
    setSubmitted(true);
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-2xl">
        <div className="mb-6 flex items-center gap-2">
          <Mail className="h-5 w-5 text-indigo-600" />
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Get in touch</h2>
        </div>
        <p className="text-gray-600">
          Have a project idea, internship opportunity, or just want to say hi? Drop a message — I usually reply within a
          day.
        </p>

        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={onChange}
                required
                placeholder="Your name"
                className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none ring-indigo-200 placeholder:text-gray-400 focus:ring-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                required
                placeholder="you@example.com"
                className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none ring-indigo-200 placeholder:text-gray-400 focus:ring-2"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              required
              placeholder="Tell me about your idea or role..."
              rows={5}
              className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none ring-indigo-200 placeholder:text-gray-400 focus:ring-2"
            />
          </div>

          <div className="flex items-center gap-3">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-white shadow hover:bg-indigo-700"
            >
              <Send className="h-4 w-4" /> Send Message
            </button>
            {submitted && <span className="text-sm text-green-600">Thanks! Your message has been recorded locally.</span>}
          </div>
        </form>
      </div>
    </section>
  );
}
