import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | ORAZEN Burgers",
};

export default function ContactPage() {
  return <ContactForm />;
}
