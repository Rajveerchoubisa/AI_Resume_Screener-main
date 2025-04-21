import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UploadJD from '../src/components/UploadJD.jsx';
import UploadResume from '../src/components/UploadResume.jsx';
import Results from '../src/components/Result.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';

const ScreenerPage = () => {
  const [resumeData, setResumeData] = useState(null);
  const [jdUploaded, setJdUploaded] = useState(false);

  return (
    <div className="max-w-2xl mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">AI Resume Screener</h1>
      <UploadJD onUpload={setJdUploaded} />
      {jdUploaded && <UploadResume onExtract={setResumeData} />}
      <Results data={resumeData} />
    </div>
  );
};

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/screener" element={<ScreenerPage />} />
      <Route path='/upload-jd' element={<UploadJD /> } /> 
      <Route path='/upload' element= {<UploadResume /> } /> 
    </Routes>
  </Router>
);

export default App;
