import React from 'react';
import './style.css';

import JSONViewer from './Components/JSONViewer';
import Footer from './Components/Footer';

export default function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <JSONViewer />
      <Footer />
    </div>
  );
}
