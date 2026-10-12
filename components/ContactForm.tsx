"use client";

import { useState } from "react";
import { CircleCheck, Send } from "lucide-react";
import { contactInfo } from "@/lib/site";

const fields = [
  { name: "Name", type: "text", required: true },
  { name: "Business Name", type: "text", required: true },
  { name: "Email Address", type: "email", required: true },
  { name: "Phone Number", type: "tel", required: true },
  { name: "Website / Social Link", type: "url", required: false },
  {
    name: "What is your biggest marketing frustration right now?",
    type: "select",
    required: true,
    options: [
      "No clear brand identity",
      "Spending on ads with no return",
      "Inconsistent social media",
      "Agencies that don't understand my business",
      "Other",
    ],
  },
  { name: "Tell us a bit about your current goals:", type: "textarea", required: false },
];

const labelClass = "block text-xs tracking-widest uppercase text-ink-muted mb-2";
const inputClass =
  "w-full px-4 py-3 rounded-lg bg-ink/5 border border-ink/10 text-ink placeholder:text-ink-dim focus:border-blaze focus:ring-1 focus:ring-blaze outline-none transition-colors";

export function ContactForm() {
  const [message, setMessage] = useState<string | null>(null);

  // There is no backend: the enquiry is handed to WhatsApp (or email) pre-filled, and the visitor presses send.
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const lines = fields
      .map((field) => [field.name, String(data.get(field.name) ?? "").trim()])
      .filter(([, value]) => value)
      .map(([name, value]) => `${name.replace(/:$/, "")}: ${value}`);
    const text = ["New strategy session request from jassmedia.in", "", ...lines].join("\n");
    setMessage(text);
    window.open(`${contactInfo.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  if (message) {
    return (
      <div role="status" className="h-full flex flex-col items-center justify-center text-center py-12">
        <div className="w-20 h-20 rounded-full bg-blaze/10 flex items-center justify-center mb-6">
          <CircleCheck size={40} className="text-ember" aria-hidden="true" />
        </div>
        <h2 className="headline text-2xl text-ink mb-4">ONE LAST STEP</h2>
        <p className="text-ink-muted max-w-md mb-6">
          WhatsApp has opened with your details filled in. Press send there and our team will get back to
          you within 24-48 hours.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">
          <a
            href={`${contactInfo.whatsapp}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ember hover:underline"
          >
            Open WhatsApp again
          </a>
          <a
            href={`mailto:${contactInfo.email}?subject=${encodeURIComponent(
              "Strategy session request",
            )}&body=${encodeURIComponent(message)}`}
            className="text-ember hover:underline"
          >
            Send by email instead
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      <h2 className="headline text-xl text-ink mb-8">Book Your Strategy Session</h2>
      <form onSubmit={onSubmit} className="space-y-6">
        {fields.map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name} className={labelClass}>
              {field.name}
            </label>
            {field.type === "select" ? (
              <select
                id={field.name}
                name={field.name}
                required={field.required}
                defaultValue=""
                className={`${inputClass} appearance-none cursor-pointer`}
              >
                <option value="" className="bg-paper text-ink-muted">
                  Select an option
                </option>
                {field.options?.map((option) => (
                  <option key={option} value={option} className="bg-paper text-ink">
                    {option}
                  </option>
                ))}
              </select>
            ) : field.type === "textarea" ? (
              <textarea
                id={field.name}
                name={field.name}
                rows={4}
                className={`${inputClass} resize-none`}
                placeholder="Tell us about your current goals"
              />
            ) : (
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                required={field.required}
                className={inputClass}
                placeholder={`Enter ${field.name.toLowerCase()}`}
              />
            )}
          </div>
        ))}
        <button
          type="submit"
          className="w-full btn-blaze py-4 rounded-lg text-base font-semibold flex items-center justify-center gap-3 cursor-pointer"
        >
          Book My Strategy Session
          <Send size={18} aria-hidden="true" />
        </button>
      </form>
    </>
  );
}
