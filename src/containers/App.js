import React from 'react'
import Header from '../components/Header/Header'
import Main from '../components/Main/main'
import Footer from '../components/Footer/footer'
import Dashboard from '../components/Dashboard/Dashboard'
// import Auth from '../components/AuthPage/auth'
import DiseaseDetection from './DiseaseDetection'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      {/* <Auth /> */}
      <Dashboard>
        <DiseaseDetection />
      </Dashboard>
      <Footer />
      
     
    </div>
  );
}

export default App;
