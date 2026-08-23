import React, { useState } from 'react';
import { 
  Layers, 
  CheckCircle2, 
  Circle, 
  ArrowRight, 
  FileText, 
  Users, 
  Building2, 
  GraduationCap, 
  Plus, 
  Download, 
  Sparkles,
  ChevronRight,
  Info
} from 'lucide-react';

export default function ProjectLifecycle({ problemData, setActivePage }) {
  const [activeStage, setActiveStage] = useState('Prototype');

  const lifecycleStages = [
    { name: 'Problem Identified', key: 'Problem Identified', status: 'completed' },
    { name: 'Validated', key: 'Validated', status: 'completed' },
    { name: 'Team Formed', key: 'Team Formed', status: 'completed' },
    { name: 'Proposal', key: 'Proposal', status: 'completed' },
    { name: 'Prototype', key: 'Prototype', status: 'active' },
    { name: 'Pilot', key: 'Pilot', status: 'upcoming' },
    { name: 'Deployment', key: 'Deployment', status: 'upcoming' },
    { name: 'Impact', key: 'Impact', status: 'upcoming' }
  ];

  const projectInfo = {
    title: "Smart Community Water Monitoring",
    university: "Example University",
    industryPartner: "WaterTech Solutions",
    facultyMentor: "Dr. Example",
    teamSize: "5 Students",
    progress: 62
  };

  const milestones = [
    { text: "Problem validated", status: "completed" },
    { text: "University matched", status: "completed" },
    { text: "Team formed", status: "completed" },
    { text: "Proposal approved", status: "completed" },
    { text: "Prototype development", status: "active" },
    { text: "Field pilot", status: "upcoming" },
    { text: "Deployment", status: "upcoming" }
  ];

  const documents = [
    { name: "Project Proposal (Approved)", size: "2.4 MB", date: "Aug 12, 2026", type: "PDF" },
    { name: "AI Deduplication & Similarity Report", size: "1.1 MB", date: "Aug 10, 2026", type: "PDF" },
    { name: "IoT Sensor Architecture Diagram", size: "4.8 MB", date: "Aug 18, 2026", type: "PNG" },
    { name: "CSR Budget Allocation Sheet", size: "380 KB", date: "Aug 15, 2026", type: "XLSX" }
  ];

  const teamMembers = [
    { name: "Dr. Example", role: "Faculty Mentor", dept: "Water Resources Engineering" },
    { name: "Amit Sharma", role: "Team Lead & Embedded Systems", year: "4th Year" },
    { name: "Priya Patel", role: "IoT Hardware Designer", year: "4th Year" },
    { name: "Rohan Das", role: "Data Analytics & Cloud Setup", year: "3rd Year" },
    { name: "Sneha Reddy", role: "Mobile Application Developer", year: "3rd Year" }
  ];

  const partnersList = [
    { name: "WaterTech Solutions", type: "Industry Tech Partner", support: "Mentorship & Hardware Supply" },
    { name: "Ramanathapuram District Admin", type: "Local Govt Partner", support: "Field Deployment & Approvals" },
    { name: "Global Water Foundation", type: "CSR Funding Partner", support: "$5,000 Milestone-based Grant" }
  ];

  return (
    <div className="bg-gov-bg min-h-screen py-10 text-gov-text-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Prototype Disclaimer Banner */}
        <div className="bg-white border border-gov-warning rounded-lg p-3.5 flex items-start space-x-3 text-gov-text-primary text-xs sm:text-sm shadow-sm">
          <Info className="w-5 h-5 text-gov-warning shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold">Prototype Demonstration:</strong> This lifecycle page represents the active stages of collaborative community projects. No live universities or industry partners are contacted.
          </div>
        </div>

        {/* Title and Top Navigation CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-slate-100 text-gov-primary text-xs font-bold mb-2 border border-gov-border">
              <Layers className="w-3.5 h-3.5 text-gov-primary" />
              <span>Project Execution Suite</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-gov-text-primary tracking-tight">
              Problem-to-Impact Project
            </h1>
            <p className="text-gov-text-secondary text-sm mt-0.5">
              Follow the active progress of community challenges as they transition into validated engineering solutions.
            </p>
          </div>

          <button
            onClick={() => setActivePage('dashboard')}
            className="px-5 py-2.5 bg-gov-primary hover:bg-gov-primary-dark text-white font-bold text-sm rounded-lg shadow-sm border border-gov-primary transition-colors cursor-pointer flex items-center space-x-2 shrink-0"
          >
            <span>View Impact Dashboard</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Horizontal Project Lifecycle Timeline */}
        <div className="bg-white rounded-lg p-6 sm:p-8 border border-gov-border shadow-sm space-y-6">
          <h2 className="text-base font-extrabold text-gov-text-primary flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-gov-primary" />
            <span>Horizontal Lifecycle Progress</span>
          </h2>

          <div className="overflow-x-auto pb-4">
            <div className="flex items-center justify-between min-w-[800px] px-2">
              {lifecycleStages.map((stage, idx) => {
                const isCompleted = stage.status === 'completed';
                const isActive = stage.status === 'active';

                return (
                  <React.Fragment key={stage.key}>
                    {/* Stage Card */}
                    <div className="flex flex-col items-center flex-1">
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs shadow-sm transition-all ${
                        isActive
                          ? 'bg-gov-primary text-white scale-105 border-2 border-gov-primary-dark'
                          : isCompleted
                          ? 'bg-gov-success text-white'
                          : 'bg-slate-50 text-gov-text-secondary border border-gov-border'
                      }`}>
                        {isCompleted ? '✓' : idx + 1}
                      </div>
                      <span className={`text-[11px] font-extrabold mt-2.5 text-center leading-tight ${
                        isActive 
                          ? 'text-gov-primary font-black' 
                          : isCompleted 
                          ? 'text-gov-text-primary font-bold' 
                          : 'text-gov-text-secondary font-medium'
                      }`}>
                        {stage.name}
                      </span>
                      {isActive && (
                        <span className="mt-1 px-1.5 py-0.5 bg-gov-primary text-white text-[9px] font-bold rounded uppercase">
                          Current
                        </span>
                      )}
                    </div>

                    {/* Stepper Arrow */}
                    {idx < lifecycleStages.length - 1 && (
                      <div className="flex items-center px-1 text-gov-border">
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>

        {/* Project Information & Progress Tracker */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Progress Indicator Card */}
          <div className="bg-white rounded-lg p-6 border border-gov-border shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-1.5">
              <span className="text-xs font-bold text-gov-text-secondary uppercase tracking-wider block">
                Overall Progress
              </span>
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-black text-gov-text-primary">{projectInfo.progress}%</span>
                <span className="text-xs text-gov-success font-bold">Ahead of schedule</span>
              </div>
            </div>

            {/* Linear Progress */}
            <div className="space-y-2">
              <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden border border-gov-border">
                <div 
                  className="bg-gov-primary h-3 rounded-full"
                  style={{ width: `${projectInfo.progress}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-gov-text-secondary font-semibold">
                <span>Phase 4: Design & Build</span>
                <span>Goal: Field Pilot</span>
              </div>
            </div>

            <div className="bg-gov-bg rounded-lg p-4 border border-gov-border text-xs text-gov-text-secondary leading-relaxed">
              <strong>Next Milestone Alert:</strong> Hardware prototype verification is scheduled for final lab checks before launching the <strong>Field Pilot</strong> stage.
            </div>
          </div>

          {/* Project Details Grid */}
          <div className="bg-white rounded-lg p-6 border border-gov-border shadow-sm lg:col-span-2 space-y-6">
            <h3 className="text-sm font-extrabold text-gov-text-primary uppercase tracking-wider border-b border-gov-border pb-3">
              Project Information
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-lg bg-gov-primary/10 text-gov-primary flex items-center justify-center shrink-0 border border-gov-primary/25">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-gov-text-secondary uppercase tracking-wider block">Project Name</span>
                  <span className="text-sm font-extrabold text-gov-text-primary leading-snug">{projectInfo.title}</span>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-lg bg-gov-primary/10 text-gov-primary flex items-center justify-center shrink-0 border border-gov-primary/25">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-gov-text-secondary uppercase tracking-wider block">University</span>
                  <span className="text-sm font-extrabold text-gov-text-primary leading-snug">{projectInfo.university}</span>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-lg bg-gov-primary/10 text-gov-primary flex items-center justify-center shrink-0 border border-gov-primary/25">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-gov-text-secondary uppercase tracking-wider block">Industry Partner</span>
                  <span className="text-sm font-extrabold text-gov-text-primary leading-snug">{projectInfo.industryPartner}</span>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-lg bg-gov-primary/10 text-gov-primary flex items-center justify-center shrink-0 border border-gov-primary/25">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-gov-text-secondary uppercase tracking-wider block">Faculty Mentor & Team</span>
                  <span className="text-sm font-extrabold text-gov-text-primary leading-snug">{projectInfo.facultyMentor}</span>
                  <span className="text-xs text-gov-text-secondary font-medium block">Team Size: {projectInfo.teamSize}</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Sub-sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Milestones Card */}
          <div className="bg-white rounded-lg p-6 border border-gov-border shadow-sm space-y-4">
            <h3 className="text-sm font-extrabold text-gov-text-primary border-b border-gov-border pb-3 flex items-center justify-between">
              <span>Milestones Checklist</span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-gov-primary border border-gov-border">
                5 / 7 Done
              </span>
            </h3>

            <div className="space-y-3">
              {milestones.map((m, i) => {
                const isDone = m.status === 'completed';
                const isActive = m.status === 'active';

                return (
                  <div key={i} className="flex items-start space-x-3">
                    {isDone ? (
                      <CheckCircle2 className="w-5 h-5 text-gov-success shrink-0 mt-0.5" />
                    ) : isActive ? (
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-100 border border-gov-primary shrink-0 mt-0.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-gov-primary"></span>
                      </span>
                    ) : (
                      <Circle className="w-5 h-5 text-gov-border shrink-0 mt-0.5" />
                    )}
                    <span className={`text-xs sm:text-sm font-medium ${
                      isDone ? 'text-gov-text-secondary line-through' : isActive ? 'text-gov-text-primary font-bold' : 'text-gov-text-secondary'
                    }`}>
                      {m.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Documents Card */}
          <div className="bg-white rounded-lg p-6 border border-gov-border shadow-sm space-y-4">
            <h3 className="text-sm font-extrabold text-gov-text-primary border-b border-gov-border pb-3 flex items-center justify-between">
              <span>Project Documents</span>
              <button className="text-xs text-gov-primary font-bold hover:underline flex items-center gap-1 cursor-pointer">
                <Plus className="w-3.5 h-3.5" /> Upload File
              </button>
            </h3>

            <div className="space-y-3.5">
              {documents.map((doc, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-gov-bg border border-gov-border hover:bg-slate-100/50 transition-colors">
                  <div className="flex items-center space-x-3 truncate">
                    <FileText className="w-5 h-5 text-gov-primary shrink-0" />
                    <div className="truncate">
                      <span className="text-xs font-bold text-gov-text-primary block truncate">{doc.name}</span>
                      <span className="text-[10px] text-gov-text-secondary font-medium">
                        {doc.size} • {doc.date}
                      </span>
                    </div>
                  </div>
                  <button className="p-1.5 rounded hover:bg-slate-200 text-gov-text-secondary transition-colors shrink-0 cursor-pointer">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Team Card */}
          <div className="bg-white rounded-lg p-6 border border-gov-border shadow-sm space-y-4">
            <h3 className="text-sm font-extrabold text-gov-text-primary border-b border-gov-border pb-3 flex items-center justify-between">
              <span>Project Team Roster</span>
              <span className="text-xs text-gov-text-secondary font-semibold">5 Members</span>
            </h3>

            <div className="space-y-3">
              {teamMembers.map((member, idx) => (
                <div key={idx} className="flex items-center justify-between p-2.5 rounded-lg border border-gov-border bg-gov-bg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-slate-200 text-gov-text-primary font-bold text-xs flex items-center justify-center">
                      {member.name.split(' ').map(n=>n[0]).join('')}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-gov-text-primary block">{member.name}</span>
                      <span className="text-[10px] text-gov-text-secondary font-medium">
                        {member.dept || member.year}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 bg-white text-gov-text-primary rounded border border-gov-border">
                    {member.role}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Partners Card */}
          <div className="bg-white rounded-lg p-6 border border-gov-border shadow-sm space-y-4">
            <h3 className="text-sm font-extrabold text-gov-text-primary border-b border-gov-border pb-3 flex items-center justify-between">
              <span>Ecosystem Partners</span>
              <span className="text-xs text-gov-text-secondary font-semibold">3 Active</span>
            </h3>

            <div className="space-y-3">
              {partnersList.map((partner, idx) => (
                <div key={idx} className="flex flex-col p-3 rounded-lg bg-gov-bg border border-gov-border space-y-1.5">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-bold text-gov-text-primary block leading-tight">{partner.name}</span>
                    <span className="text-[9px] font-bold px-1.5 py-0.5 bg-slate-100 text-gov-text-primary rounded border border-gov-border uppercase">
                      {partner.type}
                    </span>
                  </div>
                  <p className="text-[11px] text-gov-text-secondary font-medium">
                    Support: <strong className="text-gov-text-primary">{partner.support}</strong>
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
