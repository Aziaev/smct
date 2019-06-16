import React from 'react';
import './index.css';
import Header from './Header';
import Footer from './Footer';
import Table from './Table';

function App() {
  return (
    <div className="container">
      <Header 
        name="SM Code task"
        description="Category and keyword manager"
      />
      <Table />
      <Footer />
    </div>
  );
}

export default App;
