export interface ScholarshipRecipient {
  id: string;
  name: string;
  courseOrClass: string;
  institution: string;
  district: string;
  aspiration?: string;
  image?: string;
  awardCategory?: string;
}

export interface ScholarshipCohort {
  cohortName: string;
  academicYear: string;
  status: "Announced" | "Open" | "Completed";
  announcementDate: string;
  summary: string;
  totalScholarsCount: number;
  recipients: ScholarshipRecipient[];
}

export const COHORT_1_DATA: ScholarshipCohort = {
  cohortName: "Cohort 1",
  academicYear: "2026–2027",
  status: "Announced",
  announcementDate: "October 2026",
  totalScholarsCount: 6,
  summary:
    "We are proud to announce the inaugural cohort of the Shri Prasanna Pattnaik Merit Scholarship. Six students from across Odisha — from Cuttack, Keonjhar, Jajpur, Nayagarh and beyond — have been selected for their commitment to learning and the promise they show. This scholarship assists with fees, books, and everyday educational costs so that their talent, not their circumstances, decides how far they go.",
  recipients: [
    {
      id: "simran-jena",
      name: "Simran Jena",
      awardCategory: "Merit-cum-Need Scholar",
      courseOrClass: "Higher Secondary (+2) Arts",
      institution: "Ravenshaw Higher Secondary School, Cuttack",
      district: "Brahman Jharilo, Cuttack",
      aspiration:
        "From a village high school to Ravenshaw — scoring 97 in Automotive and 83.7% in her Class 10 board examinations.",
      image: "/images/scholars/simran-jena.jpg",
    },
    {
      id: "byomakeshi-pradhan",
      name: "Byomakeshi Pradhan",
      awardCategory: "Academic Merit Grant",
      courseOrClass: "Higher Secondary (Class 11–12)",
      institution: "ABS Oxford International School (10th: Adarsha Vidyalaya)",
      district: "Champua, Keonjhar",
      aspiration:
        "Scored 77.8% with 95 in Odia at Adarsha Vidyalaya; rated excellent by teachers in academics and conduct.",
      image: "/images/scholars/byomakesh-pradhan.jpg",
    },
    {
      id: "soumya-ranjan-sahoo",
      name: "Soumya Ranjan Sahoo",
      awardCategory: "Higher Education Grant",
      courseOrClass: "Higher Secondary (+2), 1st Year",
      institution: "Renaissance Higher Secondary School",
      district: "Achyutpur, Jajpur",
      aspiration:
        "A farmer's son from Achyutpur who scored 81.8% in Class 10 board exams and is determined to keep learning.",
      image: "/images/scholars/soumya-ranjan-sahoo.jpg",
    },
    {
      id: "pragnya-priyadarshini",
      name: "Pragnya Priyadarshini",
      awardCategory: "Merit Scholar Award",
      courseOrClass: "Higher Secondary (+2) Science",
      institution: "Inspire Higher Secondary School, Nayagarh",
      district: "Lenkudipada, Nayagarh",
      aspiration:
        "A science student from Nayagarh who scored 96 in Odia, 77 in Mathematics, and 72% overall in her first year.",
      image: "/images/scholars/pragyan-priyadarshini.jpg",
    },
    {
      id: "sriya-mohanty",
      name: "Shriya Mohanty",
      awardCategory: "Merit Scholar Award",
      courseOrClass: "Higher Secondary (+2) Graduate",
      institution: "NC Higher Secondary School, Jajpur",
      district: "Debidwar, Jajpur",
      aspiration:
        "Passed her +2 examinations with 85.33% from NC Higher Secondary School, Jajpur; awarded scholarship backing to pursue higher studies.",
      image: "/images/scholars/sriya-mohanty.jpg",
    },
    {
      id: "kailash-sahoo",
      name: "Kailash Sahoo",
      awardCategory: "Academic Merit Grant",
      courseOrClass: "Higher Secondary & Technical Studies",
      institution: "Government Higher Secondary Institution",
      district: "Dhenkanal, Odisha",
      aspiration:
        "Awarded scholarship support to complete higher secondary education and technical vocational studies.",
      image: "/images/scholars/kailash-sahoo.jpg",
    },
  ],
};
