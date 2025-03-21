"use client";
import { useState } from "react";
import { HomePage } from "./home-page/page";
import { CreateJob } from "./create-job/page";

const jobsDataApi = [
  {
    id: 1,
    type: "draft",
    title: "Hairstylist Needed for Special Events",
    createdTime: "Created 10 minutes ago",
    invited: 0,
    proposals: 0,
    messaged: 0,
    desc: `We are looking for a talented and professional Hairstylist to provide  event-ready hairstyling for weddings, parties, corporate functions, 
  and photoshoots.
  
  Services – Bridal, Glam, Formal, Casual, Editorial Styling
  Techniques – Updos, Curls, Braiding, Blowouts, Sleek Styles
  Products & Tools – Professional Haircare Brands, Styling Tools
  Hair Prep – Wash, Treatment, Heat Protection, Volume Boosting
  Photo-Ready Styles – Long-Lasting Hold, Frizz-Free Finish
  Extras – Hair Extensions, Accessories Styling, Quick Touch-Ups`,
    category: "Beauty and Wellness",
    speciality: "Hairdressing and Styling",
    budget: "$1,000.00",
    scope: "One-time Job",
    skills: ["Hairdressing & Styling"],
  },
  {
    id: 2,
    type: "archive",
    title: "Hairstylist Needed for Special Events",
    createdTime: "Created 10 minutes ago",
    invited: 0,
    proposals: 0,
    messaged: 0,
    desc: `We are looking for a talented and professional Hairstylist to provide  event-ready hairstyling for weddings, parties, corporate functions, 
  and photoshoots.
  
  Services – Bridal, Glam, Formal, Casual, Editorial Styling
  Techniques – Updos, Curls, Braiding, Blowouts, Sleek Styles
  Products & Tools – Professional Haircare Brands, Styling Tools
  Hair Prep – Wash, Treatment, Heat Protection, Volume Boosting
  Photo-Ready Styles – Long-Lasting Hold, Frizz-Free Finish
  Extras – Hair Extensions, Accessories Styling, Quick Touch-Ups`,
    category: "Beauty and Wellness",
    speciality: "Hairdressing and Styling",
    budget: "$1,000.00",
    scope: "One-time Job",
    skills: ["Hairdressing & Styling"],
  },
  
];

export default function Home() {
  const [currentPage, setCurrentPage] = useState<string>("homepage");
  const [jobsData, setJobsData] = useState(jobsDataApi);
  return currentPage === "homepage" ? (
    <HomePage setCurrentPage={setCurrentPage} jobsData={jobsData} />
  ) : (
    <CreateJob
      setJobsData={setJobsData}
      jobsData={jobsData}
      setCurrentPage={setCurrentPage}
    />
  );
}
