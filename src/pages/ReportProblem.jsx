import React, { useState } from 'react';
import { FilePlus2, Sparkles, MapPin, Tag, AlertTriangle, ArrowRight, Upload, CheckCircle2 } from 'lucide-react';

export default function ReportProblem({ setActivePage, setProblemData }) {
  const [formData, setFormData] = useState({
    title: 'Water contamination and leakage in rural school supply line',
    category: 'Water & Sanitation',
    district: 'Coimbatore, Tamil Nadu',
    pincode: '641004',
    urgency: 'High',
    description: 'The drinking water pipeline supplying 3 primary schools in Panchayat Ward 4 has high turbidity and intermittent pipe leakage, leading to frequent school absenteeism and waterborne illnesses among 450+ children during monsoon.',
    impactScope: '450+ Students & 1,200 villagers',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (setProblemData) {
      setProblemData(formData);
    }
    setActivePage('analysis');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8 text-center sm:text-left">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-3 border border-blue-200">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI-Assisted Intake Form</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Report a Community Problem
          </h1>
          <p className="text-slate-600 text-sm mt-1">
            Submit a real-world societal challenge. Our AI engine will analyze, categorize, prioritize, and check for duplicate reports instantly.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Title */}
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
                placeholder="e.g., Agricultural runoff polluting village drinking pond"
              />
            </div>

            {/* Category & Urgency */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Primary Sector / Category *
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-sm font-semibold text-slate-900 outline-none bg-white"
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
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Urgency Level *
                </label>
                <select
                  value={formData.urgency}
                  onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-sm font-semibold text-slate-900 outline-none bg-white"
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
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  District & State *
                </label>
                <input
                  type="text"
                  required
                  value={formData.district}
                  onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-semibold outline-none"
                  placeholder="e.g. Coimbatore, Tamil Nadu"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Pincode / Postal Code
                </label>
                <input
                  type="text"
                  value={formData.pincode}
                  onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-semibold outline-none"
                  placeholder="e.g. 641004"
                />
              </div>
            </div>

            {/* Detailed Description */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Detailed Problem Description *
              </label>
              <textarea
                rows={5}
                required
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 outline-none leading-relaxed"
                placeholder="Describe the issue, ground conditions, affected community, and current challenges..."
              />
            </div>

            {/* Impact Scope */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Estimated Affected Population / Scope
              </label>
              <input
                type="text"
                value={formData.impactScope}
                onChange={(e) => setFormData({ ...formData, impactScope: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-semibold outline-none"
                placeholder="e.g. 500+ schoolchildren and 2,000 residents"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center text-xs text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0" />
                <span>AI will check duplicates & assign priority score instantly</span>
              </div>
              
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-blue-600/40 transition-all flex items-center justify-center space-x-2"
              >
                <Sparkles className="w-4 h-4" />
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
