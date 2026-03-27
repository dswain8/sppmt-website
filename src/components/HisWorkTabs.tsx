"use client";

import { useState } from "react";
import Image from "next/image";

const TABS = [
  {
    id: "education",
    label: "Education",
    icon: "🎓",
    intro:
      "Education was the cornerstone of Shri Prasanna Pattnaik's vision. He founded and strengthened schools and colleges across Bhuban and Kamakhyanagar, ensuring thousands of students from rural and underserved backgrounds had access to quality education.",
    highlights: [
      {
        title: "Schools and colleges",
        description:
          "Founded multiple schools across Bhuban and Kamakhyanagar, providing quality education to rural students.",
        image: "/images/edu-kamakhyanagar-gate.png",
      },
      {
        title: "E-libraries and digital learning",
        description:
          "Established modern e-library facilities to give students access to digital resources.",
        image: "/images/edu-e-library.png",
      },
      {
        title: "Vocational training",
        description:
          "Built vocational training blocks providing practical skills training to prepare youth for employment.",
        image: "/images/edu-vocational-block.png",
      },
    ],
  },
  {
    id: "healthcare",
    label: "Healthcare",
    icon: "🏥",
    intro:
      "Shri Prasanna Pattnaik founded healthcare centres and a blood bank in Dhenkanal district, ensuring that rural communities had access to medical care and life-saving blood supplies.",
    highlights: [
      {
        title: "Primary health centres",
        description:
          "Founded the Ayushman Arogya Mandir Primary Health Centre at Mahulpal, Bhuban, providing essential healthcare to rural communities.",
        image: "/images/arogya-mandir-signboard-odia.png",
      },
      {
        title: "Blood bank",
        description:
          "The blood bank at Bhuban ensures adequate blood supply for emergency and routine medical needs in the region.",
        image: "/images/blood-bank-bhuban.png",
      },
      {
        title: "Clinical care",
        description:
          "Providing support for clinical care including trained nursing staff, medical supplies, and patient care at local health facilities.",
        image: "/images/nurse-iv-drip.png",
      },
    ],
  },
  {
    id: "agriculture",
    label: "Agriculture",
    icon: "🌾",
    intro:
      "Shri Prasanna Pattnaik understood that the prosperity of communities in Odisha depends on empowering farmers. He championed agricultural development, helping farmers adopt better practices and build sustainable livelihoods.",
    highlights: [
      {
        title: "Sustainable farming",
        description:
          "Promoted organic and sustainable agricultural practices that increase yield while preserving soil health.",
      },
      {
        title: "Farmer training",
        description:
          "Conducted workshops on modern farming techniques, crop diversification, and water management for rural farmers.",
      },
      {
        title: "Rural livelihoods",
        description:
          "Supported allied agricultural activities like dairy, poultry, fisheries, and horticulture to diversify rural income.",
      },
    ],
  },
  {
    id: "civic-sense",
    label: "Civic Sense",
    icon: "🏛️",
    intro:
      "Throughout his career as a legislator and social worker, Shri Prasanna Pattnaik championed civic values, environmental consciousness, and community participation. He believed a strong society is built on responsible citizenship.",
    highlights: [
      {
        title: "Environmental awareness",
        description:
          "Organized cleanliness drives, tree plantation campaigns, and awareness programs on waste management and conservation.",
      },
      {
        title: "Active citizenship",
        description:
          "Encouraged citizens to participate in local governance, exercise voting rights, and engage in democratic processes.",
      },
      {
        title: "Community hygiene",
        description:
          "Promoted sanitation practices, clean drinking water awareness, and public health hygiene in rural and urban communities.",
      },
    ],
  },
  {
    id: "employment",
    label: "Employment",
    icon: "💼",
    intro:
      "Shri Prasanna Pattnaik recognized that education must translate into livelihoods. His vocational training blocks and skill development initiatives laid the foundation for employment-focused programs across Dhenkanal.",
    highlights: [
      {
        title: "Vocational training",
        description:
          "Hands-on training in trades like carpentry, electrical work, tailoring, and computer skills, preparing youth for employment.",
        image: "/images/vocational-block.png",
      },
      {
        title: "Skill development",
        description:
          "Partnering with industry to provide skill certification programs aligned with market demand.",
      },
      {
        title: "Women livelihood",
        description:
          "Empowering women through self-help groups, tailoring and handicraft training, and financial literacy workshops.",
      },
    ],
  },
];

export default function HisWorkTabs() {
  const [active, setActive] = useState("education");
  const tab = TABS.find((t) => t.id === active)!;

  return (
    <div>
      {/* Tab buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
              active === t.id
                ? "bg-orange text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            <span>{t.icon}</span>
            {t.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="max-w-5xl mx-auto">
        <p className="text-gray-600 text-center leading-relaxed mb-10 max-w-3xl mx-auto">
          {tab.intro}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tab.highlights.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              {item.image ? (
                <div className="relative h-40">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="h-3 bg-gradient-to-r from-green via-orange to-gold" />
              )}
              <div className="p-5">
                <h4 className="font-bold text-green mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
