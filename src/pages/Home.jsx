import React from 'react';
import { 
  FilePlus2, 
  Search, 
  BrainCircuit, 
  Users, 
  Building2, 
  Landmark, 
  ArrowRight, 
  Target, 
  GitMerge, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle2, 
  Layers,
  Lightbulb
} from 'lucide-react';

export default function Home({ setActivePage }) {

  const workflowSteps = [
    {
      num: "01",
      title: "Report",
      subtitle: "Citizen Submission",
      desc: "Citizens or communities report local issues with location and factual details.",
      icon: FilePlus2,
    },
    {
      num: "02",
      title: "Understand",
      subtitle: "AI Analysis",
      desc: "AI extracts key context, sector tags, root causes, and technical requirements.",
      icon: BrainCircuit,
    },
    {
      num: "03",
      title: "Prioritize",
      subtitle: "Smart Clustering",
      desc: "Detects duplicates across regions, calculates urgency score, and ranks priority.",
      icon: Target,
    },
    {
      num: "04",
      title: "Match",
      subtitle: "Resource Connect",
      desc: "Matches relevant university R&D, student teams, faculty, and industry CSR partners.",
      icon: GitMerge,
    },
    {
      num: "05",
      title: "Develop",
      subtitle: "Lifecycle R&D",
      desc: "Tracks execution from validation and prototype development to field pilot testing.",
      icon: Layers,
    },
    {
      num: "06",
      title: "Impact",
      subtitle: "Measurable ROI",
      desc: "Deploys solution into community and measures real social and economic impact.",
      icon: TrendingUp,
    }
  ];

  const stakeholders = [
    {
      title: "Citizens & Communities",
      role: "Problem Identifiers",
      desc: "Voice ground-level challenges in water, agriculture, healthcare, and infrastructure. Track progress transparently.",
      icon: Users,
      badge: "Grassroots Level",
      highlights: ["Geotagged problem reporting", "Real-time status updates", "Community verification"]
    },
    {
      title: "Universities & Research",
      role: "Solution Architects",
      desc: "Student innovation teams and faculty convert real community issues into final-year projects and patentable R&D.",
      icon: Lightbulb,
      badge: "Academic R&D",
      highlights: ["Student project matching", "Faculty R&D mentorship", "Patentable innovations"]
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

  const capabilities = [
    {
      title: "AI Problem Intelligence",
      tagline: "Automated Context & Priority",
      desc: "NLP engine categorizes unstructured reports, identifies root causes, calculates urgency matrix, and flags duplicate issues.",
      icon: BrainCircuit,
      badge: "Core AI Engine",
    },
    {
      title: "Smart Matching Engine",
      tagline: "Precision Resource Allocation",
      desc: "Multi-parameter matchmaker pairs problem requirements with relevant university R&D labs, faculty expertise, and CSR criteria.",
      icon: GitMerge,
      badge: "Matchmaking Algorithm",
    },
    {
      title: "Project Lifecycle Pipeline",
      tagline: "8-Stage Execution Tracking",
      desc: "Structured tracking from initial Problem post to Validation, Team Formation, Proposal, Prototype, Pilot, Deployment, and Impact.",
      icon: Layers,
      badge: "Lifecycle Tracking",
    },
    {
      title: "Government Impact Analytics",
      tagline: "Real-Time Governance ROI",
      desc: "Interactive visual dashboards displaying resolved challenges, funds deployed, geographical coverage, and social impact metrics.",
      icon: TrendingUp,
      badge: "Executive Dashboard",
    }
  ];

  return (
    <div className="bg-[#FAF7F2] min-h-screen text-[#17202A]">
      
      {/* HERO SECTION */}
      <section className="bg-[#0B2F50] text-white pt-10 pb-16 border-b border-[#164A7B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-5 text-center sm:text-left">
            
            {/* Badges */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#164A7B] text-slate-100 text-xs font-bold border border-white/10">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>SIH26043 • TEAM THE OUTLIERS</span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
              From Community Problems to Real-World Solutions
            </h1>

            {/* Subtitle */}
            <p className="text-slate-200 text-sm sm:text-base font-normal leading-relaxed max-w-3xl">
              An intelligent collaboration platform connecting societal problems with universities, industry and government to turn challenges into measurable impact.
            </p>

            {/* Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => setActivePage('report')}
                className="w-full sm:w-auto px-6 py-2.5 bg-[#16865B] hover:bg-[#116846] text-white font-bold text-xs rounded-md shadow-sm transition-colors border border-white/20 flex items-center justify-center space-x-2"
              >
                <FilePlus2 className="w-4 h-4" />
                <span>Report a Problem</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setActivePage('explore')}
                className="w-full sm:w-auto px-6 py-2.5 bg-[#164A7B] hover:bg-[#0B2F50] text-white font-bold text-xs rounded-md shadow-sm transition-colors border border-white/20 flex items-center justify-center space-x-2"
              >
                <Search className="w-4 h-4" />
                <span>Explore Solutions</span>
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="p-3 rounded-md bg-[#164A7B]/40 border border-[#164A7B]">
                <p className="text-[10px] text-slate-300 uppercase font-bold">Categorization</p>
                <p className="text-sm font-bold text-white mt-0.5">Automated AI</p>
              </div>
              <div className="p-3 rounded-md bg-[#164A7B]/40 border border-[#164A7B]">
                <p className="text-[10px] text-slate-300 uppercase font-bold">Duplicate Check</p>
                <p className="text-sm font-bold text-white mt-0.5">Clustering Engine</p>
              </div>
              <div className="p-3 rounded-md bg-[#164A7B]/40 border border-[#164A7B]">
                <p className="text-[10px] text-slate-300 uppercase font-bold">Smart Matching</p>
                <p className="text-sm font-bold text-white mt-0.5">Multi-Stakeholder</p>
              </div>
              <div className="p-3 rounded-md bg-[#164A7B]/40 border border-[#164A7B]">
                <p className="text-[10px] text-slate-300 uppercase font-bold">Lifecycle</p>
                <p className="text-sm font-bold text-white mt-0.5">8-Stage Tracking</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6-STEP VISUAL WORKFLOW SECTION */}
      <section className="py-12 bg-white border-b border-[#E5DFC5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-8">
            <span className="text-xs font-bold text-[#164A7B] uppercase tracking-wider block mb-1">
              End-to-End Workflow
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#17202A] tracking-tight">
              How Problems Become Real Impact
            </h2>
            <p className="text-[#5B6875] text-xs sm:text-sm mt-1">
              A structured 6-step collaborative pipeline powered by AI intelligence and multi-institution matching.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3">
            {workflowSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div 
                  key={step.num}
                  className="bg-[#FAF7F2] border border-[#E5DFC5] rounded-md p-4 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#164A7B] text-white">
                        Step {step.num}
                      </span>
                      <Icon className="w-4 h-4 text-[#164A7B]" />
                    </div>
                    <h3 className="font-extrabold text-[#17202A] text-sm">
                      {step.title}
                    </h3>
                    <p className="text-[11px] font-bold text-[#5B6875] mb-1">
                      {step.subtitle}
                    </p>
                    <p className="text-xs text-[#5B6875] leading-normal">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* STAKEHOLDER SECTION */}
      <section className="py-12 bg-[#FAF7F2] border-b border-[#E5DFC5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-8">
            <span className="text-xs font-bold text-[#164A7B] uppercase tracking-wider block mb-1">
              Multi-Stakeholder Collaboration
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#17202A] tracking-tight">
              One Problem. The Right People. A Real Solution.
            </h2>
            <p className="text-[#5B6875] text-xs sm:text-sm mt-1">
              Empowering four distinct stakeholders to work together seamlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stakeholders.map((item) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.title}
                  className="bg-white rounded-md p-5 border border-[#E5DFC5] shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded bg-[#164A7B] text-white flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#FAF7F2] text-[#17202A] border border-[#E5DFC5]">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="font-extrabold text-[#17202A] text-base">
                      {item.title}
                    </h3>
                    <p className="text-xs font-bold text-[#164A7B] mb-2">
                      {item.role}
                    </p>
                    <p className="text-xs text-[#5B6875] leading-normal mb-3">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E5DFC5] space-y-1.5">
                    {item.highlights.map((h, i) => (
                      <div key={i} className="flex items-center text-xs text-[#17202A]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#16865B] mr-1.5 shrink-0" />
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
      <section className="py-12 bg-white border-b border-[#E5DFC5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-8">
            <span className="text-xs font-bold text-[#164A7B] uppercase tracking-wider block mb-1">
              Core Architecture
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#17202A] tracking-tight">
              Platform Capabilities
            </h2>
            <p className="text-[#5B6875] text-xs sm:text-sm mt-1">
              Four specialized modules driving societal problem-to-impact transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div 
                  key={cap.title}
                  className="bg-[#FAF7F2] border border-[#E5DFC5] rounded-md p-5 flex items-start space-x-3.5"
                >
                  <div className="w-10 h-10 rounded bg-[#164A7B] text-white flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white text-[#164A7B] border border-[#E5DFC5] uppercase">
                      {cap.badge}
                    </span>
                    <h3 className="font-extrabold text-[#17202A] text-base">
                      {cap.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#5B6875]">
                      {cap.tagline}
                    </p>
                    <p className="text-xs text-[#5B6875] leading-normal pt-1">
                      {cap.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CTA FOOTER BANNER */}
      <section className="py-10 bg-[#0B2F50] text-white border-t border-[#164A7B]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h2 className="text-xl sm:text-2xl font-extrabold">
            Ready to test the SIH26043 Prototype?
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
            Report a ground-level problem, observe instant AI analysis & matching, and track progress through to measurable governance impact.
          </p>
          <div className="pt-1 flex justify-center">
            <button
              onClick={() => setActivePage('report')}
              className="px-6 py-2.5 bg-[#16865B] hover:bg-[#116846] text-white font-bold text-xs rounded-md shadow-sm border border-white/20 transition-colors flex items-center space-x-2"
            >
              <FilePlus2 className="w-4 h-4" />
              <span>Start Interactive Demo</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
