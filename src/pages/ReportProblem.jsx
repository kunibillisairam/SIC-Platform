import React, { useState } from 'react';
import { 
  FilePlus2, 
  MapPin, 
  Tag, 
  AlertTriangle, 
  ArrowRight, 
  Upload, 
  CheckCircle2, 
  Loader2,
  FileText,
  Image as ImageIcon,
  Video,
  ShieldCheck,
  ChevronRight,
  Lightbulb,
  Building
} from 'lucide-react';

export default function ReportProblem({ setActivePage, setProblemData }) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const processingSteps = [
    "Analyzing problem",
    "Checking similar reports",
    "Assessing priority",
    "Preparing recommendations"
  ];

  // Quick preset data for SIH evaluator convenience
  const samplePresets = [
    {
      label: "Water Supply Contamination (Primary Demo)",
      title: "Water contamination and leakage in rural school supply line",
      category: "Water & Sanitation",
      urgency: "High",
      district: "Coimbatore, Tamil Nadu",
      pincode: "641004",
      locationDetails: "Panchayat Ward 4, near Government Primary School water tank",
      description: "The drinking water pipeline supplying 3 primary schools has high turbidity and intermittent pipe leakage, leading to frequent school absenteeism and waterborne illnesses among 450+ children during monsoon.",
      impactScope: "450+ Students & 1,200 villagers"
    },
    {
      label: "Post-Harvest Grain Spoilage",
      title: "Post-harvest grain spoilage due to high humidity in village godowns",
      category: "Agriculture & Rural Tech",
      urgency: "Critical",
      district: "Madurai, Tamil Nadu",
      pincode: "625001",
      locationDetails: "Central Co-operative Godown #2, Vadipatti Block",
      description: "Farmers facing 25% moisture loss in paddy storage facilities due to unmonitored humidity. Requires solar grain dryer and telemetry sensors.",
      impactScope: "2,400 Local Farmers"
    },
    {
      label: "Rural Vaccine Cold-Chain",
      title: "Remote primary healthcare center lacking cold chain for immunization vaccines",
      category: "Healthcare & Hygiene",
      urgency: "Critical",
      district: "Wayanad, Kerala",
      pincode: "673121",
      locationDetails: "Meppadi Primary Health Center, Ward 7",
      description: "Frequent rural grid failures spoil vital childhood vaccines. Requires low-cost solar Peltier thermal cooling unit.",
      impactScope: "15 Primary Health Centers"
    }
  ];

  const [formData, setFormData] = useState(samplePresets[0]);
  const [uploadedFiles, setUploadedFiles] = useState([
    { name: "water_turbidity_sample.jpg", type: "Photo", size: "2.4 MB" },
    { name: "pipeline_leakage_inspection.pdf", type: "Document", size: "1.1 MB" }
  ]);

  const loadPreset = (preset) => {
    setFormData(preset);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setCurrentStepIndex(0);

    // Sequentially advance through the 4 professional processing steps
    const stepInterval = setInterval(() => {
      setCurrentStepIndex((prev) => {
        if (prev < processingSteps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(stepInterval);
          return prev;
        }
      });
    }, 700);

    setTimeout(() => {
      setIsProcessing(false);
      if (setProblemData) {
        setProblemData({
          ...formData,
          uploadedFiles
        });
      }
      setActivePage('analysis');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 3200);
  };

  return (
    <div className="bg-slate-100 min-h-screen py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* BREADCRUMB */}
        <nav className="flex items-center space-x-2 text-xs font-semibold text-slate-500 mb-4">
          <button 
            onClick={() => setActivePage('home')}
            className="hover:text-blue-700 transition-colors"
          >
            Home
          </button>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <button 
            onClick={() => setActivePage('explore')}
            className="hover:text-blue-700 transition-colors"
          >
            Problems
          </button>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-slate-800 font-bold">Report a Problem</span>
        </nav>

        {/* PAGE HEADER */}
        <div className="mb-6 bg-white p-6 rounded-lg border border-slate-300 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <Building className="w-5 h-5 text-blue-900" />
              <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Report a Community Problem
              </h1>
            </div>
            <p className="text-slate-600 text-sm mt-1 font-medium">
              Submit a local challenge for review, analysis and collaboration.
            </p>
          </div>

          <div className="flex items-center space-x-2 px-3 py-1.5 rounded bg-blue-50 border border-blue-200 text-xs text-blue-900 font-bold shrink-0">
            <ShieldCheck className="w-4 h-4 text-blue-700" />
            <span>SIH26043 Public Portal</span>
          </div>
        </div>

        {/* DEMO EVALUATOR PRESET SELECTOR BAR */}
        <div className="mb-6 bg-slate-800 text-white rounded-lg p-4 border border-slate-700 text-xs">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center space-x-2 font-bold text-slate-200">
              <Lightbulb className="w-4 h-4 text-amber-400 shrink-0" />
              <span>SIH Evaluator Quick Presets:</span>
            </div>
            <div className="flex flex-wrap gap-2 w-full sm:w-auto">
              {samplePresets.map((p, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => loadPreset(p)}
                  className={`px-2.5 py-1 rounded text-xs font-bold transition-all border ${
                    formData.title === p.title
                      ? 'bg-blue-700 text-white border-blue-500 shadow-sm'
                      : 'bg-slate-900 text-slate-300 border-slate-700 hover:bg-slate-700'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* MAIN FORM CONTAINER: WHITE BORDERED CARD */}
        <div className="bg-white rounded-lg border border-slate-300 shadow-sm p-6 sm:p-8 relative">
          
          {/* PROFESSIONAL PROCESSING STATE OVERLAY */}
          {isProcessing && (
            <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-30 flex flex-col items-center justify-center p-8 text-center space-y-6 rounded-lg">
              <div className="w-14 h-14 rounded-full bg-blue-50 border-2 border-blue-600 flex items-center justify-center text-blue-800">
                <Loader2 className="w-7 h-7 animate-spin text-blue-700" />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-extrabold text-slate-900">
                  Processing Problem Submission
                </h3>
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                  Public Service SIH26043 Automated Pipeline
                </p>
              </div>

              {/* 4 Professional Processing Steps Display */}
              <div className="w-full max-w-md bg-slate-50 border border-slate-200 rounded-md p-4 space-y-3 text-left">
                {processingSteps.map((step, idx) => {
                  const isDone = idx < currentStepIndex;
                  const isCurrent = idx === currentStepIndex;

                  return (
                    <div key={step} className="flex items-center justify-between text-xs font-bold">
                      <div className="flex items-center space-x-3">
                        {isDone ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        ) : isCurrent ? (
                          <Loader2 className="w-4 h-4 text-blue-700 animate-spin shrink-0" />
                        ) : (
                          <div className="w-4 h-4 rounded-full border-2 border-slate-300 shrink-0" />
                        )}
                        <span className={isDone ? 'text-slate-800' : isCurrent ? 'text-blue-900 font-extrabold' : 'text-slate-400'}>
                          {step}
                        </span>
                      </div>
                      <span className="text-[10px] font-semibold text-slate-400 uppercase">
                        {isDone ? 'Complete' : isCurrent ? 'Active...' : 'Pending'}
                      </span>
                    </div>
                  );
                })}
              </div>

            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* SECTION 1: PROBLEM INFORMATION */}
            <div className="space-y-4">
              <div className="border-b border-slate-200 pb-2">
                <h2 className="text-base font-extrabold text-slate-900 uppercase tracking-wide">
                  Section 1: Problem Information
                </h2>
                <p className="text-xs text-slate-500 font-medium">Specify the primary title, sector classification and urgency.</p>
              </div>

              {/* Problem Title */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                  Problem Title *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 focus:border-blue-700 focus:ring-1 focus:ring-blue-700 text-sm font-semibold text-slate-900 outline-none transition-colors"
                  placeholder="Enter a descriptive title for the community problem"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Category */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    Category / Sector *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 focus:border-blue-700 focus:ring-1 focus:ring-blue-700 text-sm font-semibold text-slate-900 bg-white outline-none"
                  >
                    <option value="Water & Sanitation">Water & Sanitation</option>
                    <option value="Agriculture & Rural Tech">Agriculture & Rural Tech</option>
                    <option value="Healthcare & Hygiene">Healthcare & Hygiene</option>
                    <option value="Education & Digital Literacy">Education & Digital Literacy</option>
                    <option value="Renewable Energy">Renewable Energy</option>
                    <option value="Infrastructure & Public Safety">Infrastructure & Public Safety</option>
                  </select>
                </div>

                {/* Urgency Level */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    Urgency Level *
                  </label>
                  <select
                    value={formData.urgency}
                    onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 focus:border-blue-700 focus:ring-1 focus:ring-blue-700 text-sm font-semibold text-slate-900 bg-white outline-none"
                  >
                    <option value="Critical">Critical (Immediate Health/Safety Risk)</option>
                    <option value="High">High (Severe Local Impact)</option>
                    <option value="Medium">Medium (Moderate Priority)</option>
                    <option value="Low">Low (Long-Term Improvement)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* SECTION 2: LOCATION */}
            <div className="space-y-4">
              <div className="border-b border-slate-200 pb-2">
                <h2 className="text-base font-extrabold text-slate-900 uppercase tracking-wide">
                  Section 2: Location
                </h2>
                <p className="text-xs text-slate-500 font-medium">Geographical identification for duplicate clustering and regional allocation.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* District & State */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    District & State *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.district}
                    onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 focus:border-blue-700 focus:ring-1 focus:ring-blue-700 text-sm font-semibold text-slate-900 outline-none"
                    placeholder="e.g. Coimbatore, Tamil Nadu"
                  />
                </div>

                {/* Pincode */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    Pincode / Postal Code *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 focus:border-blue-700 focus:ring-1 focus:ring-blue-700 text-sm font-semibold text-slate-900 outline-none"
                    placeholder="e.g. 641004"
                  />
                </div>
              </div>

              {/* Location details */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                  Location Details & Landmarks
                </label>
                <input
                  type="text"
                  value={formData.locationDetails || ''}
                  onChange={(e) => setFormData({ ...formData, locationDetails: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 focus:border-blue-700 focus:ring-1 focus:ring-blue-700 text-sm font-semibold text-slate-900 outline-none"
                  placeholder="e.g. Panchayat Ward 4, near Government Primary School water tank"
                />
              </div>
            </div>

            {/* SECTION 3: PROBLEM DESCRIPTION */}
            <div className="space-y-4">
              <div className="border-b border-slate-200 pb-2">
                <h2 className="text-base font-extrabold text-slate-900 uppercase tracking-wide">
                  Section 3: Problem Description
                </h2>
                <p className="text-xs text-slate-500 font-medium">Provide clear factual details of the challenge and estimated community impact.</p>
              </div>

              {/* Detailed Problem Description */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                  Detailed Problem Description *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 focus:border-blue-700 focus:ring-1 focus:ring-blue-700 text-sm font-normal text-slate-900 outline-none leading-relaxed"
                  placeholder="Describe the issue, ground conditions, affected community, and current challenges..."
                />
              </div>

              {/* Estimated affected population */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                  Estimated Affected Population / Scope
                </label>
                <input
                  type="text"
                  value={formData.impactScope}
                  onChange={(e) => setFormData({ ...formData, impactScope: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 focus:border-blue-700 focus:ring-1 focus:ring-blue-700 text-sm font-semibold text-slate-900 outline-none"
                  placeholder="e.g. 450+ Students & 1,200 villagers"
                />
              </div>
            </div>

            {/* SECTION 4: EVIDENCE */}
            <div className="space-y-4">
              <div className="border-b border-slate-200 pb-2">
                <h2 className="text-base font-extrabold text-slate-900 uppercase tracking-wide">
                  Section 4: Evidence & Attachments
                </h2>
                <p className="text-xs text-slate-500 font-medium">Attach supporting ground photos, video recordings, or official Panchayat letters.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-md border border-dashed border-slate-300 bg-slate-50 text-center space-y-1 hover:border-blue-700 transition-colors cursor-pointer">
                  <ImageIcon className="w-5 h-5 text-slate-600 mx-auto" />
                  <span className="text-xs font-bold text-slate-800 block">Photos</span>
                  <span className="text-[10px] text-slate-500 block">JPG, PNG (Max 10MB)</span>
                </div>

                <div className="p-3.5 rounded-md border border-dashed border-slate-300 bg-slate-50 text-center space-y-1 hover:border-blue-700 transition-colors cursor-pointer">
                  <Video className="w-5 h-5 text-slate-600 mx-auto" />
                  <span className="text-xs font-bold text-slate-800 block">Videos</span>
                  <span className="text-[10px] text-slate-500 block">MP4, MOV (Max 50MB)</span>
                </div>

                <div className="p-3.5 rounded-md border border-dashed border-slate-300 bg-slate-50 text-center space-y-1 hover:border-blue-700 transition-colors cursor-pointer">
                  <FileText className="w-5 h-5 text-slate-600 mx-auto" />
                  <span className="text-xs font-bold text-slate-800 block">Supporting Documents</span>
                  <span className="text-[10px] text-slate-500 block">PDF, DOC (Max 20MB)</span>
                </div>
              </div>

              {/* Sample Attached files list */}
              {uploadedFiles.length > 0 && (
                <div className="space-y-1.5 pt-2">
                  <span className="text-[11px] font-bold text-slate-600 uppercase">Attached Evidence Files:</span>
                  {uploadedFiles.map((file, i) => (
                    <div key={i} className="flex items-center justify-between px-3 py-1.5 rounded border border-slate-200 bg-slate-50 text-xs">
                      <div className="flex items-center space-x-2">
                        <FileText className="w-3.5 h-3.5 text-blue-700" />
                        <span className="font-semibold text-slate-800">{file.name}</span>
                      </div>
                      <span className="text-[10px] text-slate-500 font-medium">{file.size}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* SUBMIT AREA */}
            <div className="pt-6 border-t border-slate-300 space-y-4">
              <p className="text-xs text-slate-600 font-medium leading-relaxed bg-slate-50 p-3 rounded border border-slate-200">
                <strong>Submission Notice:</strong> After submission, the platform will analyze the problem for category, priority and similar reports.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 mr-1.5 shrink-0" />
                  <span>Public Service Data Standards Compliant</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-blue-900 hover:bg-blue-950 text-white font-extrabold text-sm rounded-md shadow-sm transition-colors flex items-center justify-center space-x-2 border border-blue-950"
                >
                  <span>[ Analyze & Submit Problem ]</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}
