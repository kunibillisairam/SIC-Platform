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
  CheckCircle2, 
  ChevronRight,
  Layers,
  Zap,
  Lightbulb,
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
      accent: "bg-blue-500",
      badgeColor: "bg-blue-100 text-blue-800"
    },
    {
      num: "02",
      title: "Understand",
      subtitle: "AI Analysis",
      desc: "AI extracts key context, sector tags, root causes, and technical requirements.",
      icon: BrainCircuit,
      accent: "bg-indigo-500",
      badgeColor: "bg-indigo-100 text-indigo-800"
    },
    {
      num: "03",
      title: "Prioritize",
      subtitle: "Smart Clustering",
      desc: "Detects duplicates across regions, calculates urgency score, and ranks priority.",
      icon: Target,
      accent: "bg-amber-500",
      badgeColor: "bg-amber-100 text-amber-800"
    },
    {
      num: "04",
      title: "Match",
      subtitle: "Resource Connect",
      desc: "Matches relevant university R&D, student teams, faculty, and industry CSR partners.",
      icon: GitMerge,
      accent: "bg-teal-500",
      badgeColor: "bg-teal-100 text-teal-800"
    },
    {
      num: "05",
      title: "Develop",
      subtitle: "Lifecycle R&D",
      desc: "Tracks execution from validation and prototype development to field pilot testing.",
      icon: Layers,
      accent: "bg-emerald-500",
      badgeColor: "bg-emerald-100 text-emerald-800"
    },
    {
      num: "06",
      title: "Impact",
      subtitle: "Measurable ROI",
      desc: "Deploys solution into community and measures real social and economic impact.",
      icon: TrendingUp,
      accent: "bg-purple-500",
      badgeColor: "bg-purple-100 text-purple-800"
    }
  ];

  // 4 Stakeholder Cards
  const stakeholders = [
    {
      title: "Citizens & Communities",
      role: "Problem Identifiers",
      desc: "Voice ground-level challenges in water, agriculture, healthcare, and infrastructure. Track progress transparently.",
      icon: Users,
      color: "from-blue-600 to-blue-700",
      badge: "Grassroots Level",
      highlights: ["Simple geotagged reporting", "Real-time updates", "Community verification"]
    },
    {
      title: "Universities & Research",
      role: "Solution Architects",
      desc: "Student innovation teams and faculty convert real community issues into final-year projects and patentable R&D.",
      icon: Lightbulb,
      color: "from-indigo-600 to-indigo-700",
      badge: "Academic R&D",
      highlights: ["Student project matching", "Faculty mentorship", "Patentable innovations"]
    },
    {
      title: "Industry & CSR Partners",
      role: "Resource Providers",
      desc: "Corporates, startups, and CSR funds invest financial capital, technology stack, and commercialization mentoring.",
      icon: Building2,
      color: "from-emerald-600 to-teal-700",
      badge: "Capital & Tech",
      highlights: ["CSR fund deployment", "Tech stack grants", "Commercial scaling"]
    },
    {
      title: "Government & Admin",
      role: "Policy & Enablers",
      desc: "District collectors and ministries gain aggregated heatmaps, eliminate duplicated budgets, and scale proven pilots.",
      icon: Landmark,
      color: "from-slate-700 to-slate-900",
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
      badge: "Core AI Engine",
      badgeBg: "bg-blue-100 text-blue-700",
      borderColor: "border-blue-200"
    },
    {
      title: "Smart Matching Engine",
      tagline: "Precision Resource Allocation",
      desc: "Multi-parameter matchmaker pairs problem requirements with relevant university R&D labs, faculty expertise, and CSR criteria.",
      icon: GitMerge,
      badge: "Matchmaking Algorithm",
      badgeBg: "bg-teal-100 text-teal-700",
      borderColor: "border-teal-200"
    },
    {
      title: "Project Lifecycle Pipeline",
      tagline: "8-Stage Execution Tracking",
      desc: "Structured tracking from initial Problem post to Validation, Team Formation, Proposal, Prototype, Pilot, Deployment, and Impact.",
      icon: Layers,
      badge: "Lifecycle Tracking",
      badgeBg: "bg-amber-100 text-amber-700",
      borderColor: "border-amber-200"
    },
    {
      title: "Government Impact Analytics",
      tagline: "Real-Time Governance ROI",
      desc: "Interactive visual dashboards displaying resolved challenges, funds deployed, geographical coverage, and social impact metrics.",
      icon: TrendingUp,
      badge: "Executive Dashboard",
      badgeBg: "bg-emerald-100 text-emerald-700",
      borderColor: "border-emerald-200"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-800">
        
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            
            {/* Team & Problem Statement Badges */}
            <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-1.5 px-4 rounded-full bg-slate-800/90 border border-slate-700/80 shadow-inner">
              <span className="inline-flex items-center space-x-1.5 text-xs font-extrabold px-2.5 py-1 rounded-full bg-blue-600 text-white tracking-wider uppercase">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>SIH26043</span>
              </span>
              <span className="text-slate-400 text-xs font-semibold">|</span>
              <span className="text-slate-200 text-xs font-bold tracking-wide">
                TEAM THE OUTLIERS
              </span>
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span className="hidden sm:inline text-xs text-emerald-400 font-semibold">
                Internal Hackathon Prototype
              </span>
            </div>

            {/* Tagline / Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
              "From Community Problems to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-emerald-400">
                Real-World Solutions
              </span>"
            </h1>

            {/* Short Description */}
            <p className="text-slate-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-3xl mx-auto">
              An intelligent collaboration platform connecting societal problems with universities, industry and government to turn challenges into measurable impact.
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setActivePage('report')}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-7 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-base rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all transform hover:-translate-y-0.5 border border-blue-400/30"
              >
                <FilePlus2 className="w-5 h-5" />
                <span>Report a Problem</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <button
                onClick={() => setActivePage('explore')}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-7 py-3.5 bg-slate-800/90 hover:bg-slate-700 text-slate-100 font-bold text-base rounded-xl border border-slate-700 shadow-md transition-all hover:border-slate-500"
              >
                <Search className="w-5 h-5 text-blue-400" />
                <span>Explore Solutions</span>
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-left">
              <div className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-800">
                <p className="text-xs text-slate-400 uppercase font-semibold tracking-wider">Categorization</p>
                <p className="text-lg font-bold text-blue-400 mt-0.5">Automated AI</p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-800">
                <p className="text-xs text-slate-400 uppercase font-semibold tracking-wider">Duplicate Check</p>
                <p className="text-lg font-bold text-indigo-400 mt-0.5">Clustering Engine</p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-800">
                <p className="text-xs text-slate-400 uppercase font-semibold tracking-wider">Smart Matching</p>
                <p className="text-lg font-bold text-teal-400 mt-0.5">Multi-Stakeholder</p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-800">
                <p className="text-xs text-slate-400 uppercase font-semibold tracking-wider">Lifecycle</p>
                <p className="text-lg font-bold text-emerald-400 mt-0.5">8-Stage Tracking</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6-STEP VISUAL WORKFLOW SECTION */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider border border-blue-100">
              <Zap className="w-3.5 h-3.5 text-blue-600" />
              End-to-End Execution Flow
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              How Problems Become Real Impact
            </h2>
            <p className="text-slate-600 text-base mt-2">
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
                  className="bg-slate-50 border border-slate-200 rounded-xl p-5 hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between relative group"
                >
                  {/* Step Header */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-xs font-extrabold px-2.5 py-0.5 rounded-full ${step.badgeColor}`}>
                        Step {step.num}
                      </span>
                      <div className={`w-8 h-8 rounded-lg ${step.accent} text-white flex items-center justify-center shadow-md`}>
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    <h3 className="font-extrabold text-slate-900 text-lg group-hover:text-blue-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 mb-2">
                      {step.subtitle}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Arrow Indicator for Desktop */}
                  {idx < workflowSteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                      <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center text-xs shadow">
                        <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Flow Direct Action Banner */}
          <div className="mt-10 p-5 rounded-2xl bg-gradient-to-r from-blue-900 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-400/30">
                <BrainCircuit className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm sm:text-base">Want to test the AI Analysis engine live?</h4>
                <p className="text-xs text-slate-300">Submit a sample community problem and see real-time AI categorization & matching.</p>
              </div>
            </div>
            <button
              onClick={() => setActivePage('report')}
              className="shrink-0 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold rounded-lg transition-colors flex items-center space-x-1.5 shadow"
            >
              <span>Test AI Workflow</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* STAKEHOLDER SECTION: "One Problem. The Right People. A Real Solution." */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-200">
              <Users className="w-3.5 h-3.5 text-emerald-700" />
              Multi-Stakeholder Collaboration
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              One Problem. The Right People. A Real Solution.
            </h2>
            <p className="text-slate-600 text-base mt-2">
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
                  className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center shadow-md`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="font-extrabold text-slate-900 text-lg">
                      {item.title}
                    </h3>
                    <p className="text-xs font-bold text-blue-600 mb-3">
                      {item.role}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {item.desc}
                    </p>
                  </div>

                  {/* Highlights list */}
                  <div className="pt-4 border-t border-slate-100 space-y-2">
                    {item.highlights.map((h, i) => (
                      <div key={i} className="flex items-center text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mr-2 shrink-0" />
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
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-800 bg-indigo-100 px-3 py-1 rounded-full uppercase tracking-wider border border-indigo-200">
              <Sparkles className="w-3.5 h-3.5 text-indigo-700" />
              Core System Innovations
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              Built for Scale, Accuracy & Governance
            </h2>
            <p className="text-slate-600 text-base mt-2">
              Explore the four core engines that power the SIH26043 societal innovation ecosystem.
            </p>
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div 
                  key={cap.title}
                  className={`bg-slate-50 border ${cap.borderColor} rounded-2xl p-7 hover:bg-white hover:shadow-xl transition-all duration-300 group`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-md group-hover:bg-blue-600 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full ${cap.badgeBg}`}>
                          {cap.badge}
                        </span>
                      </div>
                      <h3 className="font-extrabold text-slate-900 text-xl group-hover:text-blue-600 transition-colors">
                        {cap.title}
                      </h3>
                      <p className="text-xs font-semibold text-slate-500">
                        {cap.tagline}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                        {cap.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation CTA to Modules */}
          <div className="mt-12 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-3">
              <button 
                onClick={() => setActivePage('report')}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg shadow transition-colors flex items-center space-x-2"
              >
                <span>AI Problem Intelligence</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setActivePage('matching')}
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg shadow transition-colors flex items-center space-x-2"
              >
                <span>Smart Matchmaker</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setActivePage('projects')}
                className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-lg shadow transition-colors flex items-center space-x-2"
              >
                <span>Lifecycle Pipeline</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setActivePage('dashboard')}
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg shadow transition-colors flex items-center space-x-2"
              >
                <span>Impact Dashboard</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* FINAL DEMO CALL TO ACTION */}
      <section className="py-16 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-400/30">
            SIH 2026 INTERNAL HACKATHON DEMO
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Ready to experience the end-to-end prototype?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Report a ground-level problem, observe instant AI analysis & matching, and track progress through to measurable governance impact.
          </p>
          <div className="pt-2 flex justify-center">
            <button
              onClick={() => setActivePage('report')}
              className="px-8 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-extrabold text-base rounded-xl shadow-lg border border-emerald-400/30 transition-all flex items-center space-x-2"
            >
              <FilePlus2 className="w-5 h-5" />
              <span>Start Interactive Demo</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
