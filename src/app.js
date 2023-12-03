import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer'; 


const AppLayout = ()=> {
  return (
      <div className='app'>
          <Header />
          <Body />
          <Footer />
      </div>
  )   
}
const heading = React.createElement('h1',{id:"heading"},'hello from react');
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(<AppLayout />);