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
  Check
} from 'lucide-react';

export default function Home({ setActivePage }) {

  // 6-Step Workflow Data
  const workflowSteps = [
    {
      num: "01",
      title: "Report",
      subtitle: "Citizen Submission",
      desc: "Citizens or communities report local issues with photos, location, and brief details.",
      icon: FilePlus2,
      accent: "bg-blue-505",
      badgeColor: "bg-slate-100 text-gov-text-primary"
    },
    {
      num: "02",
      title: "Understand",
      subtitle: "AI Analysis",
      desc: "AI extracts key context, sector tags, root causes, and technical requirements.",
      icon: BrainCircuit,
      accent: "bg-indigo-505",
      badgeColor: "bg-slate-100 text-gov-text-primary"
    },
    {
      num: "03",
      title: "Prioritize",
      subtitle: "Smart Clustering",
      desc: "Detects duplicates across regions, calculates urgency score, and ranks priority.",
      icon: Target,
      accent: "bg-amber-505",
      badgeColor: "bg-slate-100 text-gov-text-primary"
    },
    {
      num: "04",
      title: "Match",
      subtitle: "Resource Connect",
      desc: "Matches relevant university R&D, student teams, faculty, and industry CSR partners.",
      icon: GitMerge,
      accent: "bg-teal-505",
      badgeColor: "bg-slate-100 text-gov-text-primary"
    },
    {
      num: "05",
      title: "Develop",
      subtitle: "Lifecycle R&D",
      desc: "Tracks execution from validation and prototype development to field pilot testing.",
      icon: Layers,
      accent: "bg-emerald-505",
      badgeColor: "bg-slate-100 text-gov-text-primary"
    },
    {
      num: "06",
      title: "Impact",
      subtitle: "Measurable ROI",
      desc: "Deploys solution into community and measures real social and economic impact.",
      icon: TrendingUp,
      accent: "bg-purple-505",
      badgeColor: "bg-slate-100 text-gov-text-primary"
    }
  ];

  // 4 Stakeholder Cards
  const stakeholders = [
    {
      title: "Citizens & Communities",
      role: "Problem Identifiers",
      desc: "Voice ground-level challenges in water, agriculture, healthcare, and infrastructure. Track progress transparently.",
      icon: Users,
      badge: "Grassroots Level",
      highlights: ["Simple geotagged reporting", "Real-time updates", "Community verification"]
    },
    {
      title: "Universities & Research",
      role: "Solution Architects",
      desc: "Student innovation teams and faculty convert real community issues into final-year projects and patentable R&D.",
      icon: Landmark,
      badge: "Academic R&D",
      highlights: ["Student project matching", "Faculty mentorship", "Patentable innovations"]
    },
    {
      title: "Industry & CSR Partners",
      role: "Resource Providers",
      desc: "Corporates, startups, and CSR funds invest financial capital, technology stack, and commercialization mentoring.",
      icon: Building2,
      badge: "Capital & Tech",
      highlights: ["CSR fund deployment", "Tech stack grants", "Commercial scaling"]
    },
    {
      title: "Government & Admin",
      role: "Policy & Enablers",
      desc: "District collectors and ministries gain aggregated heatmaps, eliminate duplicated budgets, and scale proven pilots.",
      icon: Landmark,
      badge: "Policy & Scaling",
      highlights: ["District heatmaps", "Budget optimization", "Policy integration"]
    }
  ];

  // Platform Capabilities Data
  const capabilities = [
    {
      title: "AI Problem Intelligence",
      tagline: "Automated Context & Priority",
      desc: "NLP engine categorizes unstructured reports, identifies root causes, calculates urgency matrix, and flags duplicate issues.",
      icon: BrainCircuit,
      badge: "Core AI Engine"
    },
    {
      title: "Smart Matching Engine",
      tagline: "Precision Resource Allocation",
      desc: "Multi-parameter matchmaker pairs problem requirements with relevant university R&D labs, faculty expertise, and CSR criteria.",
      icon: GitMerge,
      badge: "Matchmaking Algorithm"
    },
    {
      title: "Project Lifecycle Pipeline",
      tagline: "8-Stage Execution Tracking",
      desc: "Structured tracking from initial Problem post to Validation, Team Formation, Proposal, Prototype, Pilot, Deployment, and Impact.",
      icon: Layers,
      badge: "Lifecycle Tracking"
    },
    {
      title: "Government Impact Analytics",
      tagline: "Real-Time Governance ROI",
      desc: "Interactive visual dashboards displaying resolved challenges, funds deployed, geographical coverage, and social impact metrics.",
      icon: TrendingUp,
      badge: "Executive Dashboard"
    }
  ];

  return (
    <div className="bg-gov-bg min-h-screen text-gov-text-primary">
      
      {/* HERO SECTION */}
      <section className="relative bg-gov-primary-dark text-white pt-16 pb-20 lg:pt-20 lg:pb-24 border-b border-gov-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            
            {/* Platform Badges */}
            <div className="inline-flex flex-wrap items-center justify-center gap-2 p-1 px-3.5 rounded-lg bg-white/10 border border-white/20">
              <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-white tracking-wider uppercase">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Societal Innovation</span>
              </span>
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-white/30"></span>
              <span className="hidden sm:inline text-xs text-slate-300 font-semibold">
                Interactive Platform
              </span>
            </div>

            {/* Tagline / Main Headline */}
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight text-white max-w-3xl mx-auto">
              From Community Problems to Real-World Solutions
            </h1>

            {/* Short Description */}
            <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed max-w-2xl mx-auto">
              An intelligent collaboration platform connecting societal problems with universities, industry, and government to turn challenges into measurable impact.
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setActivePage('report')}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 bg-gov-primary hover:bg-gov-primary-dark text-white font-bold text-sm rounded-lg shadow-sm border border-gov-primary transition-colors cursor-pointer"
              >
                <FilePlus2 className="w-4 h-4" />
                <span>Report a Problem</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <button
                onClick={() => setActivePage('explore')}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 bg-transparent hover:bg-white/10 text-white font-bold text-sm rounded-lg border border-slate-350 transition-colors cursor-pointer"
              >
                <Search className="w-4 h-4 text-slate-300" />
                <span>Explore Solutions</span>
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-left">
              <div className="p-3.5 rounded-lg bg-white/5 border border-white/10">
                <p className="text-[10px] text-slate-405 uppercase font-semibold tracking-wider">Categorization</p>
                <p className="text-base font-bold text-slate-200 mt-0.5">Automated AI</p>
              </div>
              <div className="p-3.5 rounded-lg bg-white/5 border border-white/10">
                <p className="text-[10px] text-slate-405 uppercase font-semibold tracking-wider">Duplicate Check</p>
                <p className="text-base font-bold text-slate-200 mt-0.5">Clustering Engine</p>
              </div>
              <div className="p-3.5 rounded-lg bg-white/5 border border-white/10">
                <p className="text-[10px] text-slate-405 uppercase font-semibold tracking-wider">Smart Matching</p>
                <p className="text-base font-bold text-slate-200 mt-0.5">Multi-Stakeholder</p>
              </div>
              <div className="p-3.5 rounded-lg bg-white/5 border border-white/10">
                <p className="text-[10px] text-slate-405 uppercase font-semibold tracking-wider">Lifecycle</p>
                <p className="text-base font-bold text-slate-200 mt-0.5">8-Stage Tracking</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6-STEP VISUAL WORKFLOW SECTION */}
      <section className="py-16 bg-white border-b border-gov-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-gov-primary bg-slate-100 px-3 py-1 rounded-md uppercase tracking-wider border border-gov-border">
              <Zap className="w-3.5 h-3.5 text-gov-primary" />
              End-to-End Execution Flow
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-gov-text-primary tracking-tight mt-3">
              How Problems Become Real Impact
            </h2>
            <p className="text-gov-text-secondary text-sm mt-2">
              A structured 6-step collaborative pipeline powered by AI intelligence and multi-institution matching.
            </p>
          </div>

          {/* Workflow Step Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 relative">
            {workflowSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div 
                  key={step.num}
                  className="bg-gov-bg border border-gov-border rounded-lg p-5 hover:border-gov-primary transition-all duration-200 flex flex-col justify-between relative group"
                >
                  {/* Step Header */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-slate-200 text-gov-text-primary">
                        Step {step.num}
                      </span>
                      <div className="w-8 h-8 rounded bg-gov-primary text-white flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    <h3 className="font-extrabold text-gov-text-primary text-base">
                      {step.title}
                    </h3>
                    <p className="text-[10px] font-bold text-gov-text-secondary mb-2">
                      {step.subtitle}
                    </p>
                    <p className="text-xs text-gov-text-secondary leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Arrow Indicator for Desktop */}
                  {idx < workflowSteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                      <div className="w-6 h-6 rounded-full bg-white border border-gov-border text-gov-text-secondary flex items-center justify-center text-xs shadow-sm">
                        <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Flow Direct Action Banner */}
          <div className="mt-10 p-5 rounded-lg bg-gov-primary-dark text-white flex flex-col sm:flex-row items-center justify-between gap-4 border border-gov-border">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0 border border-white/10">
                <BrainCircuit className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm sm:text-base">Want to test the AI Analysis engine live?</h4>
                <p className="text-xs text-slate-300">Submit a sample community problem and see real-time AI categorization & matching.</p>
              </div>
            </div>
            <button
              onClick={() => setActivePage('report')}
              className="shrink-0 px-4 py-2 bg-gov-success hover:bg-emerald-800 text-white text-xs font-bold rounded-lg transition-colors flex items-center space-x-1.5 shadow-sm cursor-pointer"
            >
              <span>Test AI Workflow</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* STAKEHOLDER SECTION: "One Problem. The Right People. A Real Solution." */}
      <section className="py-16 bg-gov-bg border-b border-gov-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-gov-success bg-white px-3 py-1 rounded-md uppercase tracking-wider border border-gov-border">
              <Users className="w-3.5 h-3.5 text-gov-success" />
              Multi-Stakeholder Collaboration
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-gov-text-primary tracking-tight mt-3">
              One Problem. The Right People. A Real Solution.
            </h2>
            <p className="text-gov-text-secondary text-sm mt-2">
              Empowering four distinct stakeholders to work together seamlessly without bureaucratic delays.
            </p>
          </div>

          {/* 4 Stakeholder Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stakeholders.map((item) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.title}
                  className="bg-white rounded-lg p-6 border border-gov-border shadow-sm flex flex-col justify-between"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gov-primary/10 text-gov-primary flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold px-2 py-1 rounded bg-slate-100 text-gov-text-secondary border border-gov-border">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="font-extrabold text-gov-text-primary text-base">
                      {item.title}
                    </h3>
                    <p className="text-xs font-bold text-gov-primary mb-3">
                      {item.role}
                    </p>
                    <p className="text-xs text-gov-text-secondary leading-relaxed mb-4">
                      {item.desc}
                    </p>
                  </div>

                  {/* Highlights list */}
                  <div className="pt-4 border-t border-slate-100 space-y-2">
                    {item.highlights.map((h, i) => (
                      <div key={i} className="flex items-center text-xs text-gov-text-primary font-medium">
                        <Check className="w-3.5 h-3.5 text-gov-success mr-2 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* PLATFORM CAPABILITIES SECTION */}
      <section className="py-16 bg-white border-b border-gov-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-gov-primary bg-slate-100 px-3 py-1 rounded-md uppercase tracking-wider border border-gov-border">
              <Sparkles className="w-3.5 h-3.5 text-gov-primary" />
              Core System Innovations
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-gov-text-primary tracking-tight mt-3">
              Built for Scale, Accuracy & Governance
            </h2>
            <p className="text-gov-text-secondary text-sm mt-2">
              Explore the four core engines that power the societal innovation ecosystem.
            </p>
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div 
                  key={cap.title}
                  className="bg-gov-bg border border-gov-border rounded-lg p-6 hover:bg-white transition-all duration-200 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-gov-primary text-white flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-1.5 flex-grow">
                      <div className="flex items-center">
                        <span className="text-[9px] font-extrabold px-2 py-0.5 rounded bg-slate-200 text-gov-text-primary border border-gov-border">
                          {cap.badge}
                        </span>
                      </div>
                      <h3 className="font-extrabold text-gov-text-primary text-base">
                        {cap.title}
                      </h3>
                      <p className="text-[10px] font-bold text-gov-text-secondary">
                        {cap.tagline}
                      </p>
                      <p className="text-xs text-gov-text-secondary leading-relaxed pt-1">
                        {cap.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation CTA to Modules */}
          <div className="mt-10 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-3">
              <button 
                onClick={() => setActivePage('report')}
                className="px-5 py-2.5 bg-gov-primary hover:bg-gov-primary-dark text-white text-xs font-bold rounded-lg shadow-sm transition-colors flex items-center space-x-1.5 cursor-pointer"
              >
                <span>AI Problem Intelligence</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setActivePage('matching')}
                className="px-5 py-2.5 bg-white border border-gov-primary text-gov-primary hover:bg-slate-50 text-xs font-bold rounded-lg shadow-sm transition-colors flex items-center space-x-1.5 cursor-pointer"
              >
                <span>Smart Matchmaker</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setActivePage('projects')}
                className="px-5 py-2.5 bg-white border border-gov-primary text-gov-primary hover:bg-slate-50 text-xs font-bold rounded-lg shadow-sm transition-colors flex items-center space-x-1.5 cursor-pointer"
              >
                <span>Lifecycle Pipeline</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setActivePage('dashboard')}
                className="px-5 py-2.5 bg-gov-success hover:bg-emerald-800 text-white text-xs font-bold rounded-lg shadow-sm transition-colors flex items-center space-x-1.5 cursor-pointer"
              >
                <span>Impact Dashboard</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* FINAL DEMO CALL TO ACTION */}
      <section className="py-16 bg-gov-primary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="px-3 py-1 rounded bg-white/10 text-slate-200 text-xs font-bold border border-white/15">
            SOCIETAL INNOVATION PLATFORM DEMO
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold max-w-xl mx-auto">
            Ready to experience the end-to-end prototype?
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Report a ground-level problem, observe instant AI analysis & matching, and track progress through to measurable governance impact.
          </p>
          <div className="pt-2 flex justify-center">
            <button
              onClick={() => setActivePage('report')}
              className="px-7 py-3.5 bg-gov-success hover:bg-emerald-800 text-white font-bold text-sm rounded-lg shadow-sm transition-colors flex items-center space-x-2 cursor-pointer"
            >
              <FilePlus2 className="w-4 h-4" />
              <span>Start Interactive Demo</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
