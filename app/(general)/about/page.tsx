import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Title",
  description: "The about page",
};

const AboutPage = () => {
  return (
      <span className="text-7xl">About Page</span>
  );
};

export default AboutPage;
