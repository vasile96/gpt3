import React from 'react'

import { Cta, Brand, Navbar } from './components';

import { Footer, Blog, Features, WhatGPT3, Header, Possibility } from './containers';

import './App.css';


const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}

export default App


