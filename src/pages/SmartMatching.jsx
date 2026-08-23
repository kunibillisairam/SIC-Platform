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
      badgeColor: "bg-slate-100 text-gov-primary border-gov-border",
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
      badgeColor: "bg-slate-100 text-gov-primary border-gov-border",
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
      badgeColor: "bg-slate-100 text-gov-primary border-gov-border",
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
    <div className="bg-gov-bg min-h-screen py-10 sm:py-14 text-gov-text-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Page Header */}
        <div className="bg-gov-primary-dark text-white rounded-lg p-6 sm:p-8 border border-gov-border shadow-sm space-y-3 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
            <div className="space-y-1.5">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-white/10 text-slate-200 text-xs font-bold border border-white/20">
                <Sparkles className="w-3.5 h-3.5 text-white" />
                <span>AI Recommendation Engine • Problem #PR-2026-8942</span>
              </div>
              <h1 className="text-xl sm:text-3xl font-extrabold tracking-tight text-white">
                Smart Collaboration Matching
              </h1>
              <p className="text-slate-300 text-sm sm:text-base font-normal">
                Finding the right expertise and resources for this problem.
              </p>
            </div>

            {/* Prototype Indicator Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-lg bg-white/15 border border-white/20 text-xs text-white font-semibold shrink-0 shadow-sm">
              <Info className="w-4 h-4 text-white shrink-0" />
              <span>SIH Prototype Match Scores</span>
            </div>
          </div>
        </div>

        {/* Selected Problem Context Summary Bar */}
        <div className="bg-white rounded-lg p-4 sm:p-5 border border-gov-border shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded bg-slate-100 text-gov-primary flex items-center justify-center font-bold text-xs shrink-0 border border-gov-border">
              PR-8942
            </div>
            <div>
              <span className="text-[10px] font-bold text-gov-primary uppercase tracking-wide">Target Issue</span>
              <h3 className="font-extrabold text-gov-text-primary text-sm sm:text-base leading-snug">
                {recommendedTeam.problemTitle}
              </h3>
            </div>
          </div>
          <div className="flex items-center space-x-3 text-xs text-gov-text-secondary font-semibold self-end md:self-center">
            <span className="px-2.5 py-1 rounded bg-slate-100 text-gov-text-primary border border-gov-border">Water & Sanitation</span>
            <span>|</span>
            <span className="text-gov-text-primary">Coimbatore, TN</span>
          </div>
        </div>

        {/* SECTION 1: RECOMMENDED UNIVERSITIES */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-gov-border pb-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded bg-gov-primary text-white flex items-center justify-center shadow-sm">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-extrabold text-gov-text-primary tracking-tight">
                  1. RECOMMENDED UNIVERSITIES
                </h2>
                <p className="text-xs text-gov-text-secondary font-medium">
                  Academic R&D labs and departments with direct domain alignment.
                </p>
              </div>
            </div>
            <span className="text-xs font-bold text-gov-text-secondary hidden sm:inline">3 Matched Institutions</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendedUniversities.map((uni) => (
              <div 
                key={uni.id}
                className="bg-white rounded-lg border border-gov-border shadow-sm p-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className="text-[11px] font-semibold text-gov-text-secondary">
                      {uni.location}
                    </span>
                    {/* Visual Match Badge */}
                    <div className="flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-slate-100 border border-gov-border">
                      <span className="w-2 h-2 rounded-full bg-gov-primary"></span>
                      <span className="text-xs font-extrabold text-gov-primary">
                        {uni.matchPercentage}% Match
                      </span>
                    </div>
                  </div>

                  <h3 className="font-extrabold text-gov-text-primary text-base leading-tight mb-2">
                    {uni.name}
                  </h3>

                  {/* Department */}
                  <div className="mb-4">
                    <span className="text-[10px] font-bold text-gov-text-secondary block mb-1 uppercase tracking-wider">
                      Department
                    </span>
                    <p className="text-xs font-semibold text-gov-text-primary bg-gov-bg p-2.5 rounded-lg border border-gov-border leading-snug">
                      {uni.department}
                    </p>
                  </div>

                  {/* Expertise */}
                  <div className="mb-4">
                    <span className="text-[10px] font-bold text-gov-text-secondary block mb-1 uppercase tracking-wider">
                      Core R&D Expertise
                    </span>
                    <p className="text-xs text-gov-text-secondary leading-relaxed">
                      {uni.expertise}
                    </p>
                  </div>

                  {/* Why it matches (Reasons list) */}
                  <div className="pt-3 border-t border-gov-border space-y-2">
                    <span className="text-[11px] font-extrabold text-gov-text-primary block uppercase tracking-wider">
                      Why It Matches:
                    </span>
                    {uni.reasons.map((reason, idx) => (
                      <div key={idx} className="flex items-start text-xs text-gov-text-secondary leading-snug">
                        <span className="text-gov-success font-bold mr-1.5 shrink-0">✓</span>
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
          <div className="flex items-center justify-between border-b border-gov-border pb-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded bg-gov-primary text-white flex items-center justify-center shadow-sm">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-extrabold text-gov-text-primary tracking-tight">
                  2. RECOMMENDED INDUSTRY / STARTUP PARTNERS
                </h2>
                <p className="text-xs text-gov-text-secondary font-medium">
                  Corporates, hardware startups, and CSR foundations offering grants and tech stacks.
                </p>
              </div>
            </div>
            <span className="text-xs font-bold text-gov-text-secondary hidden sm:inline">3 Matched Partners</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendedPartners.map((partner) => (
              <div 
                key={partner.id}
                className="bg-white rounded-lg border border-gov-border shadow-sm p-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className="text-[9px] font-extrabold px-2 py-0.5 rounded bg-slate-100 text-gov-text-primary border border-gov-border uppercase">
                      {partner.type}
                    </span>
                    {/* Visual Match Badge */}
                    <div className="flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-slate-100 border border-gov-border">
                      <span className="w-2 h-2 rounded-full bg-gov-success"></span>
                      <span className="text-xs font-extrabold text-gov-primary">
                        {partner.matchPercentage}% Match
                      </span>
                    </div>
                  </div>

                  <h3 className="font-extrabold text-gov-text-primary text-base leading-tight mb-2">
                    {partner.name}
                  </h3>

                  <p className="text-xs text-gov-text-secondary leading-relaxed mb-4">
                    {partner.description}
                  </p>

                  {/* Expertise Tags */}
                  <div className="mb-4">
                    <span className="text-[10px] font-bold text-gov-text-secondary uppercase tracking-wider block mb-2">
                      Expertise & Resources
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {partner.expertise.map((exp, i) => (
                        <span key={i} className="text-[11px] font-bold px-2 py-0.5 rounded bg-gov-bg text-gov-text-primary border border-gov-border">
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Rationale list */}
                  <div className="pt-3 border-t border-gov-border space-y-2">
                    <span className="text-[11px] font-extrabold text-gov-text-primary block uppercase tracking-wider">
                      Partnership Rationale:
                    </span>
                    {partner.reasons.map((reason, idx) => (
                      <div key={idx} className="flex items-start text-xs text-gov-text-secondary leading-snug">
                        <span className="text-gov-success font-bold mr-1.5 shrink-0">✓</span>
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
          <div className="flex items-center space-x-3 border-b border-gov-border pb-3">
            <div className="w-10 h-10 rounded bg-gov-primary text-white flex items-center justify-center shadow-sm">
              <UserCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-extrabold text-gov-text-primary tracking-tight">
                3. RECOMMENDED TEAM
              </h2>
              <p className="text-xs text-gov-text-secondary font-medium">
                Synthesized student innovation team, faculty mentor, and skill matrix.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gov-border shadow-sm p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Faculty Mentor */}
            <div className="space-y-3 p-5 rounded-lg bg-gov-bg border border-gov-border">
              <div className="flex items-center space-x-2 text-gov-primary font-extrabold text-xs uppercase tracking-wider">
                <GraduationCap className="w-4 h-4" />
                <span>Faculty Mentor</span>
              </div>
              <h3 className="font-extrabold text-gov-text-primary text-base">
                {recommendedTeam.facultyMentor.name}
              </h3>
              <p className="text-xs font-semibold text-gov-text-primary">
                {recommendedTeam.facultyMentor.title}
              </p>
              <p className="text-xs text-gov-text-secondary">
                {recommendedTeam.facultyMentor.institution}
              </p>
              <p className="text-xs text-gov-text-secondary pt-2 border-t border-gov-border italic">
                "{recommendedTeam.facultyMentor.experience}"
              </p>
            </div>

            {/* Student Team */}
            <div className="space-y-3 p-5 rounded-lg bg-gov-bg border border-gov-border">
              <div className="flex items-center space-x-2 text-gov-primary font-extrabold text-xs uppercase tracking-wider">
                <UserCheck className="w-4 h-4" />
                <span>Student Innovation Team</span>
              </div>
              <h3 className="font-extrabold text-gov-text-primary text-base">
                {recommendedTeam.studentTeam.name}
              </h3>
              <p className="text-xs font-semibold text-gov-primary">
                {recommendedTeam.studentTeam.degree}
              </p>
              <p className="text-xs text-gov-text-primary font-semibold">
                Team Lead: <strong>{recommendedTeam.studentTeam.lead}</strong>
              </p>
              <p className="text-xs text-gov-text-secondary pt-2 border-t border-gov-border">
                Size: {recommendedTeam.studentTeam.membersCount} (Selected via AI Skill Match)
              </p>
            </div>

            {/* Required Skills Matrix */}
            <div className="space-y-3 p-5 rounded-lg bg-gov-bg border border-gov-border">
              <div className="flex items-center space-x-2 text-gov-primary font-extrabold text-xs uppercase tracking-wider">
                <Wrench className="w-4 h-4" />
                <span>Required Skills Matrix</span>
              </div>
              <div className="space-y-2 pt-1">
                {recommendedTeam.requiredSkills.map((sk, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-gov-text-primary">{sk.name}</span>
                    <span className="px-2 py-0.5 rounded bg-slate-200 text-gov-text-primary font-bold text-[10px] border border-gov-border">
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
          <div className="bg-gov-primary-dark text-white rounded-lg p-6 sm:p-8 border border-gov-border shadow-sm space-y-6">
            
            <div className="text-center sm:text-left space-y-1">
              <span className="text-xs font-extrabold text-emerald-400 uppercase tracking-widest bg-white/10 px-3 py-1 rounded border border-white/15">
                Synthesized Synergy
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white mt-2">
                Recommended Collaboration
              </h2>
              <p className="text-slate-355 text-xs sm:text-sm">
                Combining top academic expertise, dedicated student innovators, and corporate CSR capital.
              </p>
            </div>

            {/* Visual Synergy Flow: University + Student Team + Industry Partner */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-slate-200">
              
              <div className="p-4 rounded-lg bg-white/10 border border-white/15 text-center space-y-1">
                <span className="text-[10px] font-bold text-slate-300 uppercase">1. University</span>
                <p className="font-extrabold text-sm text-white">Example University</p>
                <p className="text-[11px] text-slate-400">Water Resources & Civil Lab</p>
              </div>

              <div className="p-4 rounded-lg bg-white/10 border border-white/15 text-center space-y-1">
                <span className="text-[10px] font-bold text-slate-300 uppercase">2. Student Team</span>
                <p className="font-extrabold text-sm text-white">Team HydroShield</p>
                <p className="text-[11px] text-slate-400">4th Year B.Tech (5 Members)</p>
              </div>

              <div className="p-4 rounded-lg bg-white/10 border border-white/15 text-center space-y-1">
                <span className="text-[10px] font-bold text-slate-300 uppercase">3. Industry Partner</span>
                <p className="font-extrabold text-sm text-white">WaterTech Solutions</p>
                <p className="text-[11px] text-slate-400">₹4.5L Grant & Hardware Tech</p>
              </div>

            </div>

            {/* Action Button: Create Project */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Clicking 'Create Project' initializes the 8-stage project execution tracker</span>
              </div>

              <button
                onClick={handleCreateProject}
                className="w-full sm:w-auto px-6 py-3 bg-gov-success hover:bg-emerald-800 text-white font-extrabold text-sm rounded-lg shadow-sm border border-gov-success transition-colors cursor-pointer flex items-center justify-center space-x-2"
              >
                <span>Create Project</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
