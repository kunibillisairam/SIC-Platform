import React, { useState } from 'react';
import { 
  GitMerge, 
  GraduationCap, 
  Building2, 
  UserCheck, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Award, 
  ShieldCheck, 
  Check,
  Zap,
  Info,
  Layers,
  Cpu,
  Wrench
} from 'lucide-react';

export default function SmartMatching({ problemData, setActivePage }) {
  // 1. Recommended Universities Data (3 realistic demo universities)
  const recommendedUniversities = [
    {
      id: "uni-1",
      name: "Example University",
      location: "Ranchi, Jharkhand",
      department: "Department of Water Resources & Civil Engineering",
      expertise: "Hydraulics, Turbidity Filtration, Sensor Networks",
      matchPercentage: 94,
      matchGrade: "Optimal Match",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
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
      matchGrade: "High Synergy",
      badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
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
      matchGrade: "Strong Match",
      badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-200",
      reasons: [
        "Specialized in low-cost gravity-fed sand/charcoal filtration",
        "Strong rural outreach and community survey experience",
        "Faculty mentors available for field pilot validation",
        "Equipped with chemical spectroscopy lab testing tools"
      ]
    }
  ];

  // 2. Recommended Industry / Startup Partners Data (3 sample partners)
  const recommendedPartners = [
    {
      id: "partner-1",
      name: "WaterTech Solutions",
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
      matchGrade: "Primary Sponsor",
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

  // 3. Recommended Team Data
  const recommendedTeam = {
    problemId: "PR-2026-8942",
    problemTitle: problemData?.title || "Seasonal drinking water shortage in a rural community",
    facultyMentor: {
      name: "Dr. Example",
      title: "Professor & Head of Environmental Engineering",
      institution: "Example University",
      experience: "18+ years in Fluid Mechanics & Rural Sanitation Tech"
    },
    studentTeam: {
      name: "Team HydroShield",
      membersCount: "5 Core Members",
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
    <div className="bg-slate-50 min-h-screen py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Page Header */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-3 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
            <div className="space-y-1.5">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-400/30">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>AI Recommendation Engine • Problem #PR-2026-8942</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
                Smart Collaboration Matching
              </h1>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl font-normal">
                Finding the right expertise and resources for this problem.
              </p>
            </div>

            {/* Prototype Indicator Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-slate-800/90 border border-slate-700 text-xs text-amber-300 font-semibold shrink-0 shadow-sm">
              <Info className="w-4 h-4 text-amber-400 shrink-0" />
              <span>SIH Prototype Match Scores</span>
            </div>
          </div>
        </div>

        {/* Selected Problem Context Summary Bar */}
        <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-xs shrink-0 border border-blue-100">
              PR-8942
            </div>
            <div>
              <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wide">Target Issue</span>
              <h3 className="font-extrabold text-slate-900 text-sm sm:text-base leading-snug">
                {recommendedTeam.problemTitle}
              </h3>
            </div>
          </div>
          <div className="flex items-center space-x-3 text-xs text-slate-500 font-medium self-end md:self-center">
            <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-semibold">Water & Sanitation</span>
            <span>|</span>
            <span className="text-slate-700 font-semibold">Coimbatore, TN</span>
          </div>
        </div>

        {/* SECTION 1: RECOMMENDED UNIVERSITIES */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
                  1. RECOMMENDED UNIVERSITIES
                </h2>
                <p className="text-xs text-slate-500 font-medium">
                  Academic R&D labs and departments with direct domain alignment.
                </p>
              </div>
            </div>
            <span className="text-xs font-bold text-slate-400 hidden sm:inline">3 Matched Institutions</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendedUniversities.map((uni) => (
              <div 
                key={uni.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Match Score Accent Header */}
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className="text-[11px] font-semibold text-slate-500">
                      {uni.location}
                    </span>
                    {/* Visual Match Badge */}
                    <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200">
                      <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                      <span className="text-sm font-extrabold text-blue-900">
                        {uni.matchPercentage}% Match
                      </span>
                    </div>
                  </div>

                  <h3 className="font-extrabold text-slate-900 text-lg group-hover:text-blue-600 transition-colors leading-tight mb-2">
                    {uni.name}
                  </h3>

                  {/* Department */}
                  <div className="mb-4">
                    <span className="text-xs font-bold text-slate-700 block mb-1 uppercase tracking-wider text-[10px]">
                      Department
                    </span>
                    <p className="text-xs font-semibold text-slate-800 bg-slate-50 p-2.5 rounded-lg border border-slate-100 leading-snug">
                      {uni.department}
                    </p>
                  </div>

                  {/* Expertise */}
                  <div className="mb-4">
                    <span className="text-xs font-bold text-slate-700 block mb-1 uppercase tracking-wider text-[10px]">
                      Core R&D Expertise
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {uni.expertise}
                    </p>
                  </div>

                  {/* Why it matches (Reasons list) */}
                  <div className="pt-3 border-t border-slate-100 space-y-2">
                    <span className="text-[11px] font-extrabold text-slate-900 block uppercase tracking-wider">
                      Why It Matches:
                    </span>
                    {uni.reasons.map((reason, idx) => (
                      <div key={idx} className="flex items-start text-xs text-slate-700 leading-snug">
                        <span className="text-emerald-600 font-bold mr-1.5 shrink-0">✓</span>
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
        <section className="space-y-6 pt-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center shadow-md">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
                  2. RECOMMENDED INDUSTRY / STARTUP PARTNERS
                </h2>
                <p className="text-xs text-slate-500 font-medium">
                  Corporates, hardware startups, and CSR foundations offering grants and tech stacks.
                </p>
              </div>
            </div>
            <span className="text-xs font-bold text-slate-400 hidden sm:inline">3 Matched Partners</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendedPartners.map((partner) => (
              <div 
                key={partner.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded bg-teal-100 text-teal-800 uppercase">
                      {partner.type}
                    </span>
                    {/* Visual Match Badge */}
                    <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200">
                      <span className="w-2 h-2 rounded-full bg-teal-600"></span>
                      <span className="text-sm font-extrabold text-teal-900">
                        {partner.matchPercentage}% Match
                      </span>
                    </div>
                  </div>

                  <h3 className="font-extrabold text-slate-900 text-lg group-hover:text-teal-700 transition-colors leading-tight mb-2">
                    {partner.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {partner.description}
                  </p>

                  {/* Expertise Tags */}
                  <div className="mb-4">
                    <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider block mb-2">
                      Expertise & Resources
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {partner.expertise.map((exp, i) => (
                        <span key={i} className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Rationale list */}
                  <div className="pt-3 border-t border-slate-100 space-y-2">
                    <span className="text-[11px] font-extrabold text-slate-900 block uppercase tracking-wider">
                      Partnership Rationale:
                    </span>
                    {partner.reasons.map((reason, idx) => (
                      <div key={idx} className="flex items-start text-xs text-slate-700 leading-snug">
                        <span className="text-teal-600 font-bold mr-1.5 shrink-0">✓</span>
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
        <section className="space-y-6 pt-4">
          <div className="flex items-center space-x-3 border-b border-slate-200 pb-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-md">
              <UserCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
                3. RECOMMENDED TEAM
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                Synthesized student innovation team, faculty mentor, and skill matrix.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Faculty Mentor */}
            <div className="space-y-3 p-5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center space-x-2 text-indigo-700 font-extrabold text-xs uppercase tracking-wider">
                <GraduationCap className="w-4 h-4" />
                <span>Faculty Mentor</span>
              </div>
              <h3 className="font-extrabold text-slate-900 text-lg">
                {recommendedTeam.facultyMentor.name}
              </h3>
              <p className="text-xs font-semibold text-slate-700">
                {recommendedTeam.facultyMentor.title}
              </p>
              <p className="text-xs text-slate-500">
                {recommendedTeam.facultyMentor.institution}
              </p>
              <p className="text-xs text-slate-600 pt-2 border-t border-slate-200/80 italic">
                "{recommendedTeam.facultyMentor.experience}"
              </p>
            </div>

            {/* Student Team */}
            <div className="space-y-3 p-5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center space-x-2 text-blue-700 font-extrabold text-xs uppercase tracking-wider">
                <UserCheck className="w-4 h-4" />
                <span>Student Innovation Team</span>
              </div>
              <h3 className="font-extrabold text-slate-900 text-lg">
                {recommendedTeam.studentTeam.name}
              </h3>
              <p className="text-xs font-semibold text-blue-600">
                {recommendedTeam.studentTeam.degree}
              </p>
              <p className="text-xs text-slate-700 font-medium">
                Team Lead: <strong>{recommendedTeam.studentTeam.lead}</strong>
              </p>
              <p className="text-xs text-slate-500 pt-2 border-t border-slate-200/80">
                Size: {recommendedTeam.studentTeam.membersCount} (Selected via AI Skill Match)
              </p>
            </div>

            {/* Required Skills Matrix */}
            <div className="space-y-3 p-5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center space-x-2 text-teal-700 font-extrabold text-xs uppercase tracking-wider">
                <Wrench className="w-4 h-4" />
                <span>Required Skills Matrix</span>
              </div>
              <div className="space-y-2 pt-1">
                {recommendedTeam.requiredSkills.map((sk, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-800">{sk.name}</span>
                    <span className="px-2 py-0.5 rounded bg-teal-100 text-teal-800 font-bold text-[10px]">
                      {sk.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* BOTTOM SECTION: "Recommended Collaboration" & Create Project Button */}
        <section className="pt-4">
          <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-950 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-2xl space-y-6">
            
            <div className="text-center sm:text-left space-y-1">
              <span className="text-xs font-extrabold text-emerald-400 uppercase tracking-widest bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800">
                Synthesized Synergy
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                Recommended Collaboration
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm">
                Combining top academic expertise, dedicated student innovators, and corporate CSR capital.
              </p>
            </div>

            {/* Visual Synergy Flow: University + Student Team + Industry Partner */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-slate-200">
              
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 text-center space-y-1">
                <span className="text-[10px] font-bold text-blue-400 uppercase">1. University</span>
                <p className="font-extrabold text-sm text-white">Example University</p>
                <p className="text-[11px] text-slate-400">Water Resources & Civil Lab</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 text-center space-y-1">
                <span className="text-[10px] font-bold text-indigo-400 uppercase">2. Student Team</span>
                <p className="font-extrabold text-sm text-white">Team HydroShield</p>
                <p className="text-[11px] text-slate-400">4th Year B.Tech (5 Members)</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 text-center space-y-1">
                <span className="text-[10px] font-bold text-teal-400 uppercase">3. Industry Partner</span>
                <p className="font-extrabold text-sm text-white">WaterTech Solutions</p>
                <p className="text-[11px] text-slate-400">₹4.5L Grant & Hardware Tech</p>
              </div>

            </div>

            {/* Action Button: Create Project */}
            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Clicking 'Create Project' initializes the 8-stage project execution tracker</span>
              </div>

              <button
                onClick={handleCreateProject}
                className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-extrabold text-base rounded-xl shadow-lg border border-emerald-400/30 transition-all transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
              >
                <span>Create Project</span>
                <ArrowRight className="w-5 h-5 ml-1" />
              </button>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
