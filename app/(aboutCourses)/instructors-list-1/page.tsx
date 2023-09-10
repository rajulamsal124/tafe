import Instractors from "@/components/aboutCourses/instractors/Instractors";
import PageLinks from "@/components/common/PageLinks";
import Preloader from "@/components/common/Preloader";

import Footer from "@/components/layout/footers/Footer";
import Header from "@/components/layout/headers/Header";

import React from "react";

export const metadata = {
  title:
    "Instractors-list-1 || Tafegippsland - Professional LMS Online Education Course NextJS Template",
  description:
    "Elevate your e-learning content with Tafegippsland, the most impressive LMS template for online courses, education and LMS platforms.",
};

export default function page() {
  return (
    <main className="main-content">
      <Preloader />
      <Header />
      <div className="content-wrapper  js-content-wrapper overflow-hidden">
        <PageLinks />

        <Instractors />

        <Footer />
      </div>
    </main>
  );
}
