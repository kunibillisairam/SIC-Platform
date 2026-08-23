import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StoryStepper from './components/StoryStepper';

// Pages
import Home from './pages/Home';
import ReportProblem from './pages/ReportProblem';
import AnalysisResult from './pages/AnalysisResult';
import SmartMatching from './pages/SmartMatching';
import ProjectLifecycle from './pages/ProjectLifecycle';
import Dashboard from './pages/Dashboard';
import ExploreProblems from './pages/ExploreProblems';
import About from './pages/About';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [problemData, setProblemData] = useState(null);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      
      {/* SIH Storyline Progress Stepper */}
      <StoryStepper activePage={activePage} setActivePage={setActivePage} />

      <main className="flex-grow">
        {activePage === 'home' && <Home setActivePage={setActivePage} />}
        {activePage === 'report' && (
          <ReportProblem setActivePage={setActivePage} setProblemData={setProblemData} />
        )}
        {activePage === 'analysis' && (
          <AnalysisResult problemData={problemData} setActivePage={setActivePage} />
        )}
        {activePage === 'matching' && <SmartMatching setActivePage={setActivePage} />}
        {activePage === 'projects' && <ProjectLifecycle setActivePage={setActivePage} />}
        {activePage === 'dashboard' && <Dashboard setActivePage={setActivePage} />}
        {activePage === 'explore' && <ExploreProblems setActivePage={setActivePage} />}
        {activePage === 'about' && <About />}
      </main>

      <Footer setActivePage={setActivePage} />
    </div>
  );
}
