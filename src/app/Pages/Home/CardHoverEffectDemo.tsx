import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
  <h2 className="text-2xl font-bold text-center mb-4">Why are you choosing us?</h2>
  <HoverEffect items={projects} />
</div>

  );
}
export const projects = [
  {
    title: "One-Stop Solution",
    description:
      "We offer digital marketing, software development, branding, and lead generation—everything your business needs to grow and succeed online.",
    link: "https://stripe.com",
  },
  {
    title: "Result-Oriented Approach ",
    description:
      "Our strategies are designed to deliver real results, ensuring higher engagement, better conversions, and maximum brand visibility.",
    link: "https://netflix.com",
  },
  {
    title: "Latest Technology & Innovation",
    description:
      "We use the most advanced AI tools, automation, and data-driven strategies to give you a competitive edge.",
    link: "https://google.com",
  },
  {
    title: "Customised Solutions for Every Business",
    description:
      "We understand that every brand is unique, so we create tailor-made strategies that align with your business goals and target audience.",
    link: "https://meta.com",
  },
  {
    title: "Experienced & Skilled Team",
    description:
      "Our experts bring years of industry experience in digital marketing, software development, and branding to provide high-quality, impactful solutions.",
    link: "https://amazon.com",
  },
  {
    title: "Proven Track Record of Business Growth",
    description:
      "We have successfully helped multiple businesses generate leads, increase revenue, and build a strong brand presence in their industries.",
    link: "https://microsoft.com",
  },
];
