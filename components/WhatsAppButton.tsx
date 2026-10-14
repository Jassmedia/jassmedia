import { contactInfo } from "@/lib/site";

const greeting = "Hi JASS MEDIA, I'd like to know more about your services.";

// Floating WhatsApp icon shown on every page. Opens WhatsApp with a greeting already typed.
export function WhatsAppButton() {
  return (
    <a
      href={`${contactInfo.whatsapp}?text=${encodeURIComponent(greeting)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 text-[#25d366] drop-shadow-[0_4px_8px_rgb(0_0_0_/_0.25)] transition-transform duration-200 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25d366] sm:bottom-6 sm:right-6"
    >
      {/* the WhatsApp mark: green speech bubble with a white phone */}
      <svg viewBox="0 0 32 32" width="56" height="56" aria-hidden="true">
        <path
          fill="currentColor"
          d="M16.04 2C8.3 2 2.03 8.27 2.03 16c0 2.47.65 4.88 1.88 7L2 30l7.18-1.88A13.98 13.98 0 0016.04 30C23.77 30 30.04 23.73 30.04 16S23.77 2 16.04 2z"
        />
        <path
          fill="#fff"
          d="M23.06 19.7c-.38-.19-2.26-1.12-2.61-1.25-.35-.13-.61-.19-.86.19-.26.38-.99 1.25-1.21 1.5-.22.26-.45.29-.83.1-.38-.19-1.61-.6-3.07-1.9a11.5 11.5 0 01-2.13-2.65c-.22-.38-.02-.59.17-.78.17-.17.38-.45.57-.67.19-.22.26-.38.38-.64.13-.26.06-.48-.03-.67-.1-.19-.86-2.07-1.18-2.83-.31-.74-.62-.64-.86-.65h-.73c-.26 0-.67.1-1.02.48-.35.38-1.34 1.31-1.34 3.18s1.37 3.69 1.56 3.95c.19.26 2.7 4.12 6.53 5.77.91.39 1.63.63 2.18.81.92.29 1.75.25 2.41.15.74-.11 2.26-.92 2.58-1.82.32-.89.32-1.66.22-1.82-.1-.16-.35-.26-.73-.45z"
        />
      </svg>
    </a>
  );
}
