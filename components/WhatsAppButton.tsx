import { contactInfo } from "@/lib/site";

const greeting = "Hi JASS MEDIA, I'd like to know more about your services.";

// Floating chat button shown on every page. Opens WhatsApp with a greeting already typed.
export function WhatsAppButton() {
  return (
    <a
      href={`${contactInfo.whatsapp}?text=${encodeURIComponent(greeting)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full bg-[#25d366] p-3.5 text-white shadow-lg shadow-black/25 transition-transform duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25d366] sm:bottom-6 sm:right-6"
    >
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-40 group-hover:pl-2 group-focus-visible:max-w-40 group-focus-visible:pl-2 md:block">
        Chat with us
      </span>
      <svg viewBox="0 0 32 32" width="28" height="28" fill="currentColor" aria-hidden="true">
        <path d="M16.04 3C8.86 3 3.03 8.82 3.03 16c0 2.29.6 4.53 1.74 6.5L3 29l6.66-1.74A12.98 12.98 0 0016.04 29C23.2 29 29.03 23.18 29.03 16S23.2 3 16.04 3zm0 23.8c-1.94 0-3.84-.52-5.5-1.5l-.4-.24-3.95 1.04 1.05-3.85-.26-.4a10.76 10.76 0 01-1.65-5.75c0-5.96 4.85-10.8 10.82-10.8 5.96 0 10.8 4.84 10.8 10.8s-4.95 10.7-10.9 10.7zm5.93-8.09c-.33-.16-1.93-.95-2.23-1.06-.3-.11-.52-.16-.73.16-.22.33-.84 1.06-1.03 1.28-.19.22-.38.24-.7.08-.33-.16-1.38-.51-2.62-1.62a9.8 9.8 0 01-1.82-2.26c-.19-.33-.02-.5.14-.67.15-.15.33-.38.49-.57.16-.19.22-.33.33-.54.11-.22.05-.41-.03-.57-.08-.16-.73-1.76-1-2.41-.26-.63-.53-.55-.73-.56h-.62c-.22 0-.57.08-.87.41-.3.33-1.14 1.11-1.14 2.71s1.17 3.15 1.33 3.37c.16.22 2.3 3.51 5.57 4.92.78.34 1.39.54 1.86.69.78.25 1.5.21 2.06.13.63-.09 1.93-.79 2.2-1.55.27-.76.27-1.41.19-1.55-.08-.14-.3-.22-.62-.38z" />
      </svg>
    </a>
  );
}
