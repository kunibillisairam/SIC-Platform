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
    }, 3000);
  };

  return (
    <div className="bg-[#F5F7FA] min-h-screen py-8 text-[#17202A]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* BREADCRUMB */}
        <nav className="flex items-center space-x-2 text-xs font-medium text-[#5B6875] mb-4">
          <button 
            onClick={() => setActivePage('home')}
            className="hover:text-[#164A7B] transition-colors"
          >
            Home
          </button>
          <ChevronRight className="w-3 h-3 text-[#5B6875]" />
          <button 
            onClick={() => setActivePage('explore')}
            className="hover:text-[#164A7B] transition-colors"
          >
            Problems
          </button>
          <ChevronRight className="w-3 h-3 text-[#5B6875]" />
          <span className="text-[#17202A] font-bold">Report a Problem</span>
        </nav>

        {/* PAGE HEADER */}
        <div className="mb-6 bg-white p-5 rounded-md border border-[#D9E0E7] shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <Building className="w-5 h-5 text-[#164A7B]" />
              <h1 className="text-xl font-extrabold text-[#17202A] tracking-tight">
                Report a Community Problem
              </h1>
            </div>
            <p className="text-[#5B6875] text-xs mt-1 font-normal">
              Submit a local challenge for review, analysis and collaboration.
            </p>
          </div>

          <div className="flex items-center space-x-1.5 px-3 py-1 rounded bg-[#F5F7FA] border border-[#D9E0E7] text-xs text-[#164A7B] font-bold shrink-0">
            <ShieldCheck className="w-4 h-4 text-[#164A7B]" />
            <span>SIH26043 Public Portal</span>
          </div>
        </div>

        {/* DEMO PRESET SELECTOR BAR */}
        <div className="mb-6 bg-[#0B2F50] text-white rounded-md p-4 border border-[#164A7B] text-xs">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center space-x-2 font-bold text-slate-200">
              <Lightbulb className="w-4 h-4 text-[#C47A00] shrink-0" />
              <span>SIH Evaluator Quick Presets:</span>
            </div>
            <div className="flex flex-wrap gap-2 w-full sm:w-auto">
              {samplePresets.map((p, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => loadPreset(p)}
                  className={`px-2.5 py-1 rounded text-xs font-bold transition-colors border ${
                    formData.title === p.title
                      ? 'bg-[#164A7B] text-white border-white/20'
                      : 'bg-white/10 text-slate-200 border-transparent hover:bg-white/20'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* MAIN FORM CARD */}
        <div className="bg-white rounded-md border border-[#D9E0E7] shadow-xs p-6 sm:p-8 relative">
          
          {/* PROCESSING STATE OVERLAY */}
          {isProcessing && (
            <div className="absolute inset-0 bg-white/95 z-30 flex flex-col items-center justify-center p-6 text-center space-y-5 rounded-md">
              <div className="w-12 h-12 rounded-full bg-[#F5F7FA] border-2 border-[#164A7B] flex items-center justify-center text-[#164A7B]">
                <Loader2 className="w-6 h-6 animate-spin text-[#164A7B]" />
              </div>
              
              <div className="space-y-1">
                <h3 className="text-lg font-extrabold text-[#17202A]">
                  Processing Problem Submission
                </h3>
                <p className="text-xs text-[#5B6875] font-bold uppercase tracking-wider">
                  SIH26043 Automated Pipeline
                </p>
              </div>

              <div className="w-full max-w-md bg-[#F5F7FA] border border-[#D9E0E7] rounded-md p-4 space-y-2 text-left">
                {processingSteps.map((step, idx) => {
                  const isDone = idx < currentStepIndex;
                  const isCurrent = idx === currentStepIndex;

                  return (
                    <div key={step} className="flex items-center justify-between text-xs font-bold">
                      <div className="flex items-center space-x-2.5">
                        {isDone ? (
                          <CheckCircle2 className="w-4 h-4 text-[#16865B] shrink-0" />
                        ) : isCurrent ? (
                          <Loader2 className="w-4 h-4 text-[#164A7B] animate-spin shrink-0" />
                        ) : (
                          <div className="w-3.5 h-3.5 rounded-full border-2 border-[#D9E0E7] shrink-0" />
                        )}
                        <span className={isDone ? 'text-[#17202A]' : isCurrent ? 'text-[#164A7B] font-extrabold' : 'text-[#5B6875]'}>
                          {step}
                        </span>
                      </div>
                      <span className="text-[10px] font-semibold text-[#5B6875] uppercase">
                        {isDone ? 'Complete' : isCurrent ? 'Active...' : 'Pending'}
                      </span>
                    </div>
                  );
                })}
              </div>

            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* SECTION 1 */}
            <div className="space-y-4">
              <div className="border-b border-[#D9E0E7] pb-2">
                <h2 className="text-sm font-extrabold text-[#17202A] uppercase tracking-wider">
                  Section 1: Problem Information
                </h2>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#17202A] uppercase tracking-wider mb-1">
                  Problem Title *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3 py-2 rounded-md border border-[#D9E0E7] focus:border-[#164A7B] focus:ring-1 focus:ring-[#164A7B] text-sm text-[#17202A] outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#17202A] uppercase tracking-wider mb-1">
                    Category / Sector *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2 rounded-md border border-[#D9E0E7] focus:border-[#164A7B] focus:ring-1 focus:ring-[#164A7B] text-sm text-[#17202A] bg-white outline-none"
                  >
                    <option value="Water & Sanitation">Water & Sanitation</option>
                    <option value="Agriculture & Rural Tech">Agriculture & Rural Tech</option>
                    <option value="Healthcare & Hygiene">Healthcare & Hygiene</option>
                    <option value="Education & Digital Literacy">Education & Digital Literacy</option>
                    <option value="Renewable Energy">Renewable Energy</option>
                    <option value="Infrastructure & Public Safety">Infrastructure & Public Safety</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#17202A] uppercase tracking-wider mb-1">
                    Urgency Level *
                  </label>
                  <select
                    value={formData.urgency}
                    onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                    className="w-full px-3 py-2 rounded-md border border-[#D9E0E7] focus:border-[#164A7B] focus:ring-1 focus:ring-[#164A7B] text-sm text-[#17202A] bg-white outline-none"
                  >
                    <option value="Critical">Critical (Immediate Hazard)</option>
                    <option value="High">High (Severe Local Impact)</option>
                    <option value="Medium">Medium (Moderate Priority)</option>
                    <option value="Low">Low (Long-Term Improvement)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* SECTION 2 */}
            <div className="space-y-4">
              <div className="border-b border-[#D9E0E7] pb-2">
                <h2 className="text-sm font-extrabold text-[#17202A] uppercase tracking-wider">
                  Section 2: Location
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#17202A] uppercase tracking-wider mb-1">
                    District & State *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.district}
                    onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                    className="w-full px-3 py-2 rounded-md border border-[#D9E0E7] focus:border-[#164A7B] focus:ring-1 focus:ring-[#164A7B] text-sm text-[#17202A] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#17202A] uppercase tracking-wider mb-1">
                    Pincode / Postal Code *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    className="w-full px-3 py-2 rounded-md border border-[#D9E0E7] focus:border-[#164A7B] focus:ring-1 focus:ring-[#164A7B] text-sm text-[#17202A] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#17202A] uppercase tracking-wider mb-1">
                  Location Details & Landmarks
                </label>
                <input
                  type="text"
                  value={formData.locationDetails || ''}
                  onChange={(e) => setFormData({ ...formData, locationDetails: e.target.value })}
                  className="w-full px-3 py-2 rounded-md border border-[#D9E0E7] focus:border-[#164A7B] focus:ring-1 focus:ring-[#164A7B] text-sm text-[#17202A] outline-none"
                />
              </div>
            </div>

            {/* SECTION 3 */}
            <div className="space-y-4">
              <div className="border-b border-[#D9E0E7] pb-2">
                <h2 className="text-sm font-extrabold text-[#17202A] uppercase tracking-wider">
                  Section 3: Problem Description
                </h2>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#17202A] uppercase tracking-wider mb-1">
                  Detailed Problem Description *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3 py-2 rounded-md border border-[#D9E0E7] focus:border-[#164A7B] focus:ring-1 focus:ring-[#164A7B] text-sm text-[#17202A] outline-none leading-relaxed"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#17202A] uppercase tracking-wider mb-1">
                  Estimated Affected Population / Scope
                </label>
                <input
                  type="text"
                  value={formData.impactScope}
                  onChange={(e) => setFormData({ ...formData, impactScope: e.target.value })}
                  className="w-full px-3 py-2 rounded-md border border-[#D9E0E7] focus:border-[#164A7B] focus:ring-1 focus:ring-[#164A7B] text-sm text-[#17202A] outline-none"
                />
              </div>
            </div>

            {/* SECTION 4 */}
            <div className="space-y-4">
              <div className="border-b border-[#D9E0E7] pb-2">
                <h2 className="text-sm font-extrabold text-[#17202A] uppercase tracking-wider">
                  Section 4: Evidence & Attachments
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-md border border-dashed border-[#D9E0E7] bg-[#F5F7FA] text-center space-y-1">
                  <ImageIcon className="w-4 h-4 text-[#5B6875] mx-auto" />
                  <span className="text-xs font-bold text-[#17202A] block">Photos</span>
                  <span className="text-[10px] text-[#5B6875] block">JPG, PNG</span>
                </div>

                <div className="p-3 rounded-md border border-dashed border-[#D9E0E7] bg-[#F5F7FA] text-center space-y-1">
                  <Video className="w-4 h-4 text-[#5B6875] mx-auto" />
                  <span className="text-xs font-bold text-[#17202A] block">Videos</span>
                  <span className="text-[10px] text-[#5B6875] block">MP4</span>
                </div>

                <div className="p-3 rounded-md border border-dashed border-[#D9E0E7] bg-[#F5F7FA] text-center space-y-1">
                  <FileText className="w-4 h-4 text-[#5B6875] mx-auto" />
                  <span className="text-xs font-bold text-[#17202A] block">Documents</span>
                  <span className="text-[10px] text-[#5B6875] block">PDF</span>
                </div>
              </div>

              {uploadedFiles.length > 0 && (
                <div className="space-y-1 pt-1">
                  <span className="text-[11px] font-bold text-[#5B6875] uppercase">Attached Files:</span>
                  {uploadedFiles.map((file, i) => (
                    <div key={i} className="flex items-center justify-between px-3 py-1 rounded border border-[#D9E0E7] bg-[#F5F7FA] text-xs">
                      <div className="flex items-center space-x-2">
                        <FileText className="w-3.5 h-3.5 text-[#164A7B]" />
                        <span className="font-semibold text-[#17202A]">{file.name}</span>
                      </div>
                      <span className="text-[10px] text-[#5B6875] font-medium">{file.size}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* SUBMIT AREA */}
            <div className="pt-4 border-t border-[#D9E0E7] space-y-3">
              <p className="text-xs text-[#5B6875] font-normal leading-normal bg-[#F5F7FA] p-3 rounded border border-[#D9E0E7]">
                <strong>Notice:</strong> After submission, the platform will analyze the problem for category, priority and similar reports.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center text-xs text-[#5B6875]">
                  <ShieldCheck className="w-4 h-4 text-[#16865B] mr-1.5 shrink-0" />
                  <span>Public Service Data Standards</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2.5 bg-[#164A7B] hover:bg-[#0B2F50] text-white font-bold text-xs rounded-md shadow-xs transition-colors flex items-center justify-center space-x-2 border border-[#164A7B]"
                >
                  <span>Analyze & Submit Problem</span>
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
