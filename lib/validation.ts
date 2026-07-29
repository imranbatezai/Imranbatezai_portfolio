import type { ContactFormData, ValidationErrors } from "@/types";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(
  data: Partial<ContactFormData>
): ValidationErrors {
  const errors: ValidationErrors = {};

  const name = (data.name ?? "").trim();
  const email = (data.email ?? "").trim();
  const subject = (data.subject ?? "").trim();
  const message = (data.message ?? "").trim();

  if (!name) {
    errors.name = "Please enter your name.";
  } else if (name.length < 2) {
    errors.name = "Name is too short.";
  } else if (name.length > 100) {
    errors.name = "Name is too long.";
  }

  if (!email) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_REGEX.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!subject) {
    errors.subject = "Please enter a subject.";
  } else if (subject.length > 150) {
    errors.subject = "Subject is too long.";
  }

  if (!message) {
    errors.message = "Please enter a message.";
  } else if (message.length < 10) {
    errors.message = "Message should be at least 10 characters.";
  } else if (message.length > 5000) {
    errors.message = "Message is too long.";
  }

  return errors;
}

export function hasErrors(errors: ValidationErrors): boolean {
  return Object.keys(errors).length > 0;
}
