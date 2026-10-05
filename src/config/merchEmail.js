// This public browser key and service already power the club's contact form.
// A separate template keeps merchandise requests away from training enquiries.
export const merchEmailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_MERCH_SERVICE_ID || "service_xfub9eq",
  publicKey: import.meta.env.VITE_EMAILJS_MERCH_PUBLIC_KEY || "1rWXEQCaKSIe2JqzW",
  templateId: import.meta.env.VITE_EMAILJS_MERCH_TEMPLATE_ID || "",
};
