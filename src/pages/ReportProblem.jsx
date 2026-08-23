import React, { useState } from 'react';
import { 
  FilePlus2, 
  Sparkles, 
  MapPin, 
  Building2, 
  Users, 
  AlertCircle, 
  Upload, 
  FileText, 
  Image as ImageIcon, 
  Video, 
  ArrowRight, 
  CheckCircle2,
  Info
} from 'lucide-react';

export default function ReportProblem({ setActivePage, setProblemData }) {
  const [formData, setFormData] = useState({
    title: 'Seasonal drinking water shortage in a rural community',
    description: 'During summer months from March to June, over 800 households across 4 panchayat villages experience severe drinking water shortages as ground water tables deplete rapidly. Villagers must travel over 5 km daily to access safe drinking water, causing school absenteeism among children and impacting daily agricultural livelihoods.',
    domain: 'Water',
    location: 'Panchayat Ward 3, Valantharavai',
    district: 'Ramanathapuram, Tamil Nadu',
    peopleAffected: '3,500+ residents & 600 students',
    severity: 'High',
    imageFile: null,
    videoFile: null,
    docFile: null,
  });

  const domains = [
    'Education',
    'Healthcare',
    'Agriculture',
    'Water',
    'Sanitation',
    'Environment',
    'Energy',
    'Infrastructure',
    'Accessibility',
    'Public Services',
    'Other'
  ];

  const handleFileChange = (e, field) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, [field]: e.target.files[0].name });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (setProblemData) {
      setProblemData(formData);
    }
    setActivePage('analysis');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Prototype Disclaimer Banner */}
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-3.5 flex items-start space-x-3 text-amber-900 text-xs sm:text-sm">
          <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold">Prototype Demonstration:</strong> This system simulates AI problem intake, priority scoring, and smart matchmaking. No actual government departments or university entities are contacted.
          </div>
        </div>

        {/* Page Title & Subtitle */}
        <div className="text-center sm:text-left space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold border border-blue-200">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Citizen Portal Intake</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Report a Societal Problem
          </h1>
          <p className="text-slate-600 text-base">
            Help us connect your problem with the people and resources that can solve it.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Problem Title */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Problem Title *
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-sm font-semibold text-slate-900 outline-none transition-all"
                placeholder="e.g. Seasonal drinking water shortage in a rural community"
              />
            </div>

            {/* Problem Description */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Problem Description *
              </label>
              <textarea
                rows={5}
                required
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-sm text-slate-900 outline-none transition-all leading-relaxed"
                placeholder="Provide details about the issue, affected community, frequency, and current ground impact..."
              />
            </div>

            {/* Domain & Severity */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Domain *
                </label>
                <select
                  value={formData.domain}
                  onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-sm font-semibold text-slate-900 outline-none bg-white transition-all"
                >
                  {domains.map((dom) => (
                    <option key={dom} value={dom}>{dom}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Severity *
                </label>
                <select
                  value={formData.severity}
                  onChange={(e) => setFormData({ ...formData, severity: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-sm font-semibold text-slate-900 outline-none bg-white transition-all"
                >
                  <option value="Low">Low (Long-Term / Minor Concern)</option>
                  <option value="Medium">Medium (Moderate Priority / Ongoing Issue)</option>
                  <option value="High">High (Severe Local Impact & Urgent Need)</option>
                  <option value="Critical">Critical (Immediate Health, Safety, or Environmental Emergency)</option>
                </select>
              </div>
            </div>

            {/* Location & District */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Location *
                </label>
                <input
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-sm font-semibold text-slate-900 outline-none transition-all"
                  placeholder="e.g. Panchayat Ward 3, Valantharavai"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  District *
                </label>
                <input
                  type="text"
                  required
                  value={formData.district}
                  onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-sm font-semibold text-slate-900 outline-none transition-all"
                  placeholder="e.g. Ramanathapuram, Tamil Nadu"
                />
              </div>
            </div>

            {/* Estimated People Affected */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Estimated People Affected *
              </label>
              <input
                type="text"
                required
                value={formData.peopleAffected}
                onChange={(e) => setFormData({ ...formData, peopleAffected: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-sm font-semibold text-slate-900 outline-none transition-all"
                placeholder="e.g. 3,500+ residents & 600 students"
              />
            </div>

            {/* File Upload Section */}
            <div className="space-y-4 pt-2">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Media & Evidence Upload (Optional)
              </label>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                {/* Upload Image */}
                <div className="border-2 border-dashed border-slate-300 hover:border-blue-500 rounded-xl p-4 text-center transition-colors bg-slate-50 relative group">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, 'imageFile')}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="flex flex-col items-center space-y-1">
                    <ImageIcon className="w-7 h-7 text-blue-600 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-bold text-slate-800">Upload Image</span>
                    <span className="text-[10px] text-slate-500">
                      {formData.imageFile ? formData.imageFile : 'PNG, JPG up to 10MB'}
                    </span>
                  </div>
                </div>

                {/* Upload Video */}
                <div className="border-2 border-dashed border-slate-300 hover:border-blue-500 rounded-xl p-4 text-center transition-colors bg-slate-50 relative group">
                  <input
                    type="file"
                    accept="video/*"
                    onChange={(e) => handleFileChange(e, 'videoFile')}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="flex flex-col items-center space-y-1">
                    <Video className="w-7 h-7 text-teal-600 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-bold text-slate-800">Upload Video</span>
                    <span className="text-[10px] text-slate-500">
                      {formData.videoFile ? formData.videoFile : 'MP4, MOV up to 50MB'}
                    </span>
                  </div>
                </div>

                {/* Supporting Document */}
                <div className="border-2 border-dashed border-slate-300 hover:border-blue-500 rounded-xl p-4 text-center transition-colors bg-slate-50 relative group">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx,.txt"
                    onChange={(e) => handleFileChange(e, 'docFile')}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="flex flex-col items-center space-y-1">
                    <FileText className="w-7 h-7 text-indigo-600 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-bold text-slate-800">Supporting Document</span>
                    <span className="text-[10px] text-slate-500">
                      {formData.docFile ? formData.docFile : 'PDF, DOCX report'}
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6 border-t border-slate-200">
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white font-extrabold text-lg rounded-xl shadow-xl hover:shadow-blue-600/30 transition-all transform hover:-translate-y-0.5 flex items-center justify-center space-x-3 cursor-pointer"
              >
                <Sparkles className="w-6 h-6 text-blue-200" />
                <span>Submit Problem</span>
                <ArrowRight className="w-5 h-5 ml-1" />
              </button>
              
              <div className="mt-3 text-center text-xs text-slate-500 flex items-center justify-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Redirects to AI Problem Analysis for processing & priority calculation</span>
              </div>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}
