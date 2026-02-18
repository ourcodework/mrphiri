import React, { useState } from 'react'
import { GraduationCap, Leaf, HardHat, Zap } from "lucide-react";

const qctoPrograms = [
  "Occupational Certificate: Pest Management Officer (NQF Level 05)",
  "Occupational Certificate: Garden Worker (NQF Level 02)",
  "Occupational Certificate: Landscape Gardener / Landscaping Supervisor (NQF Level 03)",
  "Occupational Skills Programme: Intermediate End User Computing (NQF Level 04)",
];

const agriShortSkills = [
  "Horticulture", "Landscaping", "Landscape Irrigation", "Crop Production",
  "Animal Production", "Poultry Production", "Mixed Farming", "Abattoir Processes",
];

const agriCompliance = [
  "First Aid", "Health & Safety", "Drive a Tractor",
  "Employment Rights & Responsibilities (BCEA, Labour Relations Act, Employment Equity)",
];

const cetaPrograms = [
  "Community House Building (NQF Level 2)",
  "Building & Civil Construction (NQF Level 2)",
  "Plumbing (NQF Level 4)",
  "Construction Plant Operations (NQF Level 2)",
];

const ewsetaPrograms = [
  "Electrical Engineering", "Renewable Energy",
  "Water & Wastewater Treatment", "Hot Water Systems Installation",
];

const ProgrammeList = ({ items }) => (
  <ul className="grid sm:grid-cols-2 gap-3">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3 p-3 rounded-lg bg-[#E4F0E9]/50 border border-[#DCE7E0]">
        <div className="w-1.5 h-1.5 rounded-full bg-[#1E673F] mt-2 shrink-0" />
        <span className="text-sm text-[#18251F]">{item}</span>
      </li>
    ))}
  </ul>
);

const ProgrammesSection = () => {
  const [activeTab, setActiveTab] = useState("qcto");

  return (
    <section id="programmes" className="w-full sm:h-fit sm:py-28 flex items-center py-16 px-4 bg-[#F0F5F0]/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-[#E3AC33] uppercase tracking-widest">
            Our Programmes
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#18251F] mt-3">
            Accredited Training Programmes
          </h2>
        </div>

        {/* Tabs */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            <button
              onClick={() => setActiveTab("qcto")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full border ${
                activeTab === "qcto"
                  ? "bg-[#1E673F] text-white"
                  : "border-[#DCE7E0]"
              }`}
            >
              <GraduationCap className="w-4 h-4" /> QCTO
            </button>

            <button
              onClick={() => setActiveTab("agriseta")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full border ${
                activeTab === "agriseta"
                  ? "bg-[#1E673F] text-white"
                  : "border-[#DCE7E0]"
              }`}
            >
              <Leaf className="w-4 h-4" /> AgriSETA
            </button>

            <button
              onClick={() => setActiveTab("ceta")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full border ${
                activeTab === "ceta"
                  ? "bg-[#1E673F] text-white"
                  : "border-[#DCE7E0]"
              }`}
            >
              <HardHat className="w-4 h-4" /> CETA
            </button>

            <button
              onClick={() => setActiveTab("ewseta")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full border ${
                activeTab === "ewseta"
                  ? "bg-[#1E673F] text-white"
                  : "border-[#DCE7E0]"
              }`}
            >
              <Zap className="w-4 h-4" /> EWSETA
            </button>
          </div>

          {/* Content */}
          {activeTab === "qcto" && (
            <>
              <h3 className="text-xl font-semibold mb-4">
                QCTO Accredited Training
              </h3>
              <ProgrammeList items={qctoPrograms} />
            </>
          )}

          {activeTab === "agriseta" && (
            <>
              <h3 className="text-xl font-semibold mb-4">
                Short Skills Programmes
              </h3>
              <ProgrammeList items={agriShortSkills} />

              <h3 className="text-xl font-semibold mt-8 mb-4">
                Compliance Training
              </h3>
              <ProgrammeList items={agriCompliance} />
            </>
          )}

          {activeTab === "ceta" && (
            <>
              <h3 className="text-xl font-semibold mb-4">CETA Programmes</h3>
              <ProgrammeList items={cetaPrograms} />
            </>
          )}

          {activeTab === "ewseta" && (
            <>
              <h3 className="text-xl font-semibold mb-4">EWSETA Programmes</h3>
              <ProgrammeList items={ewsetaPrograms} />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProgrammesSection