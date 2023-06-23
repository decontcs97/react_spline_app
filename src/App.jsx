import { Iphone, Navbar, Footer } from './components';
import React from 'react';

const App = () => (
  <div className="bg-primary">
    <div className="sm:px-16 px-6">
        <Navbar />
    </div>

    <div className="justify-center items-start bg-primary">
      <div className="bg-primary overflow-hidden">
        <Iphone />
      </div>
    </div>
    <div className="bg-primary">
      <div className="sm:px-16 px-6 overflow-hidden">
        <Footer />
      </div>
    </div>
  </div>
)

export default App
