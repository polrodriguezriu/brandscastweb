import NewsletterForm from "./NewsletterForm";

export default function NewsletterSignup() {
  if (process.env.MARKETING_SIGNUP_ENABLED !== "true") return null;
  return <NewsletterForm />;
}
