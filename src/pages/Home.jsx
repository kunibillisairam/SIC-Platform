import React from 'react';
import { 
  FilePlus2, 
  Search, 
  BrainCircuit, 
  Users, 
  Building2, 
  Landmark, 
  ArrowRight, 
  Sparkles, 
  Target, 
  GitMerge, 
  TrendingUp, 
  ShieldCheck, 
  ChevronRight,
  Layers,
  Zap,
  Check,
  BarChart3
} from 'lucide-react';

export default function Home({ setActivePage }) {

  // Statistics data
  const statistics = [
    { label: "Problems Reported", count: "1,248", desc: "Demo database" },
    { label: "Active Projects", count: "186", desc: "Prototype pipeline" },
    { label: "Universities", count: "27", desc: "Matched hubs" },
    { label: "Industry Partners", count: "42", desc: "CSR sponsors" }
  ];

  // 6-Step Workflow Data
  const workflowSteps = [
    { num: "01", title: "Report" },
    { num: "02", title: "Analyze" },
    { num: "03", title: "Prioritize" },
    { num: "04", title: "Match" },
    { num: "05", title: "Develop" },
    { num: "06", title: "Measure Impact" }
  ];

  // 4 Stakeholder Cards
  const stakeholders = [
    {
      title: "Citizens & Communities",
      desc: "Voice ground-level challenges in water, agriculture, healthcare, and infrastructure. Track progress transparently.",
      capabilities: ["Simple geotagged reporting", "Real-time updates", "Community verification"]
    },
    {
      title: "Universities & Research",
      desc: "Student innovation teams and faculty convert real community issues into final-year projects and patentable R&D.",
      capabilities: ["Student project matching", "Faculty mentorship", "Patentable innovations"]
    },
    {
      title: "Industry & CSR",
      desc: "Corporates, startups, and CSR funds invest financial capital, technology stack, and commercialization mentoring.",
      capabilities: ["CSR fund deployment", "Tech stack grants", "Commercial scaling"]
    },
    {
      title: "Government & Administration",
      desc: "District collectors and ministries gain aggregated heatmaps, eliminate duplicated budgets, and scale proven pilots.",
      capabilities: ["District heatmaps", "Budget optimization", "Policy integration"]
    }
  ];

  // Platform Capabilities Data
  const capabilities = [
    {
      title: "AI Problem Intelligence",
      desc: "NLP engine categorizes unstructured reports, identifies root causes, calculates urgency matrix, and flags duplicate issues.",
      icon: BrainCircuit,
      target: "analysis"
    },
    {
      title: "Smart Matching",
      desc: "Multi-parameter matchmaker pairs problem requirements with relevant university R&D labs, faculty expertise, and CSR criteria.",
      icon: GitMerge,
      target: "matching"
    },
    {
      title: "Project Lifecycle",
      desc: "Structured tracking from initial Problem post to Validation, Team Formation, Proposal, Prototype, Pilot, Deployment, and Impact.",
      icon: Layers,
      target: "projects"
    },
    {
      title: "Impact Analytics",
      desc: "Interactive visual dashboards displaying resolved challenges, funds deployed, geographical coverage, and social impact metrics.",
      icon: BarChart3,
      target: "dashboard"
    }
  ];

  return (
    <div className="bg-gov-bg min-h-screen text-gov-text-primary">
      
      {/* 1. PROFESSIONAL HERO */}
      <section className="bg-white border-b border-gov-border py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            
            {/* Small Label */}
            <p className="text-xs font-bold text-gov-primary tracking-wider uppercase">
              Societal Innovation Collaboration Platform
            </p>

            {/* Main Heading */}
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight text-gov-text-primary">
              Connecting Community Problems with the Right Resources
            </h1>

            {/* Supporting Text */}
            <p className="text-gov-text-secondary text-sm sm:text-base leading-relaxed">
              Identify societal challenges, connect them with universities and industry partners, and track solutions from problem identification to measurable impact.
            </p>

            {/* Buttons */}
            <div className="pt-4 flex flex-wrap gap-3">
              <button
                onClick={() => {
                  setActivePage('report');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-5 py-2.5 bg-gov-primary hover:bg-gov-primary-dark text-white font-bold text-sm rounded-lg shadow-sm border border-gov-primary transition-colors cursor-pointer"
              >
                Report a Problem
              </button>

              <button
                onClick={() => {
                  setActivePage('explore');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-5 py-2.5 bg-white border border-gov-border text-gov-text-primary hover:bg-slate-50 font-bold text-sm rounded-lg shadow-sm transition-colors cursor-pointer"
              >
                Explore Problems
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 2. PLATFORM STATISTICS */}
      <section className="bg-gov-bg border-b border-gov-border py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {statistics.map((stat, idx) => (
              <div 
                key={idx}
                className="bg-white border border-gov-border rounded-lg p-4 shadow-sm flex flex-col justify-center"
              >
                <span className="text-[10px] font-bold text-gov-text-secondary uppercase tracking-wider block">
                  {stat.label}
                </span>
                <span className="text-xl sm:text-2xl font-black text-gov-primary block mt-0.5">
                  {stat.count}
                </span>
                <span className="text-[9px] text-gov-text-secondary font-semibold italic block mt-0.5">
                  ({stat.desc})
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section className="py-16 bg-white border-b border-gov-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center sm:text-left">
            <h2 className="text-lg sm:text-xl font-extrabold text-gov-text-primary tracking-tight">
              How the Platform Works
            </h2>
            <p className="text-gov-text-secondary text-xs mt-1">
              Standardized flow connecting community problems to validated solutions.
            </p>
          </div>

          {/* Simple 6-step horizontal process */}
          <div className="overflow-x-auto pb-4">
            <div className="flex items-center justify-between min-w-[800px] px-2">
              {workflowSteps.map((step, idx) => (
                <React.Fragment key={step.num}>
                  {/* Step Node */}
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-8 h-8 rounded-full border-2 border-gov-primary bg-white text-gov-primary font-bold text-xs flex items-center justify-center shadow-sm">
                      {step.num}
                    </div>
                    <span className="text-xs font-bold text-gov-text-primary mt-2">
                      {step.title}
                    </span>
                  </div>

                  {/* Thin Connector */}
                  {idx < workflowSteps.length - 1 && (
                    <div className="h-0.5 flex-1 bg-gov-border mx-2"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. STAKEHOLDER COLLABORATION */}
      <section className="py-16 bg-gov-bg border-b border-gov-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center sm:text-left">
            <h2 className="text-lg sm:text-xl font-extrabold text-gov-text-primary tracking-tight">
              Connecting the Right Stakeholders
            </h2>
            <p className="text-gov-text-secondary text-xs mt-1">
              Fostering active collaboration across sectors to drive engineering and financial resources.
            </p>
          </div>

          {/* Stakeholder cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stakeholders.map((item) => (
              <div 
                key={item.title}
                className="bg-white rounded-lg p-5 border border-gov-border shadow-sm flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-extrabold text-gov-text-primary text-base mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gov-text-secondary leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2">
                  <span className="text-[10px] font-bold text-gov-text-secondary uppercase tracking-wider block">Key Capabilities:</span>
                  {item.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-center text-xs text-gov-text-primary font-medium">
                      <Check className="w-3.5 h-3.5 text-gov-success mr-2 shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. CORE PLATFORM CAPABILITIES */}
      <section className="py-16 bg-white border-b border-gov-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center sm:text-left">
            <h2 className="text-lg sm:text-xl font-extrabold text-gov-text-primary tracking-tight">
              Core Platform Capabilities
            </h2>
            <p className="text-gov-text-secondary text-xs mt-1">
              Engineered modules powering decision-support, similarity checks, and tracking.
            </p>
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div 
                  key={idx}
                  className="bg-gov-bg border border-gov-border rounded-lg p-6 hover:bg-slate-50/50 transition-colors flex items-start space-x-4"
                >
                  <div className="w-10 h-10 rounded bg-gov-primary text-white flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1.5 flex-grow">
                    <h3 className="font-extrabold text-gov-text-primary text-base">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-gov-text-secondary leading-relaxed">
                      {cap.desc}
                    </p>
                    <button
                      onClick={() => {
                        setActivePage(cap.target);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="inline-flex items-center text-xs text-gov-primary font-bold hover:underline gap-1 pt-1 cursor-pointer"
                    >
                      <span>Learn more</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. DEMO CTA */}
      <section className="py-16 bg-gov-primary-dark text-white border-b border-gov-border">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">
            See how a community problem becomes a project
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Interact with our simulated end-to-end prototype workflow by running our guided interactive demonstration.
          </p>
          <div className="pt-2 flex justify-center">
            <button
              onClick={() => {
                setActivePage('report');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3 bg-gov-success hover:bg-emerald-805 text-white font-bold text-sm rounded-lg shadow-sm transition-colors flex items-center space-x-2 cursor-pointer border border-gov-success"
            >
              <span>Run Interactive Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
