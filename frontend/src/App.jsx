// App.jsx
import React, { useState } from 'react';
import UploadJD from '../src/components/UploadJD.jsx';
import UploadResume from '../src/components/UploadResume.jsx';
import Results from '../src/components/Result.jsx';

const App = () => {
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

export default App;