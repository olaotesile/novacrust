import React, { useState } from 'react';
import Converter from './components/Converter';
import RecipientDetails from './components/RecipientDetails';
import './App.css';

function App() {
  const [step, setStep] = useState('converter');

  return (
    <div className="app-container">
      <div className="white-card">
        {step === 'converter' ? (
          <Converter onNext={() => setStep('recipient')} />
        ) : (
          <RecipientDetails onBack={() => setStep('converter')} />
        )}
      </div>
    </div>
  );
}

export default App;
