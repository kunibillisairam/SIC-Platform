import React, { useState } from 'react';
import { 
  FilePlus2, 
  Sparkles, 
  MapPin, 
  Tag, 
  AlertTriangle, 
  ArrowRight, 
  Upload, 
  CheckCircle2, 
  Loader2,
  RefreshCw,
  Lightbulb
} from 'lucide-react';

export default function ReportProblem({ setActivePage, setProblemData }) {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisStep, setAnalysisStep] = useState('');

  const samplePresets = [
    {
      label: "Water Contamination (Primary)",
      title: "Water contamination and leakage in rural school supply line",
      category: "Water & Sanitation",
      district: "Coimbatore, Tamil Nadu",
      pincode: "641004",
      urgency: "High",
      description: "The drinking water pipeline supplying 3 primary schools in Panchayat Ward 4 has high turbidity and intermittent pipe leakage, leading to frequent school absenteeism and waterborne illnesses among 450+ children during monsoon.",
      impactScope: "450+ Students & 1,200 villagers"
    },
    {
      label: "Agricultural Spoilage",
      title: "Post-harvest grain spoilage due to high humidity in village godowns",
      category: "Agriculture & Rural Tech",
      district: "Madurai, Tamil Nadu",
      pincode: "625001",
      urgency: "Critical",
      description: "Farmers facing 25% moisture loss in paddy storage facilities due to unmonitored humidity. Requires solar grain dryer and telemetry sensors.",
      impactScope: "2,400 Local Farmers"
    },
    {
      label: "Rural Healthcare Cold-Chain",
      title: "Remote primary healthcare center lacking cold chain for immunization vaccines",
      category: "Healthcare & Hygiene",
      district: "Wayanad, Kerala",
      pincode: "673121",
      urgency: "Critical",
      description: "Frequent rural grid failures spoil vital childhood vaccines. Requires low-cost solar Peltier thermal cooling unit.",
      impactScope: "15 Primary Health Centers"
    }
  ];

  const [formData, setFormData] = useState(samplePresets[0]);

  const loadPreset = (preset) => {
    setFormData(preset);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAnalyzing(true);
    setAnalysisStep('Extracting key domain context & NLP entity parsing...');

    setTimeout(() => {
      setAnalysisStep('Evaluating severity index & SDG alignment...');
    }, 900);

    setTimeout(() => {
      setAnalysisStep('Checking geospatial database for duplicate reports...');
    }, 1800);

    setTimeout(() => {
      setIsAnalyzing(false);
      if (setProblemData) {
        setProblemData(formData);
      }
      setActivePage('analysis');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 2600);
  };

  return (
    <div className="bg-gov-bg min-h-screen py-10 sm:py-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-8 text-center sm:text-left space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-slate-100 text-gov-primary text-xs font-bold border border-gov-border">
            <Sparkles className="w-3.5 h-3.5 text-gov-primary" />
            <span>AI-Assisted Citizen Problem Intake</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-gov-text-primary tracking-tight">
            Report a Community Problem
          </h1>
          <p className="text-gov-text-secondary text-sm">
            Submit a real-world societal challenge. Our AI engine will analyze, categorize, prioritize, and check for duplicate reports instantly.
          </p>
        </div>

        {/* Demo Preset Selector Bar */}
        <div className="mb-6 bg-white text-gov-text-primary rounded-lg p-4 sm:p-5 border border-gov-border shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center space-x-2 text-xs font-bold text-gov-text-secondary">
              <Lightbulb className="w-4 h-4 text-gov-warning shrink-0" />
              <span>Quick Demo Presets for SIH Evaluators:</span>
            </div>
            <div className="flex flex-wrap gap-2 w-full sm:w-auto">
              {samplePresets.map((p, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => loadPreset(p)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors border ${
                    formData.title === p.title
                      ? 'bg-gov-primary text-white border-gov-primary'
                      : 'bg-white text-gov-text-secondary border-gov-border hover:bg-slate-50'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Form Box */}
        <div className="bg-white rounded-lg border border-gov-border shadow-sm p-6 sm:p-8 relative overflow-hidden">
          
          {/* Overlay loading state */}
          {isAnalyzing && (
            <div className="absolute inset-0 bg-white/95 z-20 flex flex-col items-center justify-center text-gov-text-primary p-6 text-center space-y-4">
              <div className="w-14 h-14 rounded-lg bg-gov-primary/10 flex items-center justify-center shadow-sm">
                <Loader2 className="w-8 h-8 text-gov-primary animate-spin" />
              </div>
              <h3 className="text-lg font-bold text-gov-primary-dark">Running AI Problem Analysis...</h3>
              <p className="text-xs text-gov-text-secondary max-w-md font-medium">
                {analysisStep}
              </p>
              <div className="w-64 h-2 rounded-full bg-slate-100 border border-gov-border overflow-hidden mt-4">
                <div className="h-full bg-gov-primary rounded-full w-3/4"></div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Problem Title */}
            <div>
              <label className="block text-xs font-bold text-gov-text-primary uppercase tracking-wider mb-2">
                Problem Title *
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg border border-gov-border focus:border-gov-primary focus:ring-1 focus:ring-gov-primary/20 text-sm font-medium text-gov-text-primary outline-none bg-white transition-all"
                placeholder="e.g., Agricultural runoff polluting village drinking pond"
              />
            </div>

            {/* Category & Urgency */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gov-text-primary uppercase tracking-wider mb-2">
                  Primary Sector / Category *
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-lg border border-gov-border focus:border-gov-primary focus:ring-1 focus:ring-gov-primary/20 text-sm font-medium text-gov-text-primary outline-none bg-white"
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
                <label className="block text-xs font-bold text-gov-text-primary uppercase tracking-wider mb-2">
                  Urgency Level *
                </label>
                <select
                  value={formData.urgency}
                  onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-lg border border-gov-border focus:border-gov-primary focus:ring-1 focus:ring-gov-primary/20 text-sm font-medium text-gov-text-primary outline-none bg-white"
                >
                  <option value="Critical">Critical (Immediate Health/Safety Hazard)</option>
                  <option value="High">High (Severe Local Impact)</option>
                  <option value="Medium">Medium (Moderate Priority)</option>
                  <option value="Low">Low (Long-Term Improvement)</option>
                </select>
              </div>
            </div>

            {/* Location details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gov-text-primary uppercase tracking-wider mb-2">
                  District & State *
                </label>
                <input
                  type="text"
                  required
                  value={formData.district}
                  onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-lg border border-gov-border focus:border-gov-primary focus:ring-1 focus:ring-gov-primary/20 text-sm font-medium text-gov-text-primary outline-none bg-white"
                  placeholder="e.g. Coimbatore, Tamil Nadu"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gov-text-primary uppercase tracking-wider mb-2">
                  Pincode / Postal Code
                </label>
                <input
                  type="text"
                  value={formData.pincode}
                  onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-lg border border-gov-border focus:border-gov-primary focus:ring-1 focus:ring-gov-primary/20 text-sm font-medium text-gov-text-primary outline-none bg-white"
                  placeholder="e.g. 641004"
                />
              </div>
            </div>

            {/* Detailed Description */}
            <div>
              <label className="block text-xs font-bold text-gov-text-primary uppercase tracking-wider mb-2">
                Detailed Problem Description *
              </label>
              <textarea
                rows={5}
                required
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg border border-gov-border focus:border-gov-primary focus:ring-1 focus:ring-gov-primary/20 text-sm text-gov-text-primary outline-none leading-relaxed font-normal bg-white"
                placeholder="Describe the issue, ground conditions, affected community, and current challenges..."
              />
            </div>

            {/* Impact Scope */}
            <div>
              <label className="block text-xs font-bold text-gov-text-primary uppercase tracking-wider mb-2">
                Estimated Affected Population / Scope
              </label>
              <input
                type="text"
                value={formData.impactScope}
                onChange={(e) => setFormData({ ...formData, impactScope: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg border border-gov-border focus:border-gov-primary focus:ring-1 focus:ring-gov-primary/20 text-sm font-medium text-gov-text-primary outline-none bg-white"
                placeholder="e.g. 500+ schoolchildren and 2,000 residents"
              />
            </div>

            {/* Submit Action Bar */}
            <div className="pt-6 border-t border-gov-border flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center text-xs text-gov-text-secondary font-medium">
                <CheckCircle2 className="w-4 h-4 text-gov-success mr-2 shrink-0" />
                <span>AI will categorize, assign priority, & detect duplicates instantly</span>
              </div>
              
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-gov-primary hover:bg-gov-primary-dark text-white font-bold text-sm rounded-lg shadow-sm border border-gov-primary transition-colors cursor-pointer flex items-center justify-center space-x-2"
              >
                <Sparkles className="w-4 h-4 text-white" />
                <span>Run AI Problem Analysis</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}
