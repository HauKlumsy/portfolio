import React from 'react';


import { About, Footer, Header, Skills, Experience } from './container';
import { Navbar } from './components';


const App = () => {
  return (
    <div className='app'>
        <Navbar />
        <Header />
        <About />
        <Experience />
        <Skills />
        <Footer />
    </div>
  );
};

export default App;