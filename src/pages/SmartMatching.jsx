import React from 'react';
import { 
  GitMerge, 
  GraduationCap, 
  Building2, 
  UserCheck, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Wrench,
  Info
} from 'lucide-react';

export default function SmartMatching({ setActivePage }) {
  const recommendedUniversities = [
    {
      id: "uni-1",
      name: "PSG College of Technology",
      location: "Coimbatore, Tamil Nadu",
      department: "Department of Water Resources & Civil Engineering",
      expertise: "Hydraulics, Turbidity Filtration, Sensor Networks",
      matchPercentage: 94,
      reasons: [
        "Relevant department specialized in community water engineering",
        "Previous published research on rural water purification",
        "Suitable faculty expertise in IoT fluid dynamics",
        "Available accredited water testing laboratory on campus"
      ]
    },
    {
      id: "uni-2",
      name: "Amrita Vishwa Vidyapeetham",
      location: "Coimbatore / Amritapuri",
      department: "Center for Wireless Networks & Applications (WNA)",
      expertise: "IoT Telemetry, Low-Power Mesh Sensors, Water Monitoring",
      matchPercentage: 89,
      reasons: [
        "Patent-pending IoT water quality telemetry hardware",
        "Prior field deployment experience in 12 rural Panchayats",
        "Active student innovation incubation grant program",
        "Dedicated faculty guides in embedded systems"
      ]
    },
    {
      id: "uni-3",
      name: "Thiagarajar College of Engineering",
      location: "Madurai, Tamil Nadu",
      department: "Department of Environmental & Chemical Engineering",
      expertise: "Low-Cost Filtration Media, Bio-Sorption, Rural Sanitation",
      matchPercentage: 83,
      reasons: [
        "Specialized in low-cost gravity-fed sand/charcoal filtration",
        "Strong rural outreach and community survey experience",
        "Faculty mentors available for field pilot validation",
        "Equipped with chemical spectroscopy lab testing tools"
      ]
    }
  ];

  const recommendedPartners = [
    {
      id: "partner-1",
      name: "WaterTech Solutions Pvt. Ltd.",
      type: "Startup / Tech Partner",
      matchPercentage: 87,
      expertise: ["IoT", "Water Monitoring", "Field Deployment"],
      description: "Specializes in low-power inline pipe sensors, turbidity telemetry, and automated leak location alerts for municipal lines.",
      reasons: [
        "Commercial hardware stack ready for field pilot integration",
        "Agreed to provide hardware developer kits & cloud telemetry APIs",
        "Technical mentorship for student engineering teams"
      ]
    },
    {
      id: "partner-2",
      name: "CleanWater CSR Infra Foundation",
      type: "Corporate CSR Funder",
      matchPercentage: 96,
      expertise: ["CSR Capital Grant", "Rural Sanitation", "Community Infrastructure"],
      description: "Annual CSR innovation grant earmarked for rural school drinking water security and sustainable infrastructure.",
      reasons: [
        "Pre-approved ₹4.5 Lakhs prototype-to-pilot implementation grant",
        "Direct linkage with District Collectorate for scaling pilot",
        "Quarterly audit and field impact verification framework"
      ]
    },
    {
      id: "partner-3",
      name: "AquaSense IoT Innovations",
      type: "Hardware Incubator",
      matchPercentage: 81,
      expertise: ["Solar Micro-Grids", "Embedded Firmware", "Low-Cost Hardware"],
      description: "Incubator offering rugged solar-powered micro-controller enclosures for harsh rural outdoor weather conditions.",
      reasons: [
        "Rugged IP67 weather-proof enclosure designs",
        "Solar battery backup circuit for off-grid school sites",
        "Incubation lab access for rapid PCB prototyping"
      ]
    }
  ];

  const recommendedTeam = {
    problemId: "PR-2026-8942",
    problemTitle: "Water contamination and leakage in rural school supply line",
    facultyMentor: {
      name: "Dr. R. Sundaram",
      title: "Professor & Head of Environmental Engineering",
      institution: "PSG College of Technology",
      experience: "18+ years in Fluid Mechanics & Rural Sanitation Tech"
    },
    studentTeam: {
      name: "Team HydroShield",
      membersCount: "4 Core Members",
      degree: "4th Year B.Tech Civil & IoT Innovation Group",
      lead: "Karthik Raja (Student Team Lead)"
    },
    requiredSkills: [
      { name: "Embedded IoT & Telemetry", level: "Advanced" },
      { name: "Hydraulic Flow Modeling", level: "Expert" },
      { name: "Water Quality Spectroscopy", level: "Intermediate" },
      { name: "Rural Community Outreach", level: "Experienced" }
    ]
  };

  const handleCreateProject = () => {
    setActivePage('projects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#F5F7FA] min-h-screen py-8 text-[#17202A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="bg-[#0B2F50] text-white rounded-md p-6 border border-[#164A7B] shadow-xs space-y-2">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 rounded bg-[#164A7B] text-slate-100 text-xs font-bold border border-white/10 mb-1">
                <span>AI Recommendation Engine • Problem #PR-2026-8942</span>
              </div>
              <h1 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
                Smart Collaboration Matching
              </h1>
              <p className="text-slate-300 text-xs sm:text-sm">
                Finding the right expertise and resources for this problem.
              </p>
            </div>

            <div className="px-3 py-1.5 rounded bg-[#164A7B]/60 text-xs text-slate-200 font-medium shrink-0 border border-[#164A7B]">
              SIH Prototype Recommendations
            </div>
          </div>
        </div>

        {/* Selected Problem Context */}
        <div className="bg-white rounded-md p-4 border border-[#D9E0E7] shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div>
            <span className="text-[10px] font-bold text-[#164A7B] uppercase tracking-wider block">Target Problem</span>
            <h3 className="font-extrabold text-[#17202A] text-sm leading-snug">
              {recommendedTeam.problemTitle}
            </h3>
          </div>
          <div className="flex items-center space-x-2 text-[#5B6875] font-semibold shrink-0">
            <span className="px-2 py-0.5 rounded bg-[#F5F7FA] text-[#17202A] border border-[#D9E0E7]">Water & Sanitation</span>
            <span>|</span>
            <span>Coimbatore, TN</span>
          </div>
        </div>

        {/* SECTION 1: RECOMMENDED UNIVERSITIES */}
        <section className="space-y-4">
          <div className="border-b border-[#D9E0E7] pb-2">
            <h2 className="text-base font-extrabold text-[#17202A] uppercase tracking-wide">
              1. RECOMMENDED UNIVERSITIES
            </h2>
            <p className="text-xs text-[#5B6875]">Academic R&D labs and departments with direct domain alignment.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recommendedUniversities.map((uni) => (
              <div 
                key={uni.id}
                className="bg-white rounded-md border border-[#D9E0E7] shadow-xs p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-semibold text-[#5B6875]">
                      {uni.location}
                    </span>
                    <span className="px-2.5 py-0.5 rounded bg-[#164A7B] text-white text-xs font-bold">
                      {uni.matchPercentage}% Match
                    </span>
                  </div>

                  <h3 className="font-extrabold text-[#17202A] text-base mb-1">
                    {uni.name}
                  </h3>

                  <p className="text-xs font-semibold text-[#5B6875] bg-[#F5F7FA] p-2 rounded border border-[#D9E0E7] mb-3 leading-snug">
                    {uni.department}
                  </p>

                  <div className="mb-3 text-xs">
                    <span className="font-bold text-[#17202A] block mb-0.5">Core Expertise:</span>
                    <p className="text-[#5B6875]">{uni.expertise}</p>
                  </div>

                  <div className="pt-3 border-t border-[#D9E0E7] space-y-1.5 text-xs">
                    <span className="font-bold text-[#17202A] block uppercase text-[10px]">
                      Why It Matches:
                    </span>
                    {uni.reasons.map((reason, idx) => (
                      <div key={idx} className="flex items-start text-[#17202A] leading-snug">
                        <span className="text-[#16865B] font-bold mr-1.5 shrink-0">✓</span>
                        <span>{reason}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: RECOMMENDED INDUSTRY / STARTUP PARTNERS */}
        <section className="space-y-4 pt-2">
          <div className="border-b border-[#D9E0E7] pb-2">
            <h2 className="text-base font-extrabold text-[#17202A] uppercase tracking-wide">
              2. RECOMMENDED INDUSTRY / STARTUP PARTNERS
            </h2>
            <p className="text-xs text-[#5B6875]">Corporates, hardware startups, and CSR foundations offering grants and tech stacks.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recommendedPartners.map((partner) => (
              <div 
                key={partner.id}
                className="bg-white rounded-md border border-[#D9E0E7] shadow-xs p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#F5F7FA] text-[#17202A] border border-[#D9E0E7]">
                      {partner.type}
                    </span>
                    <span className="px-2.5 py-0.5 rounded bg-[#16865B] text-white text-xs font-bold">
                      {partner.matchPercentage}% Match
                    </span>
                  </div>

                  <h3 className="font-extrabold text-[#17202A] text-base mb-2">
                    {partner.name}
                  </h3>

                  <p className="text-xs text-[#5B6875] leading-normal mb-3">
                    {partner.description}
                  </p>

                  <div className="mb-3">
                    <span className="text-[10px] font-bold text-[#5B6875] uppercase block mb-1">
                      Expertise & Resources
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {partner.expertise.map((exp, i) => (
                        <span key={i} className="text-[11px] font-semibold px-2 py-0.5 rounded bg-[#F5F7FA] text-[#17202A] border border-[#D9E0E7]">
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#D9E0E7] space-y-1.5 text-xs">
                    <span className="font-bold text-[#17202A] block uppercase text-[10px]">
                      Partnership Rationale:
                    </span>
                    {partner.reasons.map((reason, idx) => (
                      <div key={idx} className="flex items-start text-[#17202A] leading-snug">
                        <span className="text-[#16865B] font-bold mr-1.5 shrink-0">✓</span>
                        <span>{reason}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: RECOMMENDED TEAM */}
        <section className="space-y-4 pt-2">
          <div className="border-b border-[#D9E0E7] pb-2">
            <h2 className="text-base font-extrabold text-[#17202A] uppercase tracking-wide">
              3. RECOMMENDED TEAM
            </h2>
            <p className="text-xs text-[#5B6875]">Synthesized student innovation team, faculty mentor, and skill matrix.</p>
          </div>

          <div className="bg-white rounded-md border border-[#D9E0E7] shadow-xs p-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            
            {/* Faculty Mentor */}
            <div className="space-y-2 p-4 rounded bg-[#F5F7FA] border border-[#D9E0E7]">
              <span className="font-bold text-[#164A7B] uppercase tracking-wider block text-[10px]">Faculty Mentor</span>
              <h3 className="font-extrabold text-[#17202A] text-base">
                {recommendedTeam.facultyMentor.name}
              </h3>
              <p className="font-semibold text-[#17202A]">
                {recommendedTeam.facultyMentor.title}
              </p>
              <p className="text-[#5B6875]">
                {recommendedTeam.facultyMentor.institution}
              </p>
              <p className="text-[#5B6875] pt-2 border-t border-[#D9E0E7]">
                "{recommendedTeam.facultyMentor.experience}"
              </p>
            </div>

            {/* Student Team */}
            <div className="space-y-2 p-4 rounded bg-[#F5F7FA] border border-[#D9E0E7]">
              <span className="font-bold text-[#164A7B] uppercase tracking-wider block text-[10px]">Student Team</span>
              <h3 className="font-extrabold text-[#17202A] text-base">
                {recommendedTeam.studentTeam.name}
              </h3>
              <p className="font-semibold text-[#164A7B]">
                {recommendedTeam.studentTeam.degree}
              </p>
              <p className="text-[#17202A] font-medium">
                Lead: <strong>{recommendedTeam.studentTeam.lead}</strong>
              </p>
              <p className="text-[#5B6875] pt-2 border-t border-[#D9E0E7]">
                Size: {recommendedTeam.studentTeam.membersCount}
              </p>
            </div>

            {/* Required Skills Matrix */}
            <div className="space-y-2 p-4 rounded bg-[#F5F7FA] border border-[#D9E0E7]">
              <span className="font-bold text-[#164A7B] uppercase tracking-wider block text-[10px]">Required Skills</span>
              <div className="space-y-1.5 pt-1">
                {recommendedTeam.requiredSkills.map((sk, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <span className="font-semibold text-[#17202A]">{sk.name}</span>
                    <span className="px-2 py-0.5 rounded bg-white text-[#164A7B] font-bold text-[10px] border border-[#D9E0E7]">
                      {sk.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* BOTTOM BANNER: Recommended Collaboration */}
        <section className="pt-2">
          <div className="bg-[#0B2F50] text-white rounded-md p-6 border border-[#164A7B] shadow-xs space-y-4">
            
            <div>
              <span className="text-[10px] font-bold text-[#16865B] uppercase tracking-widest bg-white/10 px-2 py-0.5 rounded border border-white/10">
                Recommended Collaboration
              </span>
              <h2 className="text-xl font-extrabold text-white mt-1">
                Synthesized Partnership Matrix
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded bg-[#164A7B]/50 border border-[#164A7B] space-y-0.5">
                <span className="text-[10px] font-bold text-slate-300 uppercase">1. University</span>
                <p className="font-extrabold text-white">PSG College of Tech</p>
              </div>

              <div className="p-3 rounded bg-[#164A7B]/50 border border-[#164A7B] space-y-0.5">
                <span className="text-[10px] font-bold text-slate-300 uppercase">2. Student Team</span>
                <p className="font-extrabold text-white">Team HydroShield</p>
              </div>

              <div className="p-3 rounded bg-[#164A7B]/50 border border-[#164A7B] space-y-0.5">
                <span className="text-[10px] font-bold text-slate-300 uppercase">3. Industry Partner</span>
                <p className="font-extrabold text-white">CleanWater CSR Foundation</p>
              </div>
            </div>

            <div className="pt-3 border-t border-[#164A7B] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-300">Initializes 8-stage project execution tracker</span>
              <button
                onClick={handleCreateProject}
                className="w-full sm:w-auto px-6 py-2.5 bg-[#16865B] hover:bg-[#116846] text-white font-bold text-xs rounded-md shadow-xs border border-white/20 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Create Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
