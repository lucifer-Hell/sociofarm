import React from 'react'
import Header from '../components/Header/Header'
import Main from '../components/Main/main'
import Footer from '../components/Footer/footer'
import Dashboard from '../components/Dashboard/d'
import Auth from '../components/AuthPage/auth'
import './App.css';
 
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Auth />
      <Dashboard />
      <Footer />
     
    </div>
  );
}

export default App;
